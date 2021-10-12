import React, { useEffect } from 'react'
import { Redirect,useHistory } from 'react-router'
import SawoLogin from 'sawo-react'


const LoginPage = () => {
    const history = useHistory()

    function sawoLoginCallback(payload){
        console.log(payload)
        // window.location = '/dashboard'
        history.push({
            pathname: "/dashboard",
            search: `?query=${payload.identifier}`,
            state: {details: payload}
        })
    }
    
    const sawoConfig = {
        onSuccess: sawoLoginCallback, //required,
        identifierType: 'phone_number_sms', //required, must be one of: 'email', 'phone_number_sms',
        apiKey: '47859dd6-6f0e-4417-a58d-8464f8571e1c', // required, get it from sawo dev.sawolabs.com,
        containerHeight: '400px', // the login container height, default is 230px
    }

    return (
        <div style={{width: "400px", margin: "auto", marginTop: "200px"}}>
            <SawoLogin config={sawoConfig}  />
        </div>
    )
}

export default LoginPage