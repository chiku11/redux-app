import React from 'react';
import {connect} from 'react-redux';

function ContactComponent(props) {
    return (
        <div>
             <ul>
                {props.contacts.map(function(contact, id){
                     return <li key={ id }>{contact.name}</li>;
                  })}
            </ul>
        </div>
    );
}

function mapStateToProps(state){
    console.log(`the state for contact ${JSON.stringify(state)}`);
    console.log(`${JSON.stringify(state.ContactReducer.contacts)}`);
    return (
        { contacts: state.ContactReducer.contacts}
    );
}

function mapDispatchToProps(dispatch){
    return {
        onClickContact: () => {
            const action= {type:'INVOKE_CONTACTINFO'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactComponent);