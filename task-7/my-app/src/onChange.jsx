
import { version } from "react";
import { useState } from "react";
function OnChangePractice(){

    const [name, setName] = useState("Guest")
    function handleNameChange(event){
            setName(event.target.value)
    }

    const [quantity, setQuantity] = useState(0)
    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    const [comment, setComment] = useState("")
    function handleCommentChange(event){
        setComment(event.target.value)
    }

    const [playment, setPlayment] = useState()
    function handlePlaymentChange(event){
        setPlayment(event.target.value)
    }

    const [shipping, setShipping] = useState("")
    function handleShippingChange(event){
        setShipping(event.target.value)
    }




    return(
        <div className="text">
            <div className="input">
                <p>Name: {name}</p>
                <input type="text" value={name} onChange={handleNameChange}/>  
            </div>
            
            <div className="input">
                <p>Quantity: {quantity}</p>
                <input type="number" value={quantity} onChange={handleQuantityChange} />
            </div>

            <div className="input">
                <p>Shipping: {shipping}</p>

                <label >
                    <input type="radio" value="Pick up"
                    checked={shipping === "Pick up"} 
                    onChange={handleShippingChange}/>
                    Pick up
                </label>
                <label >
                    <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange} />
                    Delivery
                </label>
            </div>

            <div className="input">
                <p>Playment mode: {playment}</p>
                <select name="playment"  value={playment} onChange={handlePlaymentChange}> 
                    <option value="">Select one option</option>
                    <option className="input"on value="visa">Visa</option>
                    <option value="UPI">UPI</option>
                    <option value="Debit card">Debit Card</option>
                    <option value="Credit Card">Credit Card</option>
                </select>
            </div>

            <div className="input">
                <p>Feedback: {comment}</p>
                <textarea name="comment" placeholder="Leave your feedback..." value={comment} onChange={handleCommentChange}></textarea>
            </div>
        </div>
    );
}

export default OnChangePractice