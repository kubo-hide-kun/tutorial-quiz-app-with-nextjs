/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const range = require("lodash/range");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.join(__dirname, "src/**/!(*.d).{ts,js,jsx,tsx}")],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1500px",
    },
    spacing: {
      px: '1px',
      ...range(1, 640).reduce((acc, i) => {
        acc[i] = `${i}px`;
        return acc;
      }, {}),
    },
    fontSize: {
      none: '0px',
      xs: '10px',
      sm: '12px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '28px',
      '5xl': '32px',
      '6xl': '36px',
      '7xl': '42px',
      '8xl': '48px',
      '9xl': '54px',
      '10xl': '64px',
      '11xl': '72px',
      '12xl': '80px',
    },
    colors: {
      transparent: "transparent",
      /* ブランドカラー */
      brand: {
        cyan: "var(--brand-cyan)",
        "cyan-light": "var(--brand-cyan-light)",
      },
      /* ベースカラー: グレー */
      gray: {
        dark: "var(--gray-dark)",
        default: "var(--gray-default)",
        light: "var(--gray-light)",
      },
      /* ベースカラー: ブルー */
      blue: {
        dark: "var(--blue-dark)",
        default: "var(--blue-default)",
        light: "var(--blue-light)",
        sky: "var(--blue-sky)",
      },
      /* ベースカラー: ホワイト */
      white: {
        default: "var(--white-default)",
        cream: "var(--white-cream)",
        smoke: "var(--white-smoke)",
      },
      /* 表現色 */
      expressive: {
        orange: "var(--expressive-orange)",
        pink: "var(--expressive-pink)",
      },
    },
  },
  plugins: ["tailwindcss", "postcss-preset-env"],
};
