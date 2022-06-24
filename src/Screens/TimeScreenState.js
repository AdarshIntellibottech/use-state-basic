import React, { useState } from "react";
import '../'

const TimeScreenState = () => 
{
    
    var time = new Date();
    var currentTime = time.toLocaleTimeString('en-US', { hour: 'numeric',minute:'numeric',second:'numeric', hour12: true })
  
    const [cTime, setcTime] = useState(currentTime)

    const updateTime = () =>{
        var newTime = new Date().toLocaleTimeString();
        setcTime(newTime) 
         console.log(newTime)
        console.log('button clicked')
    }
   
    
    
    return (
        <>
        <h1 className="zero"> welcome {cTime}</h1>
        <div className="center">
        <button onClick={updateTime} className="btn"> Get Time </button>
        </div>

        </>
    );
}

export default TimeScreenState;