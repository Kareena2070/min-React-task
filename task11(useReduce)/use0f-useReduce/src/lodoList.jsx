
import { useState } from "react";
import { useReducer } from "react";

function helper(state, action){
    

    switch (action.type){
        case "done":
            return state.map((task, i) =>
                i === action.payload ? {...task, done: !task.done} : task
              );
        case "delete":
            return state.filter((_, i) => i !== action.payload);
        case "add":
            return [...state, {text: action.payload, done: false}];
        default:
            return state
    }

}


function TodoLIist(){

    const [tasks, dispatch] = useReducer(helper, [])
    const [input, setInput] = useState("");

    function handleInputChange(e){
        setInput(e.target.value)
    }

    return(
        <div>
            <h1>To-Do-List</h1>
            
                <input type="text"  
                placeholder="Enter your task..." 
                value={input}
                onChange={handleInputChange}
                />
                <button onClick={()=> dispatch({type: "add",  payload: input})}>Add</button>

                <ol>
                    {tasks.map((t, id)=>(
                        <li key={id}
                        style={{textDecoration: t.done? "line-through" : "none"}}>
                            {t.text}
                        <button onClick={()=> dispatch({type: "done", payload: id})}  >✅</button>
                        <button onClick={()=> dispatch({type: "delete",  payload: id})} >❌</button>
                        </li>
                        
                    ))}
                </ol>

     
        </div>
    );
}


export default TodoLIist
