import React, {Component} from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAge: props.age,
            date: new Date(props.startDate)
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.intervalID = setInterval(() => {
            this.tick();
            this.agePlus();
        }, 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.intervalID);
    }

    tick() {
        const {date} = this.state;
        const newDate = +date + 1000;
        this.setState({
            date: new Date(newDate),
        })
    }

    agePlus() {
        const {newAge} = this.state;
        const {plus} = this.props;
        this.setState({
            newAge: newAge + plus,
        })
    }


    render() {
        const {name} = this.props;
        const {newAge, date} = this.state;
        return (
            <div>
                <h1>Hello, {name}!</h1>
                <h2>New age: {newAge} </h2>
                <h2>Date: {date.toLocaleString()}</h2>
            </div>
        )
    }
}
