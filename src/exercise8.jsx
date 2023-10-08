import React from 'react'
export default function Jokes({setup,punchline}) {

    return(
            <div className='grid gap-3 bg-white py-20 px-8 rounded-xl'>
                <h1 className='text-xl font-bold'>{setup}</h1>
                <h2>{punchline}</h2>
            </div>
            
    )
}
