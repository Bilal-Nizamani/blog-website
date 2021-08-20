import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { registerUser } from '../../service/api';


const initialstate = {
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: ""
}

function Signup() {

    const [form_data, setForm_data] = useState(initialstate);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setForm_data({ ...form_data, [name]: value })
    }

    const sendData = async (e)=>{
        e.preventDefault();
        const data = form_data;
        await  registerUser(data);
        
    }
  

    return (
        <div>
            <h1>
                Sign up
            </h1>
            <form method="POST" style={{ display: 'flex', width: "50%", alignItems: "center", justifyContent: "center", flexDirection: "column", margin: "3rem auto" }}>
                <input value={form_data.name} name="name" onChange={inputEvent} type="text" placeholder="Name" />
                <input value={form_data.username} name="username" onChange={inputEvent} type="text" placeholder="Username" />
                <input value={form_data.email} name="email" onChange={inputEvent} type="text" placeholder="Email" />
                <input value={form_data.password} name="password" onChange={inputEvent} type="password" placeholder="password" />
                <input value={form_data.cpassword} name="cpassword" onChange={inputEvent} type="password" placeholder="confirm password" />

                <h1> {form_data.name} </h1>

                <button onClick={sendData}> Register</button>

                <NavLink to="/signin">Alreday-registered</NavLink>


            </form>



        </div>
    )
}

export default Signup
