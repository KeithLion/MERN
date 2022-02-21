import React, {useState }from 'react';

    
const UserForm = (props) => {


    const {firstName,setFirstName,lastName,setLastName,email,setEmail,password,setPassword,confirmPassword,setConfirmPassword} = props

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError,setConfirmPasswordError] = useState('');
    

    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError('First name is required')
        }
        else{
            setFirstNameError('')
        }
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError('Last name is required')
        }
        else{
            setLastNameError('')
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError('Email is required')
        }
        else{
            setEmailError('')
        }
    }

        const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError('Password is required')
        }
        else{
            setEmailError('')
        }
    }

        const handleConfirmPassword = (e) => {
            setConfirmPassword(e.target.value);
            if (e.target.value !== password) {
                setConfirmPasswordError('Password must match!');
            }
            else{
                setConfirmPasswordError('')
            }
        }

    return(
        <div>
        <form >
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) =>{ console.log(e); handleFirstName(e) }} />
                {firstNameError ? 
                <p>{firstNameError}</p>
                :null
            }
            </div>


            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => {console.log(e); handleLastName(e)} } />
                {
                    lastNameError ? 
                    <p>{lastNameError}</p>
                    : null
                }
            </div>


            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={ (e) => handleEmail(e) } />
                {
                    emailError ?
                    <p>{emailError}</p>
                    : null 
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => handlePassword(e) } />
                {
                    passwordError ?
                    <p>{passwordError}</p>
                    : null
                }
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => handleConfirmPassword(e) } />
                {
                    confirmPasswordError ?
                    <p>{confirmPasswordError}</p>
                    : null
                }
            </div>

        </form>
        </div>
    );
};
    
export default UserForm;