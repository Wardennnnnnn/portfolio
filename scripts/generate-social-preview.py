from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root = Path(__file__).resolve().parents[1]
image = Image.new('RGB', (1200, 630), '#fafbfe')
draw = ImageDraw.Draw(image)
def font(size, bold=False):
 return ImageFont.truetype(str(root/'public/assets'/('open-sans-display.ttf' if bold else 'open-sans-regular.ttf')),size)
draw.text((72, 65), 'Don Mclaire', font=font(72, True), fill='#15213b')
draw.text((72, 152), 'Gonzales', font=font(104, True), fill='#2555e8')
draw.text((76, 315), 'Web & app developer.', font=font(34), fill='#15213b')
draw.text((76, 367), 'Pursuing cybersecurity.', font=font(34), fill='#52617b')
draw.line((76, 479, 1124, 479), fill='#cdd5e3', width=2)
draw.text((76, 512), 'BasCal · SafeTap · PITS · HyperLink VI', font=font(24), fill='#52617b')
draw.text((76, 555), 'terincorp.com', font=font(24, True), fill='#15213b')
image.save(root/'public/assets/social-preview.png', optimize=True)
