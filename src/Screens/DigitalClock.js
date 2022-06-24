import React, { useState } from "react";
import '../index'

const DigitalClock = () =>
{
    var time = new Date();
    let currentTime = time.toLocaleTimeString();

    const [cTime, setCtime] = useState(currentTime);

    const updateTime = () => {
        var newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
        
    }
    setInterval(updateTime, 1000);
    return(
        <>
            <h1 className="h1">Digital Clock</h1>
            <h1 className="h1"> {cTime}</h1>
            
        </>
    );
}
//set interval is a callback function which allows you to pass a function as a parameter
//set interval (your function name , seconds in mili seconds ) base syntax
export default DigitalClock