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
    
    navigator.clipboard.writeText(text)
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
      <h1 className='mb-4' >{props.heading}</h1>
      <div className="mb-3 ">
        <textarea className="form-control" onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',color:props.mode=== 'dark'?'white':'#042743'}} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handelUpClick} >Convert to Uppercase</button>
      <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handelLowClick} >Convert to Lowercase</button>
      <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={clearText}>Clear text</button>
      <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handelCopy}>Copy Text</button>
      <button disabled={text.length ===0} className="btn btn-primary my-3 mx-1" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
  <h1>Your text summery</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Character</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0 ? text:"Nothing to preview "}</p>
</div>

</>
)
}

