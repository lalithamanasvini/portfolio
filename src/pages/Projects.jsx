import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EduAgent - Assisting For Learning",
      description: "A responsive React project built using HTML, CSS, and JSX to deliver a polished user experience for interactive educational assistance.",
      techStack: ["React", "HTML", "CSS", "JSX"],
      github: "https://github.com/Sneha-260805/EduAgent",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Eco-Volunteer Match - Assisting Environment Enthusiasts",
      description: "A clean, component-based React application created with HTML, CSS, and JSX for a seamless volunteer matching experience.",
      techStack: ["React", "HTML", "CSS", "JSX"],
      github: "https://github.com/Harika-tech412/Eco-Volunteer-Match",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="projects-container"
    >
      <div className="projects-header">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my latest work and contributions to open source
        </motion.p>
      </div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-card ${project.featured ? "featured" : ""}`}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub /> GitHub Repository
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;