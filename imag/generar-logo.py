"""Exporta la marca tipografica existente como avatar PNG y vector SVG."""
from pathlib import Path
from html import escape
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent
SIZE = 1024
SCALE = 3
BG = '#16171c'
WHITE = '#ffffff'
GREEN = '#1c8a4c'
RED = '#cf1f25'
image = Image.new('RGB', (SIZE*SCALE, SIZE*SCALE), BG)
draw = ImageDraw.Draw(image)
svg = ['<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" role="img" aria-labelledby="title desc">',
       '<title id="title">Transporte El Cabezón</title>',
       '<desc id="desc">Marca blanca sobre fondo carbón con una franja verde, blanca y roja.</desc>',
       f'<rect width="1024" height="1024" fill="{BG}"/>']

def text_center(text, top, size, font_file, family, tracking=0):
    font = ImageFont.truetype(font_file, round(size*SCALE))
    width = sum(draw.textlength(c,font=font) for c in text) + max(0,len(text)-1)*tracking*SCALE
    x = (SIZE*SCALE-width)/2
    bbox = font.getbbox(text)
    y = top*SCALE-bbox[1]
    for char in text:
        draw.text((x,y),char,font=font,fill=WHITE)
        x += draw.textlength(char,font=font)+tracking*SCALE
    # Baseline matches Pillow's default ascender anchor.
    ascent = font.getmetrics()[0]
    baseline = (y+ascent)/SCALE
    weight = '700' if 'arialbd' in font_file else '400'
    svg.append(f'<text x="512" y="{baseline:.3f}" text-anchor="middle" font-family="{family}" font-weight="{weight}" font-size="{size}" letter-spacing="{tracking}" fill="{WHITE}">{escape(text)}</text>')

text_center('TRANSPORTE', 272, 32, 'C:/Windows/Fonts/arialbd.ttf', 'Arial, sans-serif', 8)
text_center('EL', 340, 120, 'C:/Windows/Fonts/impact.ttf', 'Impact, Arial Narrow, sans-serif', 2)
text_center('CABEZÓN', 480, 174, 'C:/Windows/Fonts/impact.ttf', 'Impact, Arial Narrow, sans-serif', 1)
for x, color in [(242,GREEN),(422,WHITE),(602,RED)]:
    draw.rectangle((x*SCALE,696*SCALE,(x+180)*SCALE-1,716*SCALE-1),fill=color)
    svg.append(f'<rect x="{x}" y="696" width="180" height="20" fill="{color}"/>')
svg.append('</svg>')
(OUT/'logo-el-cabezon.svg').write_text('\n'.join(svg),encoding='utf-8')
image=image.resize((SIZE,SIZE),Image.Resampling.LANCZOS)
image.save(OUT/'logo-el-cabezon.png',optimize=True)
image.resize((720,720),Image.Resampling.LANCZOS).save(OUT/'logo-google-whatsapp.png',optimize=True)
print('Logo exported: 1024px PNG, 720px PNG and editable SVG.')
