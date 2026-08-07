const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
navLinks?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

const revealObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const filters=document.querySelectorAll('.filter');
const publications=document.querySelectorAll('.publication');
filters.forEach(button=>button.addEventListener('click',()=>{
  const selected=button.dataset.filter;
  filters.forEach(filter=>{const active=filter===button;filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));});
  publications.forEach(publication=>{const categories=publication.dataset.category||'';publication.classList.toggle('hidden',selected!=='all'&&!categories.includes(selected));});
}));

const sections=[...document.querySelectorAll('main section[id]')];
const navAnchors=[...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){navAnchors.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}});},{rootMargin:'-35% 0px -60% 0px'});
sections.forEach(section=>sectionObserver.observe(section));

const topButton=document.querySelector('.back-to-top');
window.addEventListener('scroll',()=>topButton?.classList.toggle('visible',window.scrollY>700),{passive:true});
topButton?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelector('#year').textContent=new Date().getFullYear();
