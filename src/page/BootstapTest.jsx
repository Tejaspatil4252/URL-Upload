    import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Alert, 
  Badge, 
  Nav,
  Form,
  InputGroup,
  Table,
  ProgressBar,
  Spinner
} from 'react-bootstrap';

const BootstrapTest = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-primary">Bootstrap React Test</h1>
          <p className="text-center text-muted">Check if all Bootstrap components are working</p>
        </Col>
      </Row>

      {/* 1. Grid System Test */}
      <Row className="mb-4">
        <Col>
          <h3>1. Grid System</h3>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} className="p-3 bg-primary text-white text-center">
          Column 1
        </Col>
        <Col md={4} className="p-3 bg-success text-white text-center">
          Column 2
        </Col>
        <Col md={4} className="p-3 bg-warning text-white text-center">
          Column 3
        </Col>
      </Row>

      {/* 2. Buttons Test */}
      <Row className="mb-4">
        <Col>
          <h3>2. Buttons</h3>
          <div className="d-flex gap-2 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
          </div>
        </Col>
      </Row>

      {/* 3. Cards Test */}
      <Row className="mb-4">
        <Col>
          <h3>3. Cards</h3>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Card Header</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>This is a sample card with some content.</Card.Text>
              <Button variant="primary">Card Button</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card bg="dark" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Dark Card</Card.Title>
              <Card.Text>Card with dark background.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 4. Alerts Test */}
      <Row className="mb-4">
        <Col>
          <h3>4. Alerts</h3>
          <Alert variant="success">Success alert!</Alert>
          <Alert variant="danger">Danger alert!</Alert>
          <Alert variant="warning">Warning alert!</Alert>
          <Alert variant="info">Info alert!</Alert>
        </Col>
      </Row>

      {/* 5. Badges Test */}
      <Row className="mb-4">
        <Col>
          <h3>5. Badges</h3>
          <div className="d-flex gap-2 flex-wrap">
            <Badge bg="primary">Primary</Badge>
            <Badge bg="secondary">Secondary</Badge>
            <Badge bg="success">Success</Badge>
            <Badge bg="danger">Danger</Badge>
            <Badge bg="warning" text="dark">Warning</Badge>
            <Badge bg="info">Info</Badge>
          </div>
        </Col>
      </Row>

      {/* 6. Forms Test */}
      <Row className="mb-4">
        <Col>
          <h3>6. Forms</h3>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control placeholder="Username" />
            </InputGroup>
          </Form>
        </Col>
      </Row>

      {/* 7. Table Test */}
      <Row className="mb-4">
        <Col>
          <h3>7. Table</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td><Badge bg="success">Active</Badge></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td><Badge bg="warning">Pending</Badge></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* 8. Progress Bars & Spinners */}
      <Row className="mb-4">
        <Col>
          <h3>8. Progress & Loading</h3>
          <ProgressBar now={65} className="mb-3" variant="success" />
          <ProgressBar now={40} className="mb-3" variant="warning" />
          <div className="d-flex gap-3">
            <Spinner animation="border" variant="primary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="border" variant="danger" />
          </div>
        </Col>
      </Row>

      {/* 9. Navigation Test */}
      <Row className="mb-4">
        <Col>
          <h3>9. Navigation</h3>
          <Nav variant="pills" className="mb-3">
            <Nav.Item>
              <Nav.Link active>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Another Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      {/* 10. Responsive Test */}
      <Row className="mb-4">
        <Col>
          <h3>10. Responsive Text</h3>
          <p className="text-primary d-none d-md-block">Visible on medium screens and up</p>
          <p className="text-success d-md-none">Visible on small screens only</p>
        </Col>
      </Row>

      {/* Test Results */}
      <Row>
        <Col>
          <Card bg="light">
            <Card.Body>
              <Card.Title>Test Results</Card.Title>
              <Card.Text>
                If you can see all components above with proper styling, colors, and layout, 
                then Bootstrap React is working perfectly! ✅
              </Card.Text>
              <Alert variant="success" className="mb-0">
                <strong>Success!</strong> All Bootstrap components are loading correctly.
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BootstrapTest;