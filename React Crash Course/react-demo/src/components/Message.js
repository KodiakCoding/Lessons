import { useState } from "react"

export const Message = (props) =>{
    const [message,setMessage] = useState('Welcome visitor')
    return (
    <div>
        <h1 className="text-3xl font-bold mb-4">
            {message}
        </h1> 
        <button onClick={() => setMessage('thanks for subbing')}>Subscribe</button>
        <br/>
        <button onClick={() => setMessage('')}>Clear</button>
    </div>)
}

