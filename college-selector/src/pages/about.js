import React from "react";
import "./styles/Layout.css";
import logo from "./images/college-students.jpg";
import { Row, Col, Container } from "react-bootstrap";
import { Nav, NavLinks, NavMenu } from "../components/Navbar/NavbarElements";
import { useNavigate } from "react-router";

const About = () => {

  let navigate = useNavigate();
  const handleClick = (event) => {
    
    navigate("/CollegeList");
  }
  return (
    <div>
      <Nav>
        <NavMenu>
          <NavLinks onClick={handleClick}>College List</NavLinks>
        </NavMenu>
      </Nav>      
      <br/><br/><br/><br/>
      <Container>
        <React.Fragment>
          <Row>
            <Col md={4}>
              <section className="content-container">
                <div>
                  <img width="720px" height="1080px" src={logo} alt="logo" />
                </div>
              </section>
            </Col>
            <Col md={4}>
              <section className="content-container">
                <div className="textArea">
                  <h1>About</h1>
                  <p>
                    The Capstone project is showcasing a REACT based application
                    to assist prospective high school students find the right
                    college based on their selection criteria.
                  </p>

                  <h1>Thank You</h1>
                  <p>
                    I would like to thank Professor George J. Grevera, Ph.D. for
                    his continued guidance and support in helping me meet my
                    Capstone project requirements
                  </p>
                  <h1>Technology Stack</h1>
                  <p>
                    <li>React</li>
                    <li>CollegeAI API</li>
                    <li>Firebase</li>
                  </p>
                </div>
              </section>
            </Col>
          </Row>
        </React.Fragment>
      </Container>
    </div>
  );
};

export default About;
