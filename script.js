
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const v=btn.dataset.filter;document.querySelectorAll('[data-cat]').forEach(el=>{el.style.display=(v==='all'||el.dataset.cat.includes(v))?'block':'none';});}));
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
