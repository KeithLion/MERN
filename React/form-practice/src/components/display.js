import React, {useState} from 'react';

const Display = (props) => {
    const {firstName,setFirstName,lastName,setLastName,email,setEmail,password,setPassword,confirmPassword,setConfirmPassword} = props
    return (
        <div>
            <p>Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            {/* <p>{confirmPassword}</p> */}
        </div>
    )
}

export default Display