import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, ProgressBar } from 'react-bootstrap';
import { 
  FaUpload, 
  FaCheck, 
  FaFile, 
  FaTimes,
  FaCloudUploadAlt,
  FaImage,
  FaFilePdf,
  FaFileWord,
  FaMicrochip,
  FaSatellite
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
    if (fileName?.match(/\.(jpg|jpeg|png)$/i)) return <FaImage style={{ color: '#00f0ff' }} />;
    if (fileName?.match(/\.pdf$/i)) return <FaFilePdf style={{ color: '#ff0080' }} />;
    if (fileName?.match(/\.(doc|docx)$/i)) return <FaFileWord style={{ color: '#00f0ff' }} />;
    return <FaFile style={{ color: '#b967ff' }} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Tech Background Particles - Matching Sidebar */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: '3px',
              height: '3px',
              background: `radial-gradient(circle, #00f0ff, #b967ff)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Card className="border-0 position-relative overflow-hidden"
        style={{
          background: "rgba(10, 10, 26, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 240, 255, 0.3)",
          boxShadow: "0 0 30px rgba(0, 240, 255, 0.1)"
        }}
      >
        {/* Animated Border Glow - Matching Sidebar */}
        <motion.div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(45deg, #00f0ff, #b967ff, #00ff41, #00f0ff)",
            backgroundSize: "400% 400%",
            opacity: 0.1,
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Card Header - Matching Sidebar Header */}
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
                  width: '50px',
                  height: '50px',
                  background: "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                  boxShadow: "0 0 25px rgba(0, 240, 255, 0.4)",
                }}
              >
                <FaMicrochip className="text-white fs-4" />
              </motion.div>
              <div>
                <h2 className="h4 fw-bold mb-1" style={{ color: '#00f0ff' }}>EIR Upload</h2>
                <p className="mb-0" style={{ color: '#b967ff', opacity: 0.8 }}>Advanced Document Processing</p>
              </div>
            </div>
            <Badge 
              className="fs-6 px-3 py-2"
              style={{
                background: "linear-gradient(135deg, #00ff41 0%, #00b336 100%)",
                border: "none",
                boxShadow: "0 0 15px rgba(0, 255, 65, 0.3)"
              }}
            >
              System Ready
            </Badge>
          </div>
        </div>

        {/* Card Body - Matching Sidebar Content Area */}
        <Card.Body className="p-5 position-relative">
          {/* File Selection Display - Matching Sidebar Menu Items */}
          {selectedFile ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-3 p-4 mb-4 position-relative overflow-hidden"
              style={{
                background: "rgba(0, 255, 65, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 255, 65, 0.3)",
                boxShadow: "0 0 20px rgba(0, 255, 65, 0.2)"
              }}
            >
              {/* Scanning Effect - Matching Sidebar Holographic Effect */}
              <motion.div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.2), transparent)",
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="d-flex align-items-center justify-content-between position-relative">
                <div className="d-flex align-items-center gap-3">
                  {getFileIcon(selectedFile.name)}
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaCheck style={{ color: '#00ff41', filter: 'drop-shadow(0 0 8px #00ff41)' }} />
                      </motion.div>
                      <span className="fw-semibold" style={{ color: '#00ff41' }}>File Secured</span>
                    </div>
                    <p className="mb-1" style={{ color: '#00ff41' }}>{selectedFile.name}</p>
                    <small style={{ color: '#00ff41', opacity: 0.8 }}>
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Ready for Analysis
                    </small>
                  </div>
                </div>
                <Button
                  onClick={onClearSelection}
                  className="rounded-2"
                  style={{
                    background: "rgba(255, 0, 128, 0.1)",
                    border: "1px solid rgba(255, 0, 128, 0.3)",
                    color: '#ff0080'
                  }}
                >
                  <FaTimes className="me-1" />
                  Clear
                </Button>
              </div>

              {/* Upload Progress - Matching Sidebar Active Indicator */}
              {isUploading && (
                <div className="mt-3 position-relative">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: '#00f0ff' }}>Quantum Processing...</span>
                    <span style={{ color: '#b967ff' }}>{uploadProgress}%</span>
                  </div>
                  <div className="position-relative">
                    <ProgressBar 
                      now={uploadProgress}
                      className="rounded-2"
                      style={{ 
                        height: '8px',
                        background: "rgba(0, 240, 255, 0.1)",
                      }}
                    />
                    <motion.div
                      className="position-absolute top-0 start-0 h-100 rounded-2"
                      style={{
                        background: "linear-gradient(90deg, #00f0ff, #b967ff)",
                        width: `${uploadProgress}%`,
                        boxShadow: "0 0 10px rgba(0, 240, 255, 0.5)"
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(0, 240, 255, 0.5)",
                          "0 0 20px rgba(0, 240, 255, 0.8)",
                          "0 0 10px rgba(0, 240, 255, 0.5)"
                        ]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* Upload Area - Matching Sidebar Empty State */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-5 rounded-3 mb-4 position-relative overflow-hidden cursor-pointer"
              onClick={onFileSelect}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: "rgba(0, 240, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "2px dashed rgba(0, 240, 255, 0.3)",
                boxShadow: "inset 0 0 30px rgba(0, 240, 255, 0.1)"
              }}
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCloudUploadAlt style={{ color: '#00f0ff', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.5))' }} className="mb-3" size="3rem" />
              </motion.div>
              <h4 className="fw-semibold mb-2" style={{ color: '#00f0ff' }}>Initiate Document Transfer</h4>
              <p className="mb-2" style={{ color: '#b967ff' }}>Drop file or click to access system</p>
              <small style={{ color: '#00ff41', opacity: 0.8 }}>
                Secure Protocol: PDF, JPG, PNG, DOC • Max 10MB
              </small>
            </motion.div>
          )}

          {/* Action Buttons - Matching Sidebar Button Styles */}
          <div className="row g-3">
            <div className="col-md-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={onCameraClick}
                  className="w-100 py-3 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-3"
                  style={{
                    background: "rgba(185, 103, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(185, 103, 255, 0.4)",
                    color: '#b967ff',
                    boxShadow: "0 0 20px rgba(185, 103, 255, 0.2)"
                  }}
                >
                  <FaSatellite className="fs-5" />
                  <span>Scan Image</span>
                </Button>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={selectedFile ? onProcessDocument : onFileSelect}
                  disabled={isUploading}
                  className="w-100 py-3 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-3"
                  style={{
                    background: selectedFile 
                      ? "linear-gradient(135deg, rgba(0, 255, 65, 0.2) 0%, rgba(0, 179, 54, 0.2) 100%)"
                      : "linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(185, 103, 255, 0.2) 100%)",
                    backdropFilter: "blur(10px)",
                    border: selectedFile 
                      ? "1px solid rgba(0, 255, 65, 0.4)"
                      : "1px solid rgba(0, 240, 255, 0.4)",
                    color: selectedFile ? '#00ff41' : '#00f0ff',
                    boxShadow: selectedFile 
                      ? "0 0 25px rgba(0, 255, 65, 0.3)"
                      : "0 0 25px rgba(0, 240, 255, 0.3)"
                  }}
                >
                  <FaUpload className="fs-5" />
                  <span>{selectedFile ? (isUploading ? 'Processing...' : 'Initiate Analysis') : 'Access System'}</span>
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