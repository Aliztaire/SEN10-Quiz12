# SCM Demo: GitHub Pages + CI/CD

Static site (HTML/CSS/JS) deployed to GitHub Pages with GitHub Actions.

## Pipeline

1. Push to `main`
2. `lint` job runs ESLint on `script.js`
3. If lint passes, `deploy` job packages the site into `dist/` and publishes it

## Run lint locally

```bash
npm install
npm run lint
```

## Live site

https://YOUR-USERNAME.github.io/YOUR-REPO/
