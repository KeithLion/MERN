import axios from 'axios'
import React, {useState} from 'react'


const Form = (props) => {
const {author,setAuthors} = props
const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')


const onSubmitHandler = e =>{
    e.preventDefault()
    axios.post(`http://localhost:8000/api/authors`,{
        firstName,
        lastName
    })
        .then((res)=>{
            setAuthors([...author,res.data])
            setFirstName('')
            setLastName('')
        })
        .catch(err=>console.log(err))

}



    return(
        <div> 
            <header>Form Page</header>
        <form onSubmit={onSubmitHandler}>

                <p>
            <label>First Name</label>
            <input onChange={(e)=> setFirstName(e.target.value)}
            value={firstName}
            name='firstName'
            type='text'/>
            </p>
            <p>
            <label>Last Name</label>
            <input onChange={(e)=> setLastName(e.target.value)}
            value={lastName}
            name='lastName'
            type='text'/>
            </p>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form