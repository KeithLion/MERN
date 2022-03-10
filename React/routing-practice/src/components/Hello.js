import React from 'react'

const Hello= (props) =>{
    const { word, fontColor, backgroundColor } = props
    if (isNaN(word)){

        
        return (
            <h1 style={{color: fontColor, backgroundColor}}>The word is: {word}</h1>
            );
        }else{
            return <h1>The Number is: {word}</h1> 
            }
        
}

export default Hello