import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("")
    const [wordConut,setWordCount] = useState(0)
    const [characterCount,setCharacterCount] = useState(0)
    const [minuteTakeToRead,setMinuteTakeToRead] = useState(0)
    const [customText,setCustomText] = useState(text)


    const handleOnChange = (event) => {
        setText(event.target.value)
        setCustomText(text)
        setWordCount(text.split(" ")[text.split(" ").length - 1].length > 0 ? text.split(" ").length : text.split(" ").length -1 )
        setCharacterCount(text.replace(" ","").length)
        setMinuteTakeToRead((0.008 * wordConut).toFixed(3))
    }

    const handleUpCallback = () => {
      setCustomText(text.toLocaleUpperCase()) 
      props.showAlert("success","Converted to upparcase!")
    }
    const handleLoCallback = () => {
      setCustomText(text.toLocaleLowerCase()) 
      props.showAlert("success","Converted to upparcase!")
    }

  return (
    <>
    <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows= "6"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCallback}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoCallback}> Convert to Lowercase</button>
    </div>

    <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{wordConut} Words {characterCount} Character  {minuteTakeToRead} minutes read! </p>
    </div>

    <div className="container my-3">
        <h3>Preview</h3>
        <p>{customText}</p>
    </div>
    </>
  );
}
