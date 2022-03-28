import React, {useState,useEffect} from 'react'
import {Link, useNavigate,Route} from 'react-router-dom'
import axios from 'axios'
import Delete from './DeleteButton'
import Form from './Form'

const DisplayAll = (props) =>{
    const [author,setAuthor] = useState([])
    const navigate = useNavigate
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthor(res.data))
    }, [])

    const removeFromDom = authorId=>{
        setAuthor(author.filter(author = author._id !== authorId))
    }

    return(
        <div>
            <Route>
            <p> <Link to= {<Form/>}> Add an author</Link> </p>
            </Route>
            <h1>Favorite Authors</h1>
            {author.map((author,index)=> {
                return(
                    <p key={index}>
                        
                        {author.firstName} {author.lastName}
                        <Link to={`authors/update/${author._id}`}> Edit </Link>
                        <Delete authorId ={author._id} successCallBack = {()=> removeFromDom(author._id)}/>
                </p>
            )
            })}
    </div>
)
}

export default DisplayAll