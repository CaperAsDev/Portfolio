import"./MobileNavBar.astro_astro_type_script_index_0_lang.CDUOmC0c.js";const r=document.querySelector(".interactive");let t=0,e=0,o=0,i=0;const l=()=>{t+=(o-t)/20,e+=(i-e)/20,r&&(r.style.transform=`translate(${Math.round(t)}px, ${Math.round(e)}px)`),requestAnimationFrame(l)};window.addEventListener("mousemove",n=>{o=n.clientX,i=n.clientY});l();