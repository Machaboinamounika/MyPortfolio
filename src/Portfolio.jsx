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
    title: "JPMC Client Onboarding",
    skills: "Unqork, Workflow Design, API Integration",
    description: "Built a comprehensive client onboarding form with workflows and transforms, integrated automated file uploads, and real-time insights.",
    github: null,
    responsibilities: [
      "Designed and built enterprise-level applications.",
      "Developed and configured dynamic workflows, logic, and UI components.",
      "Integrated REST APIs, third-party services, and databases.",
      "Created and optimized business logic using Data Workflow.",
      "Configured user authentication and permissions.",
      "Developed and tested custom expressions and formulas.",
      "Debugged and resolved application errors.",
      "Followed Agile methodologies with sprint planning.",
    ],
  },
  {
    title: "Customer Onboarding Application",
    skills: "Unqork Workflow, Modules, API, Transforms, Components, Schema, Debugging, Formulas",
    description: "Worked on a JPMorgan Chase (JPMC) project using the Unqork no-code platform to build a client onboarding form.",
    github: "https://github.com/example/ems",
    responsibilities: [
      "Designed and built enterprise-level applications.",
      "Developed and configured dynamic workflows, logic, and UI components.",
      "Integrated REST APIs, third-party services, and databases.",
      "Created and optimized business logic using Data Workflow.",
      "Configured user authentication and permissions.",
      "Developed and tested custom expressions and formulas.",
      "Debugged and resolved application errors.",
      "Followed Agile methodologies with sprint planning.",
    ],
  },
  {
    title: "E-Commerce Website",
    skills: "React.js, Spring Boot, MySQL, REST APIs",
    description: "Developed a full-stack e-commerce platform with categorized product listings, a real-time shopping cart, and order management.",
    github: "https://github.com/example/ecommerce",
    responsibilities: [
      "Designed and built enterprise-level applications.",
      "Developed and configured dynamic workflows, logic, and UI components.",
      "Integrated REST APIs, third-party services, and databases.",
      "Created and optimized business logic using Data Workflow.",
      "Configured user authentication and permissions.",
      "Developed and tested custom expressions and formulas.",
      "Debugged and resolved application errors.",
      "Followed Agile methodologies with sprint planning.",
    ],
  },
  {
    title: "Quiz Application",
    skills: "Spring Boot, Hibernate, MySQL, REST APIs",
    description: "Built a scalable quiz application with structured database management, secure authentication, and role-based access control.",
    github: "https://github.com/example/quiz-app",
    responsibilities: [
      "Designed and built enterprise-level applications.",
      "Developed and configured dynamic workflows, logic, and UI components.",
      "Integrated REST APIs, third-party services, and databases.",
      "Created and optimized business logic using Data Workflow.",
      "Configured user authentication and permissions.",
      "Developed and tested custom expressions and formulas.",
      "Debugged and resolved application errors.",
      "Followed Agile methodologies with sprint planning.",
    ],
  },
  {
    title: "ATM Functionality System(Java)",
    skills: "Java, Swing, OOP",
    description: "Developed an ATM functionality system using Java Swing to simulate real-world ATM transactions securely and efficiently.",
    github: "#",
    responsibilities: [
      "Designed and implemented a secure PIN authentication system with a 3-attempt lockout mechanism.",
      "Developed functionalities for balance inquiry, deposit, withdrawal, and transaction history display.",
      "Built an interactive GUI using Java Swing with buttons, input fields, and radio options for smooth navigation.",
      "Implemented object-oriented programming principles to ensure modularity and code reusability.",
      "Enhanced security features by validating user input and handling incorrect attempts gracefully.",
      "Optimized the system for real-time transaction updates and smooth user experience.",
      "Followed Agile development methodologies to iteratively improve functionality.",
    ],
  },
  {
    title: "Advanced Calculator",
    skills: "HTML, CSS, JavaScript",
    description: "Built a fully functional calculator with basic arithmetic and advanced mathematical operations.",
    github: "#",
    responsibilities: [
      "Developed a responsive calculator UI using HTML and CSS for both mobile and desktop views.",
      "Implemented core calculator functions including addition, subtraction, multiplication, and division.",
      "Added advanced mathematical operations such as trigonometric functions, logarithms, and exponents.",
      "Optimized event handling in JavaScript for smooth button interactions and instant calculations.",
      "Ensured error handling for invalid inputs to prevent calculation errors.",
      "Applied responsive design techniques to enhance user experience across different screen sizes.",
    ],
  },
  {
    title: "To-Do List App",
    skills: "HTML, CSS, JavaScript",
    description: "Developed a feature-rich To-Do List App with task management, local storage support, and a clean UI.",
    github: "#",
    responsibilities: [
      "Designed a responsive UI with HTML and CSS for a seamless user experience across devices.",
      "Implemented JavaScript functions for adding, deleting, and marking tasks as complete.",
      "Integrated Local Storage to persist tasks even after refreshing the page.",
      "Utilized event listeners for real-time user interactions and efficient DOM manipulation.",
      "Applied JavaScript best practices to enhance performance and maintainability.",
      "Ensured accessibility and responsiveness for optimal usability.",
    ],
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
          I am a skilled web application developer with expertise in Core & Advanced
          Java, React.js, and Spring Boot, specializing in building and maintaining
          server-side applications. With experience in Unqork development, RESTful Web
          Services, and version control using Git, I contribute to efficient coding,
          debugging, and troubleshooting. I have hands-on experience with SQL databases,
          API integrations, and web service testing using Postman. Familiar with Agile
          methodologies, I actively participate in sprint planning and collaborate with
          teams to meet project milestones. My focus is on delivering high-quality,
          optimized solutions while continuously learning from experienced developers.
        </p>
        
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <SkillsCarousel />
        </section>

        {/* Experience Section */}
                 {/* Experience Section */}
        <section id="experience" className="section certificate-container">
        <div className="certificate">
          {/* Logo at the Top */}
          <img src={profileImage} alt="Logo" className="certificate-logo" />
          
          {/* Certificate Title */}
          <h2 className="certificate-title">Certificate of Professional Excellence</h2>

          {/* Objective Statement */}
          <p className="certificate-text">
            <strong></strong> To be part of an organization that fosters professional growth, offering challenging and rewarding career opportunities while enabling me to leverage my knowledge and skills effectively.
          </p>

          {/* Experience Section */}
          <h3 className="certificate-section">Experience</h3>
          <p><strong>Software Engineer - Acunor</strong> (Dec 2023 – Dec 2024)</p>
          <p>Worked on full-stack web development, specializing in Java, Spring Boot, and React.js.</p>

          <p><strong>Internship - Brainwave Matrix Solutions</strong></p>
          <p>Focused on Web Development and Java Programming.</p>

          <p><strong>Internship - InternPe</strong> (Jan 2025 - Feb 2025)</p>
          <p>Worked on various web development projects.</p>

          {/* Education Section */}
          <h3 className="certificate-section">Education</h3>
          <p><strong>B.Tech in Computer Science and Engineering</strong></p>
          <p>Malla Reddy College of Engineering and Technology (JNTUH) | CGPA: 8.48 (2023)</p>

          <p><strong>Diploma in Computer Engineering</strong></p>
          <p>Government Polytechnic for Women, Medak | Percentage: 88 (2020)</p>

          <p><strong>SSC</strong></p>
          <p>ZPHS Machapur | GPA: 9.0 (2017)</p>

          {/* Certifications Section */}
          <h3 className="certificate-section">Certifications</h3>
          <ul>
            <li className="certificate-text">Associate Configurator in Unqork</li>
            <li className="certificate-text">Junior Java Full Stack Developer</li>
            <li className="certificate-text">Web Developer</li>
          </ul>

          {/* Declaration Statement */}
          <p className="certificate-declaration">
            I solemnly declare that all the above information is correct to the best of my knowledge and belief.
          </p>
        </div>
      </section>

       
        {/* Projects Section */}
        <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="kanban-container">
          {projects.map((project, index) => (
            <div key={index} className="kanban-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="skills-heading">
                <strong>Skills Used:</strong> {project.skills}
              </p>
              <p className="description-heading">
                <strong>Description:</strong> {project.description.substring(0, 50)}...
              </p>
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
            <h2 className="project-title">{selectedProject.title}</h2>
            <p className="skills-heading">
              <strong>Skills Used:</strong> {selectedProject.skills}
            </p>
            <p>{selectedProject.description}</p>
            <h3>Key Responsibilities:</h3>
            <ul>
              {selectedProject.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {/* View Code link only inside modal */}
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
