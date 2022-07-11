import React, { useState } from "react";


const State = () => {

    const [count, setCount] = useState(0)
    return (

        <div>
            <h1 className='helo'>Hello</h1>
            <h1>This is count:- {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increat</button>

        </div>
    );
}

export default State;