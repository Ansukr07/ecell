import { useEffect, useRef, useState, useCallback } from 'react';

const MAX_ITEM_HEIGHT = 380;
const GAP = 20;
const DRAG_SPEED = 0.55;
const INERTIA = 0.88;

function buildLayout(images) {
  const COLS = Math.max(4, Math.ceil(Math.sqrt(images.length)));
  const cols = Array.from({ length: COLS }, () => ({ items: [], height: 0, width: 0 }));

  images.forEach((img) => {
    const scale = Math.min(1, MAX_ITEM_HEIGHT / img.naturalHeight);
    const w = Math.round(img.naturalWidth * scale);
    const h = Math.round(img.naturalHeight * scale);
    const shortest = cols.reduce((a, b) => (a.height <= b.height ? a : b));
    shortest.items.push({ src: img.src, w, h, y: shortest.height });
    shortest.height += h + GAP;
    if (w > shortest.width) shortest.width = w;
  });

  let xCursor = 0;
  cols.forEach((col) => {
    col.items.forEach((it) => { it.x = xCursor; });
    xCursor += col.width + GAP;
  });

  const moduleW = xCursor;
  const moduleH = Math.max(...cols.map((c) => c.height));
  const items = cols.flatMap((col) => col.items);
  return { items, moduleW, moduleH };
}

export default function InfiniteMasonryGallery({ images }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const [layout, setLayout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  // Refs for drag & animation (no re-renders)
  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const lastRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const layoutRef = useRef(null);
  const rafRef = useRef(null);

  // Keep layoutRef in sync
  useEffect(() => { layoutRef.current = layout; }, [layout]);

  // Preload images
  useEffect(() => {
    let cancelled = false;
    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => { img.naturalWidth = 400; img.naturalHeight = 300; img.src = src; resolve(img); };
            img.src = src;
          })
      )
    ).then((loaded) => {
      if (!cancelled) {
        setLayout(buildLayout(loaded));
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [images]);

  // RAF animation loop — runs once, reads refs
  useEffect(() => {
    const animate = () => {
      if (!draggingRef.current) {
        velRef.current.x *= INERTIA;
        velRef.current.y *= INERTIA;
        posRef.current.x += velRef.current.x;
        posRef.current.y += velRef.current.y;
      }

      const ly = layoutRef.current;
      if (ly) {
        const mw = ly.moduleW + GAP;
        const mh = ly.moduleH + GAP;
        posRef.current.x = ((posRef.current.x % mw) + mw) % mw;
        posRef.current.y = ((posRef.current.y % mh) + mh) % mh;
      }

      if (canvasRef.current) {
        canvasRef.current.style.transform =
          `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []); // empty deps — only runs once


  useEffect(() => {
    const handleMove = (e) => {
      if (!draggingRef.current) return;
      const pt = e.touches ? e.touches[0] : e;
      const dx = pt.clientX - lastRef.current.x;
      const dy = pt.clientY - lastRef.current.y;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) movedRef.current = true;
      posRef.current.x += dx * DRAG_SPEED;
      posRef.current.y += dy * DRAG_SPEED;
      velRef.current = { x: dx * DRAG_SPEED, y: dy * DRAG_SPEED };
      lastRef.current = { x: pt.clientX, y: pt.clientY };
      if (e.cancelable) e.preventDefault();
    };

    const handleUp = () => {
      draggingRef.current = false;
      if (rootRef.current) rootRef.current.style.cursor = 'grab';
    };

    window.addEventListener('mousemove', handleMove, { passive: false });
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  const handleRootDown = useCallback((e) => {
    draggingRef.current = true;
    movedRef.current = false;
    velRef.current = { x: 0, y: 0 };
    const pt = e.touches ? e.touches[0] : e;
    lastRef.current = { x: pt.clientX, y: pt.clientY };
    if (rootRef.current) rootRef.current.style.cursor = 'grabbing';
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed', inset: 0, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        color: 'white', fontFamily: 'Sora, sans-serif', fontSize: '1rem',
        letterSpacing: '0.12em', background: 'transparent',
      }}>
        Loading Gallery...
      </div>
    );
  }

  if (!layout) return null;

  const { items, moduleW, moduleH } = layout;
  const repsX = Math.ceil(window.innerWidth / moduleW) + 3;
  const repsY = Math.ceil(window.innerHeight / moduleH) + 3;

  const tiles = [];
  for (let ty = -1; ty < repsY; ty++) {
    for (let tx = -1; tx < repsX; tx++) {
      items.forEach((item, i) => {
        tiles.push({
          key: `${tx}-${ty}-${i}`,
          src: item.src,
          x: item.x + tx * (moduleW + GAP),
          y: item.y + ty * (moduleH + GAP),
          w: item.w,
          h: item.h,
        });
      });
    }
  }

  return (
    <>
      <style>{`
        .img-gallery-root {
          position: fixed;
          inset: 0;
          overflow: hidden;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          touch-action: none;
          z-index: 1;
        }
        .img-gallery-canvas {
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
        }
        .img-gallery-item {
          position: absolute;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
          transition: box-shadow 0.2s ease;
        }
        .img-gallery-item:hover {
          box-shadow: 0 10px 40px rgba(0,0,0,0.8);
          z-index: 10;
        }
        .img-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        .ig-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          z-index: 300;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          cursor: pointer;
        }
        .ig-lightbox img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          pointer-events: none;
        }
        .ig-lightbox-close {
          position: absolute;
          top: 24px; right: 28px;
          color: rgba(255,255,255,0.8);
          font-size: 2rem;
          cursor: pointer;
          transition: color 0.2s;
        }
        .ig-lightbox-close:hover { color: white; }
      `}</style>

      <div
        ref={rootRef}
        className="img-gallery-root"
        onMouseDown={handleRootDown}
        onTouchStart={handleRootDown}
      >
        <div ref={canvasRef} className="img-gallery-canvas">
          {tiles.map((tile) => (
            <div
              key={tile.key}
              className="img-gallery-item"
              style={{ left: tile.x, top: tile.y, width: tile.w, height: tile.h }}
              onClick={() => { if (!movedRef.current) setLightbox(tile.src); }}
            >
              <img src={tile.src} alt="E-Cell Gallery" draggable="false" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="ig-lightbox" onClick={() => setLightbox(null)}>
          <span className="ig-lightbox-close">✕</span>
          <img src={lightbox} alt="Expanded view" />
        </div>
      )}
    </>
  );
}
