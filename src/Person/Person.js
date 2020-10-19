import React,{useState, useEffect} from 'react';

/*
 useState, useEffect
  
*/
const Person = props => {
    const [hobbies, setHobbies] = useState('');
    const [mouseEnter, setMouseEnter] = useState(false);
    let style2 = {backgroundColor: 'white'}
    useEffect(() => {
        console.log('| Person.js | useEffect')
        style2 = { backgroundColor: 'grey' }
    }, [mouseEnter])
    console.log(style2)
    let style = { backgroundColor: 'green' };
    if (mouseEnter) {
        style = { backgroundColor: 'red' };
    }
    console.log('| Person.js | render');
    return (
        <div style={style2}>
            <p>I'm {props.name} and I'm {props.age} years old</p>
            <p>{hobbies}</p>
            <button style={style} onClick={() => { setHobbies('Playing') }} onMouseOver={() => {setMouseEnter(!mouseEnter)}}>Hobbies?</button>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>

    );
}

export default Person;