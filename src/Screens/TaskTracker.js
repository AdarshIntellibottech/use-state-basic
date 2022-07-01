import React, { useState } from "react";
import TaskArr from "../Components/TaskArr";


const TaskTracker = () => {

    const [task, setTask] = useState('')
    const [taskarr, setTastArr] = useState([])
    const [newcState, setnewcState] = useState ('')

    const inputEvent = (event) => {
        console.log(event.target.value);
        setTask (event.target.value)
    }

   

    const listOfItems = () => {
        
        
        setTastArr((oldItems)=>{

            console.log(taskarr)
            return[...oldItems,task]
            

        })
        
        
    }

    const deleted = () => {
        console.log("deleted");
    }
    //declared a method to delete items

    return (
        <>
            <div className="main_div">

            
            <div className="center_div">
            
                <h1 className="todo">Task Tracker</h1>
                <br/>
                <input type= "text" placeholder = "Add a Task" onChange={inputEvent} />
                <br/>
                <button  className="todobtn" onClick={listOfItems}> + </button>
               
                <h3 >
                <ol>
                    
                        {taskarr.map((itemVal,index) =>{
                          return  <TaskArr 

                                text = {itemVal}
                                key = {index}
                                onSelect = {deleted}

                            />
                        })}
                    
                </ol>
                </h3>
            </div>
            </div>
        </>
    );
}

export default TaskTracker;

//in line 58 passing deleted function as a prop whose key name is declared as onSelect