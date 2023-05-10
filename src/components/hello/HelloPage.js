import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';

export default function HelloPage() {
    const [message, setMessage] = useState('');
    const [isLoaded, setLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setError] = useState(false);

    useEffect(() => {
        axios.get('https://sandbox.api.service.nhs.uk/hello-world/hello/world').then(response => {
            setMessage(response.data.message);
            setLoaded(true);
        }).catch(errorResponse => {
            setErrorMessage(errorResponse.data.message);
            setLoaded(true);
            setError(true);
        })
    });

    const successPage = (
        <div>
            <p>Got message from server: {message}</p>
        </div>
    );

    const errorPage = (
        <div>
            <p>Got error from server: {errorMessage}</p>
        </div>
    )

    const spinner = (
        <Spinner animation="border" role="status">
        </Spinner>
    )

    return (
        <div className='container'>
            <h1>Hello page</h1>
        { isLoaded ? 
            isError ? errorPage : successPage
            :
            spinner
        }
        </div>
    )
};