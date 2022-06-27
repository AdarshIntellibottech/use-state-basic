import React, { useState }  from "react";

const SpreadOperator = () =>{
    let fullName = ["Bharath" , "B R"];
    let bioData = [...fullName, "Shimoga","CSE","JNNCE"];

     console.log(fullName);
     console.log(bioData);

    let arrr = ['Adarsh',"Naik"]
    
     abd(...arrr)

     function abd(fname, lname)
     {
        console.log(fname)
        console.log(lname)
     }

     const engSeries = ["prison break","breaking bad","money heist"]
     const hindiSeries = ["panchayat","kotafactory","mirzapur"]
     hindiSeries.sort()
     console.log(hindiSeries)
     const series = [...engSeries,...hindiSeries]//concatinating two arrays

     console.log(series)

    return (
        <>
            <h1>Spread Operator</h1>
        </>
    )

}

export default SpreadOperator;