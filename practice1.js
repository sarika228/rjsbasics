import React from 'react'
import Person from "./Person"

function NameList() {
    const persons=[
        {
            id: 1,
            name:"Sarika",
            age:24,
            skill:"React"
        },
        {
            id: 2,
            name:"Achyuth",
            age:22,
            skill:"Physics"
        },
        {
            id: 3,
            name:"Ramya",
            age:19,
            skill:"Biology"
        }

    ]
    const personsList=persons.map(person=> <Person key={person.id} person={person}/>)
    return (
        <div>
            {personsList}
        </div>
    )
}

export default NameList
