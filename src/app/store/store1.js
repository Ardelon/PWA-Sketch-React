import { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'
import { createStore } from 'redux'

function isLoggedInReducer(state = {isLoggedIn : false}, action) {
    switch (action.type) {
        case 'login/signIn':
            return { isLoggedIn : true}
        case 'login/logOut':
            return { isLoggedIn : false}
        default:
            return state
    }
}

let store = createStore(isLoggedInReducer);


  

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'login/signIn' });
store.dispatch({ type: 'login/logOut' });
store.dispatch({ type: 'login/ss' });