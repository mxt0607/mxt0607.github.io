# Guijun Ma — Academic Homepage

A responsive, one-page academic website prepared for GitHub Pages. It uses plain HTML, CSS, and JavaScript, with no build step or framework.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `guijunma.github.io`.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Once the public URL is known, add a canonical URL and Open Graph image metadata in `index.html`.

## Verification checklist

Search the site for `VERIFY` before launch. Confirm:

- current citation and ESI Highly Cited Paper counts;
- official portrait and permission to publish it;
- all publication author lists, bibliographic details, and DOI links;
- project titles, grant numbers, roles, dates, and funding amounts;
- Hubei Provincial Natural Science Award year and official project title;
- editorial roles, journal review service, and conference committee memberships;
- preferred public email, ORCID, GitHub, and other profile links;
- approved wording for HUST team and industrial collaborations.

After verification, remove the gold dashed `VERIFY` notes from `index.html`.

## Customize

- Main content: `index.html`
- Colors and layout: `assets/style.css`
- Menu, filters, and scroll behavior: `assets/main.js`
- Portrait: replace the initials block in the hero with an `<img>` after adding an approved image to `assets/`.

## Notes

Google Fonts are loaded from the web. For a fully self-contained version, download DM Sans and Newsreader, place them in `assets/fonts/`, and replace the font links with local `@font-face` declarations.
