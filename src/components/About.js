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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }} className="text-center">
              Welcome to my Website !
            </h1>
            </Col>
         <div className="text-center" style={{fontSize: "1.2em"}}>
             Hello Everyone, My name is Prashant Sah and I am from New York <br />
             I am student of LaGuardia Community College pursuing my Associate degree <br/>
             in Programming and Software Development<br/>
             I am very passonate about being a developer and am always learning new tech stacks<br/>
             Most of my work and project experience are focused on developing web and problem solving skills<br/>
             I love spending my time developing code, debugging and learning about technology<br/>
             Beside coding and developing i am also interested in Machine learning and Artificial Intelligence and also doing research on<br/>
             Fault detection in Wireless Sensor network using Machine Learning Algorithm with one of mentor from my college
             <br/><br/>
             Apart from coding some other activities i love to do:<br/>
             
                 Listening to music<br/>
                 Gym<br/>
                 Travelling<br/>
             
             <br/>
             <div style={{fontSize: "0.9em", fontFamily:"cursive"}}>
             Feel Free to visit my linkedin and Github profile mentioned in the footer section<br/>
             Also you can view and download my Resume by visiting the resume tab
             </div>
         </div>
         </Row>
         </Container>
         </Container>
    );
}

export default About;