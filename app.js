// --- DYNAMIC PORTFOLIO DATA ---

const skillsData = [
	{
		category: "Technical",
		items: [
			{ icon: "🌐", name: "HTML" }, { icon: "🎨", name: "CSS" }, { icon: "✨", name: "JavaScript" },
			{ icon: "🐍", name: "Python" }, { icon: "☕", name: "Java" }, { icon: "🕸️", name: "Django" },
			{ icon: "⚛️", name: "React.js" }, { icon: "🟢", name: "Node.js" }, { icon: "🗄️", name: "MySQL" },
			{ icon: "🍃", name: "MongoDB" }
		]
	},
	{
		category: "Presentation",
		items: [
			{ icon: "📄", name: "Word" }, { icon: "📊", name: "Excel" }, { icon: "📽️", name: "PowerPoint" }
		]
	},
	{
		category: "Soft Skills",
		items: [
			{ icon: "💬", name: "Communication" }, { icon: "👥", name: "Teamwork" }, { icon: "🎤", name: "Public Speaking" },
			{ icon: "📋", name: "Organization" }, { icon: "⏱️", name: "Time Management" }, { icon: "🧩", name: "Problem Solving" }
		]
	},
	{
		category: "Tools",
		items: [
			{ icon: "🤖", name: "ChatGPT" }, { icon: "🎨", name: "Napkin AI" }, { icon: "✨", name: "Google Gemini" },
			{ icon: "🔍", name: "Perplexity" }, { icon: "📈", name: "PowerBI" }, { icon: "📝", name: "Visual Studio Code" },
			{ icon: "🐙", name: "GitHub" }, { icon: "☁️", name: "Netlify" }, { icon: "⚡", name: "Vercel" }, { icon: "🔥", name: "Firebase" }
		]
	}
];

const projectsData = [
	{
		title: "Anasuya Bharadwaj Fan-Made Portfolio Website",
		desc: "The Anasuya Bharadwaj Fan-Made Portfolio Website is a modern, responsive web application designed to showcase the career journey, achievements, and works of Anasuya Bharadwaj. Built using HTML5, CSS3, and Vanilla JavaScript, the project focuses on delivering a clean UI with dynamic content loading, interactive components, and engaging user experience. It organizes filmography, television shows, biography, and gallery into a structured and visually appealing digital platform, making it a strong demonstration of frontend development skills.",
		
		features: [
			"Dynamic data loading using JSON",
			"Interactive Search & Filtering System",
			"Typewriter intro with animated overlay",
			"Responsive gallery with lightbox view",
			"Client-side content protection mechanisms"
		],

		links: [
			// { label: "Live Project Link", url: "#", outline: false },
			{ label: "GitHub Repository Link", url: "https://github.com/charanepuri/anasuya-filmography-app", outline: false },
			{ label: "Project Documentation", url: "https://drive.google.com/file/d/1ATQEft0uYbjef9qphJDIdaKNx6WVyZzB/view?usp=sharing", outline: true }
		]
	},

	{
		title: "Bible Reference Web Application",
		desc: "Developed a fully responsive Bible reference web application with all 66 books, structured data (categories, chapters, verses, authors), real-time search, and category filtering. Built multilingual support for Telugu, Hindi, Tamil, Malayalam, and Kannada; includes Bible history timeline and interactive story modals; deployed on GitHub Pages with Git version control.",
		
		features: [
			"Responsive book browser + verse lookup",
			"Live search & category filter via JavaScript",
			"Language switcher UI with 5 regional options",
			"Timeline and modal-based story module",
			"Deployment: GitHub Pages; Source control: Git"
		],

		links: [
			{ label: "Live Project Link", url: "https://charanepuri.github.io/bible-reference-app/", outline: false },
			{ label: "GitHub Repository Link", url: "https://github.com/charanepuri/bible-reference-app", outline: false },
			{ label: "Project Documentation", url: "https://drive.google.com/file/d/1DYKvz-mUyM-cKtNQ7e72qmlAx4YX0omk/view?usp=sharing", outline: true }
		]
	},

	{
		title: "Document Chatting Using Large Language Models (LLMs)",
		desc: "A document interaction system powered by LLMs that enables natural language queries across multiple document formats.",
		
		features: [
			"Enables users to interact with documents using natural, chat-like conversations instead of keyword searches",
			"Provides context-aware summaries, answers, and insights across multiple documents",
			"Supports various document formats including PDF, DOCX, CSV etc.",
			"Can handle complex queries spanning multiple sources seamlessly",
			"Learns from user interactions to improve response accuracy over time",
			"Enhances document accessibility, efficiency, and user experience in retrieving information"
		],
		
		links: [
			{ label: "View Documentation", url: "https://drive.google.com/file/d/1x3bLrNV-prZKLFvjDAS3Ymuj9RSR65qK/view?usp=sharing", outline: false }
		]
	}
];

const certsData = [
	{ name: "RESUME BUILDING", fileId: "1scHjT4mLN5jwab3AflSU2VygPPj7imV9" },
	{ name: "GENERATIVE AI", fileId: "1CSOEXYTDqYeyEAxpzO-SnOdjgXG5zgXx" },
	{ name: "GOOGLE ANALYTICS", fileId: "1EQoN8R4iaROauPOp43p4ZoUtgWaNe9Rj" },
	{ name: "PYTHON FOR SOFTWARE ENGINEERING", fileId: "1-QFlfAzKWHstE_e8RsiMEngUNifo-bHm" },
	{ name: "SIMPLE WEBPAGE USING HTML IN 10 MINUTES", fileId: "1-DDthJ0qgYZsbBpYmfmX6RfUkojSV8Ns" },
	{ name: "CHATGPT & GENAI", fileId: "1MnxiEVjd9ewdlWh_BtOXjJEpr1c_dDrn" },
	{ name: "DATA VISUALIZATION USING PYTHON", fileId: "1gsch168MInalwn3iOj3yiNPC6tanE5eB" },
	{ name: "PROMPT ENGINEERING", fileId: "1-CFrHuAbRBHSmBVZggXaDMNRA6mZziWq" },
	{ name: "FULL STACK DEVELOPMENT", fileId: "1-BaeTKYgji09KRa7UFOgQuAdmTqIUL1p" }
];

const profileData = {
	header: {
		name: "CHARAN TEJA EPURI",
		subtitle: "Python Full Stack Developer | AI & Data Science Engineer",
		contact: "📍 Hyderabad, India | 📞 9573640326 | ✉️ Charanepuri26@gmail.com"
	},

	summary: "Motivated Artificial Intelligence and Data Science graduate aiming to launch a career as a Python Full Stack Developer. I am committed to leveraging my expertise in Django for robust backend architecture and React.js for creating dynamic, responsive frontends. My objective is to bridge the gap between intelligent data processing and high-performance web development within a professional IT environment. I am eager to apply my proficiency in JavaScript, Python, and modern web technologies to contribute to scalable software solutions.",
	
	expertise: [
		{ category: "Programming", skills: "Python (Core & Advanced), Java (Proficient), JavaScript (ES6+)" },
		{ category: "Web Development", skills: "Django (Full Stack), React JS, HTML5, CSS3" },
		{ category: "Databases", skills: "MySQL, Relational Schema Design, Django ORM" },
		{ category: "AI & Data Science", skills: "Data Analysis, Prompt Engineering, Machine Learning Logic" },
		{ category: "Tools & Version Control", skills: "Git, GitHub, VS Code, REST APIs" }
	],
	
	academic: {
		college: "SRKR Engineering College (A), Bhimavaram",
		degree: "Bachelor of Technology: Artificial Intelligence And Data Science",
		year: "Graduation Year: 2025",
		grade: "Cumulative Grade: 7/10"
	},
	
	projects: [
		{
			title: "Django School Management System",
			details: [
				"Developed a comprehensive system to manage student and teacher records using Django and MySQL.",
				"Implemented full CRUD (Create, Read, Update, Delete) operations and managed relational database schemas through Django ORM.",
				"Focused on secure backend logic and efficient system organization."
			]
		},
	
		{
			title: "Deep Translator Web Application",
			details: [
				"Built a full-stack application integrating external APIs for real-time multi-language translation.",
				"Designed a responsive interface using HTML, CSS, and JavaScript while handling backend request logic in Django."
			]
		},
	
		{
			title: "Recipe Finder Web App",
			details: [
				"Engineered a dynamic search tool using the Edamam API to fetch and display data based on user input.",
				"Utilized asynchronous JavaScript (Fetch API) and Bootstrap for a modern, interactive UI."
			]
		}
	],

	certifications: [
		"Prompt Engineering For Everyone – Chegg",
		"Google Analytics – Great Learning Academy"
	],
	
	competencies: [
		{ name: "Analytical Thinking", desc: "Leveraging AI/Data Science background for complex problem-solving." },
		{ name: "Communication", desc: "Clearly articulating technical concepts to team members." },
		{ name: "Continuous Learning", desc: "Actively exploring new frameworks and software engineering best practices." },
		{ name: "Collaboration", desc: "Experienced in version control and team-based development environments." }
	]
};

// Smooth scrolling for nav links
document.addEventListener('DOMContentLoaded', function(){

	// --- RENDER DYNAMIC DATA ---
	
	const profileContainer = document.getElementById('profile-container');
	if (profileContainer) {
		profileContainer.innerHTML = `
			<div class="resume-header">
				<h3>${profileData.header.name}</h3>
				<p class="subtitle">${profileData.header.subtitle}</p>
				<p class="contact-info">${profileData.header.contact}</p>
			</div>
			<div class="resume-section">
				<h4>Professional Profile</h4>
				<p>${profileData.summary}</p>
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
							${profileData.expertise.map(item => `
							<tr>
								<td><strong>${item.category}</strong></td>
								<td>${item.skills}</td>
							</tr>
							`).join('')}
						</tbody>
					</table>
				</div>
			</div>
			<div class="resume-section">
				<h4>Academic Background</h4>
				<div class="academic-item">
					<p><strong>${profileData.academic.college}</strong></p>
					<p>${profileData.academic.degree}</p>
					<p>${profileData.academic.year}</p>
					<p>${profileData.academic.grade}</p>
				</div>
			</div>
			<div class="resume-section">
				<h4>Development Projects</h4>
				${profileData.projects.map(proj => `
				<div class="project-item">
					<h5>${proj.title}</h5>
					<ul>
						${proj.details.map(detail => `<li>${detail}</li>`).join('')}
					</ul>
				</div>
				`).join('')}
			</div>
			<div class="resume-section">
				<h4>Professional Certifications</h4>
				<ul>
					${profileData.certifications.map(cert => `<li>${cert}</li>`).join('')}
				</ul>
			</div>
			<div class="resume-section">
				<h4>Core Competencies</h4>
				<ul>
					${profileData.competencies.map(comp => `<li><strong>${comp.name}:</strong> ${comp.desc}</li>`).join('')}
				</ul>
			</div>
		`;
	}

	const skillsContainer = document.getElementById('skills-container');
	if(skillsContainer) {
		skillsContainer.innerHTML = skillsData.map(group => `
			<div class="skill-group">
				<h3>${group.category}</h3>
				<ul>${group.items.map(item => `<li><span class="skill-icon">${item.icon}</span> ${item.name}</li>`).join('')}</ul>
			</div>
		`).join('');
	}

	const projectsContainer = document.getElementById('projects-container');
	if(projectsContainer) {
		projectsContainer.innerHTML = projectsData.map(proj => `
			<div class="project-card">
				<h3><b>${proj.title}</b></h3>
				<p class="project-desc">${proj.desc}</p>
				<ul class="project-features">${proj.features.map(f => `<li>${f}</li>`).join('')}</ul>
				<div class="project-actions">
					${proj.links.map(l => `<a class="btn ${l.outline ? 'outline' : ''}" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
				</div>
			</div>
		`).join('');
	}

	const certContainer = document.getElementById('cert-container');
	if(certContainer) {
		certContainer.innerHTML = certsData.map(cert => `
			<div class="cert-item">
				<h4 class="cert-name">${cert.name}</h4>
				<div class="cert-actions">
					<button class="btn small" data-cert-src="https://drive.google.com/file/d/${cert.fileId}/view?usp=sharing">View</button>
					<a class="btn small outline" href="https://drive.google.com/uc?export=download&id=${cert.fileId}" target="_blank" rel="noopener">Download</a>
				</div>
			</div>
		`).join('');
	}

	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach(link => {
		link.addEventListener('click', function(e){
			const targetId = this.getAttribute('href').slice(1);
			const target = document.getElementById(targetId);
			if(target){
				e.preventDefault();
				target.scrollIntoView({behavior:'smooth',block:'start'});
				// close mobile nav
				document.getElementById('nav-links')?.classList.remove('show');
			}
		});
	});

	// Nav toggle for mobile
	const navToggle = document.getElementById('nav-toggle');
	navToggle?.addEventListener('click', ()=>{
		document.getElementById('nav-links')?.classList.toggle('show');
	});

	// Typewriter effect for profile summary
	const typeEl = document.getElementById('typewriter');
	const text = "Full Stack Developer • Python & JavaScript • React & Node.js";
	let i = 0;
	function type(){
		if(!typeEl) return;
		if(i < text.length){
			typeEl.textContent += text.charAt(i);
			i++;
			setTimeout(type, 40);
		}
	}
	type();

	// Certificate modal logic
	const modal = document.getElementById('cert-modal');
	const certFrame = document.getElementById('cert-frame');
	const certDownload = document.getElementById('cert-download');
	const certClose = document.getElementById('cert-close');

	document.body.addEventListener('click', (e)=>{
		const btn = e.target.closest('button[data-cert-src]');
		if(btn){
			const src = btn.getAttribute('data-cert-src');
			if(src){
				let previewSrc = src;
				let downloadSrc = src;

				// Normalize Google Drive links to embed preview + direct download
				if(src.includes('drive.google.com')){
					const match = src.match(/\/d\/([a-zA-Z0-9_-]+)/);
					if(match){
						const fileId = match[1];
						previewSrc = `https://drive.google.com/file/d/${fileId}/preview`;
						downloadSrc = `https://drive.google.com/uc?export=download&id=${fileId}`;
					} else if(src.includes('open?id=')){
						const query = new URL(src).searchParams;
						const fileId = query.get('id');
						if(fileId){
							previewSrc = `https://drive.google.com/file/d/${fileId}/preview`;
							downloadSrc = `https://drive.google.com/uc?export=download&id=${fileId}`;
						}
					}
				}

				certFrame.src = previewSrc;
				certDownload.href = downloadSrc;
				modal.setAttribute('aria-hidden','false');
			}
		}
	});

	certClose?.addEventListener('click', ()=>{
		modal.setAttribute('aria-hidden','true');
		certFrame.src = '';
	});

	modal?.addEventListener('click', (e)=>{
		if(e.target === modal){
			modal.setAttribute('aria-hidden','true');
			certFrame.src = '';
		}
	});

	document.addEventListener('keydown', (e)=>{
		if(e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false'){
			modal.setAttribute('aria-hidden','true');
			certFrame.src = '';
		}
	});

	// make sure external links open safely
	const external = document.querySelectorAll('a[target="_blank"]');
	external.forEach(a=>{
		if(!a.hasAttribute('rel')) a.setAttribute('rel','noopener');
	});
});