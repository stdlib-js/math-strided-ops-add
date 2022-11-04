// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).add=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,i=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,a=r.__lookupGetter__,l=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var f,c,p,m;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(t,n)||l.call(t,n)?(f=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=f):t[n]=e.value),p="get"in e,m="set"in e,c&&(p||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,n,e.get),m&&u&&u.call(t,n,e.set),t};var f=n;function c(t,n,e){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Math.floor;function m(t){return p(t)===t}var s=4294967295;function g(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function v(t,n){return null!=t&&d.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var x=b()?function(t){var n,e,r;if(null==t)return h.call(t);e=t[w],n=v(t,w);try{t[w]=void 0}catch(n){return h.call(t)}return r=h.call(t),n?t[w]=e:delete t[w],r}:function(t){return h.call(t)},E=Number,j=E.prototype.toString;var T=b();function O(t){return"object"==typeof t&&(t instanceof E||(T?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Number]"===x(t)))}function _(t){return g(t)||O(t)}c(_,"isPrimitive",g),c(_,"isObject",O);var S=Number.POSITIVE_INFINITY,V=E.NEGATIVE_INFINITY;function I(t){return t<S&&t>V&&m(t)}function P(t){return g(t)&&I(t)}function F(t){return O(t)&&I(t.valueOf())}function A(t){return P(t)||F(t)}function k(t){return P(t)&&t>=0}function N(t){return F(t)&&t.valueOf()>=0}function B(t){return k(t)||N(t)}function R(t){return Object.keys(Object(t))}c(A,"isPrimitive",P),c(A,"isObject",F),c(B,"isPrimitive",k),c(B,"isObject",N);var M,L=void 0!==Object.keys;function Y(t){return"[object Arguments]"===x(t)}M=function(){return Y(arguments)}();var C=M;function U(t){return"string"==typeof t}var G=String.prototype.valueOf;var X=b();function H(t){return"object"==typeof t&&(t instanceof String||(X?function(t){try{return G.call(t),!0}catch(t){return!1}}(t):"[object String]"===x(t)))}function J(t){return U(t)||H(t)}function W(t){return t!=t}function q(t){return g(t)&&W(t)}function z(t){return O(t)&&W(t.valueOf())}function D(t){return q(t)||z(t)}c(J,"isPrimitive",U),c(J,"isObject",H),c(D,"isPrimitive",q),c(D,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,n){var e;return null!=t&&(!(e=K.call(t,n))&&Q&&J(t)?!q(n=+n)&&P(n)&&n>=0&&n<t.length:e)}var $=Array.isArray?Array.isArray:function(t){return"[object Array]"===x(t)};var tt=C?Y:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&m(t.length)&&t.length>=0&&t.length<=4294967295&&v(t,"callee")&&!Z(t,"callee")},nt=Array.prototype.slice;function et(t){return null!==t&&"object"==typeof t}c(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!$(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(et));var rt=Z((function(){}),"prototype"),it=!Z({toString:null},"toString");function ot(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&m(t.length)&&t.length>=0&&t.length<=9007199254740991}function ut(t,n,e){var r,i;if(!ot(t)&&!U(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!P(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(D(n)){for(;i<r;i++)if(D(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var at=/./;function lt(t){return"boolean"==typeof t}var ft=Boolean.prototype.toString;var ct=b();function pt(t){return"object"==typeof t&&(t instanceof Boolean||(ct?function(t){try{return ft.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===x(t)))}function mt(t){return lt(t)||pt(t)}function st(){return new Function("return this;")()}c(mt,"isPrimitive",lt),c(mt,"isObject",pt);var gt="object"==typeof self?self:null,yt="object"==typeof window?window:null,bt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ht="object"==typeof bt?bt:null;var dt=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return st()}if(gt)return gt;if(yt)return yt;if(ht)return ht;throw new Error("unexpected error. Unable to resolve global object.")}(),vt=dt.document&&dt.document.childNodes,wt=Int8Array;function xt(){return/^\s*function\s*([^(]*)/i}var Et=/^\s*function\s*([^(]*)/i;function jt(t){var n,e,r,i;if(("Object"===(e=x(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Et.exec(r.toString()))return n[1]}return et(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}c(xt,"REGEXP",Et);var Tt="function"==typeof at||"object"==typeof wt||"function"==typeof vt?function(t){return jt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?jt(t).toLowerCase():n};function Ot(t){return t.constructor&&t.constructor.prototype===t}var _t=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],St="undefined"==typeof window?void 0:window;var Vt=function(){var t;if("undefined"===Tt(St))return!1;for(t in St)try{-1===ut(_t,t)&&v(St,t)&&null!==St[t]&&"object"===Tt(St[t])&&Ot(St[t])}catch(t){return!0}return!1}(),It="undefined"!=typeof window;var Pt,Ft=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Pt=L?function(){return 2!==(R(arguments)||"").length}(1,2)?function(t){return tt(t)?R(nt.call(t)):R(t)}:R:function(t){var n,e,r,i,o,u,a;if(i=[],tt(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!v(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!et(t))return i;e=rt&&r}for(o in t)e&&"prototype"===o||!v(t,o)||i.push(String(o));if(it)for(n=function(t){if(!1===It&&!Vt)return Ot(t);try{return Ot(t)}catch(t){return!1}}(t),a=0;a<Ft.length;a++)u=Ft[a],n&&"constructor"===u||!v(t,u)||i.push(String(u));return i};var At=Pt;function kt(t){return"function"===Tt(t)}var Nt,Bt=Object.getPrototypeOf;Nt=kt(Object.getPrototypeOf)?Bt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===x(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Rt=Nt;var Mt=Object.prototype;function Lt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!$(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Rt(t))}(t),!n||!v(t,"constructor")&&v(n,"constructor")&&kt(n.constructor)&&"[object Function]"===x(n.constructor)&&v(n,"isPrototypeOf")&&kt(n.isPrototypeOf)&&(n===Mt||function(t){var n;for(n in t)if(!v(t,n))return!1;return!0}(t)))}function Yt(t,n){var e,r,i,o,u,a,l,f=!0;if(!et(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Lt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(v(n,"duplicates")&&!lt(f=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(r=(e=At(t)).length,u={},f)for(l=0;l<r;l++)v(u,o=t[i=e[l]])?(a=u[o],$(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=e[l]]]=i;return u}var Ct=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ut(){return Ct.slice()}var Gt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Xt(){return Gt.slice()}function Ht(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Jt(t,n,e){f(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}c(Xt,"enum",Ht),function(t,n){var e,r,i;for(e=At(n),i=0;i<e.length;i++)Jt(t,r=e[i],n[r])}(Xt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function qt(){return{bool:Wt.bool,int8:Wt.int8,uint8:Wt.uint8,uint8c:Wt.uint8c,int16:Wt.int16,uint16:Wt.uint16,int32:Wt.int32,uint32:Wt.uint32,int64:Wt.int64,uint64:Wt.uint64,float32:Wt.float32,float64:Wt.float64,complex64:Wt.complex64,complex128:Wt.complex128,binary:Wt.binary,generic:Wt.generic,notype:Wt.notype,userdefined_type:Wt.userdefined_type}}c(Ut,"enum",qt),function(t,n){var e,r,i;for(e=At(n),i=0;i<e.length;i++)Jt(t,r=e[i],n[r])}(Ut,qt());var zt=Yt(qt(),{duplicates:!1});var Dt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Kt(t){var n=typeof t;return"string"===n?null===function(t){var n=Dt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=zt[t];return"string"==typeof n?n:null}(t):null}function Qt(t,n,e){var r,i,o,u,a,l,f,c,p;if(!("object"==typeof(p=t)&&null!==p&&"number"==typeof p.length&&m(p.length)&&p.length>=0&&p.length<=s))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(!k(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!k(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=n+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],l=2*a,c=2*n,f=0;f<=l;f++)0===f?f===c?o.push("() => ("):o.push("("):f===l?f===c?o.push(") => ()"):o.push(")"):f===c?o.push(") => ("):f%2==1?o.push(""):o.push(", ");for(f=0;f<r;f++)null===(u=Kt(t[f]))&&(u=t[f]),o[2*(c=f%a)+1]=u,c===a-1&&i.push(o.join(""));return i}function Zt(t,n,e,r){return c(e,"nargs",r?t.nargs+t.nin+t.nout:t.nargs),c(e,"nin",t.nin),c(e,"nout",t.nout),function(t,n,e){f(t,n,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return Qt(n,t.nin,t.nout)})),e}var $t={nargs:10,nin:2,nout:1},tn={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1}};function nn(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=At(tn)).length,l=0;l<n;l++){for(i=t[l],u=tn[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}function en(t,n){var e;return 0===arguments.length?nn():(t=Kt(t),v(tn,t)&&v(e=tn[t],n=Kt(n))?e[n]:null)}var rn,on={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function un(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=At(on)).length,l=0;l<n;l++){for(i=t[l],u=on[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}function an(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=At(on)).length,l=0;l<n;l++){for(i=t[l],u=on[i],r=[],a=0;a<n;a++)1===u[o=t[a]]&&r.push(o);e[i]=r}return e}function ln(t){return 0===arguments.length?un():(void 0===rn&&(rn=an()),t=Kt(t),v(rn,t)?rn[t].slice():null)}var fn=Yt(qt(),{duplicates:!1});function cn(t){var n=fn[t];return"string"==typeof n?n:null}var pn=qt();function mn(t){var n=pn[t];return"number"==typeof n?n:null}function sn(t){var n=typeof t;return"number"===n?cn(t)?t:null:"string"===n?mn(t):null}function gn(t){var n=typeof t;return"string"===n?mn(t)?t:null:"number"===n?cn(t):null}function yn(t,n){var e,r,i,o,u,a,l;for(r=t.length,i=n.length,e=[],l=0,u=0;u<r&&!(l>=i);u++)for(o=t[u],a=l;a<i;a++)if(o===n[a]){l=a+1,e.push(o);break}return e}function bn(t){var n,e,r;for(n=[],r=0;r<t.length;r++){if(null===(e=gn(t[r])))return new TypeError("invalid argument. Must provided recognized data types. Unable to resolve a data type string. Value: `"+t[r]+"`.");n.push(e)}return n}var hn=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]],dn=function(t,n,e,r){var i,o,u,a,l,f,c,p,m,s,g,y,b,h,d,v,w;if(u=arguments.length>3?r:{},(f=bn(t))instanceof Error)throw f;if(n===t)c=f;else if((c=bn(n))instanceof Error)throw c;if(e===t)p=f;else if(e===n)p=c;else if((p=bn(e))instanceof Error)throw p;for(p.sort(),i={},b=f.length,h=c.length,l=[],d=0;d<b;d++)for(m=f[d],v=0;v<h;v++)if(-1!==(g=en(m,s=c[v]))&&null!==g)for(l.push(m,s,g),void 0===(o=i[g])&&(o=yn(p,(o=ln(g)).sort()),i[g]=o),w=0;w<o.length;w++)(y=o[w])!==g&&l.push(m,s,y);if(u.enums){for(a=[],d=0;d<l.length;d++)a.push(sn(l[d]));l=a}return l}(hn[0],hn[1],hn[2],{enums:!0});function vn(t){return P(t)&&t>0}function wn(t){return F(t)&&t.valueOf()>0}function xn(t){return vn(t)||wn(t)}c(xn,"isPrimitive",vn),c(xn,"isObject",wn);var En=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&m(t.length)&&t.length>=0&&t.length<=s}(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(kt);function jn(t){return Math.abs(t)}function Tn(t,n,e,r,i,o,u,a,l){var f,c,p,m;for(f=o,p=0;p<t;p++){for(c=l,m=0;m<n&&e[f+m*i]===u[c];m++)c+=a;if(m===n)return p;f+=r}return-1}function On(t,n,e,r,i,o){var u,a,l,f,c,p;if(kt(t))p=t;else if(!En(t))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+t+"`.");if(!ot(n))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+n+"`.");if(!ot(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!xn(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!k(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!k(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(l=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(p){if(!P(f=n.length/l))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(f=t.length,n.length!==f*l)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==f)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*l+1===r)a=!1;else{if(4*l+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=i*(u=a?4:3)+1,function(){var m,s,g,y,b,h,d,v,w,x,E,j;if((h=arguments.length)!==r){if(h<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!P(v=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(b=[v],y=[],E=1;E<r;E+=u)y.push(arguments[E]);for(m=[],E=3;E<r;E+=u){if(!P(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");m.push(w)}if(a)for(s=[],E=4;E<r;E+=u){if(!k(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");s.push(w)}for(g=[],E=2;E<r;E+=u){if(!ot(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(j=(E-2)/u,a){if(d=s[j]+(v-1)*m[j],v>0&&(d<0||d>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((v-1)*jn(m[j])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");g.push(w)}if((d=Tn(f,l,n,l,1,0,y,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");x=p||t[d];e?a?x(g,b,m,s,e[d]):x(g,b,m,e[d]):a?x(g,b,m,s):x(g,b,m);if(1===o)return g[l-1];if(0===o)return;return g.slice(i)}}function _n(t,n){return t[n]}function Sn(t,n){return t.get(n)}function Vn(t,n,e){t[n]=e}function In(t,n,e){t.set(e,n)}function Pn(t,n,e,r){var i,o,u,a,l,f;return(a=t[0]).get&&a.set&&(i=Sn),(l=t[1]).get&&l.set&&(o=Sn),(f=t[2]).get&&f.set&&(u=In),i||o||u?function(t,n,e,r,i){var o,u,a,l,f,c,p,m,s,g,y,b,h,d;if(!((h=n[0])<=0))for(p=(l=e[0])<0?(1-h)*l:0,m=(f=e[1])<0?(1-h)*f:0,s=(c=e[2])<0?(1-h)*c:0,g=t[0],y=t[1],b=t[2],o=r[0],u=r[1],a=r[2],d=0;d<h;d++)a(b,s,i(o(g,p),u(y,m))),p+=l,m+=f,s+=c}(t,n,e,[i=i||_n,o=o||_n,u=u||Vn],r):function(t,n,e,r){var i,o,u,a,l,f,c,p,m,s,g;if(!((s=n[0])<=0))for(a=(i=e[0])<0?(1-s)*i:0,l=(o=e[1])<0?(1-s)*o:0,f=(u=e[2])<0?(1-s)*u:0,c=t[0],p=t[1],m=t[2],g=0;g<s;g++)m[f]=r(c[a],p[l]),a+=i,l+=o,f+=u}(t,n,e,r)}function Fn(t,n,e,r,i){var o,u,a,l,f,c;return(l=t[0]).get&&l.set&&(o=Sn),(f=t[1]).get&&f.set&&(u=Sn),(c=t[2]).get&&c.set&&(a=In),o||u||a?function(t,n,e,r,i,o){var u,a,l,f,c,p,m,s,g,y,b,h,d,v;if(!((d=n[0])<=0))for(m=r[0],s=r[1],g=r[2],f=e[0],c=e[1],p=e[2],y=t[0],b=t[1],h=t[2],u=i[0],a=i[1],l=i[2],v=0;v<d;v++)l(h,g,o(u(y,m),a(b,s))),m+=f,s+=c,g+=p}(t,n,e,r,[o=o||_n,u=u||_n,a=a||Vn],i):function(t,n,e,r,i){var o,u,a,l,f,c,p,m,s,g,y;if(!((g=n[0])<=0))for(l=r[0],f=r[1],c=r[2],o=e[0],u=e[1],a=e[2],p=t[0],m=t[1],s=t[2],y=0;y<g;y++)s[c]=i(p[l],m[f]),l+=o,f+=u,c+=a}(t,n,e,r,i)}function An(t,n){if(!(this instanceof An))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!g(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!g(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return f(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),f(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n}),this}function kn(t){return t.re}function Nn(t){return t.im}c(Pn,"ndarray",Fn),c(An,"BYTES_PER_ELEMENT",8),c(An.prototype,"BYTES_PER_ELEMENT",8),c(An.prototype,"byteLength",16),c(An.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(An.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var Bn="function"==typeof Math.fround?Math.fround:null,Rn="function"==typeof Float32Array;var Mn="function"==typeof Float32Array?Float32Array:null;var Ln,Yn="function"==typeof Float32Array?Float32Array:void 0;Ln=function(){var t,n,e;if("function"!=typeof Mn)return!1;try{n=new Mn([1,3.14,-3.14,5e40]),e=n,t=(Rn&&e instanceof Float32Array||"[object Float32Array]"===x(e))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===S}catch(n){t=!1}return t}()?Yn:function(){throw new Error("not implemented")};var Cn=new Ln(1);var Un="function"==typeof Bn?Bn:function(t){return Cn[0]=t,Cn[0]};function Gn(t,n){if(!(this instanceof Gn))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!g(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!g(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return f(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Un(t)}),f(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Un(n)}),this}function Xn(t){return t.re}function Hn(t){return t.im}c(Gn,"BYTES_PER_ELEMENT",4),c(Gn.prototype,"BYTES_PER_ELEMENT",4),c(Gn.prototype,"byteLength",8),c(Gn.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(Gn.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var Jn="number";function Wn(t,n,e){var r;if(!kt(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");if(!k(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!kt(e))throw new TypeError("invalid argument. Third argument must be a constructor function. Value: `"+e+"`.");return r=[function(){return t()},function(n){typeof n===Jn&&(n=new e(n,0));return t(n)},function(n,r){typeof n===Jn&&(n=new e(n,0));typeof r===Jn&&(r=new e(r,0));return t(n,r)},function(n,r,i){typeof n===Jn&&(n=new e(n,0));typeof r===Jn&&(r=new e(r,0));typeof i===Jn&&(i=new e(i,0));return t(n,r,i)},function(n,r,i,o){typeof n===Jn&&(n=new e(n,0));typeof r===Jn&&(r=new e(r,0));typeof i===Jn&&(i=new e(i,0));typeof o===Jn&&(o=new e(o,0));return t(n,r,i,o)},function(n,r,i,o,u){typeof n===Jn&&(n=new e(n,0));typeof r===Jn&&(r=new e(r,0));typeof i===Jn&&(i=new e(i,0));typeof o===Jn&&(o=new e(o,0));typeof u===Jn&&(u=new e(u,0));return t(n,r,i,o,u)}],n<=5?r[n]:function(){var n,r,i;for(n=[],i=0;i<arguments.length;i++)typeof(r=arguments[i])===Jn&&(r=new e(r,0)),n.push(r);return t.apply(null,n)}}var qn="complex64",zn="complex128",Dn={complex64:Gn,complex128:An};function Kn(t,n,e,r){if(r===qn||r===zn)return n===e&&e===r?t[r]:Wn(t[r],2,Dn[r]);if("generic"===r){if(n===zn||e===zn)return n===e?t[n]:Wn(t[zn],2,Dn[zn]);if(n===qn||e===qn)return n===e?t[n]:Wn(t[qn],2,Dn[qn])}return t.default}var Qn=function(t,n){var e,r,i,o,u;for(e=[],u=0;u<n.length;u+=3)r=gn(n[u]),i=gn(n[u+1]),o=gn(n[u+2]),e.push(Kn(t,r,i,o));return e}({default:function(t,n){return t+n},complex64:function(t,n){return new Gn(Un(Xn(t)+Xn(n)),Un(Hn(t)+Hn(n)))},complex128:function(t,n){return new An(kn(t)+kn(n),Nn(t)+Nn(n))}},dn),Zn=On(Pn,dn,Qn,$t.nargs,$t.nin,$t.nout);function $n(t,n,e,r,i,o,u,a,l,f){return Zn(t,sn(n),e,r,sn(i),o,u,sn(a),l,f)}var te=On(Fn,dn,Qn,$t.nargs+$t.nin+$t.nout,$t.nin,$t.nout);return c($n,"ndarray",(function(t,n,e,r,i,o,u,a,l,f,c,p,m){return te(t,sn(n),e,r,i,sn(o),u,a,l,sn(f),c,p,m)})),Zt($t,dn,$n,!1),Zt($t,dn,$n.ndarray,!0),$n}));
//# sourceMappingURL=index.js.map
