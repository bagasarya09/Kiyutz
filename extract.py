import re, base64, hashlib, os
src = open('Kiyutz-Website.html', encoding='utf-8').read()
os.makedirs('public/images', exist_ok=True)
for ext, b64 in re.findall(r'data:image/([a-z]+);base64,([A-Za-z0-9+/=]+)', src):
    h = hashlib.md5(b64.encode()).hexdigest()[:8]
    open(f'public/images/img-{h}.jpg', 'wb').write(base64.b64decode(b64))