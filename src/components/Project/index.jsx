import { useState } from 'react';
import { Col, Card, Row, Image, Stack } from 'react-bootstrap'
import '../../../src/Card.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectCard = (props) => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <Col>
            <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                border="info" style={{ height: '35vh', padding: '0px' }}
            >
                <Card.Img src={props.src} alt={props.alt}></Card.Img>
                {isHovered && (
                    <Card.ImgOverlay className='text-center'>
                        <Stack>
                        <Card.Title className="project-card"><a href= {props.projectlink} target="_blank">{props.alt}</a></Card.Title>
                        <a href={props.gitRepoURL} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" color={props.color}/></a>
                        </Stack>
                        <Card.Body className="project-card-small"><h5>{props.alt}</h5></Card.Body>
                    </Card.ImgOverlay>
                )}
            </Card>
        </Col>
    )
}

function Project(props) {
    return (
        <Col>
            <Card border="info" style={{ height: '35vh', padding: '0px' }} >
                <Card.Img src={props.src} alt={props.alt}></Card.Img>
            </Card>
        </Col>
    )
}

export default ProjectCard;