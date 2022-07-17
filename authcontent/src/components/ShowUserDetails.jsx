import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contents/Authcontext';

export default function ShowUserDetails() {
    const { token, settoken, handleLogin } = useContext(AuthContext);


    return (
        token ?
            <div>
                <h3>UserStatus : true</h3>
                <p>User Token : {token}</p>
            </div> :
            <p>User Not exist</p>
    )
}
