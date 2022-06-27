import React, { useState }  from "react";

const BigForm = () =>{

    const[yourCurrentStateObj, setYourStateObj] = useState ({
        fname : " ",
        lname: " ",
        email : " ",
        password : " "
       
    })

    const onSubmits = (event)=>{
        event.preventDefault();
        console.log("clicked")
        alert("data submitted successfully!")
    }

    const inputEvent = (event) =>
    {
      console.log(event.target.value)
      console.log(event.target.name)

      const name = event.target.name
      const value = event.target.value
        setYourStateObj ((previousVal)=>{
            
            if(name === "fname")
            {
                return {
                    fname : value,
                    lname : previousVal.lname,
                    email : previousVal.email,
                    password : previousVal.password
                }
                
            }
            else if (name === "lname")
            {
                return {
                    fname : previousVal.fname,
                    lname : value,
                    email : previousVal.email,
                    password : previousVal.password
                }
            }
            else if (name === "email")
            {
                return {
                    fname : previousVal.fname,
                    lname : previousVal.lname,
                    email : value,
                    password : previousVal.password
                }
            }
            else if (name == "password")
            {
                return {
                    fname : previousVal.fname,
                    lname: previousVal.lname,
                    email : previousVal.email,
                    password : value
                }
            }
        })
    }

    return (
        <>
            <div>

            <form onSubmit={ onSubmits} >
            <div>
                <h1>
                    Hello, {yourCurrentStateObj.fname} {yourCurrentStateObj.lname}
                </h1>

                <input 
                    type = "text"
                    placeholder="Enter your first Name"
                    onChange={inputEvent}
                    name = "fname"
                    
                />

                <br />
                <input 
                    type = "text"
                    placeholder=" Enter your Last Name"
                    onChange={inputEvent}
                    name = "lname"
                />
                <br />

                <input 
                    type = "text"
                    placeholder=" Enter your Email Address"
                    onChange = {inputEvent}
                    name = "email"
                    
                />
                  <br />
                <input 
                    type = "password"
                    placeholder= "Enter your Password"
                    onChange = {inputEvent}
                    name = "password"
                    
                />
                <br />
                <button type="submit" > Submit</button>
                <h3>Your email address : {yourCurrentStateObj.email}</h3>
            </div>
            
            </form>
            </div>
        </>
    );
}

export default BigForm;