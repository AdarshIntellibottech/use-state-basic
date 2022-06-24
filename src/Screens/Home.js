import React, { useState } from "react";

const Home = () => {

    const [count , setCounter] = useState (0);
    const Increment = () =>
    {
       setCounter(count +1);
       
    
    }
    function Decrement () {
        if(count < 1)
        {
            return
        }
        else
        {
        setCounter(count -1);
        }
    }


    return(
        <>
            <h1 className="zero" style={StyleHome}>{count}</h1>
            <div className="center">
            <button className="btn" onClick={Increment}>Increase</button>
            <button className="btn" onClick={Decrement}>Decrease</button>
            </div>
            
        </>
    );
}

const StyleHome = {
    textAlign : 'center',
   
    

}





export default Home;