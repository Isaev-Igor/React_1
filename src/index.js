import React from 'react';
import ReactDOM from 'react-dom';


//components
import Clock from "./components/Clock/Clock";


    ReactDOM.render(
        <>
            <Clock name="Петя" age={25} plus={1.25}/>
            <Clock name="Вася" age={25} plus={1.5}/>
            <Clock name="Коля" age={25} plus={1.75}/>
        </>,
        document.getElementById('root')
    );