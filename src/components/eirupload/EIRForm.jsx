import React from "react";
import { motion } from "framer-motion";
import { Card, Button, Badge, Form, Row, Col } from "react-bootstrap";
import {
  FaFileAlt,
  FaBox,
  FaFile,
  FaTruck,
  FaWeight,
  FaLock,
  FaCalendar,
  FaCode,
  FaCheck,
  FaMicrochip,
} from "react-icons/fa";

const EIRForm = ({ eirData, onProcessNew, onSave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mt-5"
    >
      {/* Tech Background Particles */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
        style={{ zIndex: -1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: "3px",
              height: "3px",
              background: `radial-gradient(circle, #00f0ff, #b967ff)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Card
        className="border-0 position-relative overflow-hidden"
        style={{
          background: "rgba(10, 10, 26, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          boxShadow: "0 0 30px rgba(0, 240, 255, 0.1)",
        }}
      >
        {/* Animated Border Glow */}
        <motion.div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(45deg, #00f0ff, #b967ff, #00ff41, #00f0ff)",
            backgroundSize: "400% 400%",
            opacity: 0.1,
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Form Header - Matching Sidebar Header */}
        <div
          className="py-4 px-5 position-relative"
          style={{
            background: "rgba(0, 240, 255, 0.1)",
            backdropFilter: "blur(15px)",
            borderBottom: "1px solid rgba(0, 240, 255, 0.3)",
          }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <motion.div
                className="rounded-3 d-flex align-items-center justify-content-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
                style={{
                  width: "50px",
                  height: "50px",
                  background:
                    "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                  boxShadow: "0 0 25px rgba(0, 240, 255, 0.4)",
                }}
              >
                <FaFileAlt className="text-white fs-4" />
              </motion.div>
              <div>
                <h2 className="h4 fw-bold mb-1" style={{ color: "#00f0ff" }}>
                  EIR Information
                </h2>
                <p className="mb-0" style={{ color: "#b967ff", opacity: 0.8 }}>
                  Extracted from Document Analysis
                </p>
              </div>
            </div>
            <Badge
              className="fs-6 px-3 py-2"
              style={{
                background: "linear-gradient(135deg, #00ff41 0%, #00b336 100%)",
                border: "none",
                boxShadow: "0 0 15px rgba(0, 255, 65, 0.3)",
                color: "white",
              }}
            >
              Auto-filled
            </Badge>
          </div>
        </div>

        {/* Form Body */}
        <Card.Body className="p-5 position-relative">
          <Row className="g-4">
            {/* Container No */}
            {/* Container No */}
{/* Container No */}
<Col md={6}>
  <Form.Group>
    <Form.Label className="fw-semibold d-flex align-items-center gap-2 mb-3" style={{ color: '#00f0ff' }}>
      <FaBox className="fs-5" />
      Container No
    </Form.Label>
    <div className="position-relative" style={{ overflow: 'hidden' }}>
      <Form.Control
        type="text"
        value={eirData.containerNo}
        readOnly
        className="border-0 py-3 rounded-3 text-white position-relative"
        style={{
          background: "rgba(0, 240, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          zIndex: 2
        }}
      />
      {/* Fixed Scanning Effect */}
      <motion.div
        className="position-absolute top-0 start-0 h-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)",
          width: '100%',
          zIndex: 1,
          filter: 'blur(0.5px)'
        }}
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 0,
          ease: "easeInOut"
        }}
      />
    </div>
  </Form.Group>
</Col>

{/* EIR No */}
<Col md={6}>
  <Form.Group>
    <Form.Label className="fw-semibold d-flex align-items-center gap-2 mb-3" style={{ color: '#00f0ff' }}>
      <FaFile className="fs-5" />
      EIR No
    </Form.Label>
    <div className="position-relative" style={{ overflow: 'hidden' }}>
      <Form.Control
        type="text"
        value={eirData.eirNo}
        readOnly
        className="border-0 py-3 rounded-3 text-white position-relative"
        style={{
          background: "rgba(0, 240, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          zIndex: 2
        }}
      />
      <motion.div
        className="position-absolute top-0 start-0 h-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)",
          width: '100%',
          zIndex: 1,
          filter: 'blur(0.5px)'
        }}
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 0.4,
          ease: "easeInOut"
        }}
      />
    </div>
  </Form.Group>
</Col>

{/* Vehicle No */}
<Col md={6}>
  <Form.Group>
    <Form.Label className="fw-semibold d-flex align-items-center gap-2 mb-3" style={{ color: '#00f0ff' }}>
      <FaTruck className="fs-5" />
      Vehicle No
    </Form.Label>
    <div className="position-relative" style={{ overflow: 'hidden' }}>
      <Form.Control
        type="text"
        value={eirData.vehicleNo}
        readOnly
        className="border-0 py-3 rounded-3 text-white position-relative"
        style={{
          background: "rgba(0, 240, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          zIndex: 2
        }}
      />
      <motion.div
        className="position-absolute top-0 start-0 h-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)",
          width: '100%',
          zIndex: 1,
          filter: 'blur(0.5px)'
        }}
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 0.8,
          ease: "easeInOut"
        }}
      />
    </div>
  </Form.Group>
</Col>

{/* Gross Weight */}
<Col md={6}>
  <Form.Group>
    <Form.Label className="fw-semibold d-flex align-items-center gap-2 mb-3" style={{ color: '#00f0ff' }}>
      <FaWeight className="fs-5" />
      Gross Weight
    </Form.Label>
    <div className="position-relative" style={{ overflow: 'hidden' }}>
      <Form.Control
        type="text"
        value={eirData.grossWeight}
        readOnly
        className="border-0 py-3 rounded-3 text-white position-relative"
        style={{
          background: "rgba(0, 240, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          zIndex: 2
        }}
      />
      <motion.div
        className="position-absolute top-0 start-0 h-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)",
          width: '100%',
          zIndex: 1,
          filter: 'blur(0.5px)'
        }}
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 1.2,
          ease: "easeInOut"
        }}
      />
    </div>
  </Form.Group>
</Col>

{/* Seal No */}
<Col md={6}>
  <Form.Group>
    <Form.Label className="fw-semibold d-flex align-items-center gap-2 mb-3" style={{ color: '#00f0ff' }}>
      <FaLock className="fs-5" />
      Seal No
    </Form.Label>
    <div className="position-relative" style={{ overflow: 'hidden' }}>
      <Form.Control
        type="text"
        value={eirData.sealNo}
        readOnly
        className="border-0 py-3 rounded-3 text-white position-relative"
        style={{
          background: "rgba(0, 240, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          zIndex: 2
        }}
      />
      <motion.div
        className="position-absolute top-0 start-0 h-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)",
          width: '100%',
          zIndex: 1,
          filter: 'blur(0.5px)'
        }}
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 1.6,
          ease: "easeInOut"
        }}
      />
    </div>
  </Form.Group>
</Col>

{/* EIR Date/Time */}
<Col md={6}>
  <Form.Group>
    <Form.Label className="fw-semibold d-flex align-items-center gap-2 mb-3" style={{ color: '#00f0ff' }}>
      <FaCalendar className="fs-5" />
      EIR Date/Time
    </Form.Label>
    <div className="position-relative" style={{ overflow: 'hidden' }}>
      <Form.Control
        type="text"
        value={eirData.eirDateTime}
        readOnly
        className="border-0 py-3 rounded-3 text-white position-relative"
        style={{
          background: "rgba(0, 240, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          zIndex: 2
        }}
      />
      <motion.div
        className="position-absolute top-0 start-0 h-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)",
          width: '100%',
          zIndex: 1,
          filter: 'blur(0.5px)'
        }}
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 2.0,
          ease: "easeInOut"
        }}
      />
    </div>
  </Form.Group>
</Col>

{/* ISO Code */}
<Col md={6}>
  <Form.Group>
    <Form.Label className="fw-semibold d-flex align-items-center gap-2 mb-3" style={{ color: '#00f0ff' }}>
      <FaCode className="fs-5" />
      ISO Code
    </Form.Label>
    <div className="position-relative" style={{ overflow: 'hidden' }}>
      <Form.Control
        type="text"
        value={eirData.isoCode}
        readOnly
        className="border-0 py-3 rounded-3 text-white position-relative"
        style={{
          background: "rgba(0, 240, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          zIndex: 2
        }}
      />
      <motion.div
        className="position-absolute top-0 start-0 h-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)",
          width: '100%',
          zIndex: 1,
          filter: 'blur(0.5px)'
        }}
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 2.4,
          ease: "easeInOut"
        }}
      />
    </div>
  </Form.Group>
</Col>
          </Row>

          {/* Action Buttons - Matching Sidebar Style */}
          <Row
            className="mt-5 pt-4 border-top"
            style={{ borderColor: "rgba(0, 240, 255, 0.3)" }}
          >
            <Col className="d-flex gap-3 justify-content-end">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-3 px-4 py-3 fw-semibold"
                  onClick={onProcessNew}
                  style={{
                    background: "rgba(255, 0, 128, 0.1)",
                    border: "1px solid rgba(255, 0, 128, 0.3)",
                    color: "#ff0080",
                  }}
                >
                  Process New Document
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="rounded-3 px-4 py-3 fw-semibold border-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                    boxShadow: "0 0 25px rgba(0, 240, 255, 0.4)",
                    color: "white",
                  }}
                  onClick={onSave}
                >
                  Save EIR Data
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default EIRForm;
