import React from "react";

export default function List(){
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return(
        <div>
            <ul>
                {animals.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}