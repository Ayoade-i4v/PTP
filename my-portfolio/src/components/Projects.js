import { Container, NavItem } from "react-bootstrap";

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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s</p>
                <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" disabled>
                        Disable</Nav.Link>
                </Nav.Item>
                </Nav>

                </Col>
            </Row>
        </Container>
     </section>
    )
}