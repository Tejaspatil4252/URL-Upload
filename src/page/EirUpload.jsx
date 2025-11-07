import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import NavLayout from '../components/navbar/NavLayout';
import UploadSection from '../components/eirupload/UploadSection';
import CameraScanner from '../components/eirupload/CameraScanner';
import EIRForm from '../components/eirupload/EIRForm';

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
    setShowCamera(true); // ← Show camera modal
  };

  const handleProcessDocument = () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate processing
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Mock auto-filled data
          setEirData({
            containerNo: 'CMAU 123456 7',
            eirNo: 'EIR-2024-00123',
            vehicleNo: 'TRUCK-789-XYZ',
            grossWeight: '28,500 kg',
            sealNo: 'SL-456789',
            eirDateTime: '2024-01-15 14:30:00',
            isoCode: '42G1',
            scannedStatus: 'Completed'
          });
          
          setShowEIRForm(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
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
    // Save logic here
    console.log('Saving EIR data:', eirData);
    alert('EIR Data Saved Successfully!');
  };

  return (
    <NavLayout>
      <Container fluid className="py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <Row className="mb-5">
            <Col className="text-center">
              <motion.h1 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="display-6 fw-bold text-dark mb-3"
              >
                EIR Document Processing
              </motion.h1>
              <p className="text-muted lead">
                Upload Equipment Interchange Receipt documents for automated processing
              </p>
            </Col>
          </Row>

          {/* Upload Section */}
          <Row className="justify-content-center">
            <Col xl={10}>
              <UploadSection 
                selectedFile={selectedFile}
                isUploading={isUploading}
                uploadProgress={uploadProgress}
                onFileSelect={handleFileSelect}
                onCameraClick={handleCameraClick}
                onProcessDocument={handleProcessDocument}
                onClearSelection={handleClearSelection}
              />
            </Col>
          </Row>

          {/* EIR Form - Only show after processing */}
          {showEIRForm && (
            <Row className="justify-content-center mt-4">
              <Col xl={10}>
                <EIRForm 
                  eirData={eirData}
                  onProcessNew={handleClearSelection}
                  onSave={handleSaveEIR}
                />
              </Col>
            </Row>
          )}
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