import React, { useState} from 'react'
import CreateProduct from '../components/createProduct'
import DisplayProduct from '../components/displayProduct'
import axios from 'axios'


const Main = (props) => {

    const [productList,setProductList] = useState([])

return(
    <div>
        <CreateProduct productList={productList} setProductList={setProductList} />
        <DisplayProduct productList={productList} setProductList={setProductList} />
    </div>
)

}

export default Main