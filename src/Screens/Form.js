import React, { useState } from "react";

const Form = () => {

    const[currentCounter, setCounter] = useState(0)
    
    //let counter = 0;
    const func = () => {
        const nam = 'adarsh'
        setCounter(currentCounter + 1)
        
       //counter ++ 
       //console.log(counter)

    }
//onChange is a ready event used to track user input
//
    const InputEvent = ( obj) =>{
        console.log(obj.target.value);
    }
return(
<>
    <div>
        <h1>Form welcome page</h1>
        <input className="InputField" type= "text" onChange = {InputEvent} placeholder="Enter you Name"></input>
        <br/>
        <button onClick={func} >Save</button>

        <h3> You pressed save button {currentCounter}  times</h3>
    </div>
</>
);
}

export default Form;