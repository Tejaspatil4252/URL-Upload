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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  // Background animation styles
  const backgroundStyles = {
    mainBg: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${AiBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      zIndex: -3,
      filter: 'brightness(0.7) contrast(1.1) saturate(1.1)'
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(10, 10, 26, 0.85) 0%, rgba(26, 26, 46, 0.90) 50%, rgba(10, 10, 26, 0.85) 100%)',
      zIndex: -2
    },
    grid: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `
        linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px),
        linear-gradient(180deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
    },
    statusDot: {
      width: '12px',
      height: '12px',
      background: 'linear-gradient(135deg, #00ff41 0%, #00b336 100%)',
      boxShadow: '0 0 15px #00ff41',
      borderRadius: '50%'
    },
    statusDotAI: {
      width: '12px',
      height: '12px',
      background: 'linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)',
      boxShadow: '0 0 15px #00f0ff',
      borderRadius: '50%'
    }
  };

  // Camera handler
  const handleCameraCapture = (file) => {
    setSelectedFile(file);
    setShowCamera(false);
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

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
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
        return prev + 5;
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
    setIsUploading(true);
    setUploadProgress(0);
    
    const saveInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(saveInterval);
          setIsUploading(false);
          console.log('EIR Data Secured:', eirData);
          
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
      
      {/* LAYER 1: Background Image */}
      <motion.div 
        style={backgroundStyles.mainBg}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* LAYER 2: Color Overlay */}
      <motion.div 
        style={backgroundStyles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* LAYER 3: Animated Elements */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        {/* Animated Grid */}
        <motion.div 
          style={backgroundStyles.grid}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Tech Orbs - BLUE */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`blue-${i}`}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              background: `radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(30px)'
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating Tech Orbs - PURPLE */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`purple-${i}`}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              background: `radial-gradient(circle, rgba(185, 103, 255, 0.12) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(25px)'
            }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.15, 0.35, 0.15],
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Data Stream Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            style={{
              position: 'absolute',
              width: '1px',
              height: '150%',
              background: 'linear-gradient(to bottom, transparent 0%, #00f0ff 30%, #b967ff 70%, transparent 100%)',
              left: `${15 + i * 25}%`,
              top: '-25%',
              filter: 'blur(0.5px)',
              opacity: 0.4
            }}
            animate={{
              y: ['0%', '50%'],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3
            }}
          />
        ))}

        {/* Pulse Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              width: '400px',
              height: '400px',
              border: '1px solid rgba(0, 240, 255, 0.1)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [0.8, 1.5, 0.8],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      {/* 🎨 LAYERED BACKGROUND END */}

      <Container fluid className="py-4 position-relative" style={{ zIndex: 1, background: 'transparent' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Cyber Header */}
          <Row className="mb-5">
            <Col className="text-center">
              <motion.div
                variants={headerVariants}
                style={{ position: 'relative' }}
              >
                {/* Header Glow Effect */}
                <motion.div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: -1
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.h1 
                  className="display-4 fw-bold mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #00f0ff 0%, #b967ff 50%, #00ff41 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 40px rgba(0, 240, 255, 0.7)',
                    fontFamily: 'Courier New, monospace',
                    letterSpacing: '2px'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  QUANTUM EIR PROCESSOR
                </motion.h1>
                
                <motion.p 
                  className="lead mb-4"
                  variants={itemVariants}
                  style={{ 
                    color: '#b967ff',
                    textShadow: '0 0 25px rgba(185, 103, 255, 0.6)',
                    fontFamily: 'Courier New, monospace',
                    letterSpacing: '1px',
                    fontWeight: '500'
                  }}
                >
                  ADVANCED DOCUMENT INGESTION SYSTEM • AI-POWERED DATA EXTRACTION
                </motion.p>

                {/* System Status Bar */}
                <motion.div 
                  className="d-flex justify-content-center align-items-center gap-3 mt-4"
                  variants={itemVariants}
                >
                  <div className="d-flex align-items-center gap-2">
                    <motion.div
                      style={backgroundStyles.statusDot}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span style={{ 
                      color: '#00f0ff', 
                      fontSize: '0.9rem', 
                      fontWeight: '500',
                      fontFamily: 'Courier New, monospace',
                      letterSpacing: '1px'
                    }}>
                      SYSTEM ONLINE
                    </span>
                  </div>
                  
                  <div style={{ 
                    color: '#b967ff', 
                    fontSize: '0.9rem',
                    opacity: 0.7 
                  }}>|</div>
                  
                  <div className="d-flex align-items-center gap-2">
                    <motion.div
                      style={backgroundStyles.statusDotAI}
                    />
                    <span style={{ 
                      color: '#00f0ff', 
                      fontSize: '0.9rem', 
                      fontWeight: '500',
                      fontFamily: 'Courier New, monospace',
                      letterSpacing: '1px'
                    }}>
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
              <motion.div variants={itemVariants}>
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
              <AnimatePresence mode="wait">
                {showEIRForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20,
                      duration: 0.6
                    }}
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
              <AnimatePresence>
                {isUploading && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center mt-4"
                  >
                    <motion.p
                      style={{ 
                        color: '#00f0ff',
                        fontFamily: 'Courier New, monospace',
                        letterSpacing: '1px',
                        fontWeight: '500',
                        textShadow: '0 0 15px rgba(0, 240, 255, 0.5)'
                      }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    >
                      QUANTUM ANALYSIS IN PROGRESS • SECURING DATA STREAMS
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
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