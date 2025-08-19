import { useState } from "react";
import { useEffect } from "react";



function CurrentDateTime(){

    const [time, setTime] = useState(Date.now())

    useEffect(()=>{
        
        const timer = setInterval(()=>{
            setTime(Date.now())
        }, 1000);

        return ()=>{
            clearInterval(timer)
        }

    }, [])

    return(
        <>
        
        <div>
            <h1>Current Date and Time</h1>
            <p>Date: {new Date(time).toLocaleDateString()}</p>
            <p>Time: {new Date(time).toLocaleTimeString()}</p>
        </div>

        </>
    );
}

export default CurrentDateTime