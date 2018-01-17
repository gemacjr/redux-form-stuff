import { applications } from '../application-data';
import { client } from './';
const registerUrl = '/register';


export function fetchApplications(){
    return dispatch => {
        dispatch({
            type: 'FETCH_APPLICATION',
            payload: applications
        })
    }
}

export function newApplication(){
    return dispatch => {
        dispatch({
            type: 'NEW_APPLICATION'
        })
    }
}

export function saveApplication(application){
    return dispatch => {
        return dispatch({
            type: 'SAVE_APPLICATION',
            payload: client.post(registerUrl, application)
        })
    }
}