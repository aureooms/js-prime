
/**
 * Sieve of erathostene skipping all multiples of 2.
 */

var __eratosthene2__ = function ( alloc , fill , get , gothrough , usqrt ) {

	var first = 3 ;

	var eratosthene2 = function ( n , callback ) {

		var size , sieve , m , i , p ;

		if ( n <= 2 ) {
			return null ;
		}

		callback( 2 ) ;

		if ( n <= 3 ) {
			return null ;
		}

		size = ptoi2( n ) ;

		sieve = alloc( size ) ;
		fill( sieve , 0 , size , true ) ;

		m = ptoi2( usqrt( n ) ) ;

		for ( i = ptoi2( first ) ; i < m ; ++i ) {
			if ( get( sieve , i ) ) {
				p = itop2( i ) ;
				callback( p ) ;
				gothrough( sieve , ptoi2( p * p ) , size , p ) ;
			}
		}

		for ( i = m ; i < size ; ++i ) {
			if ( get( sieve , i ) ) {
				callback( itop2( i ) ) ;
			}
		}

		return sieve ;
	} ;

	return eratosthene2 ;

} ;

exports.__eratosthene2__ = __eratosthene2__ ;
