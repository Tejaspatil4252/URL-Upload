import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, Form, Row, Col } from 'react-bootstrap';
import { 
   FaFileAlt,
  FaBox,
  FaFile,
  FaTruck,
  FaWeight,
   FaLock,
  FaCalendar,
  FaCode,
  FaCheck
} from 'react-icons/fa';

const EIRForm = ({ eirData, onProcessNew, onSave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mt-5"
    >
      <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
        {/* Form Header */}
        <div 
          className="py-3 px-5 text-white"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <FaFileAlt className="fs-4" />
            <h3 className="h5 fw-bold mb-0">EIR Information</h3>
            <Badge bg="light" text="success" className="ms-auto">
              Auto-filled from Document
            </Badge>
          </div>
        </div>

        {/* Form Body */}
        <Card.Body className="p-5">
          <Row className="g-4">
            {/* Container No */}
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary">
                  <FaBox className="me-2 text-primary" />
                  Container No
                </Form.Label>
                <Form.Control
                  type="text"
                  value={eirData.containerNo}
                  readOnly
                  className="border-0 bg-light py-3 rounded-3"
                />
              </Form.Group>
            </Col>

            {/* EIR No */}
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary">
                  <FaFile className="me-2 text-primary" />
                  EIR No
                </Form.Label>
                <Form.Control
                  type="text"
                  value={eirData.eirNo}
                  readOnly
                  className="border-0 bg-light py-3 rounded-3"
                />
              </Form.Group>
            </Col>

            {/* Vehicle No */}
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary">
                  <FaTruck className="me-2 text-primary" />
                  Vehicle No
                </Form.Label>
                <Form.Control
                  type="text"
                  value={eirData.vehicleNo}
                  readOnly
                  className="border-0 bg-light py-3 rounded-3"
                />
              </Form.Group>
            </Col>

            {/* Gross Weight */}
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary">
                  <FaWeight className="me-2 text-primary" />
                  Gross Weight
                </Form.Label>
                <Form.Control
                  type="text"
                  value={eirData.grossWeight}
                  readOnly
                  className="border-0 bg-light py-3 rounded-3"
                />
              </Form.Group>
            </Col>

            {/* Seal No */}
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary">
                   <FaLock className="me-2 text-primary" />
                  Seal No
                </Form.Label>
                <Form.Control
                  type="text"
                  value={eirData.sealNo}
                  readOnly
                  className="border-0 bg-light py-3 rounded-3"
                />
              </Form.Group>
            </Col>

            {/* EIR Date/Time */}
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary">
                  <FaCalendar className="me-2 text-primary" />
                  EIR Date/Time
                </Form.Label>
                <Form.Control
                  type="text"
                  value={eirData.eirDateTime}
                  readOnly
                  className="border-0 bg-light py-3 rounded-3"
                />
              </Form.Group>
            </Col>

            {/* ISO Code */}
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary">
                  <FaCode className="me-2 text-primary" />
                  ISO Code
                </Form.Label>
                <Form.Control
                  type="text"
                  value={eirData.isoCode}
                  readOnly
                  className="border-0 bg-light py-3 rounded-3"
                />
              </Form.Group>
            </Col>

            {/* Scanned Status */}
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary">
                  <FaCheck className="me-2 text-primary" />
                  Scanned Status
                </Form.Label>
                <div>
                  <Badge 
                    bg={eirData.scannedStatus === 'Completed' ? 'success' : 'warning'}
                    className="fs-6 px-3 py-2 rounded-3 w-100 text-center"
                  >
                    {eirData.scannedStatus}
                  </Badge>
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Action Buttons */}
          <Row className="mt-4">
            <Col className="d-flex gap-3 justify-content-end">
              <Button
                variant="outline-secondary"
                size="lg"
                className="rounded-3 px-4"
                onClick={onProcessNew}
              >
                Process New Document
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="rounded-3 px-4"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none'
                }}
                onClick={onSave}
              >
                Save EIR Data
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default EIRForm;