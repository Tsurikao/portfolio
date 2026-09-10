# Olha Tsurika — Portfolio

Personal portfolio site. AI Product Engineer & iOS MVP Developer.

## Deploying to GitHub Pages

1. Upload **everything inside this folder** to the root of your repository — do not create subfolders.
2. In the repo, go to **Settings → Pages** and set the source to the `main` branch, `/ (root)`.
3. The site goes live at `https://<your-username>.github.io/<repo-name>/`.

## Structure

All files sit flat at the root because image paths in `index.html` are plain filenames.

```
index.html          the site
support.js          runtime (required — do not remove)
.nojekyll           tells GitHub Pages to serve all files as-is
*.png / *.jpg       case study covers and screens
```

## Case study images

| Case | Cover | Inside the pop-up |
|---|---|---|
| Mintra | `mintra-hero.png` | `mintra-1-splash` … `mintra-5-rituals` |
| Poshuk | `poshuk-hero.png` | `poshuk-1-splash` … `poshuk-7-premium` |
| Gym App | `gymapp-hero.png` | `p1-1` … `p1-6` |
| Swiss Insurance | `swiss-hero.png` | `swiss-app.png` |
| Social Game Up | `social-hero.png` | `social-app.png` |
| African Repatriates | `repat-hero.png` | `repat-1.png`, `repat-2.jpg` |
| Sefer | `sefer-hero.png` | `sefer-1.png`, `sefer-2.png` |
| AR Makeup | `armakeup-hero.png` | `armakeup-1.png` |
| Pets-Feeder | `petfeeder-hero.png` | `petfeeder-1.png` |

To swap an image, replace the file and keep the same filename — no code changes needed.
