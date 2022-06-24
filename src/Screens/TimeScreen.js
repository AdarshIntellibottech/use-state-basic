import React from "react";

const TimeScreen = () => 
{
    var time = new Date();

    const Reload = () => {
        window.location.reload(true);
    }
    
    let currentTime = time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric',second:'numeric', hour12: true })
  
    return (
        <>
        <h1 className="zero"> welcome {currentTime}</h1>
        <div className="center">
        
        <button onClick={Reload} className="btn ">click here to refresh</button>
        </div>
        </>
    );
}

export default TimeScreen;