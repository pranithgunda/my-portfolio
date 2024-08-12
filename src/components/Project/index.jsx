import { useState } from 'react';
import { Col, Card, Stack } from 'react-bootstrap'
// Apply card related styling
import '../../../src/Card.css'
// FontAwesomeIcon component to display font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Github icon
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectCard = (props) => {
    // Define state to display project info on hover
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
                    // ImgOverlay displays info over the image
                    <Card.ImgOverlay className='text-center'>
                        <Stack>
                            <Card.Title className="project-card"><a href={props.projectlink} target="_blank">{props.alt}</a></Card.Title>
                            <a href={props.gitRepoURL} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" color={props.color} /></a>
                        </Stack>
                        <Card.Body className="project-card-small"><h5>{props.alt}</h5></Card.Body>
                    </Card.ImgOverlay>
                )}
            </Card>
        </Col>
    )
}


export default ProjectCard;