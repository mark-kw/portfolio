import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Container, Row } from 'react-bootstrap';
import './Accueil.css'
import cvPDF from '../doc/cv.pdf';

export default function About({ scrollToProjects }) {
    const [arrowVisible, setArrowVisible] = useState(false);

    const handleClick = () => {
        scrollToProjects();
        setArrowVisible(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setArrowVisible(true);
            } else {
                setArrowVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <section id="about">
            <Container fluid >
                <div className="icons">

                    <a href="https://github.com/mark-kw" rel="noreferrer" target="_blank" className="link-gt">
                        <FaGithub className="font-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mark-kissi/" rel="noreferrer" target="_blank"><
                        FaLinkedin className="font-icon" />
                    </a>
                </div>
                <Row className="name">
                    <p>MARK KISSI</p>
                </Row>
                <Row className="job">
                    <p> {'{FULL STACK DEVELOPPER}'}</p>
                </Row>
                <Row className="mainSkills">
                    <p>HTML . CSS . JavaScript . REACT . PHP . Symfony </p>
                </Row>

                <a href={cvPDF} download="markkissi.pdf" className="btn-project">RESUME</a>
                <a href="#contact" className="btn-hire">Hire me</a>

                {!arrowVisible && (
                    <div className="arrow-down" onClick={handleClick}>
                        <div className="arrow"></div>
                    </div>
                )}


            </Container>
        </section >
    );
}