import React from "react";

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
                        <img src="https://source.unsplash.com/1600x400/?programming," className="d-block w-100" alt="could not load"/>
                            <div className="carousel-caption d-none d-md-block">
                                <strong>
                                <p>Everybody in the world should learn how to program a computer because it teaches you how to think.</p>
                                </strong>
                            </div>
    </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/1600x400/?computer,programming" className="d-block w-100" alt="could not load"/>
                                <div className="carousel-caption d-none d-md-block">
                                   <strong>
                                    <p>Measuring programming progress by lines of code is like measuring aircraft building progress by weight.</p>
                                    </strong>
                                </div>
    </div>
                            <div className="carousel-item">
                                <img src="https://source.unsplash.com/1600x400/?website,coding" className="d-block w-100" alt="could not load"/>
                                    <div className="carousel-caption d-none d-md-block">
                                    <strong>
                                        <p>A good programmer is someone who always looks both ways before crossing a one-way street.</p>
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

    <div className="container my-5">
       <h3>Let me introduce Myself!</h3> <br/>
       <p>It all started with Gaming</p> 
       <p>I am fulent in C++, Java, JavaScript, and learning something new everyday...</p>

    </div>

     </>
                    );
}

export default Home;