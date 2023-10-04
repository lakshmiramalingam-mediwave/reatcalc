
import { useState } from "react";
function Calc() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);
  const performAddition = () => {
    setResult(numberOne + numberTwo);
  };
  const performSubtraction = () => {
    setResult(numberOne - numberTwo);
  };
  const performMultiplication = () => {
    setResult(numberOne * numberTwo);
  };
  const performDivision = () => {
    if (numberTwo !== 0) {
      setResult(numberOne / numberTwo);
    } else {
      
      setResult(0);
    }
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="input-numbers">
        <input
          type="number"
          placeholder=""
          value={numberOne}
          onChange={(e) => setNumberOne(+e.target.value)}
        />
        <input
          type="number"
          placeholder=""
          value={numberTwo}
          onChange={(e) => setNumberTwo(+e.target.value)}
        />
      </div>
      <button onClick={performAddition}>Add</button>
      <button onClick={performSubtraction}>Subtract</button>
      <button onClick={performMultiplication}>Multiply</button>
      <button onClick={performDivision}>Divide</button>
      <h2>Total: {result}</h2>
    </div>
  );
}
export default Calc;










