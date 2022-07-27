// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh:
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function checkPalindrome(text) {
    let temp = text;
    let kataDibalik = "";
    for (let i = temp.length; i > 0; i--) {
      kataDibalik += temp.substring(i - 1, i);
    }
    if (kataDibalik === text) {
      //console.log(kataDibalik);
      return true;
    } else {
      //console.log(kataDibalik);
      return false;
    }
  }
  
  // masukan teks
  const string = "saya hari ini sehat";
  
  // memanggil fungsi palindrom
  const value = checkPalindrome(string);
  
  console.log(value);
  