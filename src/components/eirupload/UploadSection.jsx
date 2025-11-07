import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, ProgressBar } from 'react-bootstrap';
import { 
  FaUpload, 
  FaCamera, 
  FaCheck, 
  FaFile, 
  FaTimes,
  FaCloudUploadAlt,
  FaImage,
  FaFilePdf,
  FaFileWord
} from 'react-icons/fa';

const UploadSection = ({ 
  selectedFile, 
  isUploading, 
  uploadProgress, 
  onFileSelect, 
  onCameraClick, 
  onProcessDocument, 
  onClearSelection 
}) => {
  
  const getFileIcon = (fileName) => {
    if (fileName?.match(/\.(jpg|jpeg|png)$/i)) return <FaImage className="text-primary" />;
    if (fileName?.match(/\.pdf$/i)) return <FaFilePdf className="text-danger" />;
    if (fileName?.match(/\.(doc|docx)$/i)) return <FaFileWord className="text-primary" />;
    return <FaFile className="text-secondary" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
        {/* Card Header */}
        <div 
          className="py-4 px-5 text-white"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <FaCloudUploadAlt className="fs-4" />
              </div>
              <div>
                <h2 className="h4 fw-bold mb-1">EIR Document Upload</h2>
                <p className="mb-0 opacity-75">Supported: PDF, JPG, PNG, DOC • Max 10MB</p>
              </div>
            </div>
            <Badge 
              bg="light" 
              text="dark" 
              className="fs-6 px-3 py-2"
            >
              EIR Processing
            </Badge>
          </div>
        </div>

        {/* Card Body */}
        <Card.Body className="p-5">
          {/* File Selection Display */}
          {selectedFile ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-success bg-opacity-10 border border-success border-opacity-25 rounded-3 p-4 mb-4"
            >
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  {getFileIcon(selectedFile.name)}
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <FaCheck className="text-success fs-6" />
                      <span className="fw-semibold text-success">File Ready for Processing</span>
                    </div>
                    <p className="text-success mb-1">{selectedFile.name}</p>
                    <small className="text-success text-opacity-75">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </small>
                  </div>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={onClearSelection}
                  className="rounded-2"
                >
                  <FaTimes className="me-1" />
                  Clear
                </Button>
              </div>

              {/* Upload Progress */}
              {isUploading && (
                <div className="mt-3">
                  <div className="d-flex justify-content-between text-sm text-success mb-2">
                    <span>Processing Document...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <ProgressBar 
                    now={uploadProgress} 
                    variant="success"
                    className="rounded-2"
                    style={{ height: '8px' }}
                  />
                </div>
              )}
            </motion.div>
          ) : (
            /* Upload Area */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-5 border-2 border-dashed border-secondary border-opacity-25 rounded-3 mb-4 bg-light bg-opacity-50 cursor-pointer"
              onClick={onFileSelect}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaCloudUploadAlt className="text-secondary text-opacity-50 mb-3" style={{ fontSize: '3rem' }} />
              <h4 className="fw-semibold text-secondary mb-2">Drop EIR Document Here</h4>
              <p className="text-secondary text-opacity-75 mb-2">or click to browse files</p>
              <small className="text-secondary text-opacity-50">
                PDF, JPG, PNG, DOC up to 10MB
              </small>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="row g-3">
            <div className="col-md-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline-primary"
                  size="lg"
                  onClick={onCameraClick}
                  className="w-100 py-3 rounded-3 border-2 fw-semibold d-flex align-items-center justify-content-center gap-3"
                >
                  <FaCamera className="fs-5" />
                  Scan with Camera
                </Button>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant={selectedFile ? "success" : "primary"}
                  size="lg"
                  onClick={selectedFile ? onProcessDocument : onFileSelect}
                  disabled={isUploading}
                  className="w-100 py-3 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-3"
                  style={{
                    background: selectedFile 
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none'
                  }}
                >
                  <FaUpload className="fs-5" />
                  {selectedFile ? (isUploading ? 'Processing...' : 'Process Document') : 'Select File'}
                </Button>
              </motion.div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default UploadSection;