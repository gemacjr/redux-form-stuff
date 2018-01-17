import React from 'react';
import ApplicationCard from './application-card';

export default function ApplicationList({applications}){

    const cards = () => {
        return applications.map(application => {
            return (
                <ApplicationCard key={application.registration_access_token} application={application} />
            )
        })
    }

    return (
        <div>
            { cards() }
        </div>
    )
}