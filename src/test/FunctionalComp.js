import React , {useState, useEffect, useRef} from 'react';
import './test.css'
const FunctionalComp = () => {
    const [inputText, setInputText] = useState('');
    const [inputNum, setInputNum] = useState(0);
    const [inputPwd, setInputPwd] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputRad1, setInputRad1] = useState(true);
    const [inputRad2, setInputRad2] = useState(false);
    const [inputDropdown, setInputDropdown] = useState('value1');
    const [inputCheckbox, setInputCheckBox] = useState(false);
    const [hide, setHide] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [currentTime, setCurrentTime] = useState('');
    const myRef = useRef();

    useEffect(() => {
        let interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000);

        return () => clearInterval(interval);
    },[])

    const inputChangeHandler = target => {
        console.log('target is', target.name);
        console.log('value is', target.value);
        if (target.name == 'textinp') {
            setInputText(target.value);
        } else if (target.name == 'numberinp') {
            setInputNum(target.value);
        }else if (target.name == 'passwordinp') {
            setInputPwd(target.value);
        }else if (target.name == 'emailinp') {
            setInputEmail(target.value);
        }else if (target.name == 'radio1') {
            setInputRad1(true);
            setInputRad2(false);
        }else if (target.name == 'radio2') {
            setInputRad1(false);
            setInputRad2(true);
        } else if (target.name == 'inputdrpdwn') {
            setInputDropdown(target.value);
        } else if (target.name == 'cbx1') {
            setInputCheckBox(inputCheckbox => !inputCheckbox);
        }
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        console.log('Input text is', inputText);
        console.log('Input Number is', inputNum);
        console.log('Input Password is', inputPwd);
        console.log('Input Email is', inputEmail);
        console.log('Input Radio is', inputRad1 && !inputRad2 ? 'Radio 1' : 'Radio 2');
        console.log('Input Checkbox is', inputCheckbox ? 'Checked' : 'Not Checked');
        console.log('Input DropDown value is', inputDropdown);

    }
    return (
        <form onSubmit={(event) => formSubmitHandler(event)}>
            <fieldset>
                <legend>
                    <strong>This is a test Functional Component</strong>
                </legend>
            <div>
                    <div>
                    <strong>Runtime</strong> : {seconds} seconds
                    </div>
                    <div>
                    <strong>Time </strong> : {currentTime}
                    </div>  
            </div>
            <div style={{backgroundColor: '#ebd534', margin: '10px'}}>
                <label> Checking input text</label>
                    <input type="text" name="textinp" onChange={(event) => inputChangeHandler(event.target)} value={inputText}/>              
            </div>
            <div className="test">
                <label> Checking input number</label>
                    <input type="number" name="numberinp" ref={myRef} onChange={(event) => inputChangeHandler(event.target)} value={inputNum}/>              
            </div>
            <div>
                <label> Checking input password</label>
                <input type="password" name="passwordinp" onChange={(event) => inputChangeHandler(event.target)} value={inputPwd}/>              
            </div>
            <div>
                <label> Checking input email</label>
                <input type="email" name="emailinp" onChange={(event) => inputChangeHandler(event.target)} value={inputEmail}/>              
            </div>
            <div>
                <h1>This is radio button check</h1>
                <input type="radio" name="radio1" checked={inputRad1} onChange={(event) => inputChangeHandler(event.target)}/>
                <label for="radio1">Radio 1</label>
                <input type="radio" name="radio2" checked={inputRad2} onChange={(event) => inputChangeHandler(event.target)}/>
                <label for="radio2">Radio 2</label>
            </div>
            <div>
                 <input type="checkbox" name="cbx1" checked={inputCheckbox} onChange={(event) => inputChangeHandler(event.target)} /> Check box   
            </div>    
            <div>
                <h2>This is a dropdown</h2>
                <select name="inputdrpdwn" value={inputDropdown} onChange={(event) => inputChangeHandler(event.target)}>
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                </select>
            </div>
            <div>
                <span>This is just a button check for Show/Hide</span>
                    <button onClick={() => {
                        setHide(hide => !hide);
                        if (!hide) {
                            myRef.current.focus();
                        }
                }}>HIDE/SHOW</button>
            </div>
            <div>
                <label> Checking input email</label>
                <input type="submit" name="SUBMIT"/>              
            </div>
            <div onClick={() => alert('Div click working!')}>
                    Checking Div Click
            </div>   
            {hide && <div>
                <strong>SHOWING</strong>
                <div>
                    Input Text : {inputText}
                </div>
                <div>
                    Input Number : {inputNum}
                </div>
                <div>
                    Input Password : {inputPwd}
                </div>
                <div>
                    Input Email : {inputEmail}
                </div>
                <div>
                    Input Radio : {inputRad1 && !inputRad2 ? 'Radio 1' : 'Radio 2'}
                </div>
                <div>
                    Checkbox : {inputCheckbox ? 'checked' : 'not checked'}
                </div>
                <div>
                    Dropdown : {inputDropdown == 'value1' ? 'Value 1' : 'Value 2'}
                </div>
            </div>}
            </fieldset>
                
        </form>
    );
}


export default FunctionalComp;