import React from "react";
import img1 from "../images/img6.jpg";
import img2 from "../images/img15.jpg";
import img3 from "../images/img7.jpg";

function Home() {
    return (
     <>

            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} style={{height: 700}} className="d-block w-100" alt="could not load"/>
                            <div className="carousel-caption d-none d-md-block">
                                <strong>
                                <p>BELIEVE IN YOURSELF AND YOU ARE HALFWAY THERE</p>
                                </strong>
                            </div>
    </div>
                        <div className="carousel-item">
                            <img src={img2} style={{height: 700}} className="d-block w-100" alt="could not load"/>
                                <div className="carousel-caption d-none d-md-block">
                                   <strong>
                                    <p>IT'S NEVER TOO LATE TO INVET IN YOURSELF</p>
                                    </strong>
                                </div>
    </div>
                            <div className="carousel-item">
                                <img src={img3} style={{height: 700}} className="d-block w-100" alt="could not load"/>
                                    <div className="carousel-caption d-none d-md-block">
                                    <strong>
                                        <p>PREMATURE OPTIMIZATION IS THE ROOT OF ALL EVIL</p>
                                        </strong>
                                    </div>
    </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
    <div>
        <h5 className="text-center" style={{fontFamily: "cursive"}}>WELCOME</h5>
    </div>
     </>
                    );
}

export default Home;