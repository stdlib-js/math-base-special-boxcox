/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var randu = require( '@stdlib/random-base-randu' );
var abs = require( '@stdlib/math-base-special-abs' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var boxcox = require( './../lib' );


// FIXTURES //

var mediumPositive = require( './fixtures/python/medium_positive.json' );
var smallPositive = require( './fixtures/python/small_positive.json' );
var tiny = require( './fixtures/python/tiny.json' );
var tinyLambda = require( './fixtures/python/tiny_lambda.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof boxcox, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var b;

	b = boxcox( NaN, 1.0 );
	t.equal( isnan( b ), true, 'returns expected value' );

	b = boxcox( 1.0, NaN );
	t.equal( isnan( b ), true, 'returns expected value' );

	b = boxcox( NaN, NaN );
	t.equal( isnan( b ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-Infinity` if lambda is negative and `x` is +-0', function test( t ) {
	var lambda;
	var b;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		lambda = -1.0 * ( (randu()*100.0) + 1.0 );

		b = boxcox( +0.0, lambda );
		t.equal( b, NINF, 'returns -Infinity when lambda is negative and `x` is positive zero' );

		b = boxcox( -0.0, lambda );
		t.equal( b, NINF, 'returns -Infinity when lambda is negative and `x` is negative zero' );
	}
	t.end();
});

tape( 'the function returns `NaN` if `x` is negative', function test( t ) {
	var b;
	var x;
	var y;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = -1.0 * ( (randu()*100.0) + 1.0 );
		y = randu() * 10.0;
		b = boxcox( x, y );
		t.equal( isnan( b ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for positive medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	y = mediumPositive.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.equal( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 16.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for positive small numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	y = smallPositive.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.equal( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 16.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for tiny numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = tiny.expected;
	x = tiny.x;
	y = tiny.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.equal( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 70.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for tiny lambda', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = tinyLambda.expected;
	x = tinyLambda.x;
	y = tinyLambda.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.equal( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});
