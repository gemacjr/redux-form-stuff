const defaultState = {
    applications: [],
    application: {name:{}},
    loading: false,
    errors: {}
}


export default (state=defaultState, action={}) => {

    switch(action.type){

        case 'NEW_APPLICATION': {
            return {
                ...state,
                application: {name:{}}
            }
        }

        case 'SAVE_APPLICATION_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'SAVE_APPLICATION_FULFILLED': {
            return {
                ...state,
                applications: [...state.applications, action.payload.data],
                errors: {},
                loading: false
            }
        }

        case 'FETCH_APPLICATIONS': {
            return {
                ...state,
                applications: action.payload
            }
        }

        case 'SAVE_APPLICATION_REJECTED': {
            const data = action.payload.response.data;
            const { client_id, client_secret, scopes, client_type, redirect_uris} = data.errors;
            const errors = { global: data.message, client_id, client_secret, scopes, client_type, redirect_uris };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        default:
            return state;
    }
}