const initialState = {
    currentId : 1,
    contacts:[{name: 'Srikant', id: 1}, {name: 'Siri', id: 2} ]
}

const ContactReducer = (state=initialState, action={}) => {

    switch(action.type){

        case 'INVOKE_CONTACTINFO':
            console.log(`the contact state in rducer `, state);
            return Object.assign({}, state, {currentId:action.id});
        default:
            return state;
    }
}

export default ContactReducer;