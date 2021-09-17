import React from "react";
import resume from "../images/Resume.pdf";

function Resume() {
    return (
        <div style={{position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "45%" }}>
            <iframe src={resume}
                style={{ position: "absolute",
                     top: "0",
                     left: "0",
                     //bottom: "0",
                     right: "0",
                     width: "100%",
                    height: "100%"
                   }}>
            </iframe>
        </div>


    );
}

export default Resume;