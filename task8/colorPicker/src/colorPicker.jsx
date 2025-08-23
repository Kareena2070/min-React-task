import { useState } from "react";



function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");
    
    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div style={{padding: "2rem 5rem 6rem", border: "10px solid black", borderRadius: "1rem"}}>
            <h1>Color Picker </h1>
            <div style={{alignItems: "center", marginBottom: "15px"}}>
                <h3>Selected Color: <p style={{display: "inline"}}>{color}</p></h3>
                <div style={{backgroundColor: color, height: "120px", width: "400px", border: "1px solid gray", borderRadius: "2rem"}}></div>
            </div>
            <label >Select a color: </label>
            <br />
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}
export default ColorPicker