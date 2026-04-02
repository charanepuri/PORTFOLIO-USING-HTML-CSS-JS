// Smooth scrolling for nav links
document.addEventListener('DOMContentLoaded', function(){
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