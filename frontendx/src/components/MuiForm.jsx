import React, { useState } from "react";
import httpClient from '../infra/httpClient';

const MuiForm = () => {
    const [formData, setFormData] = useState({
        param1: '',
        param2: ''
    });
    const [resultData, setResultData] = useState('');

    const handleFormInput = (e) => {
        setFormData({ [e.target.name]: e.target.value })
    }

    const handleResponse = (e) => {
        // NA.
        // - No op. Just so the browser does not complain    
    }

    const handleSubmit = () => {
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        };
        const url = `/api3/predict?x=${formData.param1}`
        httpClient
            .get(url, { headers })
            .then((response) => {
                const y_pred = response.data
                console.log('y_pred: ', y_pred)
                setResultData(y_pred)
            })
            .catch((error) => {
                const msg = "Error getting data" + error
                console.error(msg)
            });
    }

    return (
        <div>
    		<p>
    		MUI Form
    		</p>
            <input
                type="text"
                name="param1"
                onChange={handleFormInput}
                placeholder="Parameter1"
                value={formData.param1 ?? ""} />
            <br />

            <input
                type="text"
                name="param2"
                onChange={handleFormInput}
                placeholder="Parameter2"
                value={formData.param2 ?? ""} />
            <br />

            <input
                type="text"
                name="result"
                onChange={handleResponse}
                placeholder="Result"
                value={resultData.y ?? ""} />
            <br />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default MuiForm;
