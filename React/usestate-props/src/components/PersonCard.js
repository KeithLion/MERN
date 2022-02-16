import React ,{useState }from 'react';

const Card =(props) => {
    const [age, setAge] = useState(props.age);
    const handleClick = () => setAge(age + 1)
    return(
        <div>
            <h1> {props.lastName}, {props.firstName}</h1>
            <p>Age: { age } </p>
            <p>Hair Color: { props.hairColor } </p>
            <button onClick = {handleClick}> 
            Birthday button for {props.firstName}
            </button>
        </div>
    )
    };

export default Card;