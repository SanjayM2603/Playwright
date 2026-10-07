// Function to reverse the string
function reverseString(str) {
    let characters = str.split("");
    let reversedString = "";

    for (let i = characters.length - 1; i >= 0; i--) {
        reversedString = reversedString + characters[i];
    }

    console.log("Reversed string:", reversedString);
    return reversedString;
}

// Function to check palindrome
function checkPalindrome(str) {
    let reverse = reverseString(str);

    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}

// Test the function with different strings
console.log("madam:", checkPalindrome("madam"));
console.log("hello:", checkPalindrome("hello"));
console.log("level:", checkPalindrome("level"));
console.log("world:", checkPalindrome("world"));