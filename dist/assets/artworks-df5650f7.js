import"./modulepreload-polyfill-3cfb730f.js";import{e as w,P as c,q as l,G as M,k as m}from"./GLTFLoader-8902865b.js";let n=window.innerHeight*.66;var h=new w,u=new w,y=new w,i=new c(10,window.innerWidth/n,.1,1e3),t=new c(10,window.innerWidth/n,.1,1e3),o=new c(10,window.innerWidth/n,.1,1e3);i.position.z=.7;i.position.x=.01;i.position.y=.24;i.rotation.x=-.25;t.position.z=.7;t.position.x=.01;t.position.y=.22;t.rotation.x=-.21;o.position.z=.9;o.position.x=.01;o.position.y=.34;o.rotation.x=-.25;var d=new l({antialias:!0}),r=new l({antialias:!0}),a=new l({antialias:!0}),P=document.getElementById("threescene"),S=document.getElementById("threescene2"),I=document.getElementById("threescene3");d.setSize(window.innerWidth/2,window.innerHeight/3);r.setSize(window.innerWidth/2,window.innerHeight/3);a.setSize(window.innerWidth/2,window.innerHeight/3);P.appendChild(d.domElement);S.appendChild(r.domElement);I.appendChild(a.domElement);var p=new M;let v;p.load("/pika/pika.gltf",e=>{v=e.scene,h.add(e.scene),s()});let b;p.load("/rykard/rykard.gltf",e=>{b=e.scene,u.add(e.scene),s()});let f;p.load("/sunfish/sunfish.gltf",e=>{f=e.scene,y.add(e.scene),j(),s()});function j(){$(".loader-wrapper").fadeOut("slow"),document.body.style.overflow="visible",console.log("carousel loaded")}const W=new m;W.intensity=3;h.add(W);const E=new m;E.intensity=3;u.add(E);const z=new m;z.intensity=3;y.add(z);window.addEventListener("resize",q);function q(){n=window.innerHeight*.85,i.aspect=window.innerWidth/n,t.aspect=window.innerWidth/n,o.aspect=window.innerWidth/n,i.updateProjectionMatrix(),t.updateProjectionMatrix(),o.updateProjectionMatrix(),d.setSize(window.innerWidth/2,window.innerHeight/2),r.setSize(window.innerWidth/2,window.innerHeight/2),a.setSize(window.innerWidth/2,window.innerHeight/2)}function A(){const e=document.body.getBoundingClientRect().top;v.rotation.y=e*.001,b.rotation.y=e*.001+1.8,f.rotation.y=e*.001+.3}document.body.onscroll=A;function s(){requestAnimationFrame(s),d.render(h,i),r.render(u,t),a.render(y,o)}const k=document.querySelector("body");function G(e){const{clientX:L,clientY:H}=e,B=L/window.innerWidth,C=H/window.innerHeight;k.style.backgroundPosition=`${B*100}% ${C*100}%`}typeof window.orientation>"u"?k.addEventListener("mousemove",G):document.body.classList.add("bodyphone");var g=document.getElementById("snowstorm");g.loop=!0;g.volume=.2;var R=document.getElementsByTagName("body")[0];R.addEventListener("click",x);function x(e){document.body.removeEventListener("click",x),g.play()}
