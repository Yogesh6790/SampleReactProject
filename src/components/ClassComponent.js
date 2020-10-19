import React, { Component } from 'react';

const Component3 = props => {
    return <p>Hello, {props.name}</p>
}

class ClassComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            date: new Date(),
            show: true,
            links : ['Link 1', 'Link 2']
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        //Creating Ref
        this.myRef = React.createRef();
    }

    //UPDATE/ CREATE LIFE CYCLE - 1
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state);
    }

    //UPDATE LIFE CYCLE - 3
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return 1; //returning this just to check if componentDidUpdate received it
    }

    //UPDATE LIFE CYCLE - 2
    shouldComponentUpdate(nextProps, nextState) {
        document.title = 'Yogesh' //example of a side effect
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    //CREATE LIFE CYCLE - 2
    componentDidMount() {
        console.log('componentDidMount', this.state.counter);
        this.interval = setInterval(() => {
           this.setState(state => ({
               counter: state.counter + 1,
               date: new Date()
            }))
        }, 1000);
        this.setState(state => ({
            links : state.links.map(link => <div key={link}><a href="#" onClick={this.handleClick}>{link}</a></div>)
        }))
    }

    //CREATE LIFE CYCLE - 3
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    //Update Life cycle - 4
    componentDidUpdate(prevProps, prevState, snapshot) { //componentDidUpdate(){}
        console.log('componentDidUpdate', snapshot);
    }

    //Normal Function
    handleClick(e) {
        console.log('handleClick -> event is ' + e.target);
        console.log(this.state.show);
    }

    //Arrow Function
    handleClick2 = (e) => {
        e.preventDefault();
        console.log('handleClick2 -> event is ' + e.target);
        console.log(this.state.show);
    }


    render() {
        return (
            <div>
                <h1>Class Component</h1>
                {this.state.show && <div><div>Seconds : {this.state.counter}</div> <div>Time : {this.state.date.toLocaleTimeString()}</div></div>}
                <Component3 name="Sowmiyha in Class Component" />
                <button onClick={() => { this.setState(state => ({ show: !state.show })) }}>Hide Seconds/Time</button>
                {this.state.links}
            </div>
        );
    }
}

export default ClassComponent;