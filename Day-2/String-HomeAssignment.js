//Example:1 

 function FindString(str)
 {
    let word = str.split(" ");
    let lastword = word[word.length-1];
    console.log(lastword.length);
    

  }
  FindString("Hello World")

//Example:2 

   function FindString(str1)
 {
    let wordstrim= str1.trim(" ");
    let words = wordstrim.split(" ");
    let lastword1 = words[words.length-1];
    console.log(lastword1.length);
    

  }
  FindString("   fly me   to   the moon  ")

//Example:3 

 function isAnagram(str2, str3) {
    let string1 = str2.replace(/\s/g, "").toLowerCase();
    let string2 = str3.replace(/\s/g, "").toLowerCase();

    let sortedString1 = string1.split("").sort().join("");
    let sortedString2 = string2.split("").sort().join("");

    return sortedString1 === sortedString2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));