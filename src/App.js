import './App.css';
import { useState } from "react";
import { SketchPicker } from "react-color";

function App() {
  const [currentColor, setCurrentColor] = useState("#4FDBCC");

  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
  }

  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      <h1 className='title'>Color-Picker Tool</h1>
      <SketchPicker
        color={currentColor}
        onChangeComplete={handleOnChange}
        className="picker"
      />
      <button className='btn'>Color Hex-Code:<span className='hex'> { currentColor } </span></button>
    </div>
  );
}


// npm install react-color
// import SketchPicker from react-color
export default App;
