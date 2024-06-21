import"./modulepreload-polyfill-3cfb730f.js";import{R as ct,l as lt,E as ut,V as u,m as R,n as N,Q as Le,o as je,b as d,p as dt,e as mt,P as pt,q as ht,G as ft,T as bt,S as Ne,r as gt,M as Ie,k as yt}from"./GLTFLoader-8902865b.js";const Se={type:"change"},se={type:"start"},De={type:"end"},Q=new ct,ve=new lt,Et=Math.cos(70*dt.DEG2RAD);class wt extends ut{constructor(k,ee){super(),this.object=k,this.domElement=ee,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new u,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:R.ROTATE,MIDDLE:R.DOLLY,RIGHT:R.PAN},this.touches={ONE:N.ROTATE,TWO:N.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",ae),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Se),e.update(),i=n.NONE},this.update=function(){const t=new u,o=new Le().setFromUnitVectors(k.up,new u(0,1,0)),r=o.clone().invert(),c=new u,l=new Le,v=new u,b=2*Math.PI;return function(rt=null){const Ae=e.object.position;t.copy(Ae).sub(e.target),t.applyQuaternion(o),s.setFromVector3(t),e.autoRotate&&i===n.NONE&&z(Ze(rt)),e.enableDamping?(s.theta+=m.theta*e.dampingFactor,s.phi+=m.phi*e.dampingFactor):(s.theta+=m.theta,s.phi+=m.phi);let p=e.minAzimuthAngle,h=e.maxAzimuthAngle;isFinite(p)&&isFinite(h)&&(p<-Math.PI?p+=b:p>Math.PI&&(p-=b),h<-Math.PI?h+=b:h>Math.PI&&(h-=b),p<=h?s.theta=Math.max(p,Math.min(h,s.theta)):s.theta=s.theta>(p+h)/2?Math.max(p,s.theta):Math.min(h,s.theta)),s.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,s.phi)),s.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(x,e.dampingFactor):e.target.add(x),e.zoomToCursor&&X||e.object.isOrthographicCamera?s.radius=oe(s.radius):s.radius=oe(s.radius*g),t.setFromSpherical(s),t.applyQuaternion(r),Ae.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(m.theta*=1-e.dampingFactor,m.phi*=1-e.dampingFactor,x.multiplyScalar(1-e.dampingFactor)):(m.set(0,0,0),x.set(0,0,0));let G=!1;if(e.zoomToCursor&&X){let _=null;if(e.object.isPerspectiveCamera){const H=t.length();_=oe(H*g);const q=H-_;e.object.position.addScaledVector(le,q),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const H=new u(f.x,f.y,0);H.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/g)),e.object.updateProjectionMatrix(),G=!0;const q=new u(f.x,f.y,0);q.unproject(e.object),e.object.position.sub(q).add(H),e.object.updateMatrixWorld(),_=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;_!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(_).add(e.object.position):(Q.origin.copy(e.object.position),Q.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Q.direction))<Et?k.lookAt(e.target):(ve.setFromNormalAndCoplanarPoint(e.object.up,e.target),Q.intersectPlane(ve,e.target))))}else e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/g)),e.object.updateProjectionMatrix(),G=!0);return g=1,X=!1,G||c.distanceToSquared(e.object.position)>ce||8*(1-l.dot(e.object.quaternion))>ce||v.distanceToSquared(e.target)>0?(e.dispatchEvent(Se),c.copy(e.object.position),l.copy(e.object.quaternion),v.copy(e.target),G=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",Oe),e.domElement.removeEventListener("pointerdown",Te),e.domElement.removeEventListener("pointercancel",Y),e.domElement.removeEventListener("wheel",Me),e.domElement.removeEventListener("pointermove",ne),e.domElement.removeEventListener("pointerup",Y),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",ae),e._domElementKeyEvents=null)};const e=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=n.NONE;const ce=1e-6,s=new je,m=new je;let g=1;const x=new u,y=new d,E=new d,A=new d,w=new d,P=new d,L=new d,j=new d,S=new d,C=new d,le=new u,f=new d;let X=!1;const a=[],W={};function Ze(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function B(){return Math.pow(.95,e.zoomSpeed)}function z(t){m.theta-=t}function V(t){m.phi-=t}const ue=function(){const t=new u;return function(r,c){t.setFromMatrixColumn(c,0),t.multiplyScalar(-r),x.add(t)}}(),de=function(){const t=new u;return function(r,c){e.screenSpacePanning===!0?t.setFromMatrixColumn(c,1):(t.setFromMatrixColumn(c,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(r),x.add(t)}}(),D=function(){const t=new u;return function(r,c){const l=e.domElement;if(e.object.isPerspectiveCamera){const v=e.object.position;t.copy(v).sub(e.target);let b=t.length();b*=Math.tan(e.object.fov/2*Math.PI/180),ue(2*r*b/l.clientHeight,e.object.matrix),de(2*c*b/l.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(ue(r*(e.object.right-e.object.left)/e.object.zoom/l.clientWidth,e.object.matrix),de(c*(e.object.top-e.object.bottom)/e.object.zoom/l.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function te(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?g/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function me(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?g*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function pe(t){if(!e.zoomToCursor)return;X=!0;const o=e.domElement.getBoundingClientRect(),r=t.clientX-o.left,c=t.clientY-o.top,l=o.width,v=o.height;f.x=r/l*2-1,f.y=-(c/v)*2+1,le.set(f.x,f.y,1).unproject(e.object).sub(e.object.position).normalize()}function oe(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function he(t){y.set(t.clientX,t.clientY)}function Xe(t){pe(t),j.set(t.clientX,t.clientY)}function fe(t){w.set(t.clientX,t.clientY)}function We(t){E.set(t.clientX,t.clientY),A.subVectors(E,y).multiplyScalar(e.rotateSpeed);const o=e.domElement;z(2*Math.PI*A.x/o.clientHeight),V(2*Math.PI*A.y/o.clientHeight),y.copy(E),e.update()}function Be(t){S.set(t.clientX,t.clientY),C.subVectors(S,j),C.y>0?te(B()):C.y<0&&me(B()),j.copy(S),e.update()}function Ve(t){P.set(t.clientX,t.clientY),L.subVectors(P,w).multiplyScalar(e.panSpeed),D(L.x,L.y),w.copy(P),e.update()}function Ge(t){pe(t),t.deltaY<0?me(B()):t.deltaY>0&&te(B()),e.update()}function qe(t){let o=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?V(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?V(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?z(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?z(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function be(){if(a.length===1)y.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),o=.5*(a[0].pageY+a[1].pageY);y.set(t,o)}}function ge(){if(a.length===1)w.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),o=.5*(a[0].pageY+a[1].pageY);w.set(t,o)}}function ye(){const t=a[0].pageX-a[1].pageX,o=a[0].pageY-a[1].pageY,r=Math.sqrt(t*t+o*o);j.set(0,r)}function Qe(){e.enableZoom&&ye(),e.enablePan&&ge()}function $e(){e.enableZoom&&ye(),e.enableRotate&&be()}function Ee(t){if(a.length==1)E.set(t.pageX,t.pageY);else{const r=ie(t),c=.5*(t.pageX+r.x),l=.5*(t.pageY+r.y);E.set(c,l)}A.subVectors(E,y).multiplyScalar(e.rotateSpeed);const o=e.domElement;z(2*Math.PI*A.x/o.clientHeight),V(2*Math.PI*A.y/o.clientHeight),y.copy(E)}function we(t){if(a.length===1)P.set(t.pageX,t.pageY);else{const o=ie(t),r=.5*(t.pageX+o.x),c=.5*(t.pageY+o.y);P.set(r,c)}L.subVectors(P,w).multiplyScalar(e.panSpeed),D(L.x,L.y),w.copy(P)}function Pe(t){const o=ie(t),r=t.pageX-o.x,c=t.pageY-o.y,l=Math.sqrt(r*r+c*c);S.set(0,l),C.set(0,Math.pow(S.y/j.y,e.zoomSpeed)),te(C.y),j.copy(S)}function Je(t){e.enableZoom&&Pe(t),e.enablePan&&we(t)}function et(t){e.enableZoom&&Pe(t),e.enableRotate&&Ee(t)}function Te(t){e.enabled!==!1&&(a.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",ne),e.domElement.addEventListener("pointerup",Y)),it(t),t.pointerType==="touch"?nt(t):tt(t))}function ne(t){e.enabled!==!1&&(t.pointerType==="touch"?at(t):ot(t))}function Y(t){st(t),a.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",ne),e.domElement.removeEventListener("pointerup",Y)),e.dispatchEvent(De),i=n.NONE}function tt(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case R.DOLLY:if(e.enableZoom===!1)return;Xe(t),i=n.DOLLY;break;case R.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;fe(t),i=n.PAN}else{if(e.enableRotate===!1)return;he(t),i=n.ROTATE}break;case R.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;he(t),i=n.ROTATE}else{if(e.enablePan===!1)return;fe(t),i=n.PAN}break;default:i=n.NONE}i!==n.NONE&&e.dispatchEvent(se)}function ot(t){switch(i){case n.ROTATE:if(e.enableRotate===!1)return;We(t);break;case n.DOLLY:if(e.enableZoom===!1)return;Be(t);break;case n.PAN:if(e.enablePan===!1)return;Ve(t);break}}function Me(t){e.enabled===!1||e.enableZoom===!1||i!==n.NONE||(t.preventDefault(),e.dispatchEvent(se),Ge(t),e.dispatchEvent(De))}function ae(t){e.enabled===!1||e.enablePan===!1||qe(t)}function nt(t){switch(xe(t),a.length){case 1:switch(e.touches.ONE){case N.ROTATE:if(e.enableRotate===!1)return;be(),i=n.TOUCH_ROTATE;break;case N.PAN:if(e.enablePan===!1)return;ge(),i=n.TOUCH_PAN;break;default:i=n.NONE}break;case 2:switch(e.touches.TWO){case N.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Qe(),i=n.TOUCH_DOLLY_PAN;break;case N.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;$e(),i=n.TOUCH_DOLLY_ROTATE;break;default:i=n.NONE}break;default:i=n.NONE}i!==n.NONE&&e.dispatchEvent(se)}function at(t){switch(xe(t),i){case n.TOUCH_ROTATE:if(e.enableRotate===!1)return;Ee(t),e.update();break;case n.TOUCH_PAN:if(e.enablePan===!1)return;we(t),e.update();break;case n.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Je(t),e.update();break;case n.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;et(t),e.update();break;default:i=n.NONE}}function Oe(t){e.enabled!==!1&&t.preventDefault()}function it(t){a.push(t)}function st(t){delete W[t.pointerId];for(let o=0;o<a.length;o++)if(a[o].pointerId==t.pointerId){a.splice(o,1);return}}function xe(t){let o=W[t.pointerId];o===void 0&&(o=new d,W[t.pointerId]=o),o.set(t.pageX,t.pageY)}function ie(t){const o=t.pointerId===a[0].pointerId?a[1]:a[0];return W[o.pointerId]}e.domElement.addEventListener("contextmenu",Oe),e.domElement.addEventListener("pointerdown",Te),e.domElement.addEventListener("pointercancel",Y),e.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}}let K=window.innerHeight*.85;var F=new mt,U=new pt(10,window.innerWidth/K,.1,1e3);U.position.z=13;var Z=new ht({antialias:!0}),Pt=document.getElementById("threescene");Z.setSize(window.innerWidth,K);Pt.appendChild(Z.domElement);const I=new wt(U,Z.domElement);I.enableDamping=!0;I.dampingFactor=.05;I.enableZoom=!1;I.screenSpacePanning=!1;I.maxPolarAngle=Math.PI/2;I.minPolarAngle=Math.PI/2;const ke=`
      attribute float size; 
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,Ce=`
      uniform sampler2D texture1;
      uniform float brightness;
      varying vec2 vUv;
      void main() {
        vec4 color = texture(texture1, vUv);
        gl_FragColor = vec4(color.rgb * brightness, color.a);
      }
    `;var Tt=new ft;let Re;Tt.load("/carousel/carousel.gltf",O=>{Re=O.scene,Re.normal,F.add(O.scene),Mt(),J()});function Mt(){$(".loader-wrapper").fadeOut("slow"),document.body.style.overflow="visible",console.log("carousel loaded")}const ze=new bt,Ot=ze.load("/images/A.png",()=>{J()}),xt=ze.load("/images/B.png",()=>{J()}),Ye=new Ne({uniforms:{texture1:{value:Ot},brightness:{value:1}},vertexShader:ke,fragmentShader:Ce}),_e=new Ne({uniforms:{texture1:{value:xt},brightness:{value:1}},vertexShader:ke,fragmentShader:Ce}),He=new gt(.95,.55,.01),T=new Ie(He,Ye),M=new Ie(He,_e);T.position.x=.075;T.position.y=.3;T.position.z=.7;T.rotation.x=-.1;T.rotation.y=-.3;T.rotation.z=.1;F.add(T);M.position.x=.87;M.position.y=.35;M.position.z=-.28;M.rotation.x=-.15;M.rotation.y=-96;M.rotation.z=-.1;F.add(M);const Ke=new yt;Ke.intensity=1.1;F.add(Ke);window.addEventListener("resize",At);function At(){K=window.innerHeight*.85,U.aspect=window.innerWidth/K,U.updateProjectionMatrix(),Z.setSize(window.innerWidth,K)}function J(){requestAnimationFrame(J),Ye.uniforms.brightness.value=.5+Math.random()/3,_e.uniforms.brightness.value=.5+Math.random()/3,Z.render(F,U)}const Ue=document.querySelector("body");function Lt(O){const{clientX:k,clientY:ee}=O,e=k/window.innerWidth,n=ee/window.innerHeight;Ue.style.backgroundPosition=`${e*100}% ${n*100}%`}typeof window.orientation>"u"?Ue.addEventListener("mousemove",Lt):document.body.classList.add("bodyphone");var re=document.getElementById("snowstorm");re.loop=!0;re.volume=.2;var jt=document.getElementsByTagName("body")[0];jt.addEventListener("click",Fe);function Fe(O){document.body.removeEventListener("click",Fe),re.play()}
