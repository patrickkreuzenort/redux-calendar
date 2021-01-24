import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { ThunkAction } from 'redux-thunk';
import { RootState } from 'types';

import { createReducer } from './reducers';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    // Initially we don't have any injectedReducers, so returning identity function to avoid the error
    reducer: createReducer(),
    // we do not need to apply thunk middleware, because it is included in getDefaultMiddleware()
    middleware: [...getDefaultMiddleware(), ...middlewares],
    // optionally = middleware: getDefaultMiddleware().concat(middlewares) | the second middleware definition option
    /*It is EVEN (!) preferrable to use the chainable .concat(...) and .prepend(...) methods of the returned MiddlewareArray instead of the array spread operator, as the latter can lose valuable type information under some circumstances.*/
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
    enhancers,
  });

  return store;
}

export type Store = ReturnType<typeof configureAppStore>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
