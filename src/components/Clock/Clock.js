import React, {Component} from 'react';

export default class Clock extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            newAge: props.age,
            date: new Date()
        }
    }
    componentDidMount() {
        setInterval(()=> this.tick(), 1000);
        setInterval(()=> this.agePlus(), 1000);
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    agePlus(){
        const {newAge}=this.state;
        const {plus}=this.props;
        this.setState({
            newAge: newAge + plus,
        })
    };

    render() {
        const {name} = this.props;
        const {date} = this.state;
        const {newAge} = this.state;
        return (
            <div>
                <h1>Hello, {name}!</h1>
                <h2>New age: {newAge}</h2>
                <h2>It is {date.toLocaleString()}</h2>
            </div>
        );
    }
}
