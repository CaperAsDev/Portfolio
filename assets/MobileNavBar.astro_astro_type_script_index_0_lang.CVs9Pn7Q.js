const e=document.querySelector(".mobile_nav-menu"),c=e?.querySelector(".popover-button"),n=document.querySelector(".mobile_nav-menu summary"),s=document.querySelectorAll("nav li a"),r=n?.querySelector("svg"),i=Array.from(s),t=()=>{setTimeout(()=>{!(i.some(a=>a===document.activeElement)||c===document.activeElement||n===document.activeElement)&&e&&(e.open=!1)},200)};window.addEventListener("hashchange",()=>{e&&(e.open=!1)});n?.addEventListener("blur",t);c?.addEventListener("blur",t);e?.addEventListener("toggle",()=>{n&&e&&r&&(n.ariaExpanded=String(e.open),r.classList.toggle("open"))});s.forEach(o=>{o.addEventListener("blur",t)});
