import React from "react";

const TaskArr = (props) => {
    
return (
    <>
       <button  className="todobtn" onClick={props.onSelect}> X </button>
        <li> {props.text}  </li>
    </>
 
        
);
}

export default TaskArr;

//