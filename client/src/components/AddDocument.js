import React, { useState } from "react";
import {createNewDocument} from "../fetch/documentFetch"
export default function AddDocument() {
  const [formData, setFormData] = useState({
    title: "",
    creater: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });

  };
  const handleSubmit = (e) => {
    createNewDocument(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" name="title" onChange={handleInputChange} />
        <label htmlFor="">Creator</label>
        <input type="text" name="creater" onChange={handleInputChange} />
        <input type="submit" value= "submit"/>
      </form>
      <p></p>
    </div>
  );
}
