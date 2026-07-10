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
      title: 'Personal Finance Manager',
      tech: ['JavaScript(ES6+)', 'HTML5', 'CSS3', 'Chart.js', 'Browser Local Storage API', 'Git', 'GitHub'],
      desc: 
      'A comprehensive, browser-based, client-side web application designed to track personal financial activities. Built with pure HTML, CSS, and vanilla JavaScript, it provides users with an intuitive, mobile-first interface to seamlessly manage income, expenses, budgets, and financial goals without relying on external frontend frameworks. All data is persisted locally in the user"s browser via the Local Storage API, ensuring total privacy and immediate access.',
      features: [
        'Central Dashboard: Provides a quick overview of financial health featuring summary cards (available balance, monthly income, expenses, savings) alongside interactive Chart.js graphs showing income vs. expense breakdowns.',
        'Transaction Management & Logs: Features a user-friendly modal form to easily add, edit, and delete transactions, as well as dedicated log pages with month/year filtering capabilities.',
        'Budget Tracking: Allows users to set monthly budgets for distinct expense categories and visualize spending progress via progress bars.',
        'Interactive Calendar View: Offers a visual monthly calendar to track daily transaction history and observe spending patterns.',
        'Goal-Oriented Wishlist: A dedicated module for tracking long-term financial goals and desired purchases without impacting the core monthly budget.',
        'Advanced Data Control & Theming: Supports seamless dark/light mode toggling, application data resets, and data portability through JSON/CSV exporting and JSON backup importing..',
      ],
      links: [
        { label: 'Live Project Link', url: 'https://charanepuri.github.io/Personal-Finance-Manager/', outline: false },
        { label: 'GitHub Repository Link', url: 'https://github.com/charanepuri/Personal-Finance-Manager', outline: false },
        { label: 'Project Documentation', url: '#', outline: true },
      ],
    },

        {
      title: 'Converter Hub - Modern React Utility Platform',
      tech: ['React JS','JavaScript(ES6+)','HTML5','CSS3','React Router DOM','React Icons','React Hot Toast','Vite','Git','GitHub'],
      desc: 
      'Converter Hub is a comprehensive utility web application developed using React.js that brings together 33 everyday converters and calculators in one intuitive platform. The application focuses on speed, usability, responsive design, and reusable component architecture, making it suitable for students, developers, professionals, designers, and everyday users. The project demonstrates modern frontend development practices, component reusability, state management, routing, responsive layouts, and scalable project organization.',
      features: [
        ' Built 33 interactive converters and calculators.',
        'Organized tools into 6 easy-to-navigate categories.',
        'Implemented reusable UI components for consistency across the application.',
        'Created responsive layouts optimized for all screen sizes.',
        'Added Dark & Light Theme support using Context API',
        'Integrated search functionality for faster navigation.',
        'Implemented copy, clear, and custom notification features across tools.',
        'Designed clean and intuitive user interfaces following modern UI/UX principles.',
        'Built a scalable folder structure for easy maintenance and future enhancements.',
        'Developed utility modules to separate business logic from UI components.'
      ],
      links: [
        { label: 'Live Project Link', url: 'https://converter-hub.netlify.app/', outline: false },
        { label: 'GitHub Repository Link', url: 'https://github.com/charanepuri/converter-hub-react', outline: false },
        { label: 'Project Documentation', url: 'https://drive.google.com/file/d/1SNgjGRtMIHigqUcEaXPg1pzwcgJEklHj/view?usp=drive_link', outline: true },
      ],
    },
        {
      title: 'Smart Quote Generator',
      tech: ['Django' ,'HTML5 ', 'CSS3', 'JavaScript' , 'REST API' , 'Local Storage' , 'Git' , 'GitHub' , 'Render'],
      desc:
        'Developed a modern Django web application that fetches and displays inspirational quotes from a public API. Features include dark mode, quote saving, copy-to-clipboard functionality, toast notifications, and a responsive glassmorphism user interface.',
      features: [
        'Dynamic quote generation using REST API',
        'Dark mode and responsive design',
        'Copy quote and save favorite quote functionality',
        'Toast notifications for enhanced user experience',
      	'Local Storage integration for persistent data'
      ],
      links: [
        { label: 'Live Project Link', url: 'https://django-smart-quote-generator.onrender.com/', outline: false },
        { label: 'GitHub Repository Link', url: 'https://django-smart-quote-generator.onrender.com/', outline: false },
        { label: 'Project Documentation', url: 'https://drive.google.com/file/d/1U4-_Wd5CGDeLSvkLILivz8uRg6nU-Q0C/view?usp=drive_link', outline: true },
      ],
    },
        {
      title: 'Flask-based URL Shortener ',
      tech: ['Flask', 'SQL Alchemy', 'SQLite', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
      desc:
        'Developed QuickLink, a Flask-based URL Shortener and Analytics Platform that generates short URLs, tracks user engagement, and visualizes click analytics. Implemented QR code generation, search functionality, and responsive dashboard interfaces using Bootstrap and Chart.js. Utilized SQLAlchemy ORM with SQLite for efficient database management. Designed a scalable architecture  	demonstrating backend development, API integration, and analytics reporting.',
      features: [
        'Developed URL shortening and redirection system using Flask and SQLAlchemy.',
        'Implemented click tracking analytics with interactive Chart.js visualizations.',
        'Built REST APIs for URL management and analytics reporting.',
        'Integrated QR code generation and copy-to-clipboard functionality.',
      	'Designed responsive Bootstrap dashboard with search and CRUD operations.',
      ],
      links: [
        { label: 'Live Project Link', url: 'https://quicklink-flask-url-shortener.onrender.com', outline: false },
        { label: 'GitHub Repository Link', url: 'https://github.com/charanepuri/quicklink-flask-url-shortener', outline: false },
        { label: 'Project Documentation', url: 'https://drive.google.com/file/d/1tz7PUxLn-9Xc9sFtxSq8HkHD4UDybcmE/view?usp=drive_link', outline: true },
      ],
    },
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
    experiences: [
      {
        role: 'Python Development Intern',
        company: 'Sysslan IT Solutions',
        duration: '25 April 2026 – 25 May 2026',
        durationLabel: 'April 2026 – May 2026',
        mode: 'Remote',
        overview:
          'Completed a one-month Python Development Internship focused on programming fundamentals, automation, file handling, and real-world Python applications. Worked on multiple hands-on tasks and mini projects that strengthened problem-solving, coding structure, and practical development skills.',
        tasks: [
          'Built structured Python programs using loops, conditions, and functions',
          'Developed utility tools such as password generators and text analyzers',
          'Implemented file handling systems for saving and retrieving data',
          'Created automation scripts for file organization and backup management',
          'Developed logging systems with date and time tracking',
          'Implemented CSV data reading and processing',
          'Performed basic web scraping using BeautifulSoup',
          'Automated repetitive file management tasks',
          'Organized and processed structured data efficiently',
          'Improved data storage and retrieval using file handling',
          'Simplified daily task management using Python scripts',
          'Generated reports and analyzed numerical data dynamically',
        ],
        tech: ['Python', 'File Handling', 'CSV Module', 'BeautifulSoup', 'Requests Library', 'OS Module', 'Shutil Module', 'Datetime Module'],
        projects: [
          {
            title: 'Level 1 – Basic Logic & Structured Thinking',
            desc: 'Features: 3×3 Grid Display, Number Search in Grid, Row-wise Sum Calculation, Unique Number Validation',
            role: 'Developed Python programs focusing on logical thinking, loops, and conditional statements.',
            github: 'https://github.com/charanepuri/python-internship-sysslan-level1',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_sysslanitsolutions-sysslan-sysslanprojects-activity-7456549350169550848-MOy6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
          {
            title: 'Level 2 – Core Python Programs',
            desc: 'Features: Email Validator, Password Generator, Text Analyzer, Fibonacci Sequence Generator',
            role: 'Built utility-based Python applications using string manipulation and functions.',
            github: 'https://github.com/charanepuri/python-internship-sysslan-level2',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_sysslanitsolutions-sysslan-sysslanprojects-activity-7457998905675264000-08wF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
          {
            title: 'Level 3 – File Handling & Automation',
            desc: 'Features: Record Management System, File Save & Retrieve System, File Reader, Log File System',
            role: 'Implemented file handling and data storage systems using Python.',
            github: 'https://github.com/charanepuri/python-internship-sysslan-level3',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_sysslanitsolutions-sysslan-sysslanprojects-activity-7459448470882525184-O8-I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
          {
            title: 'Level 4 – Beginner Automation & Data Handling',
            desc: 'Features: File Organizer Automation, Student Report Generator, Daily Task Manager, Data Analysis from Files',
            role: 'Developed automation scripts and data processing utilities.',
            github: 'https://github.com/charanepuri/python-internship-sysslan-level4',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_sysslanitsolutions-sysslan-sysslanprojects-activity-7461260392325951488-deFj?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
          {
            title: 'Level 5 – Real-World Python Projects',
            desc: 'Features: Web Scraping using BeautifulSoup, CSV Data Handling, Automated Backup Script, Mini Utility Tool',
            role: 'Worked on practical Python applications and automation concepts.',
            github: 'https://github.com/charanepuri/python-internship-sysslan-level5',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_sysslanitsolutions-sysslan-sysslanprojects-activity-7463072351673561088-LM8R?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
        ],
        learned: [
          'Improved Python programming and backend development skills',
          'Learned structured project organization and clean coding practices',
          'Understood real-world file handling and automation workflows',
          'Practiced debugging, logical thinking, and problem-solving',
          'Gained experience with web scraping and CSV processing',
          'Strengthened confidence in building practical Python applications',
        ],
        achievements: [
          'Successfully completed all 5 internship levels',
          'Built multiple Python mini projects and automation tools',
          'Maintained project documentation and GitHub repositories',
          'Improved coding consistency and development workflow',
          'Shared project progress and learning journey on LinkedIn',
        ],
        offerLetter: 'https://drive.google.com/file/d/1cckcRsV_PRCJv-O6aaa-3yDLOVCWef0o/view?usp=sharing',
        certificate: 'https://drive.google.com/file/d/1fAOwKBoBVy1Gpo3lu0gOKrvIhkA5MJ90/view?usp=sharing',
        profilePoints: [
          { label: 'Backend & Automation:', text: 'Developed utility tools, automation scripts, and file handling systems using Python.' },
          { label: 'Data Processing:', text: 'Implemented CSV data reading, log management, and basic web scraping with BeautifulSoup.' },
          { label: 'Problem Solving:', text: 'Automated repetitive tasks and organized structured data efficiently.' },
        ],
      },
      {
        role: 'Front-End Web Developer Intern',
        company: 'CodeAsire',
        duration: '18 April 2026 – 18 May 2026',
        durationLabel: 'April 2026 – May 2026',
        mode: 'Remote',
        overview:
          'Completed a one-month Front-End Development Internship at CodeAsire, gaining practical experience in building responsive web applications, implementing JavaScript interactivity, developing React applications, and integrating external APIs. The internship provided hands-on exposure to modern web development practices and real-world project workflows.',
        tasks: [
          'Built responsive landing pages using HTML5 and CSS3',
          'Built interactive JavaScript applications and component-based React applications',
          'Built API-driven web applications with dynamic data rendering',
          'Developed modern user interfaces with responsive layouts and reusable React components',
          'Developed dynamic note management functionality and API data fetching systems',
          'Implemented DOM manipulation using JavaScript and React state management using useState',
          'Implemented local storage for persistent data and error handling for API requests',
          'Optimized user experience through responsive design and component-based architecture',
          'Optimized frontend performance through efficient rendering and code organization',
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Fetch API', 'LocalStorage', 'Git & GitHub', 'Vercel', 'VS Code'],
        projects: [
          {
            title: 'Modern Landing Page',
            desc: 'A responsive and modern landing page featuring a navigation bar, hero section, feature cards, and footer.',
            role: 'Designed and developed the complete frontend layout using HTML and CSS.',
            github: 'https://github.com/charanepuri/codeasire-landing-page',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_frontenddevelopment-webdevelopment-html-activity-7453287869407842304-yuHg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
          {
            title: 'JavaScript To-Do Application',
            desc: 'Allows users to add, delete, and manage daily tasks with local storage support.',
            role: 'Implemented DOM manipulation, task management functionality, and persistent storage.',
            github: 'https://github.com/charanepuri/codeasire-todo-app',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_javascript-webdevelopment-frontenddeveloper-activity-7454375024431484929-L2u4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
          {
            title: 'React Notes App',
            desc: 'A React-based notes management application with dynamic note creation and deletion.',
            role: 'Developed reusable components, managed state using React hooks, and implemented local storage.',
            github: 'https://github.com/charanepuri/codeasire-react-notes-app',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_reactjs-frontenddevelopment-webdevelopment-activity-7455462191056666624-FjiA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
          {
            title: 'GitHub Users Explorer',
            desc: 'Fetches and displays GitHub user data dynamically using the GitHub API.',
            role: 'Integrated APIs, implemented loading and error handling, and deployed the application.',
            github: 'https://github.com/charanepuri/codeasire-github-users-app',
            linkedin: 'https://www.linkedin.com/posts/charan-teja-972aa9231_webdevelopment-frontenddevelopment-javascript-activity-7460535626178772993-vTWB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs',
          },
        ],
        learned: [
          'Improved frontend development skills through practical projects',
          'Learned modern React development concepts',
          'Understood API integration and asynchronous JavaScript',
          'Practiced debugging and troubleshooting real-world issues',
          'Gained experience with responsive web design',
          'Learned component-based application architecture',
          'Improved code organization and maintainability',
          'Understood deployment workflows using Vercel',
          'Enhanced problem-solving and analytical thinking skills',
        ],
        achievements: [
          'Successfully completed a one-month Front-End Development Internship',
          'Built and deployed multiple frontend projects',
          'Worked with HTML, CSS, JavaScript, React.js, and APIs',
          'Implemented dynamic and interactive user interfaces',
          'Gained practical experience with modern development tools',
          'Strengthened real-world software development skills',
        ],
        offerLetter: 'https://drive.google.com/file/d/1zXfHYfmKReT8b26Y-0nzirHrlq-v-gNY/view?usp=sharing',
        certificate: 'https://drive.google.com/file/d/1JO1kil-9U4L0X_q3mmeGB8ivkEx9eqpc/view?usp=sharing',
        profilePoints: [
          { label: 'Frontend & UI Development:', text: 'Built responsive web applications and interactive interfaces using HTML5, CSS3, JavaScript, and React.js.' },
          { label: 'API & State Management:', text: 'Integrated external APIs with dynamic data rendering and implemented React state with local storage.' },
          { label: 'Application Architecture:', text: 'Optimized frontend performance through reusable components and structured deployment workflows.' },
        ],
      },
      {
        role: 'Full Stack Development Intern',
        company: 'SaiKet Systems',
        duration: '06 April 2026 – 06 May 2026',
        durationLabel: 'April 2026 – May 2026',
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
        profilePoints: [
          { label: 'Project Delivery:', text: 'Successfully developed and deployed 6 full-stack applications, ensuring seamless integration between React frontends and Node.js/Express backends.' },
          { label: 'API Integration:', text: 'Implemented secure RESTful APIs and managed asynchronous data flow using Axios.' },
          { label: 'Database Management:', text: 'Designed and maintained NoSQL schemas using MongoDB to support dynamic application data.' },
          { label: 'UI/UX:', text: 'Built responsive, mobile-first interfaces using modern CSS frameworks and JavaScript.' },
        ],
      },
    ],
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
        ${safeArray(profileData.experiences)
          .map(
            (exp) => `
              <div class="project-item">
                <h5>${escapeHTML(exp.role)} — ${escapeHTML(exp.company)}</h5>
                <p><strong>${escapeHTML(exp.durationLabel)} | ${escapeHTML(exp.mode)}</strong></p>
                <ul>
                  ${safeArray(exp.profilePoints)
                    .map((point) => `<li><strong>${escapeHTML(point.label)}</strong> ${escapeHTML(point.text)}</li>`)
                    .join('')}
                </ul>
              </div>
            `
          )
          .join('')}
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

    const experiences = safeArray(profileData.experiences);

    container.innerHTML = experiences
      .map(
        (experience) => `
      <div class="resume-content" style="margin-bottom: 30px;">
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
          <ul>${renderListItems(safeArray(experience.tasks))}</ul>
        </div>

        <div class="resume-section">
          <h4>🛠 Technologies Used</h4>
          <p>${safeArray(experience.tech).map((item) => escapeHTML(item)).join(', ')}</p>
        </div>

        <div class="resume-section">
          <h4>Projects You Built During Internship</h4>
          ${safeArray(experience.projects).length
            ? safeArray(experience.projects)
                .map(
                  (project) => `
                    <div class="project-item">
                      <h5>${escapeHTML(project.title)}</h5>
                      <p><strong>What it does:</strong> ${escapeHTML(project.desc)}</p>
                      <p><strong>Role:</strong> ${escapeHTML(project.role)}</p>
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
          <ul>${renderListItems(safeArray(experience.learned))}</ul>
        </div>

        <div class="resume-section">
          <h4>🏆 Achievements / Highlights</h4>
          <ul>${renderListItems(safeArray(experience.achievements))}</ul>
        </div>

        <div class="resume-section" style="display: flex; gap: 15px; flex-wrap: wrap;">
          ${experience.offerLetter
            ? `<a class="btn outline" href="${escapeHTML(experience.offerLetter)}" target="_blank" rel="noopener noreferrer">Open Offer Letter</a>`
            : ''}
          ${experience.certificate
            ? `<button class="btn" data-cert-src="${escapeHTML(experience.certificate)}" type="button">View Certificate</button>`
            : ''}
        </div>
      </div>
    `
      )
      .join('<hr style="margin: 40px 0; border: none; border-top: 1px solid rgba(var(--text-color-rgb), 0.1);" />');
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
