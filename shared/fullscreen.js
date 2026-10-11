/* Full-screen button for SCOM pages. Inside the shell (index.html) it fullscreens the shell, so full screen survives page changes. */
(()=>{let d=document;try{if(parent!==window&&parent.__scomShell)d=parent.document}catch(e){}
const b=document.querySelectorAll(".fs-btn");if(!d.fullscreenEnabled){return;}
const upd=()=>b.forEach(x=>x.textContent=d.fullscreenElement?"✕ Exit full screen":"⛶ Full screen");
b.forEach(x=>{x.hidden=false;x.addEventListener("click",()=>d.fullscreenElement?d.exitFullscreen():d.documentElement.requestFullscreen().catch(()=>{}));});
d.addEventListener("fullscreenchange",upd);addEventListener("pagehide",()=>d.removeEventListener("fullscreenchange",upd));upd();})();
