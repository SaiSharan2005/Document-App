const allDocs = async () => {
  try {
    const response = await fetch("/api", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const newData = await response.json();
    return newData; 
  } catch (err) {return err}
};
const getSpecficDocument = async (document) => {
    try {
      const response = await fetch("/api/specific", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(document)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const newData = await response.json();
      return newData; 
    } catch (err) {return err}
  };
  

const createNewDocument = async (document) => {
    try {
      const data = await fetch("api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(document)
      });
      return data.json();
    } catch (err) {return err}
  };
  const updateDocument = async (document) => {
    try {
      const data = await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(document)
      });
      return data.json();
    } catch (err) {return err}
  };
    
  const deleteSpecficDocument = async (document) => {
    try {
      const data = await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(document)

      });
      return data.json();
    } catch (err) {return err}
  };
// const damed = function (){
//   console.log("kjahkj");
//   return "234567u8i";
// }
module.exports = {allDocs,getSpecficDocument,createNewDocument,updateDocument,deleteSpecficDocument};