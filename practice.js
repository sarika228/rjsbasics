import React from "react"

function Names(){
    const names=["Sarika","Achyuth","Ramya"]
    const namesList=names.map(name=><h1>{name}</h1>)
    return(
        <div>{namesList}</div>
    )

}
export default Names