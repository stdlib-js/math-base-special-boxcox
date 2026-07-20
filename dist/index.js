"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=v(function(x,t){
var o=require('@stdlib/math-base-special-abs/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-assert-is-positive-zero/dist'),u=require('@stdlib/math-base-special-ln/dist'),c=require('@stdlib/math-base-special-expm1/dist'),f=require('@stdlib/constants-float64-ninf/dist');function N(e,r){return i(e)||i(r)?NaN:q(e)&&r<0?f:o(r)<1e-19?u(e):c(r*u(e))/r}t.exports=N
});var a=n();module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
