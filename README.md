# Mortgage Calculator — Frontend

Interactive SPA for the [hipoteca-simulador](https://github.com/josemanueldg02-star/hipoteca-simulador) 
financial engine. Users adjust loan parameters via sliders and instantly see the 
amortization curve, monthly payment breakdown, and interest vs. principal chart.

[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-latest-purple)](https://vitejs.dev/)
[![Recharts](https://img.shields.io/badge/Recharts-SVG%20charts-green)](https://recharts.org/)

---

## Features

- **Range sliders** bound to React state for real-time parameter adjustment
- **Recharts visualization** of the French amortization curve (interest paid vs. 
capital repaid over time)
- **Async fetch** with optional chaining for resilient API consumption
- Fully responsive layout with pure CSS

---

## Running Locally

**Prerequisites:** Node.js LTS, and [hipoteca-simulador](https://github.com/josemanueldg02-star/hipoteca-simulador) 
running on port 8083.

```bash
git clone https://github.com/josemanueldg02-star/hipoteca-frontend.git
cd hipoteca-frontend
npm install
npm run dev
```

Available at `http://localhost:5174`.

---

## Author

**José Manuel Domínguez García** · [@josemanueldg02-star](https://github.com/josemanueldg02-star)
