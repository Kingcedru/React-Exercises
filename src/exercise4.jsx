import { useState,react } from "react"

export default function ClickedTimes(){
    const [current,nextNumber] = useState(0)
    return(
        <div>
            <h1>Button has been clicked : {current} times`</h1>
            <button className="border-2 rounded-lg px-3" onClick={()=>nextNumber(current + 1)}>Click Me</button>
        </div>
    )
}