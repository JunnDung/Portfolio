# Nguyen Viet Dung — Portfolio

React, TypeScript and Vite portfolio.

## Development

Use Node.js 22 and run `npm ci`, then `npm run dev`.
Run `npm run build` to type-check and generate `dist/`.
Run `npm run preview` to inspect the production build.

Run `npm test` to check project IDs, source URLs, contribution labels and private-project access rules.

## Profile content

Edit `src/data/profile.ts` for the name, headline, email and social links.
Edit `src/data/projects.ts` for projects and education.
The internship availability statement should be reviewed when availability changes.
Keep the title and description in `index.html` aligned with profile changes.

The selected projects emphasize computer vision, OCR and library RAG.
`learningHighlights` links applied concepts to repository evidence.
Team contributions are labeled separately; Traffic Lens remains private and displays
an access label instead of a public source link.
SmartOrder's old source URL is unavailable; its project card is retained without a broken link.

Content reviewed on November 3, 2026:

- [Biển Số Việt](https://github.com/JunnDung/vietnam-license-plate-recognition): fine-tuned detector/OCR, ONNX inference and recognition workflows.
- [ZoneGuard](https://github.com/JunnDung/restricted-zone-vehicle-detection): vehicle tracking, polygon zones and evidence-backed alerts.
- [UTH Library Assistant contribution](https://github.com/LeSiTrung/Group4-HKDN/pull/2): merged RAG/data pipelines and experimental embedding work.
- Traffic Lens: authenticated repository review; five-class YOLO11n tracking/counting prototype. The separate YOLO11s training attempt is not presented as completed.
- [TCSA](https://github.com/JunnDung/TriTueNhanTao): Naive Bayes module; [traffic signs](https://github.com/JunnDung/XuLiAnhVaThiGiacMayTinh) and [AURA](https://github.com/JunnDung/AURA-Retinal-Screening-System): team projects.

Repository descriptions are not claims of production, field or clinical validation.
The library's candidate embedding remains experimental.

## Release

The Validate portfolio workflow tests, type-checks and builds each push and pull request,
then uploads the generated `portfolio-dist` artifact. It does not deploy the site.
The committed `dist/` is a build snapshot; regenerate it with `npm run build`
before deploying from that directory, or deploy the workflow artifact instead.
For hosting under a subdirectory, configure Vite's `base` for that path before building.

## UI checks

Check navigation at mobile and desktop widths, including Escape to close the
mobile menu. Check Hero cards at 1024, 1280 and 1440px, and confirm that email
text wraps and all contact links point to the intended profiles.
