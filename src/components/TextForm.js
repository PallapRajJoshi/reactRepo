
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Uppercase was Clicked"+ text) 
        let newText=text.toUpperCase();
        setText(newText);
     }

     const handleLoClick= ()=>{
        console.log("Lowercas was Clicked"+ text) 
        let newText=text.toLowerCase();
        setText(newText);
     }


    const handleOnChange= (event)=>{
       console.log("On Change")
       setText(event.target.value)
    }


  
    const [text, setText] = useState('Enter text here');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Upper Case</button>
        
        </div>
    );
}

