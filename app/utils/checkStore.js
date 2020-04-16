/* eslint-disable */

import conformsTo from 'lodash/conformsTo';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import invariant from 'invariant';

/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
  };
  // debugger
  // console.log('here it comes!!',(store))
  // if(!store){
  //   console.trace()
  // }
  invariant(
    conformsTo(store, shape),
    //conformsTo(isObject(store),true),
    '(app/utils...) injectors: Expected a valid redux store'
  );
}
