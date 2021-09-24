import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./reducers";

const enhancers = [];
const middleware = [
    thunk
]

const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose;
if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension)
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(RootReducers, {}, composedEnhancers);

export default store;