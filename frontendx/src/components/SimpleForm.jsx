import React, { useState } from "react";
import httpClient from '../infra/httpClient';

const SimpleForm = () => {
    const [formData , setFormData] = useState({
        param1: '',
        param2: ''
    });
    const [resultData , setResultData] = useState();

    /*
    NOTE:
    - MP.  Why do we not need this?
    useEffect(() => {
    }, []);
    */
        
    const handleFormInput = (e) => {
        setFormData({[e.target.name]: e.target.value})
    }
    
    const handleDebugSubmit = () => {
        alert(formData.param1)
    }

    const handleSubmit = () => {
        // NA.
        // NOTE:
        // - MP. Connect bridge here.
        // - MP. Debug and extend this on your own.
        /*
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        };
        const url = "/api1/predict?x=${formData.param1}"
        httpClient
            .get(url, { headers })       
            .then((response) => {
                const predicts = response.data
                console.log('predicts: ', predicts)
                let ys = predicts.map(x => x["id"])
                if (ys != null) {
                    console.log('ys: ', ys)
                }
                setResultData(ys)
            })
            .catch((error) => {
                const msg = "Error getting data" + error
                console.error(msg)
            });
        */
        const ys = 2
        setResultData(ys)      
    }

    return (
       <div>
            <input 
            type="text" 
            name="param1" 
            onChange={handleFormInput} 
            placeholder="Parameter1" 
            value={formData.param1}/>
            <br/>

            <input 
            type="text" 
            name="param2" 
            onChange={handleFormInput} 
            placeholder="Parameter2" 
            value={formData.param2}/>
            <br/>

            <input 
            type="text" 
            name="result" 
            placeholder="Result" 
            value={resultData}/>
            <br/>            

            <button onClick={handleSubmit}>Submit</button> 
            {/* <button onClick={handleDebugSubmit}>Submit</button> */}
        </div>
    );
}

export default SimpleForm;
