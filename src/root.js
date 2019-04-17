import React from 'react';
import ReactDOM from 'react-dom';

import Content from './pages/Content';
import store from './store.js';
import {addToCart, deleteFromCart, updateCart} from './actions/cartActions'

class Root extends React.Component {

    render() {
        console.log("initial state: ",store.getState());

        store.subscribe(() =>     //监听state的变化
            console.log(store.getState())
        );
        store.dispatch(addToCart('Coffee 500gm', 1, 250));      //派遣Action到reducer
        store.dispatch(addToCart('Flour 1kg', 2, 110));
        store.dispatch(addToCart('Juice 2L', 1, 250));
        store.dispatch(updateCart('Flour 1kg', 5, 110));
        store.dispatch(deleteFromCart('Coffee 500gm'));

        return (
            <Content/>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById("mainContainer"));