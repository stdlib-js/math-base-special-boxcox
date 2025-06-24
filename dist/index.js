"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(p,t){
var v=require('@stdlib/math-base-special-abs/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-positive-zero/dist'),u=require('@stdlib/math-base-special-ln/dist'),q=require('@stdlib/math-base-special-expm1/dist'),c=require('@stdlib/constants-float64-ninf/dist');function f(e,r){return i(e)||i(r)?NaN:o(e)&&r<0?c:v(r)<1e-19?u(e):q(r*u(e))/r}t.exports=f
});var N=n();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
