import { useState } from "react";
import BoxColor from "./BoxColor";
import InputColor from "./InputColor";
import ToggleTextColor from "./ToggleTextColor";

function App() {
  const toHex = require('colornames');
  const [color, setColor] = useState('white');
  const handleValue = (value) => {
    value.length? setColor(value.toLowerCase()) : setColor('white')
  }
  const [isDarkText, setIsDarkText] = useState(false);
  return (
    <div className="App">
      <BoxColor color={color} isDarkText={isDarkText} toHex={toHex} />
      <InputColor handleValue={handleValue} />
      <ToggleTextColor isDarkText={isDarkText} setIsDarkText={setIsDarkText}/>
    </div>
  );
}

export default App;
