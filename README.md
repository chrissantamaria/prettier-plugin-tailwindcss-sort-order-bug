This repo is a reproduction of a bug in [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss), where [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports) is not supported despite using the [correct plugin ordering](https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins).

## Steps to reproduce

1. Install [Node.js](https://nodejs.org/en) and [Yarn 1.x](https://classic.yarnpkg.com/lang/en/)
2. Install dependencies with `yarn install`
3. Change the ordering of Tailwind classes in `src/main.jsx` - for example, moving `underline` before `font-bold`
4. Run `yarn format` and verify that the previous ordering is restored
5. Change the ordering of imports - for example, importing `react-dom` before `react`
6. Run `yarn format` and verify that the import order is (incorrectly) not restored
7. Remove `prettier-plugin-tailwindcss` from the plugins array in `prettier.config.cjs`
8. Repeat steps 5-6, verifying that import order is now correctly restored
