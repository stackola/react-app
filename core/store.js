/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { combineReducers, createStore } from 'redux';

// Centralized application state
// For more information visit http://redux.js.org/
const userReducer = (state={"name":"willi"}, action) => {
	switch(action.type){
		case "CHANGE_NAME":{
			return {...state, "name": action.payload}
			break;
		}
	}
	return state;
};

const todoReducer = (state=[], action) => {
	return state;
};
const reducer = combineReducers({
	user: userReducer,
	todos: todoReducer
});
const store = createStore(reducer);

export default store;