import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import NavLayout from '../components/navbar/NavLayout';
import UploadSection from '../components/eirupload/UploadSection';
import CameraScanner from '../components/eirupload/CameraScanner';
import EIRForm from '../components/eirupload/EIRForm';
import AiBG from '../assets/bg/bg2.jpg';

const EirUpload = () => {
  // State management
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showEIRForm, setShowEIRForm] = useState(false);
  const [eirData, setEirData] = useState({
    containerNo: '',
    eirNo: '',
    vehicleNo: '',
    grossWeight: '',
    sealNo: '',
    eirDateTime: '',
    isoCode: '',
    scannedStatus: 'Pending'
  });
  const [showCamera, setShowCamera] = useState(false);

  // Camera handler
  const handleCameraCapture = (file) => {
    setSelectedFile(file);
    setShowCamera(false);
    // Auto-process after camera capture
    setTimeout(() => {
      handleProcessDocument();
    }, 1000);
  };

  // Handler functions
  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.jpg,.jpeg,.png,.doc,.docx';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
      }
    };
    input.click();
  };

  const handleCameraClick = () => {
    setShowCamera(true);
  };

  const handleProcessDocument = () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate processing with cyber-tech vibes
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Mock auto-filled data with realistic values
          setEirData({
            containerNo: 'CMAU 123456 7',
            eirNo: 'EIR-2024-00123',
            vehicleNo: 'TRUCK-789-XYZ',
            grossWeight: '28,500 KG',
            sealNo: 'SL-456789-A1',
            eirDateTime: '2024-01-15 14:30:00 UTC',
            isoCode: '42G1',
            scannedStatus: 'Completed'
          });
          
          setShowEIRForm(true);
          return 100;
        }
        return prev + 5; // Slower for dramatic effect
      });
    }, 150);
  };

  const handleClearSelection = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setShowEIRForm(false);
    setEirData({
      containerNo: '',
      eirNo: '',
      vehicleNo: '',
      grossWeight: '',
      sealNo: '',
      eirDateTime: '',
      isoCode: '',
      scannedStatus: 'Pending'
    });
  };

  const handleSaveEIR = () => {
    // Cyber-tech save animation
    setIsUploading(true);
    setUploadProgress(0);
    
    const saveInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(saveInterval);
          setIsUploading(false);
          console.log('EIR Data Secured:', eirData);
          
          // Cyber success notification
          setTimeout(() => {
            alert('🚀 EIR DATA SECURED IN QUANTUM STORAGE!');
          }, 500);
          
          return 100;
        }
        return prev + 20;
      });
    }, 100);
  };

  return (
    <NavLayout>
      {/* 🎨 LAYERED BACKGROUND START */}
      
      {/* LAYER 1: Your AI Background Image (Fixed) */}
      <div 
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${AiBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          zIndex: -3,
          // Subtle image enhancement
          filter: 'brightness(0.7) contrast(1.1) saturate(1.1)'
        }}
      />
      
      {/* LAYER 2: Color Overlay (Cyber Gradient) */}
      <div 
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 10, 26, 0.85) 0%, rgba(26, 26, 46, 0.90) 50%, rgba(10, 10, 26, 0.85) 100%)',
          zIndex: -2
        }}
      />
      
      {/* LAYER 3: Animated Elements */}
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
        {/* Animated Grid */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(180deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
        
        {/* Floating Tech Orbs - BLUE */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`blue-${i}`}
            className="position-absolute rounded-circle"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Floating Tech Orbs - PURPLE */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`purple-${i}`}
            className="position-absolute rounded-circle"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              background: `radial-gradient(circle, rgba(185, 103, 255, 0.08) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(30px)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Data Stream Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="position-absolute"
            style={{
              width: '2px',
              height: '200%',
              background: 'linear-gradient(to bottom, transparent, #00f0ff, transparent)',
              left: `${20 + i * 30}%`,
              top: '-50%',
              filter: 'blur(1px)',
              opacity: 0.6
            }}
            animate={{
              y: ['0%', '100%'],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      {/* 🎨 LAYERED BACKGROUND END */}

      <Container fluid className="py-4 position-relative" style={{ zIndex: 1, background: 'transparent' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Cyber Header */}
          <Row className="mb-5">
            <Col className="text-center">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="position-relative"
              >
                {/* Header Glow Effect */}
                <div className="position-absolute top-50 start-50 translate-middle w-100 h-100"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1
                  }}
                />
                
                <motion.h1 
                  className="display-4 fw-bold mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #00f0ff 0%, #b967ff 50%, #00ff41 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(0, 240, 255, 0.5)'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  QUANTUM EIR PROCESSOR
                </motion.h1>
                
                <motion.p 
                  className="lead mb-4"
                  style={{ 
                    color: '#b967ff',
                    textShadow: '0 0 20px rgba(185, 103, 255, 0.5)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  ADVANCED DOCUMENT INGESTION SYSTEM • AI-POWERED DATA EXTRACTION
                </motion.p>

                {/* System Status Bar */}
                <motion.div 
                  className="d-flex justify-content-center align-items-center gap-3 mt-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <motion.div
                      className="rounded-circle"
                      style={{
                        width: '12px',
                        height: '12px',
                        background: 'linear-gradient(135deg, #00ff41 0%, #00b336 100%)',
                        boxShadow: '0 0 15px #00ff41'
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span style={{ color: '#00f0ff', fontSize: '0.9rem', fontWeight: '500' }}>
                      SYSTEM ONLINE
                    </span>
                  </div>
                  
                  <div style={{ color: '#b967ff', fontSize: '0.9rem' }}>|</div>
                  
                  <div className="d-flex align-items-center gap-2">
                    <motion.div
                      className="rounded-circle"
                      style={{
                        width: '12px',
                        height: '12px',
                        background: 'linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)',
                        boxShadow: '0 0 15px #00f0ff'
                      }}
                    />
                    <span style={{ color: '#00f0ff', fontSize: '0.9rem', fontWeight: '500' }}>
                      AI PROCESSOR ACTIVE
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>

          {/* Main Content Area */}
          <Row className="justify-content-center">
            <Col xl={10} xxl={8}>
              {/* Upload Section */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <UploadSection 
                  selectedFile={selectedFile}
                  isUploading={isUploading}
                  uploadProgress={uploadProgress}
                  onFileSelect={handleFileSelect}
                  onCameraClick={handleCameraClick}
                  onProcessDocument={handleProcessDocument}
                  onClearSelection={handleClearSelection}
                />
              </motion.div>

              {/* EIR Form - Animated Entrance */}
              <AnimatePresence>
                {showEIRForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="mt-5"
                  >
                    <EIRForm 
                      eirData={eirData}
                      onProcessNew={handleClearSelection}
                      onSave={handleSaveEIR}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Processing Status */}
              {isUploading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-4"
                >
                  <motion.p
                    style={{ color: '#00f0ff' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    QUANTUM ANALYSIS IN PROGRESS • SECURING DATA STREAMS
                  </motion.p>
                </motion.div>
              )}
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Camera Scanner Modal */}
      <CameraScanner 
        show={showCamera}
        onClose={() => setShowCamera(false)}
        onCapture={handleCameraCapture}
      />


    </NavLayout>
  );
};

export default EirUpload;