// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";function d(d,r){return t(d)||t(r)?NaN:e(d)&&r<0?n:s(r)<1e-19?i(d):m(r*i(d))/r}export{d as default};
//# sourceMappingURL=index.mjs.map
