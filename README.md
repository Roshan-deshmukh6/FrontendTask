# Penta Freight Website Clone

React.js recreation of selected pages from [pentafreight.com](https://www.pentafreight.com/).

## Pages

- **Home** — `/`
- **Industries** — `/industries`
- **Pentakuhl** — `/pentakuhl`

## Tech Stack

- React 19
- React Router
- Vite
- Plain CSS (no UI libraries)

## Project Structure

```
src/
  components/     Header, Footer, HeroSlider, PageBanner
  pages/          Home, Industries, Pentakuhl
  styles/         Page and component CSS files
  constants/      Image URLs from reference site
  App.jsx
  main.jsx
```

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Images

- **Logos & brand assets** — from [pentafreight.com](https://www.pentafreight.com/) (`src/constants/images.js`)
- **Air & sea photos** — stored in `public/images/` (airplane, cargo plane, cargo ship, port)
