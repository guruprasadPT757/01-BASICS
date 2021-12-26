import React, {Component}  from "react";
import ReactDOM from "react-dom"


class Header extends Component {
    

    onTextChangedHandler(event, parameter) {
        console.log("input event handled..."+ event.target.value + parameter)
    }
    
    render() {

        return (
        
            <header>
                <div>Header</div>
                <input
                    onChange={ (e) => this.onTextChangedHandler(e, "extra data passed") }
                />
            </header>

        )
    }
       
}


export default Header;