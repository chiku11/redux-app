import {createStore} from 'redux';

const initialState = {
    count:9
}

const reducer = (state = initialState, action) => {
    console.log(`the reducer running the action`, action.type);

    switch(action.type) {

        case 'INCREMENT': 
         return Object.assign({}, state , {count: state.count+1});
         break;

        default:
          return  state; 
    }
}

const store = createStore(reducer);

export default store;