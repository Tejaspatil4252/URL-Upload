import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBars, FaChevronDown, FaCog, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { Navbar, Container, Button, Dropdown, Badge } from 'react-bootstrap';
import navLogo from '../../assets/logo/rapportlogo1.png';

const Navigation = ({ onToggleSidebar }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky-top"
    >
      <Navbar 
        className="border-0 position-relative shadow-sm"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}
      >
        <Container fluid className="px-3 px-md-4">
          
          {/* LEFT: Sidebar Toggle + Logo */}
          <div className="d-flex align-items-center gap-3 gap-md-4">
            {/* Sidebar Toggle - Modern Glass Button */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="light"
                onClick={onToggleSidebar}
                className="rounded-3 p-2 p-md-3 border-0"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                <FaBars className="fs-6 fs-md-5 text-primary" />
              </Button>
            </motion.div>

            {/* Logo with Modern Animation */}
<div 
  className="rounded-3 p-2 px-3"
  style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
  }}
>
  <img 
    src={navLogo} 
    alt="RapptorSoft" 
    className="img-fluid"
    style={{ height: '38px' }}
  />
</div>
          </div>

          {/* RIGHT: User Info & Actions */}
          <div className="d-flex align-items-center gap-3">
            
            {/* Notification Bell */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="light"
                className="rounded-circle p-2 border-0 position-relative"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(10px)',
                  width: '44px',
                  height: '44px'
                }}
              >
                <FaBell className="text-primary fs-6" />
                <Badge 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.6rem' }}
                >
                  3
                </Badge>
              </Button>
            </motion.div>

            {/* User Profile Dropdown */}
            <Dropdown 
              show={showUserDropdown}
              onToggle={(isOpen) => setShowUserDropdown(isOpen)}
              align="end"
            >
              <Dropdown.Toggle 
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="d-flex align-items-center gap-3 cursor-pointer border-0 bg-transparent p-2 rounded-3"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                {/* Desktop User Info */}
                <div className="d-none d-md-flex align-items-center gap-3">
                  <div className="position-relative">
                    <motion.div 
                      className="rounded-3 d-flex align-items-center justify-content-center overflow-hidden"
                      whileHover={{ rotate: 5 }}
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                      }}
                    >
                      <FaUser className="text-white fs-6" />
                    </motion.div>
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
                  
                  <div className="text-start">
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-dark fw-semibold">John Doe</span>
                      <motion.div
                        animate={{ rotate: showUserDropdown ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="text-secondary fs-xxsmall" />
                      </motion.div>
                    </div>
                    <Badge 
                      bg="success" 
                      className="fs-xxsmall"
                      style={{ 
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        border: 'none'
                      }}
                    >
                      Administrator
                    </Badge>
                  </div>
                </div>

                {/* Mobile User Info */}
                <div className="d-flex d-md-none align-items-center gap-2">
                  <div 
                    className="rounded-2 d-flex align-items-center justify-content-center"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}
                  >
                    <FaUser className="text-white" style={{ fontSize: '0.8rem' }} />
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu 
                className="border-0 shadow-lg rounded-3 p-3 mt-2"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  minWidth: '220px'
                }}
              >
                <Dropdown.Item 
                  className="d-flex align-items-center gap-3 p-3 rounded-2 text-dark"
                  style={{ background: 'transparent' }}
                >
                  <div 
                    className="rounded-2 d-flex align-items-center justify-content-center"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}
                  >
                    <FaUser className="text-white fs-xxsmall" />
                  </div>
                  <div>
                    <div className="fw-semibold">John Doe</div>
                    <small className="text-muted">john.doe@rapptorsoft.com</small>
                  </div>
                </Dropdown.Item>
                
                <Dropdown.Divider className="my-2" />
                
                <Dropdown.Item className="d-flex align-items-center gap-3 p-2 rounded-2 text-dark">
                  <FaCog className="text-primary" />
                  <span>Settings</span>
                </Dropdown.Item>
                
                <Dropdown.Item className="d-flex align-items-center gap-3 p-2 rounded-2 text-danger">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>

        {/* Modern Bottom Accent */}
        <motion.div 
          className="position-absolute bottom-0 start-0 end-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            transformOrigin: 'left'
          }}
        />
      </Navbar>
    </motion.div>
  );
};

export default Navigation;