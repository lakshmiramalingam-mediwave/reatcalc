
// import { useState } from "react";

// function Message(){
//     const [firstName, setFirstName] = useState('');
//     const [secondName, setSecondName] = useState('');
//     const [ButtonName, setButtonName] = useState('');


    
//     return <div className="totaldiv">
//         <div className="input-values">
//         <label htmlFor="first-value">ENTER THE FIRST NUMBER</label>
//         <input 
//         type="number" 
//         name="first-value"
//          id="first-value"
//          value={firstName}
//          onChange={e => setFirstName(e.target.value)}/>

//         <label htmlFor="second-value">ENTER THE SECOND NUMBER</label>
//         <input 
//         type="number"
//          name="second-value" 
//          id="second-value"
//          value={secondName}
//          onChange={e => setSecondName(e.target.value)}/> 
//         </div>
//         <div className="button ">
//         <button id="add">Add</button>
//         <button id="sub">Sub</button>
//         <button id="mul">Mul</button>
//         <button id="divide">Divide</button>
//         {/* value={ButtonName}
//          onChange={e => setButtonName(e.target.value)} */}
//         </div>
        
//     </div>
// }
// export default Message;






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












