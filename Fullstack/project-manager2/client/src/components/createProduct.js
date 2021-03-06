import React, { useState} from 'react'
import axios from 'axios'

const CreateProduct= (props) => {

    const {productList,setProductList} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('')

    const submitHandler =(e) =>{
        e.preventDefault()
        
        axios.post('http://localhost:8000/api/products1', 
        {
            title,
            price,
            description
        })
        .then((res)=>{
            console.log(res.data);
            setProductList([...productList, res.data])
            setTitle('')
            setPrice('')
            setDescription('')
        })
        .catch((err)=>console.log(err))
    }


return(
    <div>
        <header>
        Project Manager 
        </header>
        <form onSubmit={submitHandler}>
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


    <button>Create Products</button>
        </form>
    </div>
)

}

export default CreateProduct