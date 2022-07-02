// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return Math.abs(r)};var n=function(r){return r!=r},t=Number.POSITIVE_INFINITY,o=t;var e=function(r){return 0===r&&1/r===o};var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},a=Object.prototype.toString,f=a;var c=function(r){return f.call(r)},y=Object.prototype.hasOwnProperty;var l=function(r,n){return null!=r&&y.call(r,n)},v="function"==typeof Symbol?Symbol.toStringTag:"",p=l,A=v,U=a;var b=c,w=function(r){var n,t,o;if(null==r)return U.call(r);t=r[A],n=p(r,A);try{r[A]=void 0}catch(n){return U.call(r)}return o=U.call(r),n?r[A]=t:delete r[A],o},m=u()?w:b,N=m,d="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null,s=function(r){return d&&r instanceof Uint32Array||"[object Uint32Array]"===N(r)},F=h;var I=function(){var r,n;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),r=s(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var S="function"==typeof Uint32Array?Uint32Array:void 0,E=function(){throw new Error("not implemented")},j=I()?S:E,T=m,g="function"==typeof Float64Array;var O="function"==typeof Float64Array?Float64Array:null,x=function(r){return g&&r instanceof Float64Array||"[object Float64Array]"===T(r)},P=O;var V=function(){var r,n;if("function"!=typeof P)return!1;try{n=new P([1,3.14,-3.14,NaN]),r=x(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var Y="function"==typeof Float64Array?Float64Array:void 0,_=function(){throw new Error("not implemented")},G=V()?Y:_,M=m,k="function"==typeof Uint8Array;var q="function"==typeof Uint8Array?Uint8Array:null,z=function(r){return k&&r instanceof Uint8Array||"[object Uint8Array]"===M(r)},B=q;var C=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,256,257]),r=z(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var D="function"==typeof Uint8Array?Uint8Array:void 0,H=function(){throw new Error("not implemented")},J=C()?D:H,K=m,L="function"==typeof Uint16Array;var Q="function"==typeof Uint16Array?Uint16Array:null,R=function(r){return L&&r instanceof Uint16Array||"[object Uint16Array]"===K(r)},W=Q;var X=function(){var r,n;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),r=R(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z,$="function"==typeof Uint16Array?Uint16Array:void 0,rr=function(){throw new Error("not implemented")},nr={uint16:X()?$:rr,uint8:J};(Z=new nr.uint16(1))[0]=4660;var tr=52===new nr.uint8(Z.buffer)[0],or=j,er=!0===tr?1:0,ir=new G(1),ur=new or(ir.buffer);var ar=function(r){return ir[0]=r,ur[er]},fr=j,cr=!0===tr?1:0,yr=new G(1),lr=new fr(yr.buffer);var vr=function(r,n){return yr[0]=r,lr[cr]=n>>>0,yr[0]},pr=vr,Ar=Number.NEGATIVE_INFINITY;var Ur=ar,br=pr,wr=n,mr=Ar,Nr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},dr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},hr=.6931471803691238,sr=1.9082149292705877e-10;var Fr=function(r){var n,t,o,e,i,u,a,f,c,y,l;return 0===r?mr:wr(r)||r<0?NaN:(e=0,(t=Ur(r))<1048576&&(e-=54,t=Ur(r*=0x40000000000000)),t>=2146435072?r+r:(e+=(t>>20)-1023|0,e+=(a=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=br(r,t|1072693248^a))-1,(1048575&2+t)<3?0===u?0===e?0:e*hr+e*sr:(i=u*u*(.5-.3333333333333333*u),0===e?u-i:e*hr-(i-e*sr-u)):(a=t-398458|0,f=440401-t|0,o=(y=(l=(c=u/(2+u))*c)*l)*Nr(y),i=l*dr(y)+o,(a|=f)>0?(n=.5*u*u,0===e?u-(n-c*(n+i)):e*hr-(n-(c*(n+i)+e*sr)-u)):0===e?u-c*(u-i):e*hr-(c*(u-i)-e*sr-u))))};var Ir=n,Sr=ar,Er=pr,jr=t,Tr=Ar,gr=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},Or=.6931471803691238,xr=1.9082149292705877e-10;var Pr=function(r){var n,t,o,e,i,u,a,f,c,y,l,v;if(r===jr||Ir(r))return r;if(r===Tr)return-1;if(0===r)return r;if(r<0?(t=!0,a=-r):(t=!1,a=r),a>=38.816242111356935){if(t)return-1;if(a>=709.782712893384)return jr}if(i=0|Sr(a),a>.34657359027997264)a<1.0397207708399179?t?(o=r+Or,e=-xr,v=-1):(o=r-Or,e=xr,v=1):(v=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,o=r-(y=v|=0)*Or,e=y*xr),c=o-(r=o-e)-e;else{if(i<1016070144)return r;v=0}return l=(f=r*(n=.5*r))*(((u=1+f*gr(f))-(y=3-u*n))/(6-r*y)),0===v?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===v?.5*(r-l)-.5:1===v?r<-.25?-2*(l-(r+.5)):1+2*(r-l):v<=-2||v>56?(o=Sr(a=1-(l-r))+(v<<20)|0,(a=Er(a,o))-1):(y=1,v<20?a=(y=Er(y,o=1072693248-(2097152>>v)|0))-(l-r):(a=r-(l+(y=Er(y,o=1023-v<<20|0))),a+=1),o=Sr(a)+(v<<20)|0,Er(a,o)))};function Vr(t,o){return n(t)||n(o)?NaN:e(t)&&o<0?Ar:r(o)<1e-19?Fr(t):Pr(o*Fr(t))/o}export{Vr as default};
//# sourceMappingURL=mod.js.map
