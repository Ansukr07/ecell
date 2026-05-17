# Image Optimization Guide for Slow Internet

## Quick Wins (Implement First)

### 1. **Replace Generic `<img>` Tags with OptimizedImage**

Before:
```jsx
<img src={image} alt="Gallery" />
```

After:
```jsx
import OptimizedImage from '@/components/OptimizedImage';

<OptimizedImage 
  src={image} 
  alt="Gallery"
  className="w-full h-full"
  quality="preview"
/>
```

### 2. **Add `loading="lazy"` to All Images**

Files to update:
- `src/Pages/WordDetailPage.jsx` - line 139
- `src/components/VintageImage.jsx` - add to both img tags
- `src/Pages/Team.jsx` - team member images
- `src/Pages/Gallery.jsx` - gallery images

Example:
```jsx
<img 
  src={imageUrl}
  alt="description"
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

### 3. **Optimize External Image URLs**

For Unsplash images:
```jsx
// Before
"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop"

// After (compress & format)
"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=70&w=400&h=300&fit=crop&auto=format"
```

Parameters explained:
- `q=70` - Quality (70% saves 50% bandwidth)
- `w=400` - Width (only load what you need)
- `auto=format` - WebP for modern browsers
- `fit=crop` - Avoid stretching

---

## Medium Implementation

### 4. **Use Progressive Image Loading**

Create a `useProgressiveImage` hook for smooth fade-in:

```javascript
// src/hooks/useProgressiveImage.js
export function useProgressiveImage(fullSrc, placeholder = null) {
  const [src, setSrc] = useState(placeholder || fullSrc);
  const [isLoading, setIsLoading] = useState(!!placeholder);

  useEffect(() => {
    if (!placeholder) return;
    
    const img = new Image();
    img.onload = () => {
      setSrc(fullSrc);
      setIsLoading(false);
    };
    img.src = fullSrc;
  }, [fullSrc, placeholder]);

  return { src, isLoading };
}
```

Usage:
```jsx
const { src, isLoading } = useProgressiveImage(highQualityImage, lowQualityBlur);

<img 
  src={src}
  alt="Progressive"
  className={`transition-opacity ${isLoading ? 'opacity-50' : 'opacity-100'}`}
/>
```

### 5. **Implement Image CDN (Recommended)**

Install an image optimization service:

```bash
npm install next-image-export-optimizer
# or use Cloudinary/Imgix
```

---

## Production Checklist

- [ ] All critical images use `loading="eager"` or `priority={true}`
- [ ] Non-critical images use `loading="lazy"`
- [ ] External images have quality/width parameters
- [ ] Placeholder/skeleton loading for slow networks
- [ ] Images are responsive (use srcset/sizes)
- [ ] Test on slow 3G throttling in DevTools
- [ ] Monitor Core Web Vitals (LCP, CLS)

---

## Testing Slow Internet

In Chrome DevTools:
1. F12 → Network tab
2. Throttle to "Slow 3G" 
3. Reload and observe image loading

Expected: Images should have placeholder → gradual fade-in

---

## Key Files Updated

- `src/components/OptimizedImage.jsx` - Main optimization component
- `src/config/imageConfig.js` - Configuration & helpers
- `vite.config.js` - Build-time optimization
