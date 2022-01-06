import React from "react";

const UserItem = ({item}) => {

    console.log("UserItem"+item);
        return (
                        <div key ={item.number} className="user_item">
                                <h1>{item.firstName} {item.lastName}</h1>
                                <h3>{item.gender}</h3>
                                <h4>{item.number}</h4>
                        </div>
        )
}

export default UserItem;