// https://www.codewars.com/kata/base-conversion/train/javascript
function convert(input, source, target) {
	let sourceCopy = source;
	let targetCopy = target;
	let inputArr = input.split('');
	let temp = 0;
	if (sourceCopy === targetCopy) {
		return input;
	}
	for (let i = 0; i < inputArr.length; i++) {
		temp += sourceCopy.indexOf(inputArr[i]) * Math.pow(sourceCopy.length, inputArr.length - i - 1);
	}
		let result = [];
		if (temp === 0) {
			return targetCopy.substr(temp, 1);
		}
		while (temp > 0) {
			console.log(temp);
			let bit = temp % targetCopy.length;
			result.push(bit);
			temp = Math.floor(temp / targetCopy.length);
		}
		return result.reverse().map((x) => targetCopy.substr(+x, 1)).join('')
}
var Alphabet = {
	BINARY:        '01',
	OCTAL:         '01234567',
	DECIMAL:       '0123456789',
	HEXA_DECIMAL:  '0123456789abcdef',
	ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
	ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
