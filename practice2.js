import React from "react"

function Names(){
    const names=["Sarika","Achyuth","Ramya"]
    const personsList=names.map((name,index)=><h1 key ={index}>{index} {name}</h1>)
    return(
        <div>
            {personsList}
        </div>
    )

}
export default Names