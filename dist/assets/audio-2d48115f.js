import"./modulepreload-polyfill-3cfb730f.js";const n=document.querySelector("body");function c(t){const{clientX:d,clientY:i}=t,s=d/window.innerWidth,l=i/window.innerHeight;n.style.backgroundPosition=`${s*100}% ${l*100}%`}typeof window.orientation>"u"?n.addEventListener("mousemove",c):(document.body.classList.add("bodyphone"),document.querySelectorAll(".overlay_text").forEach(t=>{t.style.fontSize="0px"}));var e=document.getElementById("mix");e.loop=!0;e.volume=.2;const o=document.getElementById("radio");o.addEventListener("click",u);function u(){e.paused?(e.play(),o.textContent="Pause"):(e.pause(),o.textContent="Play")}
