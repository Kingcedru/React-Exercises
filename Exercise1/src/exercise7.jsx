import {React,useState} from "react";

export default function Form(){
    const [word,nextWord] = useState('')
    const [word2,nextWord2] = useState('')

    return(
        <div className="grid gap-3">
            <input type="text" placeholder="First name" className="border-2 rounded-lg px-5 py-3" onChange={(e)=>{nextWord(e.target.value)}}></input>
            <input type="text" placeholder="Last name" className="border-2 rounded-lg px-5 py-3" onChange={(e)=>{nextWord2(e.target.value)}}></input>
            <button className="border-2 rounded-lg px-3 bg-red-700 text-white py-3" onClick={()=>{alert(`Hello ${word} ${word2}`)}}>Greet Me</button>      
        </div>
    )
}