import React from "react";
import { Document} from "react-pdf";
import resume from "../images/Resume.pdf";

function Resume(){
    return(
     <div className="container my-3" style={{width: "100%",
     height: "auto" , 
     textAlign: "center", 
     }}>
        <Document file={resume}></Document>
     </div>

    // <iframe src={resume} 
    // style={{margin:"0", width:"100%", height:"auto"}}>
    // </iframe>
    );
}

export default Resume;