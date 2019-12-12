import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './reducers/pictureListReducer'

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store
