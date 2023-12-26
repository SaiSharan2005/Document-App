import React, { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";
import { updateDocument} from "../fetch/documentFetch";
import ShowText from "./ShowText"
import ShowCode from "./ShowCode";
import AddText from "./AddTextCode";

export default function DisplayContent(props) {
  const [document, setDocument] = useState(null);
  const location = useLocation();
  const saveData = ()=>{
     console.log(document)
    updateDocument(document)
  }
  const changeDocument = (changedData,_id)=>{
    const updatedDocument = { ...document };
    updatedDocument.totalData.map(data => {
      if (data._id === _id) {
        data.data = changedData;
      }
      return data;
    })
    setDocument(updatedDocument)
  }
  const addText=(dataType)=>{
    const updatedDocument = { ...document };
    updatedDocument.totalData
    .push({ data: " ", dataType:dataType });
    setDocument(updatedDocument); // Update the state with the new document data
 }
  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const data = location.state;
        setDocument(data);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchData();
  },[location.state]);

  return (
    
    <div className="allDocs">
      {document !== null ? (
        <>
        <a href={`ShowDocument/${document._id}`} ><button>Go To show mode </button></a>
        <div className="Document">
          <div className="document-title">
            <p className="main-Document-text">Title:</p>
            <p>{document.title}</p>
          </div>
          <div className="document-creater">
            <p className="main-Document-text">Creator :</p>
            <p>{document.creater}</p>
          </div>
          <div className="document-createdAt">
            <p className="main-Document-text">Created at:</p>
            <p>{document.createdAt}</p>
          </div>
        </div>
        {document.totalData.map((data)=>(
          <div className="document-show">
            {data.dataType ==="text"?<ShowText textData = {data} changeDocument = {changeDocument} isRead = {true}/>:<></>}
            {data.dataType ==="code"?<ShowCode textData = {data} changeDocument = {changeDocument} isRead = {true}/>:<></>}
            {/* {data.dataType ==="image"?<ShowText textData = {data} changeDocument = {changeDocument}/>:<></>} */}
            
          </div>
        ))}
        <AddText addText = {addText}/>
        </>

        
      ) : (
        <p>document not found </p>
      )}
      <p>{}</p>
      <button onClick={saveData}>Save</button>
    </div>
  );
}
