import { useState } from 'react'


// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   })
  
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value
//     })
//   }
  
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form Data Submitted:', formData)
//     setFormData({
//       name: '',
//       email: '',
//       password: ''
//     })
//   } 
//   return (
//     <>
//       <h1>Form Handling Example</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input  
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Email:
//             <input  
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password:
//             <input  
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form> 
//     </>
//   )
// }

// export default App




import Form from './components/Form'

function App() {
  
  
  return (

    <>
     <Form />

    </>
   
    
  );
}

export default App