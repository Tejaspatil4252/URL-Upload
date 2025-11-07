import React, { useState } from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import { Container } from 'react-bootstrap';

const NavLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-vh-100 bg-light">
      <Navigation onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main content with dynamic margin */}
      <main 
        className="transition-all duration-300"
        style={{
          marginLeft: sidebarOpen ? '320px' : '0',
          transition: 'margin-left 0.3s ease'
        }}
      >
        <Container fluid className="p-3 p-md-4">
          {children}
        </Container>
      </main>
    </div>
  );
};

export default NavLayout;