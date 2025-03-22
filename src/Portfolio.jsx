import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

// Import skill images
import htmlIcon from "./assets/htmlcss.jpg";
import reactIcon from "./assets/reactlogo.png";
import springbootIcon from "./assets/springboot.jpg";
import unqorkIcon from "./assets/unqork.png";
import javaIcon from "./assets/java.png";
import dsaIcon from "./assets/data_structures.png";
import mysqlIcon from "./assets/mysql.png";
import profileImage from "./assets/logo.jpg"; // Profile image

const SkillsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const skills = [
    { name: "HTML & CSS", image: htmlIcon },
    { name: "Java", image: javaIcon },
    { name: "Data Structures", image: dsaIcon },
    { name: "React.js", image: reactIcon },
    { name: "Spring Boot", image: springbootIcon },
    { name: "Unqork", image: unqorkIcon },
    { name: "MySQL", image: mysqlIcon },
  ];

  return (
    <div className="skills-carousel">
      <h2>Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <p>{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const projects = [
  {
    title: "E-commerce Website",
    skills: "React, Node.js, MongoDB",
    description: "An online shopping platform with user authentication, product listings, and payment integration.",
    github: "https://github.com/example/ecommerce",
  },
  {
    title: "Customer Onboarding Application",
    skills: " Unqork Workflow, Modules, API, Transforms, Components, Schema,Debugging, Formulas",
    description: "I worked on a JPMorgan Chase (JPMC) project for six months, utilizing the Unqork no-code platform. Our team built acomprehensive client onboarding form, leveraging workflows and transforms. The form featured over 200 fields, partitioned using navigation.",
    responsibilities:["Designed and built enterprise-level no-code applications using Unqork.",   
      "Developed and configured dynamic workflows logic, and UI components within the Unqork platform.",
      "Integrated REST APIs, third-party services, and databases to enable seamless application functionality.",
      "Created and optimized business logic using Unqork's Data Workflow and Rule Builder.", 
      "Worked with RBAC (Role-Based Access Control) and configured user authentication and permissions.", 
      "Developed and tested custom expressions and formulas to extend Unqork's capabilities.",
      "Debugged and resolved application errors using Unqork's debugging and monitoring tools.",
      "Followed Agile methodologies with sprint planning, daily stand-ups, and continuous deployment.",],
    github: "https://github.com/example/ems",
  },
];

const WebPage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleScroll = () => {
    const sections = ["about", "skills", "experience", "projects", "contact"];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={profileImage} alt="Logo" className="logo" />
          <span className="logo-text">Mounika</span>
        </div>

        <nav className="top-right-nav">
          <ul>
            {["about", "skills", "experience", "projects", "contact"].map((section) => (
              <li key={section} className={activeSection === section ? "active" : ""}>
                <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="aboutme" className="section">
          <div className="about-card">
            <img
              src={profileImage}
              alt="Mounika Machaboina"
              className="about-image"
            />
            <div className="about-content">
              <h2 className="animated-name">Hello! I'm Mounika Machaboina</h2>
              <h3>Software Engineer</h3>
              <p>
                Passionate about web development and full-stack engineering.
                Experienced in React, Java, Spring Boot, and more.
              </p>
              <button
                onClick={() => (window.location.href = "#about")}
                className="know-more-btn"
              >
                Know More
              </button>
            </div>
          </div>
        </section>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a skilled web application developer with expertise in Core &
            Advanced Java, React.js, and Spring Boot, specializing in building
            and maintaining server-side applications. With experience in Unqork
            development, RESTful Web Services, and version control using Git, I
            contribute to efficient coding, debugging, and troubleshooting. I
            have hands-on experience with SQL databases, API integrations, and
            web service testing using Postman. Familiar with Agile
            methodologies, I actively participate in sprint planning and
            collaborate with teams to meet project milestones. My focus is on
            delivering high-quality, optimized solutions while continuously
            learning from experienced developers.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <SkillsCarousel />
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2>Experience</h2>
          <p>Worked at XYZ Company as a Software Developer for 3 years, specializing in front-end and back-end development.</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2>Projects</h2>
          <div className="kanban-container">
            {projects.map((project, index) => (
              <div key={index} className="kanban-card">
                <h3>{project.title}</h3>
                <p>
                  <strong>Skills Used:</strong> {project.skills}
                </p>
                <p>{project.description.substring(0, 50)}...</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> View Code
                </a>
                <button className="more-btn" onClick={() => setSelectedProject(project)}>
                  More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{selectedProject.title}</h2>
              <p>
                <strong>Skills Used:</strong> {selectedProject.skills}
              </p>
              <p>{selectedProject.description}</p>
              <h3>Key Responsibilities:</h3>
            <ul>
              {selectedProject.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View Code
              </a>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                X
              </button>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>CONTACT ME</h2>
          <div className="contact-icons">
            <a href="mailto:mounumouni0@gmail.com" className="contact-icon">📧</a>
            <a href="https://www.linkedin.com/in/machaboina-mounika/" target="_blank" rel="noopener noreferrer" className="contact-icon">🔗</a>
            <a href="tel:6301886059" className="contact-icon">📞</a>
            <a href="https://github.com/Machaboinamounika" target="_blank" rel="noopener noreferrer" className="contact-icon">🐙</a>
            <a href="#top" className="arrow-up"><i className="fas fa-arrow-up"></i></a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>&copy; 2025 My Portfolio. All Rights Reserved.</footer>
    </div>
  );
};

export default WebPage;
