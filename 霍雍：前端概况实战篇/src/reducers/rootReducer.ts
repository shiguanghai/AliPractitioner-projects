import { rapperReducers } from 'rap/runtime/reduxLib'
import { IState, IAction } from './types'
import { combineReducers } from 'redux'

const rootReducer = {
  ...rapperReducers,
}

export default combineReducers<IState, IAction>(rootReducer)