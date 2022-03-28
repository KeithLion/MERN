import React, {useState, useEffect }from 'react'
import {useNavigate,useParams} from'react-router-dom'
import axios from 'axios'
import Form from './Form'

const navigate = useNavigate()

const UpdateAuthor = (props) =>{

    const {id} =useParams
    const [author,setAuthor] = useState({})
    const [loaded,setLoaded] = useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
    })
        .then(res=> {
            setAuthor(res.data)
            setLoaded(true)
        }, [])
    
    const updateAuthor = authorParams =>{
        useEffect(()=>{
            axios.put(`http://localhost:8000/api/authors/${id}`,
            authorParams)
        })
            .then(res =>{
                console.log(res)
            })
    }

    return (
        <div>
            {

            loaded && <Form oneSubmitProp={updateAuthor} initialFirstName={author.firstName} initialLastName={author.lastName}/>
            }
        </div>
    )
}


export default UpdateAuthor 