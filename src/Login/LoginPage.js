import React from 'react';
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import './LoginPage.css';

function UserLogin(){

    let [userid, setUserId] = useState(0);
    let [password, setpassword] = useState(0);
    
    let handleId = (event) => {
        setUserId(event.target.value);
    }
    let handlePassword = (event) => {
        setpassword(event.target.value);
    }

    let formHandle = () => {
            const cust = {id : parseInt(userid), name : "null",
            password : password, phn : "null",
            email : "null", address : "bull", wallet : "null" }
            console.log(cust)
    }
            
    return(
            <div className = "user-login-root" >
                <div className='header-form'>
                    <h3 className='header'>Sign In</h3>
                    <form className='login-form'>
                        <input type="text"  placeholder = "Username" class="form-control"
                        onChange = {(event)=> handleId(event)}/>
                        <input type="password"  placeholder = "Password" class="form-control"
                        onChange = {(event)=> handlePassword(event)} />
                        <Button type="button" onClick= {()=> formHandle()} className="btn btn-secondary">Login</Button>
                        <Button type="button" onClick= {()=> formHandle()} className="btn btn-success">Register</Button>
                    </form>
                </div>
                <div>
                    <h2 className="page-name">revleft blog</h2>
                    <h2 className="page-bio">A place to dive into anything!</h2>
                </div>
            </div>
        );

}
export default UserLogin