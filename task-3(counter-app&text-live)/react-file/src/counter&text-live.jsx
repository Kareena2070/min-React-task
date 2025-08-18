

import { useState } from "react";


function Counter(){
    const [count, setCount] = useState(0);


    return(
        <>
        <div className="task">
            <h2 className="count-heading">Count: {count}</h2>
            <div className="btn">
            <button className="btn1" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn1" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="btn1" onClick={()=> setCount(0)}>Reset</button>
            </div>
        </div>

        </>
    );

}

export default Counter