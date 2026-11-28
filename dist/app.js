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
  const requestedService = new URLSearchParams(window.location.search).get('servicio');
  const selected = requestedService === 'Diseño web' ? 'Presencia Web' : requestedService;
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

const goalButtons = Array.from(document.querySelectorAll('[data-goal]'));
const siteBasePath = document.querySelector('meta[name="site-base-path"]')?.getAttribute('content') || '';
if(goalButtons.length){
  const goals={
    web:{title:'Una web que presente bien tu negocio.',description:'Explica lo que haces, muestra tu oferta y facilita que las personas te contacten.',label:'Explorar Presencia Web',url:'/servicios/diseno-web/'},
    consultas:{title:'Conecta con quienes buscan lo que ofreces.',description:'Revisemos cómo dar a conocer tus servicios con anuncios y una ruta clara al contacto.',label:'Conocer Google Ads',url:'/servicios/google-ads/'},
    marca:{title:'Una imagen que hable bien de tu negocio.',description:'Dale coherencia a tu identidad, tus materiales y la forma en que te presentas.',label:'Explorar identidad de marca',url:'/servicios/identidad-de-marca/'}
  };
  goalButtons.forEach(button=>button.addEventListener('click',()=>{
    const goal=goals[button.dataset.goal];
    if(!goal)return;
    goalButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    document.querySelector('#goal-heading').textContent=goal.title;
    document.querySelector('#goal-description').textContent=goal.description;
    const link=document.querySelector('#goal-link');
    link.href=siteBasePath+goal.url;
    link.replaceChildren(document.createTextNode(goal.label+' '));
    const arrow=document.createElement('span');arrow.className='arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';link.append(arrow);
  }));
}

const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const motionBlocks=Array.from(document.querySelectorAll('[data-motion]'));
if('IntersectionObserver' in window){
  const motionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    entry.target.classList.toggle('motion-visible',entry.isIntersecting);
    if(entry.isIntersecting&&!motionPreference.matches)entry.target.classList.add('motion-active');
  }),{threshold:0.15});
  motionBlocks.forEach(block=>motionObserver.observe(block));
}
motionBlocks.forEach(block=>{
  let replayFrame;
  const replay=()=>{
    if(motionPreference.matches)return;
    window.cancelAnimationFrame(replayFrame);
    block.classList.remove('motion-active');
    replayFrame=window.requestAnimationFrame(()=>{
      replayFrame=window.requestAnimationFrame(()=>{
        if(!motionPreference.matches)block.classList.add('motion-active');
      });
    });
  };
  block.addEventListener('pointerenter',event=>{
    if(event.pointerType!=='touch')replay();
  });
  const focusTarget = block.closest('a.service-showcase') || block;
  focusTarget.addEventListener('focus',replay);
  block.addEventListener('click',event=>{
    if(event.pointerType==='touch'&&!event.target.closest('a,button,input,select,textarea,summary'))replay();
  });
});
motionPreference.addEventListener('change',()=>{if(motionPreference.matches)motionBlocks.forEach(block=>block.classList.remove('motion-active'));});

document.querySelectorAll('[data-evolution]').forEach(evolution=>{
  const tool=evolution.querySelector('.evolution-tool');
  const slider=evolution.querySelector('input[type="range"]');
  const update=()=>{
    const value=Math.max(0,Math.min(100,Number(slider.value)));
    tool.style.setProperty('--split',value+'%');
    slider.setAttribute('aria-valuetext',value===100?'Identidad de 2012':value===0?'Identidad de 2026':`${value}% de la identidad de 2012 y ${100-value}% de la de 2026`);
  };
  slider.addEventListener('input',update);
  evolution.querySelectorAll('[data-evolution-value]').forEach(button=>button.addEventListener('click',()=>{slider.value=button.dataset.evolutionValue;update();}));
  update();
});
const reel=document.querySelector('[data-reel]');
if(reel){
  const scenes=Array.from(reel.querySelectorAll('[data-scene]'));
  const controls=Array.from(reel.querySelectorAll('[data-reel-select]'));
  const pause=reel.querySelector('[data-reel-pause]');
  const status=reel.querySelector('[data-reel-status]');
  const names=['Presencia Web: una buena primera impresión.','Identidad: una marca reconocible en cada detalle.','Comunicación: una voz propia para tu negocio.'];
  const compact=window.matchMedia('(max-width: 800px)');
  let index=0,visible=false,timer,paused=motionPreference.matches||compact.matches;
  const stop=()=>{window.clearTimeout(timer);reel.classList.remove('reel-running');};
  const updateButton=()=>{
    pause.querySelector('[data-pause-label]').textContent=paused?'Reproducir':'Pausar';
    pause.querySelector('[data-pause-icon]').textContent=paused?'▷':'Ⅱ';
    pause.setAttribute('aria-label',paused?'Reproducir muestra automática':'Pausar muestra automática');
  };
  const schedule=()=>{
    stop();
    if(paused||!visible||document.hidden||motionPreference.matches)return;
    reel.classList.add('reel-running');
    timer=window.setTimeout(()=>{show((index+1)%scenes.length);schedule();},6500);
  };
  const show=(next,manual=false)=>{
    index=next;
    scenes.forEach((scene,i)=>{scene.hidden=i!==index;scene.classList.toggle('is-active',i===index);scene.setAttribute('aria-hidden',String(i!==index));});
    controls.forEach((control,i)=>control.setAttribute('aria-pressed',String(i===index)));
    if(manual)status.textContent=names[index];
  };
  controls.forEach((control,i)=>control.addEventListener('click',()=>{paused=true;show(i,true);updateButton();schedule();}));
  pause.addEventListener('click',()=>{paused=!paused;updateButton();schedule();});
  // Reading or navigating the sample stops automatic changes.
  reel.addEventListener('focusin',event=>{if(event.target.closest('[data-reel-pause]'))return;paused=true;updateButton();schedule();});
  document.addEventListener('visibilitychange',schedule);
  motionPreference.addEventListener('change',()=>{if(motionPreference.matches)paused=true;pause.hidden=motionPreference.matches;updateButton();schedule();});
  if('IntersectionObserver' in window){
    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:0.2}).observe(reel);
  }
  pause.hidden=motionPreference.matches;
  updateButton();
}
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-in-view');observer.unobserve(entry.target);}
  }),{threshold:0.12});
  if(!motionPreference.matches)document.querySelectorAll('.service-row,.project,.step,.benefit').forEach(element=>observer.observe(element));
}
