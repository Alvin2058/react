import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpclick = (event)=> {
        let newText=Text.toUpperCase();
        setText(newText)
    }
    const handleLowclick = (event)=> {
        let newText=Text.toLowerCase();
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(Text);
        msg.text = Text;
        window.speechSynthesis.speak(msg);
    }
    const speakStop = () => {
        window.speechSynthesis.cancel()
    }

    const handleOnchange = (event)=> {
        setText(event.target.value)
    }


    const[Text,setText] = useState("")
  return (
    <>
    <div className="container">
        <h1 >{props.heading}</h1>
        <div className='mb-3'>
        <textarea className="form-control" value={Text}id="myBox" onChange={handleOnchange} rows="8"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
        <button className="btn btn-primary mx-1" onClick={speakStop}>Stop speaking</button>
        </div>
    </div>
    <div className="container my3">
        <h2>Your text summary</h2>
        <p>Total words:{Text.split(" ").length} Total characters:{Text.length}</p>
        <p>{0.08*Text.split(" ").length} :Minutes taken to read </p>
        <p>{Text}</p>
    </div>
    </>
    
  )
}
