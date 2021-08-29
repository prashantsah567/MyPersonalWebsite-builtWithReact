import React from "react";
import {Container, Row, Col } from "react-bootstrap";

function About(){
    return(
        <Container fluid className="about-section">
            <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Welcome to my Website !
            </h1>
            </Col>
         <div className="text-start">
             Hi Everyone, I am Prashant Sah from New York. <br />
             I am a Junior Web developer pursuing my Associate degree in LaGCC.<br/>
             Currently My major is Programming and Software Development.<br/>
             <br/><br/>
             Apart from coding some other activities i love to do!<br/><br/>
             <ul>
                 <li>Listening to music</li>
                 <li>Doing gym</li>
                 <li>Travelling</li>
                 <li>Playing Basketball</li>

             </ul>
        
         </div>
         </Row>
         </Container>
         </Container>
    );
}

export default About;