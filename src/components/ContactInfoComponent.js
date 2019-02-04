import React from 'react';
import {connect} from 'react-redux';

function ContactInfoComponent(props) {
    return (
        <div>
             <label> {props.id} </label>
        </div>
    );
}

function mapStateToProps(state){
    console.log(`the state for contact ${JSON.stringify(state)}`);
    console.log(`${JSON.stringify(state.ContactReducer.contacts)}`);
    return (
        { id: state.ContactReducer.currentId}
    );
}

export default connect(mapStateToProps)(ContactInfoComponent);