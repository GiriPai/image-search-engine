# Image Search Engine

This project was created with [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/) powered [Pixabay API](https://pixabay.com/api/docs/).

This application lists out images that matches the are relavent to given search filter.
This application also uses Java Script's Native **_[IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)_** to recognize DOM Event and load images **_lazily_** without pagination.

## Hosting

- This app is live and it is hosted in [Nelify](https://www.netlify.com/).
- Checkout the live site [here](https://img-engine.netlify.app/)

## Third Party Libraries

- React
- TypeScript
- Axios
- React Bootstrap

## Local Setup

### Pre-requisites

- Node JS (14+)
- VS Code
- Pixabay API Keys

### Steps

- Make sure to have the pixabay api key with you. If you don't have one, signup with this [link](https://pixabay.com/accounts/register/) and get one.
- Clone this [repo](https://github.com/GiriPai/image-search-engine) to your local.
- Run `npm i` to install dependencies.
- Create a file named **_.env.local_** in root of the project directory and add you pixabay api key as shown below.

```
REACT_APP_SERVER_URL=https://pixabay.com
REACT_APP_API_KEY= <Your api key goes here...>
```

- Run `npm start` to run your local dev server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
