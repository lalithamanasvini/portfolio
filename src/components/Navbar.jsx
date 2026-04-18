import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HiHome, HiFolder } from "react-icons/hi";

const Navbar = () => {
  const navItems = [
    { path: "/", name: "Home", icon: <HiHome /> },
    { path: "/projects", name: "Projects", icon: <HiFolder /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">LM</span>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;