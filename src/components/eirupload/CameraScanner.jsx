import React, { useRef, useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { FaCamera, FaTimes, FaSync, FaCheck } from 'react-icons/fa';

const CameraScanner = ({ show, onClose, onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState('');

  // Start camera
  const startCamera = async () => {
    try {
      setError('');
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      setError('Camera access denied. Please check permissions.');
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  // Capture image
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const file = new File([blob], `scan-${Date.now()}.jpg`, { type: 'image/jpeg' });
        setCapturedImage(file);
      }, 'image/jpeg', 0.8);
    }
  };

  // Retake photo
  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera();
  };

  // Use captured image
  const useCapturedImage = () => {
    if (capturedImage) {
      onCapture(capturedImage);
      stopCamera();
      onClose();
    }
  };

  // Initialize camera when modal opens/closes
  useEffect(() => {
    if (show) {
      startCamera();
    } else {
      stopCamera();
      setCapturedImage(null);
      setError('');
    }

    return () => stopCamera();
  }, [show]);

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
<Modal.Header className="border-0 text-white d-flex justify-content-between align-items-center w-100" style={{
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
}}>
  <Modal.Title className="mb-0">
    <FaCamera className="me-2" />
    Document Scanner
  </Modal.Title>
  <Button variant="light" size="sm" onClick={onClose} className="rounded-circle">
    <FaTimes />
  </Button>
</Modal.Header>

      <Modal.Body className="p-0 text-center">
        {error && (
          <Alert variant="danger" className="m-3">
            {error}
          </Alert>
        )}

        {!capturedImage ? (
          <div className="position-relative" style={{ height: '60vh' }}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-100 h-100"
              style={{ objectFit: 'cover', background: '#000' }}
            />
            
            {/* Scanner overlay - 90% of view */}
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="border-2 border-white rounded" style={{ 
                width: '90%', 
                height: '90%',
                boxShadow: '0 0 0 9999px rgba(0,0,0,0.4)'
              }} />
            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="mb-3">
              <FaCheck className="text-success fs-1" />
              <h5 className="text-success mt-2">Document Captured!</h5>
            </div>
            
            <img 
              src={URL.createObjectURL(capturedImage)} 
              alt="Captured document"
              className="img-fluid rounded shadow mb-4"
              style={{ maxHeight: '300px' }}
            />

            <div className="d-flex gap-3 justify-content-center">
              <Button variant="outline-secondary" onClick={retakePhoto}>
                <FaSync className="me-2" />
                Retake
              </Button>
              <Button variant="primary" onClick={useCapturedImage}>
                <FaCheck className="me-2" />
                Use Photo
              </Button>
            </div>
          </div>
        )}

        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </Modal.Body>

      {!capturedImage && stream && !error && (
        <Modal.Footer className="border-0 justify-content-center">
          <Button
            variant="primary"
            size="lg"
            onClick={captureImage}
            className="rounded-circle"
            style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
          >
            <FaCamera />
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CameraScanner;