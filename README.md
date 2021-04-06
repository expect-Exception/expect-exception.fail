# expect-exception.fail

> Official Website of [expect(Exception)](https://www.expect-exception.fail/).

This is a fork of the [Sapper + TailwindCSS Rollup template](https://github.com/Vannsl/sapper-tailwindcss-template).

## Getting started

1. Make sure you're up and running node v8+ (but just use v12+)
2. Run `npm install` or `yarn install`
3. Run `npm run transform` to create the podcasts RSS feed which is the data source for the content of the routes `/podcast` and `/podcast/[slug]`.

## Usage

Run the project and the tailwind watcher in development mode with:

```bash
npm run dev
```

and to rebuild the CSS in another window:

```bash
npm run dev:tailwindcss
```

Open up [localhost:3000](http://localhost:3000).

## Production mode and deployment

Run the project in production mode with:

```bash
npm run build && npm start
```

This application is deployed on [Now](https://zeit.co/now). The project will automatically be redeployed by pushing on the master branch. If you need access to the Now Team, contact [Vannsl](mailto:boehner.vanessa@gmail.com).

To change settings, run:

```bash
npm install -g now
now
```

## Test

### Cypress

This project contains [Cypress](https://www.cypress.io/) tests. To run the tests, execute

```bash
npm run cy
```

### Jest

This project contains [Jest](https://jestjs.io/) tests. To run the tests, execute

```bash
npm run test
npm run test:watch # watch mode
npm run test:coverage # coverage mode
```

## Troubleshooting

- HMR isn't working? There has been an [issue](https://github.com/sveltejs/sapper/issues/1151] which should be fixed by now. If not, try running `npm run build && npm start` to see changes.
- Routes `/podcast` and `/podcast/[slug]` are broken or don't show new episodes? (Re)run `npm run transform`. If that get's too complicated, we could add that command to the `npm run dev` command.
