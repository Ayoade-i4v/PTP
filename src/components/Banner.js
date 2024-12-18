import { useState, useEffect } from "react";
import { Container, Row, Col, Collapse} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
         tick();
        },delta)

        return () =>  { clearInterval(ticker)};
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        
        if (!isDeleting && updatedText ===fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    
        }
    
    
    return (
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi I'm Acyoade`}<span className="wrap"> {text} </span></h1>
                <p>As a passionate web developer and UI/UX designer, I specialize in creating seamless, user-centered digital experiences. 
                    With a strong foundation in front-end and back-end development,  I bring websites to life using the latest technologies and best practices. My expertise extends to crafting intuitive,
                     visually engaging interfaces that prioritize user experience, ensuring both functionality and aesthetics align with client goals. 
                     I am committed to designing responsive, accessible, and scalable solutions that not only look great but also perform flawlessly across devices. Let's collaborate to bring your vision to the web!</p>
                <a href="emailto:chukwuemekavictorudeze@gmail.com"><button onClick={() => console.log('connect')}>Get in Touch! <ArrowRightCircle size={25} /></button></a>
                </Col>
                <Col>
                <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
        </section>
    )
}