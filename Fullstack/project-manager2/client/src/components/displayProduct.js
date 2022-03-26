import React, { useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const DisplayProduct= (props) => {



    const {removeFromDom,productList,setProductList} = props;

    const deleteProduct = (productId) =>{
        axios.delete(`http://localhost:8000/api/products1/` + productId)
            .then((res)=>{
                removeFromDom(productId)
            })
            .catch(err=> console.log(err))
    }

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
                    <button onClick={(e)=>{deleteProduct(products1._id)}}>Delete</button>
                </div>
            ))
        }
    </div>
)

}

export default DisplayProduct