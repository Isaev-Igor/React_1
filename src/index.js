import React from 'react';
import ReactDOM from 'react-dom';


//components
import Clock from "./components/Clock/Clock";
import Greetion from "./components/Greetion/Greetion";


    ReactDOM.render(
        <>

            {/*<Greetion />*/}
            <Clock name="Петя" age={25} plus={10} startDate={'Jule 23, 1992 11:37:00'}/>
            <Clock name="Вася" age={25} plus={10} startDate={'Jule 15, 2000 11:34:00'}/>
        </>,
        document.getElementById('root')
    );