# React Native Boilerplate Redux with React Native Navigation
React Native App with tools and settings

## Quick start

Choose one of the following options:

`React Native Getting Started`(https://facebook.github.io/react-native/docs/getting-started)

- Clone the git repo — `git clone
  https://github.com/XPGraph/react-native-redux-boilerplate-rnn`


- Install with [npm] `npm install`
- Start with [npm] `npm start -- --reset-cache`

- Install with [yarn] `yarn install`
- Start with [yarn] `yarn start`

- Start Android `react-native run-android`
- Start iOS `react-native run-ios`

## Features

* Redux ready for work
* Configured eslint
* Includes:
  * [`lodash`](https://lodash.com)
    The Lodash library exported as a UMD module.
  * [`React Native Navigation`](https://wix.github.io/react-native-navigation) Declarative native routing for React Native.
  * [`Redux Thunk`](https://github.com/reduxjs/redux-thunk) 
    Thunk middleware for Redux.
  * [`Reselect`](https://github.com/reduxjs/reselect) Simple “selector” library for Redux (and others) inspired by getters in NuclearJS, subscriptions in re-frame and this proposal from speedskater.
* Custom utils createActions & createReducers & createArraySelector
  
Create action:
```sh
const setToken = createAction('SET_TOKEN', 'token');
```

Create Reducer:
```sh
export const authReducer = createReducer({}, {
  [setToken]: (state, {token}) => token
});
```

Create Array selector: 
```sh
store = {
    ids: [],
    entities: {}
}

const array = createArraySelector('store');
```
If need rename RN App use [`react-native-rename`](https://github.com/junedomingo/react-native-rename)

## License

The code is available under the [MIT license](LICENSE).
