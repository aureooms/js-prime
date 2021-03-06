/**
 * Goes through an array and crosses out non prime numbers.
 *
 * @param  {setter} set function ( a , i , v ) that sets value v at index i in array a
 */
export function __gothrough__(set) {
	const gothrough = function (prime, i, j, k) {
		for (; i < j; i += k) {
			set(prime, i, false);
		}
	};

	return gothrough;
}
