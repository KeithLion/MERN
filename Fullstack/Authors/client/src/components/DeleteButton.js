import React from 'react'
import axios from 'axios'


const Delete = (props) =>{
    const {authorId, successCallBack} = props
    const deleteAuthor = e =>{
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res=>{
                successCallBack()
            })
    }

    return(
        <div>
            <button onClick={deleteAuthor}> Delete </button>
        </div>
    )
}
export default Delete