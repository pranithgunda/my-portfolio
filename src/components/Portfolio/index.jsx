import { Container, Row, Col, Card } from 'react-bootstrap'
import ProjectCard from '../Project/index'

function Portfolio() {
    return (
        <Container fluid className="p-4">
            <Row>
                <Col>
                <ProjectCard src={'../../../public/images/myfirstblog.gif'} alt={'My First Blog'} projectlink={'https://pranithgunda.github.io/my-first-blog/'} gitRepoURL={'https://github.com/pranithgunda/my-first-blog'} color={'black'}/>
                </Col>
                <Col>
                    <ProjectCard src={'../../../public/images/techblog.gif'} alt={'Tech Blog Press'} projectlink={'https://tech-blog-press.onrender.com/'} gitRepoURL={'https://github.com/pranithgunda/tech-blog-press'} color = {'white'} />
                </Col>
                <Col>
                    <ProjectCard src={'../../../public/images/notetaker.gif'} alt={'Note Taker'} projectlink={'https://note-taker-k1gz.onrender.com/'} gitRepoURL={'https://github.com/pranithgunda/note-taker'} color={'black'}/>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <ProjectCard src={'../../../public/images/kanbanboard.gif'} alt={'Tasks Board'} projectlink={'https://pranithgunda.github.io/tasks-management-board/'} gitRepoURL={'https://github.com/pranithgunda/tasks-management-board'} color = {'black'} />
                </Col>
                <Col>
                    <ProjectCard src={'../../../public/images/weatherforecast.gif'} alt={'Weather Forecast'} projectlink={'https://pranithgunda.github.io/weather-forecast-app/'} gitRepoURL={'https://github.com/pranithgunda/weather-forecast-app'} color={'black'}/>
                </Col>
                <Col>
                    <ProjectCard src={'../../../public/images/tutorhub.gif'} alt={'Tutor Hub'} projectlink={'https://tutorhub-spk8.onrender.com/'} gitRepoURL = {'https://github.com/pranithgunda/tutorHub'} color = {'black'}/>
                </Col>
            </Row>
        </Container>
    )
};

export default Portfolio;