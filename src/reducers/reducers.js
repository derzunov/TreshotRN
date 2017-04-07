import { combineReducers } from "redux"
import * as types from "../constants/actions"

const initialState = {
    isFetching: false,
    message: ''
}

const data = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true
            })
        case types.RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                message: action.data.message
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    data
})

export default rootReducer