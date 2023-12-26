import React, { useEffect, useState } from "react";
import { getSpecficDocument } from "../fetch/documentFetch";
import { useParams } from "react-router-dom";

export default function ShowDoc(props) {
  const [document, setDocument] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const specificDoc = await getSpecficDocument({_id:id});
        setDocument(specificDoc);
        console.log(document)
      } catch (error) {
        console.error("Error fetching document:", error);
        // Handle error state here
      }
    };

    if (id) {
      fetchDocument();
    }
  }, [id]);


  return (
<div className="allDocs">
      {document!==null?
      
      document.totalData.map((data) => (<>
        
        <div className="document-show">
          {data.dataType === "text" ? (
            <>
              <div class="document-show-text">
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.data.replace(/\n/g, "<br>"),
                  }}
                ></p>
              </div>
            </>
          ) : (
            <></>
          )}
          {data.dataType === "code" ? (
            <div class="document-show-code">
              <p
                dangerouslySetInnerHTML={{
                  __html: data.data.replace(/\n/g, "<br>"),
                }}
              ></p>
            </div>
          ) : (
            <></>
          )}
        </div></>
      )):<p>some thign went wrong</p>}
    </div>
  );
}
