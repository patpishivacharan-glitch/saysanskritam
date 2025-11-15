# Testimonial Photos

Place user profile photos here with the following names:
- srujana.jpg
- swarith.jpg
- samvedh.jpg

## Recommended Specifications:
- **Format:** JPG or PNG
- **Size:** 200x200 pixels minimum (square)
- **File size:** Under 100KB for web performance
- **Quality:** High-resolution, clear face photos

## How to Add Photos:

1. Save the user's photo to this folder
2. Name it according to the testimonial (e.g., `srujana.jpg`)
3. The component will automatically display it with:
   - Circular crop (80x80px display)
   - Orange border
   - Shadow effect
   - Fallback to emoji icon if image fails to load

## Example:
```
public/testimonials/
├── srujana.jpg
├── swarith.jpg
└── samvedh.jpg
```

If a photo is missing, the component will show the default 👤 emoji icon instead.
