import{c as H,l as M,aB as O,b as m,v as B,a as g,d as A,f as G,s as R,aC as T,i as U}from"./index.8ff001a5.js";import{g as S}from"./useBVHMap.398715c0.js";const u=new Set;H(function(){const s=S();if(!s.length)return;const o=.02,x=M(()=>{for(const t of u){const e=t.bvhVelocity,c=t.outerObject3d,h=t.bvhHeight,n=t.bvhRadius,b=t.bvhCoeff;e.y+=t.bvhOnGround?0:o*-O;const{position:r}=t.physicsUpdate;t.physicsUpdate={},r&&(r.x&&(e.x=0),r.y&&(e.y=0),r.z&&(e.z=0)),c.position.addScaledVector(e,o),c.updateMatrixWorld();const{start:i,end:l}=g;l.copy(i.copy(c.position)),l.y+=h*b,i.y-=h*b;const V=i.clone();m.setFromCenterAndSize(c.position,B.set(n*2,h*2,n*2));const y=A,v=G;let d=0,f;for(const z of s)z.shapecast({intersectsBounds:p=>p.intersectsBox(m),intersectsTriangle:p=>{d=p.closestPointToSegment(g,y,v),d<n&&(f=v.sub(y).normalize().multiplyScalar(n-d),i.add(f),l.add(f))}});const a=i.sub(V);t.bvhOnGround=a.y>Math.abs(o*e.y*.25);const C=Math.max(0,a.length()-1e-5);a.normalize().multiplyScalar(C),c.position.add(a),t.bvhOnGround?e.set(0,0,0):(a.normalize(),e.addScaledVector(a,-a.dot(e)))}});return()=>{x.cancel()}},[S]);const P=s=>.9227186+(-2.234932-.9227186)/(1+(s/.2678716)**1.417467);function w(s){if(s.done)return;R.attach(this.outerObject3d),this.physicsUpdate={};const o=T(this).multiplyScalar(.5);this.bvhHeight=Math.max(o.y,.5),this.bvhRadius=Math.max(o.x,o.z,.5),this.bvhCoeff=P(this.bvhHeight),this.bvhCoeff<.05&&(this.bvhCoeff=0),this.bvhVelocity=new U,u.add(this),s.then(()=>{u.delete(this),this.physicsUpdate=void 0})}export{w as default};