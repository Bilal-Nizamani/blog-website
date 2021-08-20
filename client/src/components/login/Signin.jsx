import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { login } from '../../service/api';



const initial = {
    email: "",
    password: ""
}

function Signin() {
    const [userlogin, setUserlogin] = useState(initial);


    const inputEvent = (e) => {
        const { name, value } = e.target;

        setUserlogin({...userlogin, [name]:value})

    }

    const sendData = async () => {

        await login(userlogin);    

    }

    return (
        <div>
            <h1>
                Signin
            </h1>
            <div style={{ display: 'flex', width: "50%", alignItems: "center", justifyContent: "center", flexDirection: "column", margin: "3rem auto" }}>

                <input onChange={inputEvent} value={userlogin.email} name="email" type="text" placeholder="Email" />
                <input onChange={inputEvent} value={userlogin.password} name="password" type="password" placeholder="password" />

                <button onClick={sendData}> Login</button>


                <NavLink to="/signup">Registere Account</NavLink>


            </div>


        </div>
    )
}

export default Signin
