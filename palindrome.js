function isPalindrome(str) {
	let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
	return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
