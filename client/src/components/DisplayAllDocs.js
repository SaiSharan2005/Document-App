import React, { useState, useEffect } from "react";
import { allDocs, deleteSpecficDocument } from "../fetch/documentFetch";
import { useNavigate } from "react-router-dom";
import AddDocument from "./AddDocument";
export default function DisplayDocs() {
  const [documents, setData] = useState(null);
  const [addDocumentMode, setDocument] = useState(true);
  const navigate = useNavigate();
  function goToDoc(doc) {
    navigate("/Document", { state: doc });
  }
  const deleteDocument = (data)=>{
    deleteSpecficDocument({_id:data})
    let  newData = [...documents];
    newData = newData.filter(obj => obj._id !== data);
    console.log(newData)
    setData(newData)

  }
  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const newData = await allDocs();
        setData(newData);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchData();
  }, []);

  return (
    <>
      <h1>All Documents</h1>
      <div className="allDocs">
        {documents !== null ? (
          documents.map((document, index) => (
            <>
            <div
              className="Document"
              key={index}
              onClick={() => goToDoc(document)}
            >
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
              <button className="delete"onClick={()=>{deleteDocument(document._id)}}>Delete</button>
              </>
          ))
        ) : (
          <p>document not found </p>
        )}
      </div>
      {addDocumentMode ? (
        <>
          <form action=""></form>
        </>
      ) : (
        <></>
      )}
        {addDocumentMode ? (
        <AddDocument />
      ) : (
        <button
          onClick={() => {
            setDocument(!addDocumentMode);
          }}
        >
          Add Document
        </button>
      )}

    </>
  );
}
