import React, { useState } from 'react'
import "./css/Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from "./firebase";


function Login() {
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    };

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className='login__container'>
                <h1>Accedi</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange=
                        {e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type='submit'
                        onClick={signIn}
                        className='login__signInButton'>Sign in</button>
                </form>
                <p>Accedendo, acetti i termini e condizioni di Amazon-Clone a rubarti i dati e rivenderli a terzi per scopi puramenti di lucro senza considerare la tua persona e trattandoti come la merce che Amazon-Clone Inc. vende ;) .</p>
                <button onClick={register}
                    className='login__registerButton'>Crea il tuo account Amazon</button>
            </div>

        </div>
    )
}

export default Login