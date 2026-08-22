from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
source = Image.open(ROOT / "design-reference.png").convert("RGB")
shots = [
    ("Implementation — hero", Image.open(ROOT / "implementation-hero.png").convert("RGB")),
    ("Implementation — categories / featured", Image.open(ROOT / "implementation-section-850.png").convert("RGB")),
    ("Implementation — featured / craft", Image.open(ROOT / "implementation-section-1900.png").convert("RGB")),
    ("Implementation — visit / contact", Image.open(ROOT / "implementation-section-visit.png").convert("RGB")),
]

font = ImageFont.load_default(size=22)
label_h = 50
column_w = 720
gap = 32

def fit_width(image, width):
    height = round(image.height * width / image.width)
    return image.resize((width, height), Image.Resampling.LANCZOS)

source_fit = fit_width(source, column_w)
shot_fits = [(label, fit_width(image, column_w)) for label, image in shots]
right_h = sum(image.height + label_h + gap for _, image in shot_fits)
canvas_h = max(source_fit.height + label_h, right_h)
canvas = Image.new("RGB", (column_w * 2 + gap * 3, canvas_h + gap * 2), "#e9e2d6")
draw = ImageDraw.Draw(canvas)

x_left = gap
draw.text((x_left, gap + 10), "Selected source — option 3", fill="#082f39", font=font)
canvas.paste(source_fit, (x_left, gap + label_h))

x_right = column_w + gap * 2
y = gap
for label, image in shot_fits:
    draw.text((x_right, y + 10), label, fill="#082f39", font=font)
    y += label_h
    canvas.paste(image, (x_right, y))
    y += image.height + gap

canvas.save(ROOT / "qa-comparison.png", quality=92)
