/**
 * Kali ini kamu diminta untuk membuat sebuah game gatcha dengan ketentuan berikut:
 * - diberikan sebuah variable button yang akan mengenerate angka random 1 - 5
 * - jika mendapat angaka 1 maka akan menampilkan "coba lagi ya"
 * - jika mendapat angaka 2 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
 * - jika mendapat angaka 3 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
 * - jika mendapat angaka 4 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
 * - jika mendapat angaka 5 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 100"
 * Buatlah Pseudocode beserta codenya menggunakan conditional "switch"
 */
 
// PSEUDOCODE:
// TODO: answer here
 
function gatcha(button) {
  // TODO: answer here
  switch (button) {
    case 1:
      return "coba lagi ya";
    case 2:
      return "selamat kamu mendapatkan kupon sebanyak 5";
    case 3:
      return "selamat kamu mendapatkan kupon sebanyak 15";
    case 4:
      return "selamat kamu mendapatkan kupon sebanyak 50";
    case 5:
      return "selamat kamu mendapatkan kupon sebanyak 100";
  }
}
// Create variable button here
// TODO: answer here
 
console.log(gatcha(1));
module.exports = gatcha;