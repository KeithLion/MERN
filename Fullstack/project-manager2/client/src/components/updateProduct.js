import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const UpdateProduct= (props) => {

    const {id} = useParams()

    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products1/${id}`)
            .then(res=>{
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch((err)=>console.log(err))
    }, [id])
    const update= (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products1/update/${id}`,
        {
        title,
        price,
        description
    })
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }



return(
    <div>
        <h2>Update Product</h2>
        <form onSubmit={update}>
            <p>
            <label>Title</label>
            <input onChange={(e)=> setTitle(e.target.value)}
            value={title}
            name='title'
            type='text'/>
            </p>
                        <p>
            <label>Price</label>
            <input onChange={(e)=> setPrice(e.target.value)}
            value={price}
            name='price'
            type='number'/>
            </p>
            <p>
            <label>Description</label>
            <input onChange={(e)=> setDescription(e.target.value)}
            value={description}
            name='description'
            type='text'/>
            </p>
            <button>Update</button>
        </form>
    </div>
)

}

export default UpdateProduct