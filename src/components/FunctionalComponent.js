import React, {useState, useEffect, useRef} from 'react';

const Component2 = props => {
    return <p>Hello, {props.name}</p>
}

const FunctionalComponent = props => {
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(new Date());
    const [show, setShow] = useState(true);
    const [textInput, setTextInput] = useState('');
    const [textAreaVal, setTextAreaVal] = useState('');
    const [favColor, setFavColor] = useState('');
    const [travel, setTravel] = useState(true);
    const [phoneNo, setPhoneNo] = useState('');
    const [maleGender, setMaleGender] = useState(true);
    const [femaleGender, setFemaleGender] = useState(false);
    const myRef = useRef();



    useEffect(() => {
        let interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval);
    }, [])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(' ***** Handle Submit ***** ');
        console.log('Text Input : ' + textInput);
        console.log('Text Area : ' + textAreaVal);
        console.log('Fav Color : ' + favColor);
        console.log('Checked? : ' + travel);
        console.log('Phone No : ' + phoneNo);
        console.log('Gender : ' + maleGender && !femaleGender ? 'Male' : 'Female');
    }

    const inputChangeHandler = (event) => {
        event.preventDefault();
        //using ref
        myRef.current.focus();
        console.log(' Handler : ' + event.target.name);
        const target = event.target;
        if (target.name === 'myinput') {
            setTextInput(target.value);
        } else if (target.name === 'mytextarea'){
            setTextAreaVal(target.value);
        } else if (target.name === 'color'){
            setFavColor(target.value);
        } else if (target.name === 'travelcbx') {
            console.log(travel);
            setTravel(!travel);
        } else if (target.name === 'phoneno') {
            console.log(typeof target.value)
            setPhoneNo(target.value);
        } else if (target.name === 'gender') {
            if (target.value === 'male') {
                setMaleGender(true);
                setFemaleGender(false)
            } else {
                setFemaleGender(true);
                setMaleGender(false);
            }
        }
    }

    const checkHandler = () => {
        console.log('Div Clicked!!!!');
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <fieldset>
                <legend>My Form</legend>
                <div>
                    <h1>Functional Component</h1>
                    <label>This is a <strong>label</strong></label>
                    <input type="text" value-="Ref" ref={myRef} />
                    {show && <div><p>Seconds : {seconds}</p>
                        <p>Time is {time.toLocaleTimeString()}</p></div>}
                    <Component2 name="Yogesh in Funtional Component" />
                    <button onClick={() => { setShow(show => !show) }}>Hide/Show</button>
                    {/* Input Chnage */}
                    <div>
                        <input name="myinput" type="text" value={textInput} onChange={(event) => { inputChangeHandler(event) }} />
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <textarea name="mytextarea" value={textAreaVal} onChange={(event) => { inputChangeHandler(event) }}/>
                    </div>
                    <div>
                        <label>
                            Choose your Fav color:
                            <select name="color" value={favColor} onChange={(event) => { inputChangeHandler(event) }}>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="orange">Orange</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            In SG?
                            <input type="checkbox" name="travelcbx" checked={travel} onChange={(event) => {inputChangeHandler(event)}} />
                        </label>
                        <label>
                            Phone Number?
                            <input type="number" name="phoneno" value={phoneNo} onChange={(event) => {inputChangeHandler(event)}} />
                        </label>
                    </div>
                    <div>
                        <input type="radio" name="gender" value="male" onChange={(e) => inputChangeHandler(e)} checked={maleGender}/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" value="female" onChange={(e) => inputChangeHandler(e)} checked={femaleGender}/>
                        <label for="female">Female</label>
                    </div>
                    <div onClick={() => { checkHandler() }} style={{ border : '1px solid green', width: '200px'}}>
                        Click me and check
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <input type="submit" value="Submit" />
                    </div>
                    </div>
            </fieldset>
        </form>
        
    );

}

export default FunctionalComponent;