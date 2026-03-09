"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(A,q){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist');function j(e,r,a,y){var t,i,o,v;if(e<=0)return r;for(t=g(r,0),o=a*2,i=y*2+1,v=0;v<e;v++)t[i]=-t[i],i+=o;return r}q.exports=j
});var f=u(function(B,c){
var m=require('@stdlib/strided-base-stride2offset/dist'),z=s();function R(e,r,a){return z(e,r,a,m(e,a))}c.exports=R
});var d=u(function(C,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),E=s();_(l,"ndarray",E);p.exports=l
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=d(),n,x=b(O(__dirname,"./native.js"));h(x)?n=k:n=x;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
