import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayAll from '../components/DisplayAll'
import Form from '../components/Form'



const Main = () =>{
    const [authorList,setAuthorList] = useState('')
    useEffect(() =>{
        axios.get('http://localhost/api/author')
            .then(res =>{
                setAuthorList(res.data)
            })
            .catch(err=>console.log(err))
    }, [])

    const removeFromDom = AuthorId =>{
        axios.delete(`http://localhost/api/authors/${AuthorId}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setAuthorList(authorList.filter(author=> author._id !== AuthorId))
            })
            .catch(err=>console.log(err))
    }

    const createAuthor = authorParams => {
        axios.post(`http://localhost:8000/api/authors`, authorParams)
            .then(res =>{
                console.log(res)
                console.log(res.data)
                setAuthorList([...authorList,res.data])
            })
            .catch(err=>console.log(err))
    }



return(
    <div>
        {/* <Form onSubmitProp={createAuthor} initialFirstName='' initialLastName=''/> */}
        <DisplayAll authorList={authorList} removeFromDom={removeFromDom}/>
    </div>
)
}

export default Main