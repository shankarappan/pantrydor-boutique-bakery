# Design QA

## Evidence

- Source visual truth: `design-reference.png` (selected ideation option 3), 864 × 1821 px.
- Combined comparison: `qa-comparison.png`, 1536 × 2440 px. It places the source and every implementation checkpoint in the same comparison input.
- Primary implementation capture: `implementation-hero.png`, 1440 × 1024 px at a 1440 × 1024 CSS viewport and device scale factor 1.
- Focused implementation captures: `implementation-section-850.png`, `implementation-section-1900.png`, and `implementation-section-visit.png`, each 1440 × 1024 px at device scale factor 1.
- Responsive capture: `implementation-mobile.png`, 390 × 844 px at a 390 × 844 CSS viewport and device scale factor 1.
- State: default desktop homepage, mobile homepage, mobile menu open, empty cart, and cart with one line item.
- Logo refinement evidence: the user's 900 × 438 issue capture and the updated 900 × 438 homepage were reviewed together at the same viewport. A 390 × 844 mobile capture was also inspected.
- Hero photography refinement: the user-supplied Build 1 hero and the updated implementation were compared together at an 864 × 552 viewport, followed by desktop 1440 × 1024 and mobile 390 × 844 crop checks.
- Gradient and category-image refinement: the user's marked 1989 × 1248 hero screenshot and 2048 × 788 category screenshot were reproduced at matching CSS viewport sizes; the corrected category stack was also checked at 390 × 844.

## Full-view comparison evidence

The implementation preserves option 3's major visual structure: cinematic deep-teal hero, high-contrast serif display type, gold primary action, three visual shopping paths, cream editorial product section, split craft story, trust strip, dark visit section, and a compact contact/footer close. Option 1's clearer category hierarchy and value strip were intentionally incorporated at the user's request.

The fictional storefront and generated lifestyle scenes were intentionally replaced by Pantry d'Or's supplied logo and public catalogue photography. The visit section uses a real Pantry d'Or catering image and verified source-brief details: 201 Ranolf Street, Rotorua; (07) 347 0231; orders@pantrydor.co.nz; and 6:00am–2:30pm daily.

## Focused comparison evidence

- Hero: composition, navigation density, serif/sans pairing, teal/cream/gold balance, CTA hierarchy, and lead-time cue align with the selected source. The updated hero adopts Build 1's warm editorial bread-and-catering photography direction: flour-dusted sourdough, sliced crumb, catered salads and olives, cinematic side light, and deep teal shadows.
- Hero transition: the image now overlaps the solid copy panel and fades from deep teal into photography across the left portion of the image. The previously unexplained vertical `Discover` marker and line are removed from both markup and styling.
- Brand crest: the original lettering, wheat, bread, plaque, and ribbon are preserved pixel-for-pixel. Only the edge-connected teal photo backdrop was removed, so the crest now blends directly into the navigation background without the former rectangular boundary. Restrained drop shadows add depth without introducing a glow or altering the mark.
- Categories and products: three-up rhythm, dark category band, editorial product layout, image-led hierarchy, real prices, and concise descriptions preserve the source while improving the shopping path.
- Craft: the split image-and-copy anatomy and `Flour. Water. Salt.` line match the source. The image is a real Pantry d'Or bread display rather than generated hands.
- Visit/contact: the dark split section, location/hours, lead-time note, contact strip, and restrained footer match the intended hierarchy without the fictional storefront.
- Mobile: no overlap or horizontal overflow was observed at 390 × 844. Navigation, CTA stack, hero image, and type scale remain clear.

## Required fidelity surfaces

- Fonts and typography: Cormorant Garamond and Manrope reproduce the expressive editorial serif plus quiet geometric sans. Display hierarchy, line height, tracking, and body measure remain readable at desktop and mobile sizes.
- Spacing and layout rhythm: the implementation follows the source's dense hero/category opening and more generous cream editorial sections. Dividers and section transitions are consistent; no actionable overlap, clipping, or overflow remains.
- Colors and visual tokens: deep teal, antique gold, parchment, cream and restrained hairlines map closely to the source. Contrast is sufficient for body copy, controls, and focus states.
- Image quality and asset fidelity: every visible image is a real supplied or public Pantry d'Or asset. Crops use `object-fit: cover`, stay sharp at the tested viewports, and use descriptive alt text. No CSS art, custom SVG, placeholder imagery, or fictional storefront remains.
- Copy and content: product names, prices, lead-time caveat, address, phone, email, hours, and social handles align with the provided research. New copy stays in NZ English and the brand's restrained artisan voice.
- Icons: all icons come from one Phosphor icon family with consistent optical weight and sizing.
- Accessibility and behavior: skip link, semantic headings, labelled buttons, keyboard focus rings, reduced-motion handling, responsive tap targets, and image alt text are present.

## Interaction and console checks

- Tested desktop anchor navigation to `#craft`.
- Tested mobile menu open/close.
- Tested empty-cart state, product add-to-cart, cart total, and quantity controls.
- Tested desktop at 1440 × 1024 and mobile at 390 × 844.
- Browser console errors and warnings checked: none.
- Rechecked the refined crest at 900 × 438 and 390 × 844; no cropping, background seam, overlap, or loss of legibility was observed.
- Rechecked the Build 1-inspired hero at 1440 × 1024, 864 × 552, and 390 × 844; the bread remains the clear focal point, the catering context survives each crop, and no image loading or console issues were observed.
- Rechecked the reported problem widths at 1989 × 1248 and 2048 × 788. All three category images fill their frames, the lunch box remains centred, and the rightmost bread card no longer contains the clipped shelf, labels, or blank white area. The 390 × 844 mobile stack also retains complete focal subjects.

## Findings

- No actionable P0, P1, or P2 differences remain.
- P3: the live catalogue photography varies in lighting and crop more than the generated reference. This is an intentional truthfulness trade-off and can be improved later with a dedicated Pantry d'Or photo shoot.

## Comparison history

1. Initial capture exposed a mismatched collection asset for Pantry To Go and an off-canvas cart affecting full-page capture width.
2. Replaced the mismatched image with Pantry d'Or's real `Lunch_Pack.jpg`, added horizontal overflow protection, and hid the cart drawer when closed.
3. Recaptured desktop, focused sections, mobile, mobile menu, and cart. Post-fix evidence shows correct imagery, 1440 px document width, responsive layout, and working interactions with no console errors.
4. Removed the visible rectangular backdrop from the supplied crest, switched header and footer marks to the transparent asset, added restrained depth, then compared the user's issue capture with the updated desktop result and rechecked mobile.
5. Replaced the brighter catalogue platter hero with a dedicated Build 1-inspired editorial photograph, tuned the focal crop, compared it directly with the supplied Build 1 hero, and verified desktop and mobile presentation.
6. Added Build 1's soft teal-to-photo transition, removed the vertical `Discover` label, and replaced all three category images with crop-safe editorial assets. Verified the exact issue widths and the mobile stack with no browser warnings or errors.

## Implementation checklist

- [x] Selected visual direction translated into responsive code.
- [x] Fictional storefront removed.
- [x] Real brand and product assets placed.
- [x] Primary shopping and contact links wired.
- [x] Mobile menu and demo cart verified.
- [x] Production build and hosting tests passed.

final result: passed
