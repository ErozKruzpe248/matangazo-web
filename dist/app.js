const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if(menu && navigation){
  const mobile = window.matchMedia('(max-width: 800px)');
  const reset = ()=>{navigation.hidden=mobile.matches;menu.setAttribute('aria-expanded','false');};
  reset(); mobile.addEventListener('change',reset);
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));navigation.hidden=open;});
  navigation.addEventListener('click',event=>{if(event.target.closest('a')&&mobile.matches)reset();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobile.matches){reset();menu.focus();}});
}
const form = document.querySelector('#contact-form');
if(form){
  const selected = new URLSearchParams(window.location.search).get('servicio');
  const service = form.elements.namedItem('servicio');
  if(selected && Array.from(service.options).some(option=>option.value===selected))service.value=selected;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    for(const key of ['nombre','negocio']){
      const input=form.elements.namedItem(key);
      input.setCustomValidity(input.value.trim()?'':'Escribe un valor para continuar.');
    }
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const name=String(data.get('nombre')).trim();
    const company=String(data.get('negocio')).trim();
    if(!name||!company)return;
    const goal=String(data.get('mensaje')).trim();
    const text=`Hola, Matangazo. Soy ${name}, de ${company}.\n\nMe interesa: ${data.get('servicio')}.${goal?'\n\nMi proyecto: '+goal:''}\n\n¿Podemos conversar sobre una propuesta?`;
    document.querySelector('#message-text').textContent=text;
    document.querySelector('#whatsapp-continue').href='https://wa.me/528115963472?text='+encodeURIComponent(text);
    const review=document.querySelector('#message-review');
    review.hidden=false;
    review.focus({preventScroll:true});
    review.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
  });
  form.addEventListener('input',event=>{if(typeof event.target.setCustomValidity==='function')event.target.setCustomValidity('');document.querySelector('#message-review').hidden=true;});
}
