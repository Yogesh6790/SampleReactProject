import React from 'react'

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        this.setState({ hasError: true });
    }
    
    componentDidCatch(props, error) {
        console.log(error);
    }
    render() {
        if (this.state.hasError) {
            return (
                <p>Some error has e=occured</p>
            );
        }
        return (<div>{this.props.children}</div>);
        
    }
}

export default ErrorBoundary;