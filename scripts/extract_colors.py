
from PIL import Image
import numpy as np

img = Image.open('public/images/orion-logo.png').convert('RGBA')
arr = np.array(img)
# filter out transparent or near white background if any
mask = arr[:, :, 3] > 100
pixels = arr[mask][:, :3]

# find key color ranges
# 1. Darkest background navy
# 2. Cyan text / stars
# 3. Bright cyan highlights
print('Sample pixels:')
from collections import Counter
# Quantize
q_pixels = [tuple((p // 16) * 16) for p in pixels]
c = Counter(q_pixels)
for color, count in c.most_common(12):
    hex_c = '#{:02x}{:02x}{:02x}'.format(*color)
    print(f'{hex_c}: {count}')
