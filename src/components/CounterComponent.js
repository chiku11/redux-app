import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {

    return (
        <div>
            <h1> I am a counter</h1>
            <p> Count: {props.counter}</p>
            <button onClick={props.onIncrementClick}> increment</button>
        </div>
    );
}

function mapStateToProps(state) {
    console.log(`the mapstatetoprops ${JSON.stringify(state)}`)
    return {
        counter: state.count
    }
}

function mapDispatchToProps (dispatch) {

    return {
        onIncrementClick: () => {
            const action = {type: 'INCREMENT'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);