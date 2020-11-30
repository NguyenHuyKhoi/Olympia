import {combineReducers} from 'redux'

import practiceReducer from './practice.reducer'

export default combineReducers({
    practice:practiceReducer
})