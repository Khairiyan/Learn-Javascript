// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = 3;
let star = "";
for (let index = n; index > 0; index--) {
    for (let jIndex = index; jIndex > 0; jIndex--) {
        star += "*";
    }
    console.log(star);
    star = "";
}

// TODO: answer here
