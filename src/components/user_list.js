import React from "react";
import UserItem from "./user_item_list";

const userList = (props) => {

    console.log(props.users);
    return (
        <div>
            {
                props.users.map((item) => {
                    return (
                        <UserItem item = {item} />
                )
    
                })
            }
            {props.children}
        </div>
    )
}

export default userList;