import React from "react";

let user = {
    isLoggin: true
}
const Test = (props) => {

    return user.isLoggin ?
        (<h1>My Test For Components {props.name}</h1>) : (
            <h1>Else</h1>
        )
    {

    }
}

export default Test;