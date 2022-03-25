import React, { useState,useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const DisplayProduct= (props) => {

    const navigate = useNavigate()

    const {productList,setProductList} = props;

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products1')
        .then(res=>{
            console.log(res)
            console.log(res.data)
            setProductList(res.data)
        })
        .catch((err)=> console.log(err))
    }, [])

return(
    <div>
        <header>
            All products:
        </header>
        {
            productList.map((products1,index) =>(
                <div key= {index}>
                    <Link to={`/products1/${products1._id}`}>{products1.title}</Link>
                    <Link to={`/products1/update/${products1._id}`}>Edit</Link>
                </div>
            ))
        }
    </div>
)

}

export default DisplayProduct