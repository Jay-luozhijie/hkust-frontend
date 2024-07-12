import React, { useEffect } from 'react'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {signin} from '../auth/userActions'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function SigninScreen(props){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const redirect = "/adminPage";

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin

    const dispatch = useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(signin(name, password));
    }

    const navigate = useNavigate()
    const {login} = useAuth();

    useEffect(() => {
        if (userInfo) {
            login();
            navigate(redirect);
        }
    }, [userInfo, navigate, redirect, login]);

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
