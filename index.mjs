// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";function s(e,r,s,n){var d,i,o,m;if(e<=0)return r;for(d=t(r,0),o=2*s,i=2*n+1,m=0;m<e;m++)d[i]=-d[i],i+=o;return r}function n(e,t,n){return s(e,t,n,r(e,n))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
