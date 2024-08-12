import { Container, Row, Col, Image, Nav, NavLink } from "react-bootstrap"

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-light p-1">
                    <Col></Col>
                    <Col>
                        <a href='https://github.com/pranithgunda' target='_blank'>
                            <Image
                                src="assets/images/giticon.png" alt="Github" className="mx-4">
                            </Image></a>
                        <a href='https://www.linkedin.com/in/pranith-gunda/' target='_blank'><Image
                            src="assets/images/linkedinicon.png" alt="LinkedIn" className="mx-4">
                        </Image></a>
                        <a href='https://stackoverflow.com/users/26727918/pranith-gunda' target='_blank'><Image
                            src="assets/images/stackoverflowicon.png" alt="Stackoverflow" className="mx-4">
                        </Image></a>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </footer >
    )
};

export default Footer;