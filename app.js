(() => {
  'use strict';

  // -------------------- Helpers --------------------
  const byId = (id) => document.getElementById(id);

  const escapeHTML = (value = '') =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');

  const safeArray = (value) => (Array.isArray(value) ? value : []);

  const renderListItems = (items) =>
    safeArray(items)
      .map((item) => `<li>${escapeHTML(item)}</li>`)
      .join('');

  const getStoredTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const setThemeIcon = (iconEl, theme) => {
    if (!iconEl) return;
    iconEl.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  };

  const smoothScrollTo = (target) => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  };

  // -------------------- Theme Init --------------------
  const savedTheme = getStoredTheme();
  applyTheme(savedTheme);

  // -------------------- Data --------------------
  const skillsData = [
    {
      category: 'Technical',
      items: [
        { icon: '🌐', name: 'HTML' },
        { icon: '🎨', name: 'CSS' },
        { icon: '✨', name: 'JavaScript' },
        { icon: '🐍', name: 'Python' },
        { icon: '☕', name: 'Java' },
        { icon: '🕸️', name: 'Django' },
        { icon: '⚛️', name: 'React.js' },
        { icon: '🟢', name: 'Node.js' },
        { icon: '🗄️', name: 'MySQL' },
        { icon: '🍃', name: 'MongoDB' },
      ],
    },
    {
      category: 'Presentation',
      items: [
        { icon: '📄', name: 'Word' },
        { icon: '📊', name: 'Excel' },
        { icon: '📽️', name: 'PowerPoint' },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { icon: '💬', name: 'Communication' },
        { icon: '👥', name: 'Teamwork' },
        { icon: '🎤', name: 'Public Speaking' },
        { icon: '📋', name: 'Organization' },
        { icon: '⏱️', name: 'Time Management' },
        { icon: '🧩', name: 'Problem Solving' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { icon: '🤖', name: 'ChatGPT' },
        { icon: '🎨', name: 'Napkin AI' },
        { icon: '✨', name: 'Google Gemini' },
        { icon: '🔍', name: 'Perplexity' },
        { icon: '📈', name: 'PowerBI' },
        { icon: '📝', name: 'Visual Studio Code' },
        { icon: '🐙', name: 'GitHub' },
        { icon: '☁️', name: 'Netlify' },
        { icon: '⚡', name: 'Vercel' },
        { icon: '🔥', name: 'Firebase' },
      ],
    },
  ];

  const projectsData = [
    {
      title: 'Terms & Conditions Analyzer Web Application',
      tech: ['JavaScript', 'Tailwind CSS'],
      desc:
        'T&C Simplifier is a SaaS-style web application designed to help users quickly understand complex Terms & Conditions. It analyzes legal text, breaks it into readable clauses, and classifies them into risk categories such as Safe, Caution, and Risky. The application provides a risk score and a simplified summary to enhance user understanding. It features a modern, responsive UI with dark mode and file upload support. The project focuses on improving usability and making legal content easier to interpret.',
      features: [
        'Developed a SaaS-style T&C analyzer that classifies legal clauses into risk categories',
        'Implemented risk scoring system and summary generation for better decision-making',
        'Designed a responsive UI with Tailwind CSS and dark mode support',
        'Built modular JavaScript logic for text processing and classification',
        'Added file upload feature to analyze external Terms & Conditions',
      ],
      links: [
        { label: 'Live Project Link', url: 'https://charanepuri.github.io/tc-simplifier-saas/', outline: false },
        { label: 'GitHub Repository Link', url: 'https://github.com/charanepuri/tc-simplifier-saas', outline: false },
        { label: 'Project Documentation', url: 'https://drive.google.com/file/d/1ZzfY_jakH3uz2DnZXmlyTejezbUhNByJ/view?usp=sharing', outline: true },
      ],
    },
    {
      title: 'Anasuya Bharadwaj Fan-Made Portfolio Website',
      tech: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
      desc:
        'The Anasuya Bharadwaj Fan-Made Portfolio Website is a modern, responsive web application designed to showcase the career journey, achievements, and works of Anasuya Bharadwaj. Built using HTML5, CSS3, and Vanilla JavaScript, the project focuses on delivering a clean UI with dynamic content loading, interactive components, and engaging user experience. It organizes filmography, television shows, biography, and gallery into a structured and visually appealing digital platform, making it a strong demonstration of frontend development skills.',
      features: [
        'Dynamic data loading using JSON',
        'Interactive search and filtering system',
        'Typewriter intro with animated overlay',
        'Responsive gallery with lightbox view',
        'Client-side content protection mechanisms',
      ],
      links: [
        { label: 'Live Project Link', url: 'https://charanepuri.github.io/anasuya-filmography-app/', outline: false },
        { label: 'GitHub Repository Link', url: 'https://github.com/charanepuri/anasuya-filmography-app', outline: false },
        { label: 'Project Documentation', url: 'https://drive.google.com/file/d/1ATQEft0uYbjef9qphJDIdaKNx6WVyZzB/view?usp=sharing', outline: true },
      ],
    },
    {
      title: 'Bible Reference Web Application',
      tech: ['HTML', 'CSS', 'JavaScript'],
      desc:
        'Developed a fully responsive Bible reference web application with all 66 books, structured data (categories, chapters, verses, authors), real-time search, and category filtering. Built multilingual support for Telugu, Hindi, Tamil, Malayalam, and Kannada; includes Bible history timeline and interactive story modals; deployed on GitHub Pages with Git version control.',
      features: [
        'Responsive book browser and verse lookup',
        'Live search and category filter via JavaScript',
        'Language switcher UI with 5 regional options',
        'Timeline and modal-based story module',
        'Deployment: GitHub Pages; Source control: Git',
      ],
      links: [
        { label: 'Live Project Link', url: 'https://charanepuri.github.io/bible-reference-app/', outline: false },
        { label: 'GitHub Repository Link', url: 'https://github.com/charanepuri/bible-reference-app', outline: false },
        { label: 'Project Documentation', url: 'https://drive.google.com/file/d/1DYKvz-mUyM-cKtNQ7e72qmlAx4YX0omk/view?usp=sharing', outline: true },
      ],
    },
    {
      title: 'Document Chatting Using Large Language Models (LLMs)',
      tech: ['Python', 'LLMs', 'React', 'Node.js', 'MongoDB'],
      desc: 'A document interaction system powered by LLMs that enables natural language queries across multiple document formats.',
      features: [
        'Enables users to interact with documents using natural, chat-like conversations instead of keyword searches',
        'Provides context-aware summaries, answers, and insights across multiple documents',
        'Supports various document formats including PDF, DOCX, CSV etc.',
        'Can handle complex queries spanning multiple sources seamlessly',
        'Learns from user interactions to improve response accuracy over time',
        'Enhances document accessibility, efficiency, and user experience in retrieving information',
      ],
      links: [
        { label: 'View Documentation', url: 'https://drive.google.com/file/d/1x3bLrNV-prZKLFvjDAS3Ymuj9RSR65qK/view?usp=sharing', outline: false },
      ],
    },
  ];

  const certsData = [
    { name: 'FULL STACK INTERNSHIP (SAIKET SYSTEMS)', fileId: '1dgQVnSeEqGcZPQLmIGUxC-NfT5eTtvEW' },
    { name: 'RESUME BUILDING', fileId: '1scHjT4mLN5jwab3AflSU2VygPPj7imV9' },
    { name: 'GENERATIVE AI', fileId: '1CSOEXYTDqYeyEAxpzO-SnOdjgXG5zgXx' },
    { name: 'GOOGLE ANALYTICS', fileId: '1EQoN8R4iaROauPOp43p4ZoUtgWaNe9Rj' },
    { name: 'PYTHON FOR SOFTWARE ENGINEERING', fileId: '1-QFlfAzKWHstE_e8RsiMEngUNifo-bHm' },
    { name: 'SIMPLE WEBPAGE USING HTML IN 10 MINUTES', fileId: '1-DDthJ0qgYZsbBpYmfmX6RfUkojSV8Ns' },
    { name: 'CHATGPT & GENAI', fileId: '1MnxiEVjd9ewdlWh_BtOXjJEpr1c_dDrn' },
    { name: 'DATA VISUALIZATION USING PYTHON', fileId: '1gsch168MInalwn3iOj3yiNPC6tanE5eB' },
    { name: 'PROMPT ENGINEERING', fileId: '1-CFrHuAbRBHSmBVZggXaDMNRA6mZziWq' },
    { name: 'FULL STACK DEVELOPMENT', fileId: '1-BaeTKYgji09KRa7UFOgQuAdmTqIUL1p' },
  ];

  const profileData = {
    header: {
      name: 'CHARAN TEJA EPURI',
      subtitle: 'Python Full Stack Developer | AI & Data Science Engineer',
      contact: '📍 Hyderabad, India | 📞 9573640326 | ✉️ Charanepuri26@gmail.com',
    },
    summary:
      'Motivated Artificial Intelligence and Data Science graduate aiming to launch a career as a Python Full Stack Developer. I am committed to leveraging my expertise in Django for robust backend architecture and React.js for creating dynamic, responsive frontends. My objective is to bridge the gap between intelligent data processing and high-performance web development within a professional IT environment. I am eager to apply my proficiency in JavaScript, Python, and modern web technologies to contribute to scalable software solutions.',
    expertise: [
      { category: 'Programming', skills: 'Python (Core & Advanced), Java (Proficient), JavaScript (ES6+)' },
      { category: 'Web Development', skills: 'Django (Full Stack), React JS, HTML5, CSS3' },
      { category: 'Databases', skills: 'MySQL, Relational Schema Design, Django ORM' },
      { category: 'AI & Data Science', skills: 'Data Analysis, Prompt Engineering, Machine Learning Logic' },
      { category: 'Tools & Version Control', skills: 'Git, GitHub, VS Code, REST APIs' },
    ],
    academic: {
      college: 'SRKR Engineering College (A), Bhimavaram',
      degree: 'Bachelor of Technology: Artificial Intelligence And Data Science',
      year: 'Graduation Year: 2025',
      grade: 'Cumulative Grade: 7/10',
    },
    experience: {
      role: 'Full Stack Development Intern',
      company: 'SaiKet Systems',
      duration: '06 April 2026 – 06 May 2026',
      mode: 'Remote',
      overview:
        'During this internship, I worked on real-world web development projects, progressing from frontend fundamentals to building complete full stack applications with backend and database integration.',
      tasks: [
        'Built responsive web interfaces using HTML, CSS, and JavaScript',
        'Developed interactive applications using React',
        'Implemented RESTful APIs using Node.js and Express',
        'Integrated frontend with backend APIs using Axios',
        'Designed and connected MongoDB database for data storage',
        'Debugged and optimized application performance',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB (Atlas)', 'Git & GitHub', 'Postman'],
      projects: [
        {
          title: 'Portfolio Website',
          desc: 'Built a personal portfolio with responsive design',
          role: 'Frontend Development',
          github: 'https://github.com/charanepuri/portfolio-website',
          linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_saiketsystemsjourney-saiketexperience-saiketprojects-activity-7449664001724129280-2Xnc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
        },
        {
          title: 'E-commerce Landing Page',
          desc: 'Designed a responsive product landing page with UI components',
          role: 'UI Development',
          github: 'https://github.com/charanepuri/responsive-ecommerce-landing-page',
          linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_saiketsystemsjourney-saiketexperience-saiketprojects-activity-7450388776075313152-iKE_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
        },
        {
          title: 'React To-Do App',
          desc: 'Developed a dynamic task manager with add/delete features',
          role: 'Frontend Logic Implementation',
          github: 'https://github.com/charanepuri/react-todo-app',
          linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_saiketsystemsjourney-saiketexperience-saiketprojects-activity-7451124867359502336-DGuL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
        },
        {
          title: 'REST API (Node.js)',
          desc: 'Built CRUD API for user data management',
          role: 'Backend Development',
          github: 'https://github.com/charanepuri/node-rest-api',
          linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_nodejs-expressjs-restapi-activity-7452348024191684609-Ry3V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
        },
        {
          title: 'Full Stack To-Do App',
          desc: 'Connected React frontend with Node.js backend',
          role: 'Full Stack Integration',
          github: 'https://github.com/charanepuri/saiket-task-5-fullstack-todo-app',
          linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_fullstackdevelopment-reactjs-nodejs-activity-7452925482230026240-_NWP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
        },
        {
          title: 'User Management System',
          desc: 'Developed full stack application with MongoDB database',
          role: 'Full Stack Development',
          github: 'https://github.com/charanepuri/saiket-task-6-user-management-system',
          linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_saiketsystemsjourney-saiketexperience-saiketprojects-activity-7455820930074738688-ItaN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
        },
      ],
      learned: [
        'Improved backend development skills',
        'Learned real-world project structure',
        'Understood API integration and data flow',
        'Practiced debugging and clean coding',
        'Gained confidence in full stack development',
      ],
      achievements: [
        'Successfully completed 6 real-world projects',
        'Built a complete full stack application with database',
        'Strengthened problem-solving and debugging skills',
        'Maintained consistent learning and project delivery',
      ],
      offerLetter: 'https://drive.google.com/file/d/14KUOPz_EjkJ4X9hT8r_RKdJH_Yj7VWwK/view?usp=sharing',
      certificate: 'https://drive.google.com/file/d/1dgQVnSeEqGcZPQLmIGUxC-NfT5eTtvEW/view?usp=sharing',
    },
    projects: [
      {
        title: 'Django School Management System',
        details: [
          'Developed a comprehensive system to manage student and teacher records using Django and MySQL.',
          'Implemented full CRUD (Create, Read, Update, Delete) operations and managed relational database schemas through Django ORM.',
          'Focused on secure backend logic and efficient system organization.',
        ],
      },
      {
        title: 'Deep Translator Web Application',
        details: [
          'Built a full-stack application integrating external APIs for real-time multi-language translation.',
          'Designed a responsive interface using HTML, CSS, and JavaScript while handling backend request logic in Django.',
        ],
      },
      {
        title: 'Recipe Finder Web App',
        details: [
          'Engineered a dynamic search tool using the Edamam API to fetch and display data based on user input.',
          'Utilized asynchronous JavaScript (Fetch API) and Bootstrap for a modern, interactive UI.',
        ],
      },
    ],
    certifications: ['Prompt Engineering For Everyone – Chegg', 'Google Analytics – Great Learning Academy'],
    competencies: [
      { name: 'Analytical Thinking', desc: 'Leveraging AI/Data Science background for complex problem-solving.' },
      { name: 'Communication', desc: 'Clearly articulating technical concepts to team members.' },
      { name: 'Continuous Learning', desc: 'Actively exploring new frameworks and software engineering best practices.' },
      { name: 'Collaboration', desc: 'Experienced in version control and team-based development environments.' },
    ],
  };

  // -------------------- Sections --------------------
  const ensureInternshipsSection = () => {
    if (byId('internships')) return;

    const resumeSection = byId('resume');
    if (!resumeSection) return;

    const section = document.createElement('section');
    section.id = 'internships';
    section.className = 'section internships';
    section.innerHTML = `
      <h2>Internships</h2>
      <div id="internships-container"></div>
    `;

    insertAfter(resumeSection, section);
  };

  // -------------------- Renderers --------------------
  const renderProfile = () => {
    const profileContainer = byId('profile-container');
    if (!profileContainer) return;

    profileContainer.innerHTML = `
      <div class="resume-header">
        <h3>${escapeHTML(profileData.header.name)}</h3>
        <p class="subtitle">${escapeHTML(profileData.header.subtitle)}</p>
        <p class="contact-info">${escapeHTML(profileData.header.contact)}</p>
      </div>

      <div class="resume-section">
        <h4>Professional Profile</h4>
        <p>${escapeHTML(profileData.summary)}</p>
      </div>

      <div class="resume-section">
        <h4>Technical Expertise</h4>
        <div class="table-responsive">
          <table class="expertise-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              ${safeArray(profileData.expertise)
                .map(
                  (item) => `
                    <tr>
                      <td><strong>${escapeHTML(item.category)}</strong></td>
                      <td>${escapeHTML(item.skills)}</td>
                    </tr>
                  `,
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="resume-section">
        <h4>Professional Experience</h4>
        <div class="project-item">
          <h5>Full Stack Development Intern — SaiKet Systems</h5>
          <p><strong>April 2026 – May 2026 | Remote</strong></p>
          <ul>
            <li><strong>Project Delivery:</strong> Successfully developed and deployed 6 full-stack applications, ensuring seamless integration between React frontends and Node.js/Express backends.</li>
            <li><strong>API Integration:</strong> Implemented secure RESTful APIs and managed asynchronous data flow using Axios.</li>
            <li><strong>Database Management:</strong> Designed and maintained NoSQL schemas using MongoDB to support dynamic application data.</li>
            <li><strong>UI/UX:</strong> Built responsive, mobile-first interfaces using modern CSS frameworks and JavaScript.</li>
          </ul>
        </div>
      </div>

      <div class="resume-section">
        <h4>Academic Background</h4>
        <div class="academic-item">
          <p><strong>${escapeHTML(profileData.academic.college)}</strong></p>
          <p>${escapeHTML(profileData.academic.degree)}</p>
          <p>${escapeHTML(profileData.academic.year)}</p>
          <p>${escapeHTML(profileData.academic.grade)}</p>
        </div>
      </div>

      <div class="resume-section">
        <h4>Development Projects</h4>
        ${safeArray(profileData.projects)
          .map(
            (proj) => `
              <div class="project-item">
                <h5>${escapeHTML(proj.title)}</h5>
                <ul>${renderListItems(proj.details)}</ul>
              </div>
            `,
          )
          .join('')}
      </div>

      <div class="resume-section">
        <h4>Professional Certifications</h4>
        <ul>${renderListItems(profileData.certifications)}</ul>
      </div>

      <div class="resume-section">
        <h4>Core Competencies</h4>
        <ul>
          ${safeArray(profileData.competencies)
            .map((comp) => `<li><strong>${escapeHTML(comp.name)}:</strong> ${escapeHTML(comp.desc)}</li>`)
            .join('')}
        </ul>
      </div>
    `;
  };

  const renderInternships = () => {
    const container = byId('internships-container');
    if (!container) return;

    const experience = profileData.experience || {};
    const projects = safeArray(experience.projects);
    const tasks = safeArray(experience.tasks);
    const learned = safeArray(experience.learned);
    const achievements = safeArray(experience.achievements);
    const techItems = safeArray(experience.tech);

    container.innerHTML = `
      <div class="resume-content">
        <div class="resume-header">
          <h3>${escapeHTML(experience.role || 'Internship')}</h3>
          <p class="subtitle">${escapeHTML(experience.company || '')}</p>
          <p class="contact-info">
            ${escapeHTML(experience.duration || '')}
            ${experience.mode ? ` | Mode: ${escapeHTML(experience.mode)}` : ''}
          </p>
        </div>

        <div class="resume-section">
          <h4>Summary</h4>
          <p>${escapeHTML(experience.overview || '')}</p>
        </div>

        <div class="resume-section">
          <h4>💻 What I Actually Did</h4>
          <ul>${renderListItems(tasks)}</ul>
        </div>

        <div class="resume-section">
          <h4>🛠 Technologies Used</h4>
          <p>${techItems.map((item) => escapeHTML(item)).join(', ')}</p>
        </div>

        <div class="resume-section">
          <h4>Projects You Built During Internship</h4>
          ${projects.length
            ? projects
                .map(
                  (project) => `
                    <div class="project-item">
                      <h5>${escapeHTML(project.title)}</h5>
                      <p><strong>What it does:</strong> ${escapeHTML(project.desc)}</p>
                      <p><strong>Your role:</strong> ${escapeHTML(project.role)}</p>
                      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 14px;">
                        <a
                          href="${escapeHTML(project.github)}"
                          target="_blank"
                          rel="noopener noreferrer"
                          style="padding: 10px 18px; border-radius: 999px; background: var(--btn-bg); color: var(--btn-text); font-weight: 700; text-decoration: none; box-shadow: 0 8px 20px rgba(var(--accent-rgb), 0.22);"
                        >
                          🔗 GitHub Repository
                        </a>

                        ${project.linkedin ? `
                          <a
                            href="${escapeHTML(project.linkedin)}"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="padding: 10px 18px; border-radius: 999px; border: 2px solid var(--accent); color: var(--accent); font-weight: 700; text-decoration: none;"
                          >
                            💼 LinkedIn Post
                          </a>
                        ` : ''}
                      </div>
                    </div>
                  `,
                )
                .join('')
            : '<p class="muted">No internship projects added yet.</p>'}
        </div>

        <div class="resume-section">
          <h4>📈 What I Learned</h4>
          <ul>${renderListItems(learned)}</ul>
        </div>

        <div class="resume-section">
          <h4>🏆 Achievements / Highlights</h4>
          <ul>${renderListItems(achievements)}</ul>
        </div>

        <div class="resume-section">
          <h4>Offer Letter Link</h4>
          ${experience.offerLetter
            ? `<a class="btn outline" href="${escapeHTML(experience.offerLetter)}" target="_blank" rel="noopener noreferrer">Open Offer Letter</a>`
            : '<p class="muted">Offer letter link not added yet.</p>'}
        </div>

        <div class="resume-section">
          <h4>Certificate Link</h4>
          ${experience.certificate
            ? `<button class="btn" data-cert-src="${escapeHTML(experience.certificate)}" type="button">View Certificate</button>`
            : '<p class="muted">Certificate link not added yet.</p>'}
        </div>
      </div>
    `;
  };

  const renderSkills = () => {
    const skillsContainer = byId('skills-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = safeArray(skillsData)
      .map(
        (group) => `
          <div class="skill-group">
            <h3>${escapeHTML(group.category)}</h3>
            <ul>
              ${safeArray(group.items)
                .map((item) => `<li><span class="skill-icon">${escapeHTML(item.icon)}</span> ${escapeHTML(item.name)}</li>`)
                .join('')}
            </ul>
          </div>
        `,
      )
      .join('');
  };

  let projectObserver = null;

  const observeElements = () => {
    const elements = document.querySelectorAll('.resume-section, .skill-group, .project-card, .cert-item');

    if (!elements.length || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    if (projectObserver) {
      projectObserver.disconnect();
    }

    projectObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => {
      el.classList.add('fade-in');
      projectObserver.observe(el);
    });
  };

  const renderProjects = () => {
    const projectsContainer = byId('projects-container');
    if (!projectsContainer) return;

    const existingFilter = document.querySelector('.filter-container');
    if (existingFilter) existingFilter.remove();

    const allTechs = ['All', ...new Set(safeArray(projectsData).flatMap((project) => safeArray(project.tech)))];

    const filterDiv = document.createElement('div');
    filterDiv.className = 'filter-container';
    filterDiv.innerHTML = allTechs
      .map((tech) => `<button class="filter-btn ${tech === 'All' ? 'active' : ''}" data-filter="${escapeHTML(tech)}">${escapeHTML(tech)}</button>`)
      .join('');

    projectsContainer.parentNode?.insertBefore(filterDiv, projectsContainer);

    const renderWithFilter = (filterTech = 'All') => {
      const filtered = filterTech === 'All'
        ? projectsData
        : projectsData.filter((project) => safeArray(project.tech).includes(filterTech));

      projectsContainer.innerHTML = filtered
        .map(
          (project) => `
            <div class="project-card fade-in">
              <h3><b>${escapeHTML(project.title)}</b></h3>
              <p class="project-desc">${escapeHTML(project.desc)}</p>
              <ul class="project-features">
                ${renderListItems(project.features)}
              </ul>
              <div class="project-actions">
                ${safeArray(project.links)
                  .map(
                    (link) => `
                      <a class="btn ${link.outline ? 'outline' : ''}" href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">
                        ${escapeHTML(link.label)}
                      </a>
                    `,
                  )
                  .join('')}
              </div>
            </div>
          `,
        )
        .join('');

      observeElements();
    };

    filterDiv.addEventListener('click', (event) => {
      const button = event.target.closest('.filter-btn');
      if (!button) return;

      filterDiv.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderWithFilter(button.getAttribute('data-filter') || 'All');
    });

    renderWithFilter('All');
  };

  const renderCertifications = () => {
    const certContainer = byId('cert-container');
    if (!certContainer) return;

    certContainer.innerHTML = safeArray(certsData)
      .map(
        (cert) => `
          <div class="cert-item">
            <h4 class="cert-name">${escapeHTML(cert.name)}</h4>
            <div class="cert-actions">
              <button class="btn small" data-cert-src="https://drive.google.com/file/d/${escapeHTML(cert.fileId)}/view?usp=sharing" type="button">View</button>
              <a class="btn small outline" href="https://drive.google.com/uc?export=download&id=${escapeHTML(cert.fileId)}" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>
        `,
      )
      .join('');
  };

  // -------------------- Events --------------------
  const bindSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', function onClick(event) {
        const targetId = this.getAttribute('href')?.slice(1);
        const target = targetId ? byId(targetId) : null;
        if (!target) return;

        event.preventDefault();
        smoothScrollTo(target);
        byId('nav-links')?.classList.remove('show');
      });
    });
  };

  const bindThemeToggle = () => {
    const themeToggle = byId('theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');
    setThemeIcon(themeIcon, savedTheme);

    themeToggle?.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
      setThemeIcon(themeIcon, nextTheme);
    });
  };

  const bindNavToggle = () => {
    byId('nav-toggle')?.addEventListener('click', () => {
      byId('nav-links')?.classList.toggle('show');
    });
  };

  const bindTypewriter = () => {
    const typeEl = byId('typewriter');
    if (!typeEl) return;

    const text = 'Full Stack Developer • Python & JavaScript • React & Node.js';
    let index = 0;
    typeEl.textContent = '';

    const type = () => {
      if (index >= text.length) return;
      typeEl.textContent += text.charAt(index);
      index += 1;
      window.setTimeout(type, 40);
    };

    type();
  };

  const bindModal = () => {
    const modal = byId('cert-modal');
    const certFrame = byId('cert-frame');
    const certDownload = byId('cert-download');
    const certClose = byId('cert-close');

    if (!modal || !certFrame || !certDownload) return;

    const closeModal = () => {
      modal.setAttribute('aria-hidden', 'true');
      certFrame.src = '';
      certDownload.href = '#';
    };

    document.body.addEventListener('click', (event) => {
      const btn = event.target.closest('button[data-cert-src]');
      if (!btn) return;

      const src = btn.getAttribute('data-cert-src');
      if (!src) return;

      let previewSrc = src;
      let downloadSrc = src;

      if (src.includes('drive.google.com')) {
        const match = src.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match) {
          const fileId = match[1];
          previewSrc = `https://drive.google.com/file/d/${fileId}/preview`;
          downloadSrc = `https://drive.google.com/uc?export=download&id=${fileId}`;
        } else {
          try {
            const url = new URL(src);
            const fileId = url.searchParams.get('id');
            if (fileId) {
              previewSrc = `https://drive.google.com/file/d/${fileId}/preview`;
              downloadSrc = `https://drive.google.com/uc?export=download&id=${fileId}`;
            }
          } catch {
            // keep original src if it cannot be parsed
          }
        }
      }

      certFrame.src = previewSrc;
      certDownload.href = downloadSrc;
      modal.setAttribute('aria-hidden', 'false');
    });

    certClose?.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
        closeModal();
      }
    });
  };

  const ensureSafeExternalLinks = () => {
    document.querySelectorAll('a[target="_blank"]').forEach((anchor) => {
      anchor.setAttribute('rel', 'noopener noreferrer');
    });
  };

  // -------------------- Init --------------------
  document.addEventListener('DOMContentLoaded', () => {
    ensureInternshipsSection();
    bindThemeToggle();
    renderProfile();
    renderInternships();
    renderSkills();
    renderProjects();
    renderCertifications();
    bindSmoothScroll();
    bindNavToggle();
    bindTypewriter();
    bindModal();
    ensureSafeExternalLinks();
    observeElements();
  });
})();
