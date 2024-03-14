import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        //console.log("uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        //console.log("uppercase was clicked"+text);
        let newText=("");
        setText(newText)
    }
    const handleOnChange =(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] =useState("Enter text here");
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                    style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'#1ba11b'} }id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-success mx-1" onClick={handleClearClick}>ClearText</button>
                <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
            </div>
    </>
  )
}
