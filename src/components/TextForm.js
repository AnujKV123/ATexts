import React, {useState} from 'react'

export default function TextForm(props) {
    const habdleUpClick = ()=>{

        // console.log("you have clicked on handleUpClick" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const habdleLoClick = ()=>{

        // console.log("you have clicked on handleUpClick" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const clearText = ()=>{

        // console.log("you have clicked on handleUpClick" + text)
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!", "danger")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const handleCopy = ()=>{
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copy to Clipboard!", "success")
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success")
    }

    const [text, setText] = useState('');
    // text = "New text" // wrong way to change the state
    // setText("New text") // Right way to change the state
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={habdleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={habdleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>your text summary</h3>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minute read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
