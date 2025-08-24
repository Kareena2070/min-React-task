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





function StateArray(){


    const [foods, setFoods] = useState(["apple", "mango", "banana"])
 
 
    function handleAddFood(){
 
 
        const newfood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""
 
 
        setFoods([...foods, newfood])
    }
 
 
    function handleRemoveFood(id){
        // setFoods(foods.filter(()=> id!=id))      // this will remove all li becuase
 
 
        setFoods(foods.filter((_, i)=> i!=id))
    }
 
 
 
 
    return(
        <div className="box">
            <h1>List of Food</h1>
            <ul>
                {foods.map((food, id)=>(
                    <li key={id} onClick={()=>handleRemoveFood(id)}>
                        {food}
                        </li>
                ))}
            </ul>
 
 
            <input className="inputBox" type="text"  id="foodInput" value={foods.food}  /> <br />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
 }
 



 
 function ListOfCar(){


    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")
 
 
    function handleAdd(){
 
 
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
       
        setCars([...cars, newCar])
       
        setCarYear(new Date().getFullYear())
        // setCarYear("")
        setCarMake("")
        setCarModel("")
 
 
 
 
    }
 
 
    function handleRemove(id){
        setCars(cars.filter((_, i)=>i!==id))
    }
 
 
    function handleCarYear(e){
        setCarYear(e.target.value)
 
 
    }
    function handleCarMake(e){
        setCarMake(e.target.value)
 
 
    }
    function handleCarModel(e){
        setCarModel(e.target.value)
 
 
    }
 
 
    return(
        <div className="box">
            <h1>List of car object</h1>
            <ul>
                {cars.map((car, id)=>(
                    <li key={id} onClick={() => handleRemove(id)}>{car.year} {car.make} {car.model}</li>
                ))}
            </ul>
           
                <input className="inputBox" type="number" value={carYear} onChange={handleCarYear}/> <br />
                <input className="inputBox" type="text" value={carMake} onChange={handleCarMake} /> <br />
                <input className="inputBox" type="text" value={carModel} onChange={handleCarModel} /> <br />
 
 
                <button onClick={handleAdd}>Add Car</button>
        </div>
    );
 }
 

 
 
 export {StateObject, StateArray, ListOfCar}
 
 
