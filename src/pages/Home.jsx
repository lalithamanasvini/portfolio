import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMail, HiPhone, HiAcademicCap, HiCode } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "D.Lalitha Manasvini";

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className="typing-title">
      {text}
      <span className="cursor">|</span>
    </h1>
  );
};

const Home = () => {
  const personalDetails = {
    name: "D.Lalitha Manasvini",
    phone: "+91 9392716299",
    personalEmail: "lalithamanasvinisp@gmail.com",
    collegeEmail: "se23ucse051@mahindrauniversity.edu.in",
    skills: ["React.js", "Node.js", "Express.js", "Python", "TensorFlow", "TypeScript", "Tailwind CSS"],
  };

  const researchInterests = [
    "🧠 Artificial Intelligence & Machine Learning",
    "🌐 Web Technologies & Decentralized Systems",
    "🤖 Human-Computer Interaction",
    "🔒 Cybersecurity & Privacy",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-section">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="profile-image-wrapper"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop"
                alt="Profile"
                className="profile-image"
              />
            </motion.div>
            <TypingEffect />
            <p className="tagline">AI Researcher & Software Developer</p>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="card about-card"
        >
          <h2>
            <HiAcademicCap /> About Me
          </h2>
          <p>
            I am an undergraduate student pursuing a Bachelor of Technology in Computer Science and Engineering, with a strong interest in data-driven systems, machine learning, and software development. Through my academic journey, I have gained hands-on experience in building projects such as predictive models, decision tree implementations, and full-stack web applications, which have strengthened my analytical thinking and problem-solving abilities. I am proficient in working with modern tools and frameworks and continuously seek opportunities to apply my knowledge to real-world challenges. With a passion for emerging technologies and innovation, I am committed to developing impactful solutions while actively enhancing my technical and research skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="card research-card"
        >
          <h2>
            <HiAcademicCap /> Research Interests
          </h2>
          <ul className="research-list">
            {researchInterests.map((interest, idx) => (
              <li key={idx}>{interest}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="card details-card"
        >
          <h2>Personal Details</h2>
          <div className="detail-item">
            <strong>Name:</strong> {personalDetails.name}
          </div>
          <div className="detail-item">
            <HiPhone /> <strong>Phone:</strong> {personalDetails.phone}
          </div>
          <div className="detail-item">
            <HiMail /> <strong>Personal Email:</strong> {personalDetails.personalEmail}
          </div>
          <div className="detail-item">
            <HiMail /> <strong>College Email:</strong> {personalDetails.collegeEmail}
          </div>
          <div className="skills-section">
            <strong>Skills:</strong>
            <div className="skills-badges">
              {personalDetails.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="card social-card"
        >
          <h2>Connect With Me</h2>
          <div className="social-links">
            <a href="https://github.com/lalithamanasvini" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/lalitha-manasvini-6514a1307/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://www.instagram.com/lalithamanasvini?igsh=eTBmaG1wam92cGph" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="file:///C:/Users/manasvini/Downloads/Resume_new.pdf" target="_blank" rel="noopener noreferrer">
              <FaFilePdf /> My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;