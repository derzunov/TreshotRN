import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configure-store'
import App from './App'

const initialState = {
    data: {
        isFetching: false,
        message: ''
    }
}
const store = configureStore( initialState )

class Root extends Component {
    render() {
        return (
            <Provider store={ store }>
                <App/>
            </Provider>
        )
    }
}

export default Root