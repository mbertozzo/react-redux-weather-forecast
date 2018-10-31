# Weather Forecast

This is an app that provides weather forecasts for your favourite location by consuming the **Open Weather Map** API. 

## Getting started

If you want to play around with this project, just clone it to your local machine and install the dependecies with the command `$ yarn`.

### Using Redux DevTools

You can track what's happening in the Redux Store by connecting the app to the Redux DevTools. To use the feature, install the DevTools extension ([click here for the Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en-GB)) and uncomment the following lines in `src/indexjs`:

```javascript
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
```

Then edit the `createStore()` function as follows:

```javascript
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);
```

## Notes on the API
Please note that in order to use the Open Weather Map API you need to provide a valid key. To get it you can register for free [following this link](https://home.openweathermap.org/users/sign_up).

Once you got your personal key, save it as follows in a file named `apikey.js` in `src/redux/sagas/`:

```javascript
export const API_KEY = 'YOUR_API_KEY_HERE';
```