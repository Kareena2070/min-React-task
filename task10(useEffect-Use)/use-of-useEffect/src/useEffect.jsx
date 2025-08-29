import { useState } from "react";
import { useEffect } from "react";

function LevelOneOfUseEfeect(){
    const [count, setCount] = useState(0)

    function add(){
        setCount(count+1)
    }

    useEffect(()=>{
        console.log("Rendered")
    }, )
    useEffect(()=>{
        console.log("Hello, first render!")
    }, [])
 return(
    <div>
            <p>count: {count}</p>
            <button onClick={add}>add</button>
    </div>
 );
}


function LevelTwoOfUseEffect(){
    const [count, setCount] = useState(0)
    function handleCount(){
        setCount(count+1)
    }

    useEffect(()=>{
        console.log(`Count changed to ${count}`)
    }, [count])

    const [name, setName] = useState("guest")
    const [age, setAge] = useState(0)

    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleAgeChange(e){
        setAge(e.target.value)
    }

    useEffect(()=>{
        console.log(`${name} or ${age} changed`)
    }, [name, age])

    //  level three
    useEffect(()=>{
        document.title = count
    }, [count])

    useEffect(()=>{
        const savedCount = localStorage.getItem("count");
        if (savedCount !== null) {
            setCount(Number(savedCount));
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("count",count)
    },[count])

    return(
        <div>
            <div>
                <h1>Counter: {count} </h1>
                <button onClick={handleCount}>Add</button>
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <input type="text" value={name} onChange={handleNameChange}/>
                <input type="number"value={age} onChange={handleAgeChange} />
            </div>
        </div>
    );
}


function LevelThreeOfUseEffect(){


        const [count, setCount] = useState(() => {
          return Number(localStorage.getItem("count")) || 0;  // restore saved value
        });
      
        useEffect(() => {
          localStorage.setItem("count", count);  // save whenever count changes
        }, [count]);
      
        return (
          <div>
            <p>Kareena</p>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        );
 }
 
      


export  {LevelOneOfUseEfeect,LevelTwoOfUseEffect , LevelThreeOfUseEffect}