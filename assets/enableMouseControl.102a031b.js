import{a9 as E,aa as e,c as f,ab as g,ac as T,ad as m,ae as k}from"./index.8ff001a5.js";function y(c){if(!c.done){if(E||this.mouseControl==="drag"){let o=0,n=0,s=0,d=0,u=!1;const a=t=>{t.preventDefault(),u=!0,s=o="targetTouches"in t?t.targetTouches[0].clientX:t.clientX,d=n="targetTouches"in t?t.targetTouches[0].clientY:t.clientY},i=t=>{if(!u)return;const v="targetTouches"in t?t.targetTouches[0].clientX:t.clientX,h="targetTouches"in t?t.targetTouches[0].clientY:t.clientY,l=v-o,L=h-n;o=v,n=h,this.mouseControlMode==="orbit"?this.gyrate(l*2,L*2):(this.gyrate(l*2,0),this.gyrate(0,L*2,!0)),(Math.abs(o-s)>10||Math.abs(n-d)>10)&&k(!1)},r=()=>{u=!1,k(!0)};if(this.mouseControl==="drag"&&!E){e.addEventListener("mousedown",a),e.addEventListener("mousemove",i),e.addEventListener("mouseup",r),document.addEventListener("mouseleave",r),c.then(()=>{e.removeEventListener("mousedown",a),e.removeEventListener("mousemove",i),e.removeEventListener("mouseup",r),document.removeEventListener("mouseleave",r),r()});return}e.addEventListener("touchstart",a),e.addEventListener("touchmove",i),e.addEventListener("touchend",r),e.addEventListener("touchcancel",r),c.then(()=>{e.removeEventListener("touchstart",a),e.removeEventListener("touchmove",i),e.removeEventListener("touchend",r),e.removeEventListener("touchcancel",r),r()});return}c.watch(f(()=>{if(g()!==this.camera)return;const o=({movementX:n,movementY:s})=>{this.mouseControlMode==="orbit"?this.gyrate(n,s):(this.gyrate(n,0),this.gyrate(0,s,!0))};return document.addEventListener("mousemove",o),()=>{document.removeEventListener("mousemove",o)}},[g])),c.watch(f(()=>{const o=T();if(o!==this.camera)return;const n=()=>e.requestPointerLock();e.addEventListener("click",n);const s=()=>{document.pointerLockElement===e?m(o):m(void 0)};return document.addEventListener("pointerlockchange",s),()=>{e.removeEventListener("click",n),document.removeEventListener("pointerlockchange",s),document.exitPointerLock(),m(void 0)}},[T]))}}export{y as default};
