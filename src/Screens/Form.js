import React, { useState } from "react";

const Form = () => {

    const[currentCounter, setCounter] = useState(0)
    const[yourName, setYourName] = useState('')
    const[clickName, setClickName] = useState('')
    
    //let counter = 0;
    const func = () => {
        const nam = 'adarsh'
        setCounter(currentCounter + 1)
       
        setClickName(yourName)

        
        
       //counter ++ 
       //console.log(counter)

    }
//onChange is a ready event used to track user input
//
    const InputEvent = ( obj) =>{
        console.log(obj.target.value);
    
        setYourName(obj.target.value)
    }
return(
<>
    <div>
        <h1>Form welcome page {clickName}</h1>
        <input className="InputField" type= "text" onChange = {InputEvent} placeholder="Enter you Name"></input>
        <br/>
        <button onClick={func} >Save</button>

        <h3> You pressed save button {currentCounter}  times</h3>
    </div>
</>
);
}


export default Form;

// If form tag is used in jsx to make a form then remeber form tag refreshes the page 
//by default to remove that default behaviour event.preventDefault() method is used

//preventDefault method is used to stop the browser from refreshing 

//9 10 11 12 1 2 3 4 5 6 7 8 9
// 12  hour
