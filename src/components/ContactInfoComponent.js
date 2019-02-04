import React from 'react';
import {connect} from 'react-redux';

function ContactComponent() {
    return (
        <div>
            <ol>
                contacts.forEach(element => {
                    <li> element.name</li>
                });
            </ol>
        </div>
    );
}

functions mapStateToProps(state){
    return (
        { contacts: state.contacts}
    );
}