import React, {Component} from "react";

import Clock from "../../components/Clock/Clock";

export default class ClockWrapperr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
    }

    toggle() {
        const {show} = this.state;
        this.setState({
            show: !show,
        })
    }


    // render() {
    //     const {show} = this.state;
    //     return (
    //         <>
    //             <button onClick={() => this.toggle()}>Toggle</button>
    //             {show === true
    //                 ? <Clock key={'1'} name="Петя" age={29} plus={10} startDate={'Jule 23, 1992 11:37:00'}/>
    //                 : <Clock key={'2'} name="Вася" age={25} plus={10} startDate={'Jule 15, 2000 11:34:00'}/>
    //             }
    //         </>
    //     )
    // }





    render() {
        return (
            <>
                <Clock name="Коля" age={29} plus={10} startDate={'Jule 23, 1992 11:37:00'}/>
                <Clock name="Петя" age={29} plus={10} startDate={'Jule 23, 1992 11:37:00'}/>
                <Clock name="Вася" age={25} plus={10} startDate={'Jule 15, 2000 11:34:00'}/>
            </>
        )
    }
}






