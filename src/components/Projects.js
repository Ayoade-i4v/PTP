import { Col, Container, Row, TabContainer, Tab, Nav } from "react-bootstrap";
 import { ProjectCard } from "./ProjectCards";
 import colorSharp2 from "../assets/img/color-sharp2.png";
 import projImg1 from "../assets/img/project-img1.png";
 import projImg2 from "../assets/img/project-img2.png";
 import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    

 
    return (
       <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Achievements or should i say Projects worth mentioning which i have embarked on Over the years in my<br/>
                humbling Experience as Web developer feel free to have a Look!
                </p>
              <TabContainer id="projects-tab" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tabt5">
      <Nav.Item>
        <Nav.Link eventKey="first">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third" >
         Tab Three
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="first">
            <Row>
                {
                    projects.map((project, index) => {
                        return (
                           <ProjectCard
                           key={index}
                           {...project}
                           />
                        )
                    })
                }
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">Token
          (Underway!)
        </Tab.Pane>
        <Tab.Pane eventKey="third">Digital Marketing store</Tab.Pane>
    </Tab.Content>
    </TabContainer>     
     </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
       </section>
    )
}