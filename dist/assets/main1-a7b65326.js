import"./modulepreload-polyfill-3cfb730f.js";const t=document.querySelector("body");function m(o){const{clientX:i,clientY:s}=o,a=i/window.innerWidth,c=s/window.innerHeight;t.style.backgroundPosition=`${a*100}% ${c*100}%`}var e=1;typeof window.orientation>"u"?(t.addEventListener("mousemove",m),e=0):document.body.classList.add("bodyphone");console.log("test");var d=document.getElementById("snowstorm");d.loop=!0;var u=document.getElementsByTagName("body")[0];u.addEventListener("click",n);function n(o){document.body.removeEventListener("click",n),console.log("what"),d.play(),setTimeout(()=>{e?document.body.classList.add("bodyimpactinphone"):document.body.classList.add("bodyimpactin")},9350),setTimeout(()=>{e?(document.body.classList.add("bodycoprimephone"),document.body.classList.remove("bodyimpactinphone")):(document.body.classList.add("bodycoprime"),document.body.classList.remove("bodyimpactin"))},10350),setTimeout(()=>{$(".dialogue").append("<p>GREETINGS TRAVELER...</p>")},12350),setTimeout(()=>{$(".dialogue").empty(),$(".dialogue").append("<p>WELCOME TO MY CABIN...</p>")},15350),setTimeout(()=>{$(".dialogue").empty(),$(".dialogue").append("<p>I HOPE YOU ENJOY YOUR STAY...</p>")},18350),setTimeout(()=>{$(".dialogue").empty(),$(".dialogue").append("<p>GO AHEAD... HAVE A LOOK AROUND...</p>")},21350),setTimeout(()=>{$(".dialogue").empty()},24350)}
