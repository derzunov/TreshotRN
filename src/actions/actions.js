import { REQUEST_DATA, RECEIVE_DATA } from '../constants/actions'

export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const receiveData = ( data ) => {
    return {
        type: RECEIVE_DATA,
        data
    }
}

export const fetchData = () => {
    return ( dispatch ) => {
        dispatch( requestData() )
        return setTimeout( () => {
            const data = { message: "Hello, sweety!" }
            dispatch( receiveData( data ) )
        }, 3000 )
    }
}