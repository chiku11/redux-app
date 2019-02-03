const initialState = {
    count:9
}

const CounterReducer = (state = initialState, action) => {
    console.log(`the reducer running the action`, action.type);

    switch(action.type) {

        case 'INCREMENT': 
         return Object.assign({}, state , {count: state.count+1});

        default:
          return  state; 
    }
}

export default CounterReducer;