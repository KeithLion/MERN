import React, {useState }from 'react';

const userForm = (props) => {
    const {name,setName}= useState('');
    const {email,setEmail} = useState('');
    const {password,setPassword} = useState('');
    
    const createUser = (e) =>{
        e.preventDefault();

        const newUser = {
            name : name,
            email: email,
            password: password
        };
        console.log('welcome', newUser);
    };
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default userForm;
