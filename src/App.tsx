import React from 'react';
import './index.css';
import dubaiAchievement from './assets/dubai-genai.png';
import profileImg from './assets/profile.png';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import leetcodeIcon from './assets/leetcode.png';
import instaIcon from './assets/insta.png';
import bluestockLogo from './assets/bluestock.jpeg';
import veridiaLogo from './assets/veridia.jpeg';
import unixShellImg from './assets/unix-shell.png';
import emailSchedularImg from './assets/email-schedular.png';
import authSystemImg from './assets/2fa.png';
import cloudSimImg from './assets/cloudsim.png';
import awsCert from './assets/aws.png';
import promptCert from './assets/prompt-engg.png';
import nlpCert from './assets/nlp.png';
import aiAgentCert from './assets/ai-agent.png';
import cloudCert from './assets/cloud-computing.png';
import genAiCert from './assets/genai-simplilearn.png';
import algoAchievement from './assets/algo.png';
import unstopAchievement from './assets/unstop-ceo.png';
import leetcodeAchievement from './assets/leetcode-2.png';
import tataAchievement from './assets/tata.png';
import graphethonAchievement from './assets/graphethon.png';

const App: React.FC = () => {
  return (
    <>
      <header>
        <a href="#home" className="logo">
          <img src={profileImg} alt="Anshika Saklani" />
          <span>ANSHIKA SAKLANI</span>
        </a>
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#certification">CERTIFICATIONS</a></li>
            <li><a href="#achievement">ACHIEVEMENTS</a></li>
          </ul>
        </nav>
      </header>

      <div className="social-sidebar">
        <a href="https://www.linkedin.com/in/anshikasaklani111105/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Anshika-111105" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://leetcode.com/u/Anshika_0509/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={leetcodeIcon} alt="LeetCode" />
        </a>
        <a href="https://www.instagram.com/i.anshikasaklani?igshid=amQxaGwxOHQ2a2M=" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={instaIcon} alt="Instagram" />
        </a>
      </div>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <h1>Hey, I'm Anshika Saklani</h1>
          <p className="subtitle">
            "Turning Python scripts into production-ready predictive models — bridging the gap between data and human interaction."
          </p>
          <div className="cta-container">
            <a href="#projects" className="cta-button">PROJECTS</a>
            <a 
              href="https://drive.google.com/drive/folders/1iIt0NS1ra3vc6urZtzb1sKxHRR8nqLeL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button" 
              style={{ marginLeft: '15px', backgroundColor: '#fff', border: '2px solid #FFD700', color: '#000' }}
            >
              <i className="fas fa-download"></i> RESUME
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={profileImg} alt="Anshika Saklani" />
            </div>
            <div className="about-text">
              <p>I am a Software Engineering student at Graphic Era Hill University driven by a simple mission: <b>making complex technology feel intuitive.</b></p>
              <p>My work lives at the intersection of Artificial Intelligence and User Experience, where I transform raw data into functional, high-performance applications.</p>
              <p><b>My Engineering Philosophy:</b></p>
              <ul className="philosophy-list">
                <li>➤ <b>Data-Driven Logic:</b> I architect end-to-end ML pipelines, moving beyond basic scripts to build models that solve real-world problems.</li>
                <li>➤ <b>Human-Centric Design:</b> I believe great software should be invisible and user-first.</li>
                <li>➤ <b>Scalable Architecture:</b> I focus on writing clean, maintainable code that bridges backend systems and seamless interactions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-container">
            {/* Bluestock */}
            <div className="experience-card">
              <div className="experience-header">
                <img src={bluestockLogo} alt="Bluestock Fintech" className="company-logo" />
                <div className="experience-title">
                  <h3>Software Engineer Intern</h3>
                  <h4>Bluestock Fintech</h4>
                  <div className="experience-meta">
                    <span className="duration">February 2026 – April 2026</span>
                    <span className="mode">Remote</span>
                  </div>
                </div>
              </div>
              <ul>
                <li><b>Tech Stack:</b> TypeScript, React, PostgreSQL, Prisma ORM, IndexedDB, SHA-256 Hashing, Jest.</li>
                <li><b>My Work:</b> Engineered a high-performance, offline-first daily puzzle platform with a deterministic engine.</li>
                <li><b>Deliverables:</b>
                  <ul>
                    <li><b>Deterministic Engine:</b> SHA-256 seed-based generation for global sync.</li>
                    <li><b>Offline-First:</b> Robust persistence layer using IndexedDB.</li>
                    <li><b>Data Visualization:</b> GitHub-style 365-day heatmap and streak logic.</li>
                  </ul>
                </li>
                <li><b>Real-World Impact:</b> Reduced server costs and achieved 95+ Lighthouse performance scores.</li>
              </ul>
            </div>

            {/* Veridia */}
            <div className="experience-card">
              <div className="experience-header">
                <img src={veridiaLogo} alt="Veridia.io" className="company-logo" />
                <div className="experience-title">
                  <h3>Web Developer Intern</h3>
                  <h4>Veridia.io</h4>
                  <div className="experience-meta">
                    <span className="duration">June 2025 – July 2025</span>
                    <span className="mode">Remote</span>
                  </div>
                </div>
              </div>
              <ul>
                <li><b>Tech Stack:</b> ReactJS, Node.js, MongoDB, Express.js, RESTful APIs, and State Management</li>
                <li><b>My Work:</b> Developed and deployed a scalable full-stack platform, focusing on modular architecture and optimized user registration workflows.</li>
                <li><b>Deliverables:</b>
                  <ul>
                    <li><b>Scalable REST APIs:</b>Architected backend endpoints to handle data flow between MongoDB and the frontend with high maintainability.</li>
                    <li><b>Workflow Optimization:</b>Refined state management to streamline the user onboarding experience.</li>
                  </ul>
                </li>
                <li><b>Impact:</b> Increased registration processing speed by 25% and supported 20% more concurrent sessions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-item">
              <a href="https://github.com/Anshika-111105/Intelligent-Unix-Shell" target="_blank" rel="noopener noreferrer">
                <img src={unixShellImg} alt="NeuroShell" className="project-image" />
              </a>
              <div className="project-details">
                <h3>NeuroShell: AI-Enhanced POSIX Interface</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> C, Python, SQLite, ML</p>
                <p>Revolutionized command-line interaction by integrating AI-driven natural language processing into a custom Unix shell, enabling users to execute complex commands through intuitive prompts.</p>
              </div>
            </div>

            <div className="project-item">
              <a href="https://github.com/Anshika-111105/Email-Schedular-System" target="_blank" rel="noopener noreferrer">
                <img src={emailSchedularImg} alt="Email Scheduler" className="project-image" />
              </a>
              <div className="project-details">
                <h3>Distributed Email Scheduler</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> Node.js, BullMQ, Redis, Docker</p>
                <p>Designed a distributed email scheduling system using Node.js and BullMQ, leveraging Redis for task queuing and Docker for containerization, ensuring reliable and scalable email delivery across multiple servers.</p>
              </div>
            </div>

            <div className="project-item">
              <a href="https://github.com/Anshika-111105/Full-stack-Auth-System" target="_blank" rel="noopener noreferrer">
                <img src={authSystemImg} alt="IAM System" className="project-image" />
              </a>
              <div className="project-details">
                <h3>Enterprise Identity Management</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> React, Node.js, MongoDB, JWT</p>
                <p>Built a full-stack identity management system with React frontend and Node.js backend, implementing JWT-based authentication and role-based access control to secure enterprise applications.</p>
              </div>
            </div>

            <div className="project-item">
              <a href="https://github.com/Anshika-111105/Full-stack-Auth-System" target="_blank" rel="noopener noreferrer">
                <img src={authSystemImg} alt="IAM System" className="project-image" />
              </a>
              <div className="project-details">
                <h3>Enterprise Identity Management</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> React, Node.js, MongoDB, JWT</p>
                <p>Built a full-stack identity management system with React frontend and Node.js backend, implementing JWT-based authentication and role-based access control to secure enterprise applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certification">
          <h2>Certifications</h2>
          <div className="certifications-container">
            <div className="certification-item">
              <img src={awsCert} alt="AWS" className="certificate-image" />
              <div className="certification-details"><h3>Foundations of AI & ML — AWS</h3></div>
            </div>
            <div className="certification-item">
              <img src={promptCert} alt="Prompt Engineering" className="certificate-image" />
              <div className="certification-details"><h3>Prompt Engineering — Udemy</h3></div>
            </div>
            <div className="certification-item">
              <img src={aiAgentCert} alt="AI Agent" className="certificate-image" />
              <div className="certification-details"><h3>AI Agent Engineering — Udemy</h3></div>
            </div>
            <div className="certification-item">
              <img src={genAiCert} alt="Generative AI" className="certificate-image" />
              <div className="certification-details"><h3>Generative AI — Udemy</h3></div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievement">
          <h2>Achievements</h2>
          <div className="achievements-container">
            <div className="achievement-item">
              <img src={dubaiAchievement} alt="Dubai AI" className="achievement-image" />
              <div className="achievement-details">
                <h3>1 Million Prompters Initiative</h3>
                <p>Global AI initiative by the Crown Prince of Dubai.</p>
              </div>
            </div>
            <div className="achievement-item">
              <img src={leetcodeAchievement} alt="LeetCode" className="achievement-image" />
              <div className="achievement-details">
                <h3>LeetCode Mastery</h3>
                <p>Solved 500+ problems, peak rating 1506.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Anshika Saklani. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;