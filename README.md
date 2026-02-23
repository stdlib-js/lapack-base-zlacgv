<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zlacgv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Conjugate each element in a double-precision complex floating-point vector.

<section class="installation">

## Installation

```bash
npm install @stdlib/lapack-base-zlacgv
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zlacgv = require( '@stdlib/lapack-base-zlacgv' );
```

#### zlacgv( N, zx, strideZX )

Conjugates each element in a double-precision complex floating-point vector.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

zlacgv( 2, zx, 1 );

var z = zx.get( 0 );
// returns <Complex128>[ 1.0, -2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zx**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideZX**: stride length for `zx`.

The `N` and stride parameters determine which elements in `zx` are conjugated. For example, to conjugate every other element in `zx`,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

zlacgv( 2, zx, 2 );

var z = zx.get( 0 );
// returns <Complex128>[ 1.0, -2.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Initial array:
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Create an offset view:
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Conjugate every element in `zx1`:
zlacgv( 3, zx1, 1 );

var z = zx0.get( 1 );
// returns <Complex128>[ 3.0, -4.0 ]
```

#### zlacgv.ndarray( N, zx, strideZX, offsetZX )

Conjugates each element in a double-precision floating-point vector using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

zlacgv.ndarray( 3, zx, 1, 0 );

var z = zx.get( 0 );
// returns <Complex128>[ 1.0, -2.0 ]
```

The function has the following additional parameters:

-   **offsetZX**: starting index for `zx`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to conjugate every other element in the input strided array starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

zlacgv.ndarray( 2, zx, 2, 1 );

var z = zx.get( 3 );
// returns <Complex128>[ 7.0, -8.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `zx` unchanged.
-   `zlacgv()` corresponds to the [LAPACK][lapack] BLAS-like level 1 routine [`zlacgv`][zlacgv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var zlacgv = require( '@stdlib/lapack-base-zlacgv' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var zx = filledarrayBy( 10, 'complex128', rand );
console.log( zx.toString() );

// Conjugate elements:
zlacgv( zx.length, zx, 1 );
console.log( zx.get( zx.length-1 ).toString() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-zlacgv.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-zlacgv

[test-image]: https://github.com/stdlib-js/lapack-base-zlacgv/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/lapack-base-zlacgv/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-zlacgv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-zlacgv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-zlacgv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-zlacgv/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-zlacgv/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-zlacgv/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-zlacgv/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-zlacgv/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-zlacgv/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-zlacgv/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-zlacgv/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-zlacgv/main/LICENSE

[lapack]: https://www.netlib.org/lapack

[zlacgv]: https://www.netlib.org/lapack/explore-html/d9/d50/group__lacgv_gae42087fcabd33130fcbac2aff031de8b.html#gae42087fcabd33130fcbac2aff031de8b

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

</section>

<!-- /.links -->
