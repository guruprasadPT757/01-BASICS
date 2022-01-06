import React  from "react";


const Header = (props) => {
    
    return (
        
        <header>
            <div className="logo">Header</div>
            <input onChange={props.topic}/>
        </header>

    )
       
}

export default Header;