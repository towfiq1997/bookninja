import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Booking from './components/Booking';
function App() {
    return (
        <Provider store={store}>
            <Booking />
        </Provider>
    )
}

export default App