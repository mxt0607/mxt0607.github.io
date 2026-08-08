const setupToggle=(buttonId,itemSelector,openLabel,closedLabel)=>{
  const button=document.getElementById(buttonId);
  const items=[...document.querySelectorAll(itemSelector)];
  if(!button||!items.length)return;
  button.addEventListener('click',()=>{
    const open=button.getAttribute('aria-expanded')==='true';
    items.forEach(item=>item.style.display=open?'none':item.classList.contains('publication')?'grid':'grid');
    button.setAttribute('aria-expanded',String(!open));
    button.textContent=open?closedLabel:openLabel;
  });
};

setupToggle('news-toggle','.more-news','Show less','Show more');
setupToggle('pub-toggle','.additional-publication','Show fewer publications','Show more publications');
document.getElementById('year').textContent=new Date().getFullYear();
