import  { useState } from "react";
import { motion} from "framer-motion";
import {
  FaUser,
  FaBars,
  FaChevronDown,
  FaCog,
  FaSignOutAlt,
 
} from "react-icons/fa";
import { Navbar, Container, Button, Dropdown, Badge } from "react-bootstrap";
import navLogo from "../../assets/logo/rapportlogo1.png";

const Navigation = ({ onToggleSidebar }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky-top"
    >
      {/* Animated RGB Flow Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
        {/* RGB Flow Animation */}
        <motion.div
          className="position-absolute w-300 h-100"
          style={{
            background: "linear-gradient(90deg, #00f0ff, #b967ff, #00ff41, #00f0ff)",
            filter: "blur(60px)",
            opacity: 0.15
          }}
          animate={{
            x: ['-100%', '200%', '-100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }} />

        {/* Floating Tech Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: '3px',
              height: '3px',
              background: `radial-gradient(circle, #00f0ff, #b967ff)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
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

      <Navbar
        className="border-0 position-relative"
        style={{
          background: "rgba(10, 10, 26, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 240, 255, 0.3)",
          boxShadow: "0 0 30px rgba(0, 240, 255, 0.1)"
        }}
      >
        <Container fluid className="px-3 px-md-4">
          {/* LEFT: Sidebar Toggle + Logo */}
          <div className="d-flex align-items-center gap-3 gap-md-4">
            {/* Sidebar Toggle - Cyber Button */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onToggleSidebar}
                className="rounded-3 p-2 p-md-3 border-0"
                style={{
                  background: "rgba(0, 240, 255, 0.1)",
                  backdropFilter: "blur(15px)",
                  boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
                  border: "1px solid rgba(0, 240, 255, 0.5)",
                }}
              >
                <FaBars className="fs-6 fs-md-5" style={{ color: '#00f0ff' }} />
              </Button>
            </motion.div>

            {/* Logo - Clean with Cyber Glow */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="position-relative"
            >
              <img
                src={navLogo}
                alt="RapptorSoft"
                className="img-fluid"
                style={{ 
                  height: "42px",
                  filter: "drop-shadow(0 0 15px rgba(0, 240, 255, 0.4))"
                }}
              />
              
              {/* Pulsing Glow Effect */}
              <motion.div
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: '50px',
                  height: '50px',
                  background: "radial-gradient(circle, rgba(0, 240, 255, 0.3), transparent 70%)",
                  zIndex: -1
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT: User Profile Only */}
          <div className="d-flex align-items-center">
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
                  background: "rgba(0, 240, 255, 0.1)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(0, 240, 255, 0.3)",
                  boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)"
                }}
              >
                {/* Desktop User Info */}
                <div className="d-none d-md-flex align-items-center gap-3">
                  <div className="position-relative">
                    <motion.div
                      className="rounded-3 d-flex align-items-center justify-content-center overflow-hidden"
                      whileHover={{ rotate: 5 }}
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                        boxShadow: "0 0 25px rgba(0, 240, 255, 0.4)",
                      }}
                    >
                      <FaUser className="text-white fs-6" />
                    </motion.div>
                    <motion.div
                      className="position-absolute bottom-0 end-0 rounded-circle border-2 border-white"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        boxShadow: ['0 0 6px #00ff41', '0 0 12px #00ff41', '0 0 6px #00ff41']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#00ff41",
                      }}
                    />
                  </div>

                  <div className="text-start">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-semibold" style={{ color: '#00f0ff' }}>John Doe</span>
                      <motion.div
                        animate={{ rotate: showUserDropdown ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown style={{ color: '#b967ff' }} className="fs-xxsmall" />
                      </motion.div>
                    </div>
                    <Badge
                      className="fs-xxsmall"
                      style={{
                        background: "linear-gradient(135deg, #00ff41 0%, #00b336 100%)",
                        border: "none",
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
                      width: "36px",
                      height: "36px",
                      background: "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                    }}
                  >
                    <FaUser className="text-white" style={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="border-0 shadow-lg rounded-3 p-3 mt-2"
                style={{
                  background: "rgba(10, 10, 26, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 240, 255, 0.3)",
                  minWidth: "220px",
                  boxShadow: "0 10px 40px rgba(0, 240, 255, 0.2)"
                }}
              >
                <Dropdown.Item
                  className="d-flex align-items-center gap-3 p-3 rounded-2"
                  style={{ background: "transparent", color: '#00f0ff' }}
                >
                  <div
                    className="rounded-2 d-flex align-items-center justify-content-center"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "linear-gradient(135deg, #00f0ff 0%, #b967ff 100%)",
                    }}
                  >
                    <FaUser className="text-white fs-xxsmall" />
                  </div>
                  <div>
                    <div className="fw-semibold">John Doe</div>
                    <small style={{ color: '#b967ff' }}>john.doe@company.com</small>
                  </div>
                </Dropdown.Item>

                <Dropdown.Divider className="my-2" style={{ borderColor: 'rgba(0, 240, 255, 0.2)' }} />

                <Dropdown.Item className="d-flex align-items-center gap-3 p-2 rounded-2" style={{ color: '#00f0ff' }}>
                  <FaCog style={{ color: '#00f0ff' }} />
                  <span>Settings</span>
                </Dropdown.Item>

                <Dropdown.Item className="d-flex align-items-center gap-3 p-2 rounded-2" style={{ color: '#ff0080' }}>
                  <FaSignOutAlt />
                  <span>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>

        {/* Animated RGB Flow Line */}
        <motion.div
          className="position-absolute bottom-0 start-0 end-0"
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #00f0ff, #b967ff, #00ff41)",
            transformOrigin: "left",
            boxShadow: "0 0 10px rgba(0, 240, 255, 0.5)",
          }}
          animate={{
            background: [
              "linear-gradient(90deg, #00f0ff, #b967ff, #00ff41)",
              "linear-gradient(90deg, #b967ff, #00ff41, #00f0ff)",
              "linear-gradient(90deg, #00ff41, #00f0ff, #b967ff)",
              "linear-gradient(90deg, #00f0ff, #b967ff, #00ff41)",
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Scanning Light Effect */}
        <motion.div
          className="position-absolute bottom-0 start-0 h-100"
          style={{
            width: "2px",
            background: "linear-gradient(to top, transparent, #00f0ff, transparent)",
            boxShadow: "0 0 20px #00f0ff",
            filter: "blur(1px)"
          }}
          animate={{
            x: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </Navbar>
    </motion.div>
  );
};

export default Navigation;