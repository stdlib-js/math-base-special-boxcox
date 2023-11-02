// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r=Number.POSITIVE_INFINITY,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,i=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol:void 0,u="function"==typeof f?f.toStringTag:"",a=e&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,e,f,a;if(null==n)return o.call(n);r=n[u],a=u,t=null!=(f=n)&&i.call(f,a);try{n[u]=void 0}catch(t){return o.call(n)}return e=o.call(n),t?n[u]=r:delete n[u],e}:function(n){return o.call(n)},c="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(c&&r instanceof Uint32Array||"[object Uint32Array]"===a(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?l:function(){throw new Error("not implemented")};var p,A=t,b="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;p=function(){var n,t,r;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),r=t,n=(b&&r instanceof Float64Array||"[object Float64Array]"===a(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var w,U=p,m="function"==typeof Uint8Array,s="function"==typeof Uint8Array?Uint8Array:null,h="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var n,t,r;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,256,257]),r=t,n=(m&&r instanceof Uint8Array||"[object Uint8Array]"===a(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?h:function(){throw new Error("not implemented")};var N,I=w,F="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,T="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var n,t,r;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,65536,65537]),r=t,n=(F&&r instanceof Uint16Array||"[object Uint16Array]"===a(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?T:function(){throw new Error("not implemented")};var g,j={uint16:N,uint8:I};(g=new j.uint16(1))[0]=4660;var E=52===new j.uint8(g.buffer)[0],O=!0===E?1:0,x=new U(1),H=new A(x.buffer);function G(n){return x[0]=n,H[O]}var L=!0===E?1:0,P=new U(1),V=new A(P.buffer);function W(n,t){return P[0]=n,V[L]=t>>>0,P[0]}var Y,_,M=1023,k=Number.NEGATIVE_INFINITY,q=.6931471803691238,z=1.9082149292705877e-10,B=1048575;function C(t){var r,e,o,i,f,u,a,c,y,l,p,A;return 0===t?k:n(t)||t<0?NaN:(f=0,(e=G(t))<1048576&&(f-=54,e=G(t*=0x40000000000000)),e>=2146435072?t+t:(f+=(e>>20)-M|0,f+=(c=614244+(e&=B)&1048576|0)>>20|0,a=(t=W(t,e|1072693248^c))-1,(B&2+e)<3?0===a?0===f?0:f*q+f*z:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*q-(u-f*z-a)):(c=e-398458|0,y=440401-e|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),o=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=o+i,(c|=y)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*q-(r-(l*(r+u)+f*z)-a)):0===f?a-l*(a-u):f*q-(l*(a-u)-f*z-a))))}!0===E?(Y=1,_=0):(Y=0,_=1);var D={HIGH:Y,LOW:_},J=new U(1),K=new A(J.buffer),Q=D.HIGH,R=D.LOW,X=.6931471803691238,Z=1.9082149292705877e-10,$=1.4426950408889634;function nn(t){var e,o,i,f,u,a,c,y,l,p,A,b,v,d,w;if(t===r||n(t))return t;if(t===k)return-1;if(0===t)return t;if(t<0?(i=!0,y=-t):(i=!1,y=t),y>=38.816242111356935){if(i)return-1;if(y>=709.782712893384)return r}if(a=0|G(y),y>.34657359027997264)y<1.0397207708399179?i?(f=t+X,u=-Z,v=-1):(f=t-X,u=Z,v=1):(v=i?$*t-.5:$*t+.5,f=t-(A=v|=0)*X,u=A*Z),p=f-(t=f-u)-u;else{if(a<1016070144)return t;v=0}return c=1+(l=t*(e=.5*t))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(l),b=l*((c-(A=3-c*e))/(6-t*A)),0===v?t-(t*b-l):(d=M+v<<20,w=0,K[Q]=d,K[R]=w,o=J[0],b=t*(b-p)-p,b-=l,-1===v?.5*(t-b)-.5:1===v?t<-.25?-2*(b-(t+.5)):1+2*(t-b):v<=-2||v>56?(y=1-(b-t),1024===v?y=W(y,f=G(y)+(v<<20)|0):y*=o,y-1):(A=1,v<20?y=(A=W(A,f=1072693248-(2097152>>v)|0))-(b-t):(y=t-(b+(A=W(A,f=M-v<<20|0))),y+=1),y*=o))}return function(t,e){return n(t)||n(e)?NaN:function(n){return 0===n&&1/n===r}(t)&&e<0?k:function(n){return Math.abs(n)}(e)<1e-19?C(t):nn(e*C(t))/e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).boxcox=t();
//# sourceMappingURL=index.js.map
