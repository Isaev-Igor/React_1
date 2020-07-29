import React, {Component} from "react";
import GuestGreetion from "./GuestGreetion";
import UserGreetion from "./UserGreetion";

export default class Greetion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUser: true,
            color: 'green',
        }
    }
    getColor(){
        this.setState({
            color: "red",
        })
    }





    toggleShowType(){
        const {showUser} = this.state
        this.setState({
            showUser: !showUser,
        })
    }


    render(){
        const {showUser, color} = this.state;
        return (
            <>
            <button
                style={{
                color:color
            }}
                    onClick={()=> {
                this.toggleShowType();
                this.getColor();
            }}>Toggle</button>
                {showUser ? <UserGreetion /> : <GuestGreetion />}
            </>
        )
    }

}