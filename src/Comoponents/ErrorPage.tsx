import { Container, Row, Col } from "react-bootstrap"

const ErrorPage = () => {
    return (
    <Container>
<Row className="mt-5">
    <Col className="text-center">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>Not Found</p>
    </Col>
</Row>
    </Container>
    )
}

export default ErrorPage