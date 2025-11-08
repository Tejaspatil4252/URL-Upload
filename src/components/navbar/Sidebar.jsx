import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';
import {
  FaTimes,
  FaHome,
  FaShip,
  FaChartBar,
  FaWarehouse,
  FaUsers,
  FaFileInvoice,
  FaDatabase,
  FaShieldAlt,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaUpload,
  FaChevronRight,
} from "react-icons/fa";
import { Nav, Button, Badge } from 'react-bootstrap';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { icon: FaHome, label: "Dashboard", path: "/dashboard" },
    { icon: FaShip, label: "Vessel Management", path: "/vessels" },
    { icon: FaChartBar, label: "Operations", path: "/operations" },
    { icon: FaWarehouse, label: "Inventory", path: "/inventory" },
    { icon: FaUsers, label: "Crew Management", path: "/crew" },
    { icon: FaFileInvoice, label: "Documentation", path: "/documents" },
    { icon: FaUpload, label: "EIR Upload", path: "/eir-upload" },
    { icon: FaDatabase, label: "Reports & Analytics", path: "/reports" },
    { icon: FaShieldAlt, label: "Compliance", path: "/compliance" },
    { icon: FaCog, label: "Settings", path: "/settings" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ 
              background: 'transparent',
              zIndex: 1040,
              cursor: 'pointer'
            }}
          />
      
          {/* Cyber Tech Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="position-fixed shadow-lg"
            style={{ 
              width: '320px', 
              zIndex: 1050,
              top: '81px',
              left: 0,
              height: 'calc(100vh - 70px)',
              background: "rgba(10, 10, 26, 0.95)",
              backdropFilter: "blur(20px)",
              borderRight: "1px solid rgba(0, 240, 255, 0.3)",
              boxShadow: "0 0 30px rgba(0, 240, 255, 0.1)"
            }}
          >
            {/* Tech Background Particles */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
              {[...Array(15)].map((_, i) => (
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
                    y: [0, -10, 0],
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

            <div className="d-flex flex-column h-100">
              
              {/* Header */}
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-between p-4 border-bottom"
                  style={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}
                >
                  <motion.div 
                    className="d-flex align-items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      style={{
                        width: '48px',
                        height: '48px',
                        background: "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                        boxShadow: "0 0 25px rgba(0, 240, 255, 0.4)",
                      }}
                    >
                      <FaDatabase className="text-white fs-5" />
                    </motion.div>
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#00f0ff' }}>QuantumCore</h5>
                      <Badge 
                        style={{ 
                          background: "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                          border: "none",
                          fontSize: '0.65rem'
                        }}
                      >
                        System v2.1
                      </Badge>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="btn-close"
                    style={{ filter: 'invert(1) brightness(2)' }}
                  />
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-grow-1 overflow-auto py-3 left-scrollbar">   
                <Nav className="flex-column px-3 gap-1">
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    const isHovered = hoveredItem === index;
                    
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 8 }}
                        onHoverStart={() => setHoveredItem(index)}
                        onHoverEnd={() => setHoveredItem(null)}
                      >
                        <Nav.Link
                          as={Link}
                          to={item.path}
                          onClick={onClose}
                          className="d-flex align-items-center justify-content-between p-3 rounded-3 text-decoration-none position-relative border-0"
                          style={{
                            background: isActive 
                              ? "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)"
                              : isHovered
                              ? 'rgba(0, 240, 255, 0.1)'
                              : 'transparent',
                            color: isActive ? 'white' : '#00f0ff',
                            transition: 'all 0.3s ease',
                            border: isHovered ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid transparent'
                          }}
                        >
                          <div className="d-flex align-items-center gap-3">
                            <motion.div
                              animate={{ 
                                scale: isActive || isHovered ? 1.2 : 1,
                                rotate: isHovered ? 5 : 0
                              }}
                            >
                              <item.icon 
                                className="fs-6"
                                style={{ 
                                  color: isActive ? 'white' : '#b967ff'
                                }} 
                              />
                            </motion.div>
                            <span className="fw-medium" style={{ fontSize: '0.9rem' }}>
                              {item.label}
                            </span>
                          </div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ 
                              opacity: isHovered ? 1 : 0, 
                              x: isHovered ? 0 : -10 
                            }}
                          >
                            <FaChevronRight 
                              className="fs-xxsmall" 
                              style={{ color: isActive ? 'white' : '#00ff41' }}
                            />
                          </motion.div>

                          {/* Active Indicator */}
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="position-absolute start-0 top-50 translate-middle-y rounded-pill"
                              style={{
                                width: '4px',
                                height: '20px',
                                background: "linear-gradient(135deg, #00ff41 0%, #00f0ff 100%)",
                                boxShadow: "0 0 10px #00ff41"
                              }}
                            />
                          )}

                          {/* Holographic Effect on Hover */}
                          {isHovered && (
                            <motion.div
                              className="position-absolute top-0 start-0 w-100 h-100"
                              style={{
                                background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.1), transparent)",
                              }}
                              initial={{ x: '-100%' }}
                              animate={{ x: '100%' }}
                              transition={{ duration: 0.8 }}
                            />
                          )}
                        </Nav.Link>
                      </motion.div>
                    );
                  })}
                </Nav>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 border-top p-4"
                style={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}
              >
                {/* User Profile */}
                <motion.div 
                  className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: "rgba(0, 240, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0, 240, 255, 0.3)",
                    boxShadow: "0 0 15px rgba(0, 240, 255, 0.1)"
                  }}
                >
                  <div className="position-relative">
                    <div 
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '44px',
                        height: '44px',
                        background: "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                        boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)"
                      }}
                    >
                      <FaUser className="text-white fs-6" />
                    </div>
                    <motion.div 
                      className="position-absolute bottom-0 end-0 rounded-circle border-2"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        boxShadow: ['0 0 8px #00ff41', '0 0 16px #00ff41', '0 0 8px #00ff41']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: "#00ff41",
                        borderColor: "rgba(10, 10, 26, 0.8)"
                      }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-1 small" style={{ color: '#00f0ff' }}>John Doe</p>
                    <Badge 
                      style={{ 
                        background: "linear-gradient(135deg, #00ff41 0%, #00b336 100%)",
                        border: "none",
                        fontSize: '0.6rem'
                      }}
                    >
                      Administrator
                    </Badge>
                  </div>
                </motion.div>

                {/* Logout Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-100 mb-3 d-flex align-items-center justify-content-center gap-2 border-0 rounded-3 py-3"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 0, 128, 0.1) 0%, rgba(185, 103, 255, 0.1) 100%)",
                      color: '#ff0080',
                      fontWeight: '600',
                      border: "1px solid rgba(255, 0, 128, 0.3)"
                    }}
                  >
                    <FaSignOutAlt />
                    <span>Logout System</span>
                  </Button>
                </motion.div>

                {/* Version Info */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p 
                    className="fw-bold mb-1 small"
                    style={{ 
                      background: "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    QuantumCore v2.1.0
                  </p>
                  <p className="small" style={{ color: '#b967ff', fontSize: '0.7rem' }}>
                    Advanced Processing Suite
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;