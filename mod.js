// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,a,f,u;if(null==r)return o.call(r);t=r[i],u=i,n=null!=(f=r)&&e.call(f,u);try{r[i]=void 0}catch(n){return o.call(r)}return a=o.call(r),n?r[i]=t:delete r[i],a}:function(r){return o.call(r)},f="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var c,y="function"==typeof Uint32Array?Uint32Array:void 0;c=function(){var r,n,t;if("function"!=typeof u)return!1;try{n=new u(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var l=c,v="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var A,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),t=n,r=(v&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var b=A,w="function"==typeof Uint8Array;var m="function"==typeof Uint8Array?Uint8Array:null;var N,d="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,256,257]),t=n,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=N,s="function"==typeof Uint16Array;var F="function"==typeof Uint16Array?Uint16Array:null;var I,S="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,65536,65537]),t=n,r=(s&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,j={uint16:I,uint8:h};(E=new j.uint16(1))[0]=4660;var T=52===new j.uint8(E.buffer)[0],g=!0===T?1:0,O=new b(1),x=new l(O.buffer);function P(r){return O[0]=r,x[g]}var V=!0===T?1:0,Y=new b(1),_=new l(Y.buffer);function G(r,n){return Y[0]=r,_[V]=n>>>0,Y[0]}var M=Number.NEGATIVE_INFINITY;var k=.6931471803691238,q=1.9082149292705877e-10;function z(n){var t,o,e,i,a,f,u,c,y,l,v,p;return 0===n?M:r(n)||n<0?NaN:(a=0,(o=P(n))<1048576&&(a-=54,o=P(n*=0x40000000000000)),o>=2146435072?n+n:(a+=(o>>20)-1023|0,a+=(c=(o&=1048575)+614244&1048576|0)>>20|0,u=(n=G(n,o|1072693248^c))-1,(1048575&2+o)<3?0===u?0===a?0:a*k+a*q:(f=u*u*(.5-.3333333333333333*u),0===a?u-f:a*k-(f-a*q-u)):(c=o-398458|0,y=440401-o|0,i=(v=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+i,(c|=y)>0?(t=.5*u*u,0===a?u-(t-l*(t+f)):a*k-(t-(l*(t+f)+a*q)-u)):0===a?u-l*(u-f):a*k-(l*(u-f)-a*q-u))))}var B=.6931471803691238,C=1.9082149292705877e-10;function D(t,o){return r(t)||r(o)?NaN:function(r){return 0===r&&1/r===n}(t)&&o<0?M:function(r){return Math.abs(r)}(o)<1e-19?z(t):function(t){var o,e,i,a,f,u,c,y,l,v,p,A;if(t===n||r(t))return t;if(t===M)return-1;if(0===t)return t;if(t<0?(e=!0,c=-t):(e=!1,c=t),c>=38.816242111356935){if(e)return-1;if(c>=709.782712893384)return n}if(f=0|P(c),c>.34657359027997264)c<1.0397207708399179?e?(i=t+B,a=-C,A=-1):(i=t-B,a=C,A=1):(A=e?1.4426950408889634*t-.5:1.4426950408889634*t+.5,i=t-(v=A|=0)*B,a=v*C),l=i-(t=i-a)-a;else{if(f<1016070144)return t;A=0}return u=1+(y=t*(o=.5*t))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(y),p=y*((u-(v=3-u*o))/(6-t*v)),0===A?t-(t*p-y):(p=t*(p-l)-l,p-=y,-1===A?.5*(t-p)-.5:1===A?t<-.25?-2*(p-(t+.5)):1+2*(t-p):A<=-2||A>56?(c=G(c=1-(p-t),i=P(c)+(A<<20)|0))-1:(v=1,A<20?c=(v=G(v,i=1072693248-(2097152>>A)|0))-(p-t):(c=t-(p+(v=G(v,i=1023-A<<20|0))),c+=1),G(c,i=P(c)+(A<<20)|0)))}(o*z(t))/o}export{D as default};
//# sourceMappingURL=mod.js.map
