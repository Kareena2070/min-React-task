// import { use } from "react";
import { useState } from "react";




function StateObject(){

    const [car, setCar] = useState({
                                        name: "Toyota",
                                        model: "Corolla",
                                        year: 2023
    })

    function handleNameChange(event){
        setCar({...car, name: event.target.value})
    }
    function handleModelChange(event){
        setCar({...car, model: event.target.value})
    }

    function handleYearChange(event){
        setCar({...car, year: event.target.value})
    }

    return(
            <div className="box">
                <h1>Your favorite car is {car.name}, {car.model}, {car.year}</h1>
                <div>
                    <input className="inputBox" type="text" value={car.name} onChange={handleNameChange} /> <br /> 
                    <input className="inputBox" type="text" value={car.model} onChange={handleModelChange} /> <br /> 
                    <input className="inputBox" type="number" value={car.year} onChange={handleYearChange} /> <br /> 
                </div>
            </div>
    );
}



export default StateObject

