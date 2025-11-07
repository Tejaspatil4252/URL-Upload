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
  FaAnchor,
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
              background: 'transparent', // No overlay color
              zIndex: 1040,
              cursor: 'pointer'
            }}
          />
     
     
          {/* Modern Glass Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
           className="position-fixed shadow-lg"
style={{ 
  width: '320px', 
  zIndex: 1050,
  top: '81px', // ← ADD THIS
  left: 0,
  height: 'calc(100vh - 70px)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%)',
              backdropFilter: 'blur(20px)',
              borderRight: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            <div className="d-flex flex-column h-100">
              
              {/* Modern Header */}
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-between p-4 border-bottom"
                  style={{ borderColor: 'rgba(102, 126, 234, 0.2)' }}
                >
                  <motion.div 
                    className="d-flex align-items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                      }}
                    >
                      <FaAnchor className="text-white fs-5" />
                    </motion.div>
                    <div>
                      <h5 className="text-dark fw-bold mb-1">RapptorSoft</h5>
                      <Badge 
                        style={{ 
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          border: 'none',
                          fontSize: '0.65rem'
                        }}
                      >
                        Maritime Portal
                      </Badge>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="btn-close"
                    style={{ filter: 'brightness(0.7)' }}
                  />
                </div>
              </div>

              {/* Enhanced Menu Items */}
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
                              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                              : isHovered
                              ? 'rgba(102, 126, 234, 0.1)'
                              : 'transparent',
                            color: isActive ? 'white' : '#374151',
                            transition: 'all 0.3s ease'
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
                                  color: isActive ? 'white' : '#667eea'
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
                              style={{ color: isActive ? 'white' : '#667eea' }}
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
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                              }}
                            />
                          )}
                        </Nav.Link>
                      </motion.div>
                    );
                  })}
                </Nav>
              </div>

              {/* Modern Footer */}
              <div className="flex-shrink-0 border-top p-4"
                style={{ borderColor: 'rgba(102, 126, 234, 0.2)' }}
              >
                {/* User Profile */}
                <motion.div 
                  className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3 shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(102, 126, 234, 0.1)'
                  }}
                >
                  <div className="position-relative">
                    <div 
                      className="rounded-3 d-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      }}
                    >
                      <FaUsers className="text-white fs-6" />
                    </div>
                    <motion.div 
                      className="position-absolute bottom-0 end-0 rounded-circle border-2 border-white"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#10b981'
                      }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <p className="text-dark fw-semibold mb-1 small">John Doe</p>
                    <Badge 
                      style={{ 
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        border: 'none',
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
                    variant="light"
                    className="w-100 mb-3 d-flex align-items-center justify-content-center gap-2 border-0 rounded-3 py-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                      color: '#667eea',
                      fontWeight: '600'
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
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    RapptorSoft v2.1.0
                  </p>
                  <p className="text-muted small" style={{ fontSize: '0.7rem' }}>
                    Maritime Management Suite
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