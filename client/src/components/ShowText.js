import React, { useEffect, useState } from "react";

export default function ShowText(props) {
  const [showDoc, setDoc] = useState(true);
  const [text, setText] = useState("");
  const changeMode = (_id) => {
    setDoc(!showDoc);
    if(showDoc===false){
      props.changeDocument(text,_id);
    }
  };
  
  const textChange=(e) => {
    setText(e.target.value)
  }
  const adjustTextAreaHeight = () => {
    const textArea = document.getElementById('inputTextArea');
  //   textArea.style.height = 'auto'; // Reset the height to auto to calculate the correct height
  
    const lines = textArea.value.split('\n').length;
    const lineHeight = 22.5; 
    // const minHeight = 70; 
    const newHeight = Math.max(0, lines * lineHeight);
    textArea.style.height = `${newHeight+25}px`;};

  useEffect(()=>{
      setText(props.textData.data);
      setDoc(props.isRead)
  },[])
  return (
    <div>
      <div class="document-show-individual">
        {showDoc ? (
          <div class="document-show-text">
            <p    dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br>") }}></p>
            <div class="edit">
              <button onClick={changeMode}>Edit</button>
            </div>
          </div>
        ) : (
          <>
            <div class="document-edit-text">
              <textarea
                id="inputTextArea"
                onInput={adjustTextAreaHeight}
                defaultValue={text}
                onChange={textChange}
              ></textarea>
              <div class="done" onClick={()=>{changeMode(props.textData._id)}}>
                <button>Done</button>
              </div>
            </div>
            <p>{text}</p>
          </>
        )}
      </div>
    </div>
  );
}




