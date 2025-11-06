import { useState, useEffect } from 'react'
import './index.css'


function App() {
  const [inputValue, setInputValue] = useState(20);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    if (inputValue >= 0 && inputValue <= 100) {
      setProgress(inputValue);
    }
  }, [inputValue]);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 100) {
      setInputValue(value);
    }
  };

  const handleReset = () => {
    setInputValue(0);
    setProgress(0);
  };

  return (
    <div >
      <h2 >Input-Based Progress Bar</h2>

      {/* Input Field */}
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        min="0"
        max="100"
        
      />

      {/* Progress Bar Container */}
      <div style={{height: '30px', width: '100%', border: '1px solid #000', marginTop: '20px'   }}>
        <div
          style={{ width: `${progress}%`, height: '100%', backgroundColor: 'lightblue', textAlign: 'center', lineHeight: '30px', marginBottom: '10px'  }}
        >
          {progress}%
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}


export default App
