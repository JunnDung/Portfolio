# Nguyen Viet Dung — Portfolio

React, TypeScript and Vite portfolio.

## Development

Use Node.js 22 and run `npm ci`, then `npm run dev`.
Run `npm run build` to type-check and generate `dist/`.
Run `npm run preview` to inspect the production build.

## Profile content

Edit `src/data/profile.ts` for the name, headline, email and social links.
Edit `src/data/projects.ts` for projects and education.
The internship availability statement should be reviewed when availability changes.
Keep the title and description in `index.html` aligned with profile changes.

## Release

The Validate portfolio workflow type-checks and builds each push and pull request,
then uploads the generated `portfolio-dist` artifact. It does not deploy the site.
The committed `dist/` is a historical build; regenerate it with `npm run build`
before deploying from that directory, or deploy the workflow artifact instead.
For hosting under a subdirectory, configure Vite's `base` for that path before building.

## UI checks

Check navigation at mobile and desktop widths, including Escape to close the
mobile menu. Check Hero cards at 1024, 1280 and 1440px, and confirm that email
text wraps and all contact links point to the intended profiles.
