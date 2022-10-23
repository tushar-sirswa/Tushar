import React,{useState} from 'react'

export default function TextForm(props) {
  
  const handelOnChange= (event) =>{
    setText(event.target.value)
  }

  const handelUpClick=()=>{
    let newText=text.toUpperCase()
  setText(newText)
  props.showAlert("Converted to Uppercase","success")
  }
  const handelLowClick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
  props.showAlert("Converted to Lowercase","success")

  }
  const clearText=()=>{
    let newText=" "
    setText(newText)
  props.showAlert("Clear Text","success")

  }
  const handelCopy = () =>{
    let text= document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
  props.showAlert("Converted to Uppercase","success")
  props.showAlert(" Copied to Clipbord","success")
  
  }
  const handelExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed Extra Spaces","success")

  }

  const[text,setText] =useState("")
  
  return (
   <>
   <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3 ">
        <textarea className="form-control" onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode=== 'dark'?'white':'#042743'}} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary my-3 mx-1" onClick={handelUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handelLowClick} >Convert to Lowercase</button>
      <button className="btn btn-primary my-3 mx-1" onClick={clearText}>Clear text</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handelCopy}>Copy Text</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
  <h1>Your text summery</h1>
  <p>{text.split(" ").length} Words & {text.length} Character</p>
  <p>{0.008 * text.split(" ").length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here"}</p>
</div>

</>
)
}

