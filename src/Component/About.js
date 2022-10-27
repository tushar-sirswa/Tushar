import React,{useState} from 'react'

export default function About(props) {

//   const [myStyle,setmyStyle]= useState({
//     color:'black',
//     backgroundColor:'white'

//   })
  let myStyle={
    color:props.mode ==='dark'?'white':'#042742',
    backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white',

  }
  
  
  return (
            <div className='container my-3' style={{color:props.mode ==='dark'?'white':'#042742'}}>
                <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong> Analyze Your text </strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and officiently .Be it word count,character count or 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong> Free to use </strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistices for a given text.Textutils reports that number of words and character.That it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <strong> Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This is counter software words in any web browser such as chrome,Firefox,Internet Explorer,Safari ,Opera. It suits to count character in facebook,blog,books,excel document,pdf document,essays,etc.
            </div>
            </div>
        </div>
        </div>
        
            </div>
        )
        
  }