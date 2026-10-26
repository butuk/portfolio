"""Turn originals in media-src/<case>/*.png|jpg into web versions in public/media/<case>/.
Writes <name>-960.webp and <name>-1920.webp plus src/media.json with sizes for <Figure>."""
import json, pathlib
from PIL import Image

root = pathlib.Path(__file__).resolve().parent.parent
src, out = root / 'media-src', root / 'public' / 'media'
manifest = {}
for f in sorted(src.glob('*/*')):
    if f.parent.name.startswith('_') or f.suffix.lower() not in {'.png', '.jpg', '.jpeg'}:
        continue
    im = Image.open(f)
    im = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
    dest = out / f.parent.name
    dest.mkdir(parents=True, exist_ok=True)
    for w in (960, 1920):
        w2 = min(w, im.width)
        h2 = round(im.height * w2 / im.width)
        im.resize((w2, h2), Image.LANCZOS).save(dest / f'{f.stem}-{w}.webp', 'WEBP', quality=88, method=6)
    manifest[f'/media/{f.parent.name}/{f.stem}'] = [im.width, im.height]
(root / 'src' / 'media.json').write_text(json.dumps(manifest, indent=2))
print(json.dumps(manifest, indent=2))
