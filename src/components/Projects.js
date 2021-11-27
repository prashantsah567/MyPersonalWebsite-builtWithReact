import React from "react";

function Project() {
    return (
        <>
            <div id="projectSection" className="row m-0 nameFont">
                <div className="col-lg-4 pt-5" style={{ height: "400px", background: "black" }}>
                    <div className="h1 text-white text-center BlurrOnHover">Projects</div>
                </div>
                <div className="col-lg-8 p-5 d-flex justify-content-end align-items-center"
                    style={{ height: "400px", backgroundImage: "url(https://source.unsplash.com/1600x700/?computer,programming,environment)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div className="h1 border border-dark BlurrOnHover">
                        <a className="text-light" style={{textDecoration:"none"}} href="https://github.com/prashantsah567/TIC-TAC-TOE-Game.git" target="_blank">C++ TIC-TAC-TOE</a></div>
                </div>
                <div className="col-lg-8 p-5 d-flex justify-content-center align-items-center"
                    style={{ height: "500px", backgroundImage: "url(https://source.unsplash.com/1600x700/?computer,programming,travelling)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div className="h1 text-white border BlurrOnHover">
                    <a className="text-light" style={{textDecoration:"none"}} href="https://github.com/prashantsah567/e-commerce-website.git" target="_blank">E-commerce Website</a></div>
                </div>
                <div className="col-lg-4 p-5 d-flex justify-content-center align-items-start"
                    style={{ height: "500px", backgroundImage: "url(https://source.unsplash.com/1600x700/?computer,programming,coding)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div className="h1 text-white border BlurrOnHover">
                    <a className="text-light" style={{textDecoration:"none"}} href="https://github.com/prashantsah567/Snake_Game.git" target="_blank">C++ Snake</a></div>
                </div>
                {/* This is a comment */}
                <div className="col-lg-4 p-5"
                    style={{ height: "500px", backgroundImage: "url(https://source.unsplash.com/1600x700/?computer,programming,gaming)", backgroundSize: "cover", backgroundPosition: "center bottom" }}>
                    <div className="h1 text-white text-center border BlurrOnHover">
                    <a className="text-light" style={{textDecoration:"none"}} href="https://github.com/prashantsah567/Final_Grade_Calculation.git" target="_blank">Java Grade calculator</a></div>
                </div>
                <div className="col-lg-4 p-5 d-flex justify-content-center align-items-center"
                    style={{ height: "500px", backgroundImage: "url(https://source.unsplash.com/1600x700/?computer,programming,browsing)", backgroundSize: "cover", backgroundPosition: "center top" }}>
                    <div className="h1 border border-dark BlurrOnHover">
                    <a className="text-light" style={{textDecoration:"none"}} href="https://github.com/prashantsah567/CSV-file.git" target="_blank">Java Working with CSV file</a></div>
                </div>
                <div className="col-lg-4 p-5 d-flex justify-content-center align-items-center"
                    style={{ height: "500px", backgroundImage: "url(https://source.unsplash.com/1600x700/?computer,programming,nature)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div className="h1 text-white border BlurrOnHover">
                    <a className="text-light" style={{textDecoration:"none"}} target="_blank">Counting Frequency</a></div>
                </div>
                
            </div>
        </>
    );
}

export default Project;