import React, { useState } from "react";
import axios from "axios";

const GetCatFact = ()=> {
    const[currentFact, setFact] = useState("")

    const getFact = () =>
    {
        axios.get("https://catfact.ninja/fact" ).then ((Response) => {
            console.log(Response);
            setFact(Response.data.fact)
        } )
    }
    return (
        <>
            <h1>Cat fact screen</h1>
            <button onClick={getFact}>Get Fact</button>
            <h3>{currentFact}</h3>
        </>
    );
}

export default GetCatFact;
