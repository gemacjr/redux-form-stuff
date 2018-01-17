import React from 'react';

export default function ApplicationCard({ application, deleteApplication }){
    return(
        <div>
            <h1>Application Client Id: {application.client_id}</h1>
            <p>Application Client Secret: {application.client_secret}</p>
            <p>Application Access Token: {application.registration_access_token}</p>
        </div>
    )
}