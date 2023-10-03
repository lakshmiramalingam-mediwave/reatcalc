
import { useState } from "react";

function Message(){
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [ButtonName, setButtonName] = useState('');


    
    return <div className="totaldiv">
        <div className="input-values">
        <label htmlFor="first-value">ENTER THE FIRST NUMBER</label>
        <input 
        type="number" 
        name="first-value"
         id="first-value"
         value={firstName}
         onChange={e => setFirstName(e.target.value)}/>

        <label htmlFor="second-value">ENTER THE SECOND NUMBER</label>
        <input 
        type="number"
         name="second-value" 
         id="second-value"
         value={secondName}
         onChange={e => setSecondName(e.target.value)}/> 
        </div>
        <div className="button ">
        <button id="add">Add</button>
        <button id="sub">Sub</button>
        <button id="mul">Mul</button>
        <button id="divide">Divide</button>
        {/* value={ButtonName}
         onChange={e => setButtonName(e.target.value)} */}
        </div>
        
    </div>
}
export default Message;