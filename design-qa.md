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
- Catalogue-demo source: `/private/tmp/pantrydor-products-source.jpg`, the approved public homepage at a 1440 × 1000 CSS viewport and device scale factor 1.
- Catalogue-demo implementation: `/private/tmp/pantrydor-products-final-desktop.jpg` at a 1440 × 1000 CSS viewport and `/private/tmp/pantrydor-products-final-mobile.png` at a normalized 390 × 844 mobile CSS viewport. The source and desktop implementation were opened together in the same comparison input.
- Catalogue-demo states: Catering & Platters, Pantry To Go, and Artisan Breads tabs; desktop default; mobile stack; and one product added to the demo cart.
- Real-photography correction source: `/var/folders/n2/d96307fd2c91hg5g4xt_f24m0000gn/T/codex-clipboard-661960c5-e992-4838-99a7-53b7d67b6c96.png`, 3412 × 1868 px, showing the four food scenes the user identified as visibly generated.
- Real-photography implementation: live in-app Browser captures at a 1280 × 720 CSS viewport, inspected at the top of the hero and across all three category cards. Asset integrity was also checked in the rendered page: every replacement completed with a non-zero natural width and height.
- Final hero-crop source: `/Users/shankar/Downloads/generated-image (13).png`, 1774 × 887 px. The selected source and its 1280 × 720 implementation were opened together in one comparison input, with an additional lower-hero crop check to inspect empty space and exclude retail pricing.

## Full-view comparison evidence

The implementation preserves option 3's major visual structure: cinematic deep-teal hero, high-contrast serif display type, gold primary action, three visual shopping paths, cream editorial product section, split craft story, trust strip, dark visit section, and a compact contact/footer close. Option 1's clearer category hierarchy and value strip were intentionally incorporated at the user's request.

The fictional storefront is removed. Supporting food scenes use Pantry d'Or's supplied logo and authentic public catalogue photography; the homepage hero uses the user's final selected warm sourdough image. The visit section uses a real Pantry d'Or catering image and verified source-brief details: 201 Ranolf Street, Rotorua; (07) 347 0231; orders@pantrydor.co.nz; and 6:00am–2:30pm daily.

## Focused comparison evidence

- Hero: composition, navigation density, serif/sans pairing, teal/cream/gold balance, CTA hierarchy, and lead-time cue align with the selected source. The final warm landscape image contains no retail labels, and its 82% horizontal focal position moves the sourdough into the visual centre of the photo panel. A shorter desktop hero, 40/60 column split, 80 px overlap and narrower fade reduce the excessive teal/photographic dead space reported by the user.
- Hero transition: the image now overlaps the solid copy panel and fades from deep teal into photography across the left portion of the image. The previously unexplained vertical `Discover` marker and line are removed from both markup and styling.
- Brand crest: the original lettering, wheat, bread, plaque, and ribbon are preserved pixel-for-pixel. Only the edge-connected teal photo backdrop was removed, so the crest now blends directly into the navigation background without the former rectangular boundary. Restrained drop shadows add depth without introducing a glow or altering the mark.
- Categories and products: three-up rhythm, dark category band, editorial product layout, image-led hierarchy, real prices, and concise descriptions preserve the source while improving the shopping path. Catering, packed lunch and bread cards now use authentic Pantry d'Or product photographs; the crops retain natural packaging, imperfect food texture and real bakery presentation rather than generated styling.
- Catalogue browser: the former three-card product preview is intentionally expanded into a cinematic split panel with three visible collection tabs, fifteen curated products, current prices, direct Shopify links, collection counts, and working demo-cart actions. The layout reuses the approved cream, teal, gold, serif, imagery and hairline language rather than introducing a separate storefront style.
- Craft: the split image-and-copy anatomy and `Flour. Water. Salt.` line match the source. The image is a real Pantry d'Or bread display rather than generated hands.
- Visit/contact: the dark split section, location/hours, lead-time note, contact strip, and restrained footer match the intended hierarchy without the fictional storefront.
- Mobile: no overlap or horizontal overflow was observed at 390 × 844. Navigation, CTA stack, hero image, and type scale remain clear.

## Required fidelity surfaces

- Fonts and typography: Cormorant Garamond and Manrope reproduce the expressive editorial serif plus quiet geometric sans. Display hierarchy, line height, tracking, and body measure remain readable at desktop and mobile sizes.
- Spacing and layout rhythm: the implementation follows the source's dense hero/category opening and more generous cream editorial sections. Dividers and section transitions are consistent; no actionable overlap, clipping, or overflow remains.
- Colors and visual tokens: deep teal, antique gold, parchment, cream and restrained hairlines map closely to the source. Contrast is sufficient for body copy, controls, and focus states.
- Image quality and asset fidelity: the visible hero is the user-selected 1774 × 887 landscape asset; the supporting category sources are authentic Pantry d'Or images at 1164 × 1524, 1365 × 2048 and 3024 × 4032. Crops use `object-fit: cover`, stay sharp at the tested viewport, and use descriptive alt text. No CSS art, custom SVG, placeholder imagery, pricing label, or fictional storefront remains.
- Copy and content: product names, prices, lead-time caveat, address, phone, email, hours, and social handles align with the provided research. New copy stays in NZ English and the brand's restrained artisan voice.
- Icons: all icons come from one Phosphor icon family with consistent optical weight and sizing.
- Accessibility and behavior: skip link, semantic headings, labelled buttons, keyboard focus rings, reduced-motion handling, responsive tap targets, and image alt text are present.

## Interaction and console checks

- Tested desktop anchor navigation to `#craft`.
- Tested mobile menu open/close.
- Tested empty-cart state, product add-to-cart, cart total, and quantity controls.
- Tested desktop at 1440 × 1024 and mobile at 390 × 844.
- Tested all three collection tabs, direct product/collection destinations, a catalogue product add-to-cart action, mobile tab visibility, and horizontal overflow at 1440 × 1000 and 390 × 844.
- Browser console errors and warnings checked: none.
- Rechecked the refined crest at 900 × 438 and 390 × 844; no cropping, background seam, overlap, or loss of legibility was observed.
- Rechecked the Build 1-inspired hero at 1440 × 1024, 864 × 552, and 390 × 844; the bread remains the clear focal point, the catering context survives each crop, and no image loading or console issues were observed.
- Rechecked the reported problem widths at 1989 × 1248 and 2048 × 788. All three category images fill their frames, the lunch box remains centred, and the rightmost bread card no longer contains the clipped shelf, labels, or blank white area. The 390 × 844 mobile stack also retains complete focal subjects.
- Rechecked the realism correction at 1280 × 720 in the in-app Browser. The hero uses an actual bakery-cabinet photograph and the category cards show a real grazing box, branded packed lunch and close-up sourdough. All nine rendered image instances loaded successfully, the document remained exactly 1280 px wide with no horizontal overflow, and the console contained no errors or warnings.
- Rechecked the user's final hero alternative and the implementation together. The tighter 82% focal crop keeps the loaf dominant, the former `$8.90` cabinet label is absent, the bottom of the hero retains both calls to action and the lead-time cue, and no large unused teal block remains beside the photograph. The replacement loaded at 1774 × 887, document width stayed at 1280 px, and the console contained no errors or warnings.

## Findings

- No actionable P0, P1, or P2 differences remain.
- P3: the authentic catalogue photos have naturally varied lighting, which is appropriate for this approval demo and is unified with restrained saturation and contrast adjustments rather than artificial retouching.

## Comparison history

1. Initial capture exposed a mismatched collection asset for Pantry To Go and an off-canvas cart affecting full-page capture width.
2. Replaced the mismatched image with Pantry d'Or's real `Lunch_Pack.jpg`, added horizontal overflow protection, and hid the cart drawer when closed.
3. Recaptured desktop, focused sections, mobile, mobile menu, and cart. Post-fix evidence shows correct imagery, 1440 px document width, responsive layout, and working interactions with no console errors.
4. Removed the visible rectangular backdrop from the supplied crest, switched header and footer marks to the transparent asset, added restrained depth, then compared the user's issue capture with the updated desktop result and rechecked mobile.
5. Replaced the brighter catalogue platter hero with a dedicated Build 1-inspired editorial photograph, tuned the focal crop, compared it directly with the supplied Build 1 hero, and verified desktop and mobile presentation.
6. Added Build 1's soft teal-to-photo transition, removed the vertical `Discover` label, and replaced all three category images with crop-safe editorial assets. Verified the exact issue widths and the mobile stack with no browser warnings or errors.
7. Replaced the limited three-product block with a tabbed collection browser grounded in the approved homepage and current Shopify catalogue. The first mobile pass hid the third tab off-canvas; the post-fix pass fits all three tabs in one row, preserves the 350 px content frame, shows the complete collection panel without horizontal overflow, and keeps every product action reachable.
8. Replaced the four generated hero/category food scenes with authentic Pantry d'Or catalogue photography. Tuned the hero to an upper bakery-cabinet crop, centred the grazing and packed-lunch subjects, used a high-resolution real sourdough close-up for the bread card, and verified loading, overflow, crops and console health in the in-app Browser.
9. Replaced the cabinet hero with the user's final warm landscape sourdough image, removed all visible pricing, tightened the desktop image to an 82% focal crop, narrowed the transition fade and reduced the oversized desktop hero area. Compared the selected source and implementation together and verified the lower hero state for unused space.

## Implementation checklist

- [x] Selected visual direction translated into responsive code.
- [x] Fictional storefront removed.
- [x] Real brand and product assets placed.
- [x] Primary shopping and contact links wired.
- [x] Mobile menu and demo cart verified.
- [x] Production build and hosting tests passed.
- [x] Hero overlap inspected at the reported tall desktop crop; the dark vertical compositor seam is removed while the soft photographic fade remains intact.
- [x] Three collection tabs, fifteen curated product rows, current prices, external ordering links, and demo-cart actions verified on desktop and mobile.
- [x] Category food scenes replaced with authentic Pantry d'Or catalogue photography and visually verified; hero updated to the user's final selected image.
- [x] Final desktop hero crop contains no retail pricing and avoids the previously reported empty lower-left area.

final result: passed
