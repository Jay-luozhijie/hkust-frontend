import React from 'react'
import { useState } from 'react';

export default function SigninScreen(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="name">username</label>
                    <input type="name" id="name" placeholder = "Enter username" required
                    onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" placeholder = "Enter password" required
                    onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}