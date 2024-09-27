import React, {useState} from 'react'


export default function TextForm(props) {

     
    const handleChange = (event) => {
        setText(event.target.value);
      };
    
      const handleClear = () => {
        setText('');
      };

    const handleUpClickk= ()=>{
        console.log("lowercase")
        let newText=text.toLowerCase();
        setText(newText)


    }

    const handleUpClick = () =>{
              console.log("Upper case was Clicked" + text)
              
              let newText= text.toUpperCase();
              setText(newText)
    }
    const handleOnChange =(event)=>{
         console.log("changing");
         setText (event.target.value)
    }

    const handleUpCleartext =() =>{

        let newText=("")
        setText(newText)
    }

    const handletexColor= ()=>{
        
        let newText=text.color
        
        setText(newText)

    }
    const speak =()=>{
            let msg = new SpeechSynthesisUtterance();
             msg.text = text;
             window.speechSynthesis.speak(msg);

    }
    
     
    const [text, setText] = useState("enter the text");

    return (

    <>
    <div>
        <h1>Enter the text</h1>
           <div className="mb-3">
            
                 
                 <textarea className="form-control"  id="myBox" value={text} onChange={handleOnChange} row="8" placeholder="Example input placeholder">asdasdasd</textarea>
</div>
    <div className="button btn btn-primary mx-2" onClick={handleUpClick}> convert to Upper case</div>
    <div className="button btn btn-primary mx-2" onClick={handleUpClickk}> convert to Lower case</div>
    <div className="button btn btn-primary mx-2" onClick={handleUpCleartext}> Clear</div>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button type="submit" onClick={handleClear} className="btn btn-warning mx-2 my-2">clear</button>
    
    
    
        
    </div>

    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>

    <p> {0.008 * text.split(" ").length}Minutes read </p>
    <h2>Preview</h2>
    <p>{text}</p>

    </>
  )
}
