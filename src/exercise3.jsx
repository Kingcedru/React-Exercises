import React from "react";

export default function ThreeButtons(){
    return(
        <div className="three-buttons flex gap-5">
            <button className="border-2 rounded-lg px-3" onClick={(e)=>alert("You clicked on Button 1")}>Button 1</button>
            <button className="border-2 rounded-lg px-3" onClick={(e)=>alert("You clicked on Button 2")}>Button 2</button>
            <button className="border-2 rounded-lg px-3" onClick={(e)=>alert("You clicked on Button 3")}>Button 3</button>
        </div>
    )
}