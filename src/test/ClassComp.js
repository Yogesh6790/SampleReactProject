import React, { Component } from 'react';

class ClassComp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            currentTime: '',
            inputText: '',
            inputNum: 0,
            inputEmail: '',
            inputPwd: '',
            inputRadio1: true,
            inputRadio2: false,
            inputCheckbox1: true,
            inputCheckbox2: false,
            inputDropdown: 'value1',
            hide: true
        };
        this.myRef = React.createRef();
        this.inputChangeHandler.bind(this);
    }

    // 1- CREATE LIFECYCLE, UPDATE LIFECYCLE
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state)
        //Rare use cases - where you have to set state based on props
        //and return state f=ore sure
    }

    //2- CREATE LIFECYCLE
    componentDidMount() {
        console.log('componentDidMount');
        //executed after the render
        this.interval = setInterval(() => {
            this.setState(state => ({
                seconds: state.seconds + 1,
                currentTime : new Date().toLocaleTimeString()
            }))
        }, 1000)
    }

    //2. UPDATE LIFECYCLE
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState)
        //should return either true or false
        return true;
    }

    //3. UPDATE LIFECYCLE
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState)
        return 1; //returning this just to check if componentDidUpdate received it
    }

    // //4. UPDATE LIFECYCLE
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', snapshot)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    inputChangeHandler(target) {
        console.log('target is ' + target);
        console.log('value is ' + target.value);
        const name = target.name;
        const radioAndCheckBox = ['inputRadio1', 'inputRadio2', 'inputCheckbox1', 'inputCheckbox2'];
        if (!radioAndCheckBox.includes(name)) {
            this.setState({
                [name]: target.value
            });
        } else {
            if (name === 'inputRadio1' || name === 'inputRadio2') {
                this.setState(state => ({
                    inputRadio1: !state.inputRadio1,
                    inputRadio2: !state.inputRadio2
                }))
            } else {
                this.setState(state => ({
                    inputCheckbox1: !state.inputCheckbox1,
                    inputCheckbox2: !state.inputCheckbox2
                }))
            }
        }

        
    }

    formSubmitHandler(event) {
        event.preventDefault();
        console.log('Input text is', this.state.inputText);
        console.log('Input Number is', this.state.inputNum);
        console.log('Input Password is', this.state.inputPwd);
        console.log('Input Email is', this.state.inputEmail);
        console.log('Input Radio is', this.state.inputRadio1 && !this.state.inputRadio2 ? 'Radio 1' : 'Radio 2');
        console.log('Input Checkbox is', this.state.inputCheckbox1 && !this.state.inputCheckbox2 ? 'Checkbox 1' : 'Checkbox 2');
        console.log('Input DropDown value is', this.state.inputDropdown === 'value1' ? 'Value 1' : 'Value 2');
    }


    render() {
        return (
            <div>
                <fieldset>
                    <form onSubmit={(event) => this.formSubmitHandler(event)}>
                        <legend>
                            This is a class component
                        </legend>
                        <div style={{backgroundColor: 'yellow'}}>
                            <div>
                                <strong>Seconds </strong> : {this.state.seconds}
                            </div>
                            <div>
                                <strong>Time </strong> : {this.state.currentTime}
                            </div>
                        </div>
                        <div>
                            <label>Text Type Check</label>
                            <input type="text"  name="inputText" onChange={(event) => this.inputChangeHandler(event.target)} value={this.state.inputText} />
                        </div>
                        <div>
                            <label>Number type check</label>
                            <input type="number"  name="inputNum" onChange={(event) => this.inputChangeHandler(event.target)} value={this.state.inputNum} />                    
                        </div>
                        <div>
                            <label>Email type check</label>
                            <input type="email"  name="inputEmail" onChange={(event) => this.inputChangeHandler(event.target)} value={this.state.inputEmail} />                          
                        </div>
                        <div>
                            <label>Password type check</label>
                            <input type="password" name="inputPwd" ref={this.myRef} onChange={(event) => this.inputChangeHandler(event.target)} value={this.state.inputPwd} />
                        </div>
                        <div>
                            <label>Radio button check</label>
                            <input type="radio" name="inputRadio1" onChange={(event) => this.inputChangeHandler(event.target)} checked={this.state.inputRadio1} />
                            <label for="inputRadio1">Radio 1</label>
                            <input type="radio" name="inputRadio2" onChange={(event) => this.inputChangeHandler(event.target)} checked={this.state.inputRadio2} />
                            <label for="inputRadio1">Radio 2</label>
                        </div>
                        <div>
                            <label>Checkbox check</label>
                            <input type="checkbox" name="inputCheckbox1" onChange={(event) => this.inputChangeHandler(event.target)} checked={this.state.inputCheckbox1} />
                            <label for="inputCheckbox1">Checkbox 1</label>
                            <input type="checkbox" name="inputCheckbox2" onChange={(event) => this.inputChangeHandler(event.target)} checked={this.state.inputCheckbox2} />
                            <label for="inputCheckbox2">Checkbox 2</label>                     
                        </div>
                        <div>
                            <label>Dropdown check</label>
                            <select name="inputDropdown" value={this.state.inputDropdown} onChange={(event) => this.inputChangeHandler(event.target)}>
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={(e) => {
                                e.preventDefault();
                                this.setState(state => ({
                                    hide: !state.hide
                                }));
                                if (!this.state.hide) {
                                    this.myRef.current.focus();
                                }
                            }} >HIDE/SHOW</button>
                        </div>
                        <div>
                            <input type="submit" value="SUBMIT" />
                        </div>
                        <div onClick={(e) => { e.preventDefault();alert('working!') }}>
                            Checking Div Click
                        </div>
                        {!this.state.hide && <div>
                            <div>
                                Input Text : {this.state.inputText}
                            </div>
                            <div>
                                Input Number : {this.state.inputNum}
                            </div>
                            <div>
                                Input Email : {this.state.inputEmail}
                            </div>
                            <div>
                                Input Password : {this.state.inputPwd}
                            </div>
                            <div>
                                Input Radio : {this.state.inputRadio1 && !this.state.inputRadio2 ? 'Radio 1' : 'Radio 2'}
                            </div>
                            <div>
                                Input Checkbox : {this.state.inputCheckbox1 && !this.state.inputCheckbox2 ? 'Checkbox 1' : 'Checkbox 2'}
                            </div>
                            <div>
                                Input Dropdown : {this.state.inputDropdown === 'value1' ? 'Value 1' : 'Value 2'}
                            </div>
                        </div>}
                    </form>
                </fieldset>
            </div>
        );
    }
}


export default ClassComp;