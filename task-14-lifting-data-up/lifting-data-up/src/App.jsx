import { useState } from "react";
// import InputName from "./InputName";
// import Greeting from "./Greeting";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Lifting State Up Example</h1>
//       <InputName name={name} setName={setName} />
//       <Greeting name={name} />
//     </div>
//   );
// }

// export default App;


function CelsiusInput() {
  const [temp, setTemp] = useState("");
  return <input value={temp} onChange={e => setTemp(e.target.value)} />;
}

function FahrenheitInput() {
  const [temp, setTemp] = useState("");
  return <input value={temp} onChange={e => setTemp(e.target.value)} />;
}

function App() {
  return (
    <div>
      <CelsiusInput />
      <FahrenheitInput />
    </div>
  );
}

export default App;