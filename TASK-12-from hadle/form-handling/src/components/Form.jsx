import { useState } from "react"
function Form(){
    const [useName, setUseName] = useState('')
    
      const submitHandler = (e) => {
        e.preventDefault()
        console.log('Form Data Submitted:', useName)
        setUseName('')
      }
      return (
        <div>
          <h1>Form Handing</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={useName}
                  onChange={(e) => setUseName(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
          
        </div>
      )
}

export default Form