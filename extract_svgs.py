import xml.etree.ElementTree as ET
import re

def extract():
    tree = ET.parse(r"C:\Ecell web\ecell\src\components\Events\assets\spl2\svgs.svg")
    root = tree.getroot()
    groups = [child for child in root if child.tag.endswith('g')]
    
    indices = [1, 2, 3, 8, 9]
    for idx in indices:
        g = groups[idx]
        xml_str = ET.tostring(g, encoding='unicode')
        
        # Extract ALL absolute coordinates (M, L, C commands, and points)
        # to find a highly accurate bounding box for the object.
        all_x = []
        all_y = []
        
        # Match M/L/C commands (uppercase = absolute)
        # Example: M158.618,102.146
        matches_cmd = re.findall(r'[MLCT]\s*([-+]?[\d\.]+)\s*,\s*([-+]?[\d\.]+)', xml_str)
        for x, y in matches_cmd:
            all_x.append(float(x))
            all_y.append(float(y))
            
        # Match points="x,y x,y..."
        matches_pts = re.findall(r'points="([^"]+)"', xml_str)
        for pts in matches_pts:
            pairs = pts.strip().split()
            for pair in pairs:
                coords = pair.split(',')
                if len(coords) == 2:
                    all_x.append(float(coords[0]))
                    all_y.append(float(coords[1]))
        
        if all_x and all_y:
            min_x = min(all_x)
            max_x = max(all_x)
            min_y = min(all_y)
            max_y = max(all_y)
        else:
            # Fallback
            min_x, max_x, min_y, max_y = 0, 150, 0, 150

        # Add generous padding to make sure curves/strokes aren't cut off
        pad = 20
        min_x -= pad
        min_y -= pad
        w = (max_x - min_x) + pad*2
        h = (max_y - min_y) + pad*2
        
        # Create a new pristine SVG wrapper
        new_svg = ET.Element("svg", viewBox=f"{min_x} {min_y} {w} {h}", xmlns="http://www.w3.org/2000/svg")
        # Strip out namespaces from the group string that python xml might add
        # We don't apply ANY transform. It's in true coordinates.
        new_svg.append(g)
        
        out = f"C:\\Ecell web\\ecell\\src\\components\\Events\\assets\\spl2\\obj_{idx+1}.svg"
        ET.ElementTree(new_svg).write(out, encoding='utf-8', xml_declaration=True)
        print(f"Index {idx} cropped to {min_x} {min_y} {w} {h}")

if __name__ == "__main__":
    extract()
