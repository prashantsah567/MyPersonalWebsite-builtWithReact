import React from "react";
import computer from '../images/pic1.jpeg';
function Home(){
    return(
        <>
        
        <div className="my-3 mx-5">
        hello my name is Prashant Sah.
        </div>
        <div className="my-3 mx-5">
        Currently i'm pursuing my Associate degree in Computer Programming and Software development.
        </div>
        <div>
        <img src={computer} className="img-fluid" alt="could not load"/>
        </div>
        </>
    );
}
export default Home;