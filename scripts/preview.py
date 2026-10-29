"""Make a copy of dist/ with relative URLs, for publishing a preview as an Artifact.
Usage: python3 scripts/preview.py <out_dir>"""
import re, sys, shutil, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
src, out = root / 'dist', pathlib.Path(sys.argv[1])
shutil.rmtree(out, ignore_errors=True); shutil.copytree(src, out)

def rel(url, depth):
    if not url.startswith('/') or url.startswith('//'):
        return url
    path, _, q = url.partition('?')
    if path.endswith('/'):
        path += 'index.html'
    elif '.' not in path.rsplit('/', 1)[-1]:
        path += '/index.html'
    return '../' * depth + path.lstrip('/')

for f in out.rglob('*.html'):
    depth = len(f.relative_to(out).parts) - 1
    s = f.read_text()
    s = re.sub(r'(href|src|poster|data-full)="(/[^"]*)"', lambda m: f'{m[1]}="{rel(m[2], depth)}"', s)
    s = re.sub(r'srcset="([^"]*)"', lambda m: 'srcset="' + ', '.join(
        ' '.join([rel(p.split()[0], depth)] + p.split()[1:]) for p in m[1].split(',')) + '"', s)
    if depth == 0 and f.name == 'index.html':
        # The Artifact wraps the main page in its own skeleton.
        head = re.search(r'<head>(.*?)</head>', s, re.S)[1]
        head = re.sub(r'<meta charset[^>]*>|<meta name="viewport"[^>]*>', '', head)
        head = re.sub(r'<title>.*?</title>', '<title>Vitali Yanusheuski Portfolio</title>', head)
        body = re.search(r'<body>(.*)</body>', s, re.S)[1]
        s = head.strip() + '\n' + body
    f.write_text(s)
for c in out.rglob('*.css'):
    c.write_text(re.sub(r'url\(/_astro/', 'url(./', c.read_text()).replace("url(/fonts/", "url(../fonts/"))
# The Artifact service reserves names starting with "_".
(out / '_astro').rename(out / 'assets')
for css in list((out / 'assets').glob('*.css')):
    css.rename(css.with_name('site.css'))
# The stylesheet keeps one name across versions, so a version tag stops browsers from showing a cached old one.
import hashlib
ver = hashlib.sha1((out / 'assets' / 'site.css').read_bytes()).hexdigest()[:8]
for f in out.rglob('*.html'):
    t = f.read_text()
    t = re.sub(r'_astro/[^"]*\.css', f'assets/site.css?v={ver}', t).replace('_astro/', 'assets/')
    f.write_text(t)
print('ok', sum(1 for _ in out.rglob('*') if _.is_file()), 'files')
