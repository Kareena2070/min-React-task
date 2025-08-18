

import { useState } from "react";


function Counter(){
    const [count, setCount] = useState(0);

    let message;
    if (count === 0) {
    message = "Start clicking 🚀";
    } else {
    message = `You clicked ${count} times`;
    }

    const [text, setText] = useState("")

    return(
        <>
        <div className="task">
            <h2 className="count-heading">Count: {count}</h2>
            <p className="message">{message}</p>
            <div className="btn">
            <button className="btn1" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn1" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="btn1" onClick={()=> setCount(0)}>Reset</button>
            </div>
        </div>

        <div  className="task">
          
          <input  className="input" value={text} onChange={(event)=> setText(event.target.value)}/>
          <p className="text">shows typed text live: </p>
          <div className="inputText">{text}</div>

        </div>

        </>
    );

}

export default Counter