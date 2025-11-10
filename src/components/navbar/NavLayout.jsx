import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const NavLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Detect mobile devices for better sidebar behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Mark initial load as complete after a short delay
    const loadTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(loadTimer);
    };
  }, []);

  // Close sidebar when clicking on main content on mobile
  const handleMainClick = () => {
    if (isMobile && sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <motion.div 
      className="min-vh-100"
      initial={isInitialLoad ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 50%, #F8F9FA 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        {/* Silver Gray Grid */}
        <div className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `
              linear-gradient(#DEE2E6 1px, transparent 1px),
              linear-gradient(90deg, #DEE2E6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.1
          }}
        />
        
        {/* Lightning Blue Glow Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: '300px',
              height: '300px',
              background: `radial-gradient(circle, rgba(0, 102, 255, 0.05) 0%, rgba(0, 153, 255, 0.03) 30%, transparent 70%)`,
              right: `${i * 40}%`,
              top: `${20 + i * 25}%`,
              filter: 'blur(40px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation & Sidebar */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navigation onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      
      {/* Main Content Area */}
      <motion.main 
        onClick={handleMainClick}
        className="transition-all duration-300 min-vh-100"
        initial={false}
        animate={{
          marginLeft: sidebarOpen && !isMobile ? '320px' : '0',
          filter: sidebarOpen && isMobile ? 'blur(5px)' : 'none',
        }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 200 
        }}
        style={{ 
          position: 'relative',
          zIndex: 5
        }}
      >
        <Container fluid className="p-3 p-md-4">
          <motion.div
            initial={isInitialLoad ? false : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {children}
          </motion.div>
        </Container>
      </motion.main>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 8,
              cursor: 'pointer'
            }}
          />
        )}
      </AnimatePresence>

      {/* Lightning Blue Scanner Effect */}
      <motion.div
        className="position-fixed bottom-0 start-0 end-0"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #0066FF, #0099FF, transparent)',
          boxShadow: '0 0 20px rgba(0, 102, 255, 0.6)',
          filter: 'blur(0.5px)',
          zIndex: 2
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default NavLayout;