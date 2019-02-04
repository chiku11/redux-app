const initialState = {
    contacts:[{name: 'Srikant', id: 1}, {name: 'Siri', id: 2} ]
}

const ContactReducer = (state=initialState, action={}) => {

    switch(action.type){

        case 'INVOKE_CONTACTINFO':
            return state;
        default:
            return state;
    }
}

export default ContactReducer;