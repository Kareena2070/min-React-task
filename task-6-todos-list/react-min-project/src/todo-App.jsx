
import { useState } from "react";



function TodoApp(){

    const [task, setTask] = useState([])

    const [inputValue, setInputValue] = useState("")

    function addTaskBtn(){
        if(inputValue.trim() ===""){
            return
        }
        const addTask = {id: Date.now(), text: inputValue, done: false}

        setTask([...task, addTask])
        setInputValue ("")
    
    }



    return(
        <>
        
        <div className="todoList  ">
            <h1 className="haeding">Todo List </h1>
            <div className="inputBtn">
                <input type="text" 
                placeholder="type here.."
                value={inputValue}  
                onChange={(e)=>{setInputValue(e.target.value)}}/>
                <button className="btn btn-primary" onClick={addTaskBtn}>Add task</button>
            </div>
            <ol className="tasks">
                {task.map(t =>{
                    return <li className="task" key={t.id} style={{textDecoration : t.done? "line-through" : "none"}} >
                        {t.text}
                   
                </li>
                })}     
            </ol>
        </div>
    
        
        </>


    );
}

export default TodoApp