"use strict";var e=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var u=e(function(cr,H){H.exports={nargs:10,nin:2,nout:1}});var j=e(function(pr,I){I.exports=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]]});var i=e(function(yr,h){
var J=require('@stdlib/strided-base-binary-dtype-signatures/dist'),l=j(),K=J(l[0],l[1],l[2],{enums:!0});h.exports=K
});var f=e(function(lr,R){
var L=require('@stdlib/math-base-ops-add/dist'),M=require('@stdlib/complex-float64-base-add/dist'),N=require('@stdlib/complex-float32-base-add/dist'),Q=require('@stdlib/strided-base-binary-signature-callbacks/dist'),S=i(),T={default:L,complex64:N,complex128:M},U=Q(T,S);R.exports=U
});var k=e(function(fr,_){
var V=require('@stdlib/strided-dispatch/dist'),W=require('@stdlib/strided-base-binary/dist'),m=require('@stdlib/strided-base-dtype-resolve-enum/dist'),X=i(),x=u(),Y=f(),Z=V(W,X,Y,x.nargs,x.nin,x.nout);function $(a,r,n,v,q,d,o,c,p,y){return Z(a,m(r),n,v,m(q),d,o,m(c),p,y)}_.exports=$
});var O=e(function(mr,E){
var rr=require('@stdlib/strided-dispatch/dist'),er=require('@stdlib/strided-base-binary/dist').ndarray,b=require('@stdlib/strided-base-dtype-resolve-enum/dist'),ar=i(),t=u(),ir=f(),tr=rr(er,ar,ir,t.nargs+t.nin+t.nout,t.nin,t.nout);function ur(a,r,n,v,q,d,o,c,p,y,D,F,G){return tr(a,b(r),n,v,q,b(d),o,c,p,b(y),D,F,G)}E.exports=ur
});var B=e(function(xr,A){
var sr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=require('@stdlib/strided-base-meta-data-props/dist'),w=u(),z=i(),s=k(),nr=O();sr(s,"ndarray",nr);P(w,z,s,!1);P(w,z,s.ndarray,!0);A.exports=s
});var vr=require("path").join,qr=require('@stdlib/utils-try-require/dist'),dr=B(),g,C=qr(vr(__dirname,"./native.js"));C instanceof Error?g=dr:g=C;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
