import React, { useState, useTransition } from "react";
import '../index.css'

const EventScreen = () => 
{
    const colorr = "#8e44ad"
    const word = "Events"
    const buttonTxt = "Click me!"
    


    const [currentWord, setWord] = useState(word)
    const [currentColor, setColor] = useState(colorr);
    const [presentColor, setWordColor]= useState()
    const [currentButtonTxt, setButtonTxt] = useState(buttonTxt)
    const [currentButtonColor, setButtonColor] = useState()

    const bgChange = () => {
        console.log("clicked");
        setColor('yellow');
        setWord('EVENTSSSSSSSSSSS')
        setWordColor('red')
        setButtonTxt("ohh you clicked! 😃")
        setButtonColor('green')
    }
   
    return(
            <>
            <div style={{backgroundColor : currentColor}}>
                <h1 style={{backgroundColor: presentColor}}>{currentWord}</h1>
                <button style={{backgroundColor: currentButtonColor}} onClick={bgChange}>{currentButtonTxt}</button>

            </div>
            </>
    );
}

export default EventScreen;