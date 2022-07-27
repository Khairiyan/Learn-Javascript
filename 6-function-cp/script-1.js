// Mengembalikan teks yang berkebalikan
//
// contoh:
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // TODO: answer here
  }
  
  // take input from the user
  const string = "hello world";
  const result = reverseString(string);
  function reverseString(text) {
    let temp = text;
    let kataDibalik = "";
    for (let i = temp.length; i > 0; i--) {
      kataDibalik += temp.substring(i - 1, i);
    }
    return kataDibalik;
  }
  
  console.log(result);
  