import React, {Component} from 'react';

export default class Clock extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            newAge: props.age,
            date: new Date(props.startDate)
        }
    }
    componentDidMount() {
        // setInterval(()=> this.tick(), 1000);
        setInterval(()=> this.agePlus(), 1000);
        this.tick();
    }
    tick(){
        const {date} = this.state;
        const newDate = +date + 1000;
        this.setState({
            date: new Date(newDate),
        })
        console.log(new Date(newDate));
    }
    agePlus(){
        const {newAge}=this.state;
        const {plus}=this.props;
        this.setState({
            newAge: newAge + plus,
        })
    };

    removeComponent(){
        this.setState({
            show: false,
        })
    }
    render() {
        const {name} = this.props;
        const {date, newAge, show} = this.state;
        return show
            ? <div>
                <h1>Hello, {name}!</h1>
                <h2>New age: {newAge}</h2>
                <h2>Date: {date.toLocaleString()}</h2>
                <button onClick={()=>this.removeComponent()}>Delete</button>
            </div>
            : null
    }
}
