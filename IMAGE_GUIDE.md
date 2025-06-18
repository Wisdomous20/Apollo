# Image Guide for Apollo Medical Group

## Current Status: TEMPORARY IMAGES

All images are currently using temporary placeholders from Unsplash. The original file names and structure are preserved for easy replacement.

## Required Images for Final Production

### Gallery Images (6 total)

Replace these Unsplash URLs with local files in `public/images/gallery/`:

1. **laboratory-services.jpg** - Currently: Medical lab photo from Unsplash
2. **team-consultation.jpg** - Currently: Healthcare consultation photo from Unsplash
3. **medical-equipment.jpg** - Currently: Medical equipment photo from Unsplash
4. **patient-care.jpg** - Currently: Hospital room photo from Unsplash
5. **research-development.jpg** - Currently: Medical research photo from Unsplash
6. **healthcare-team.jpg** - Currently: Healthcare team photo from Unsplash

### About Page Images (3 total)

Replace these Unsplash URLs with local files in `public/images/about/`:

1. **primary-care-doctor.jpg** - Currently: Doctor with stethoscope from Unsplash
2. **medical-team-corridor.jpg** - Currently: Hospital corridor photo from Unsplash
3. **team-collaboration.jpg** - Currently: Medical team photo from Unsplash

### Hero Image (1 total)

Replace this Unsplash URL with local file in `public/images/hero/`:

1. **medical-professional-hero.jpg** - Currently: Medical professional from Unsplash

### Contact Images (2 total)

Replace these Unsplash URLs with appropriate images:

1. **Credit card/payment image** - Currently: Payment-related photo from Unsplash
2. **Map/location image** - Currently: Medical facility exterior from Unsplash

## Next Steps

1. **Current state**: All images load from external Unsplash URLs
2. **For production**: Replace URLs with local image files using the original intended filenames
3. **File structure**: Create the directories and add images as originally planned
4. **Update imports**: Change from Unsplash URLs back to local file paths

## Image Specifications

- **Format**: JPG or WebP
- **Dimensions**: Minimum 1200px width
- **Aspect Ratio**: 4:3 or 16:9 preferred
- **File Size**: Optimize for web (under 500KB each)
- **Style**: Professional, clean, medical/healthcare themed

## Replacement Process

When ready to use final images:

1. Create the directory structure:

   - `public/images/hero/`
   - `public/images/gallery/`
   - `public/images/about/`

2. Add your images with the exact filenames listed above

3. Update the component files to use local paths instead of Unsplash URLs:

   - Change `https://images.unsplash.com/...` back to `/images/folder/filename.jpg`

4. Test that all images load correctly
