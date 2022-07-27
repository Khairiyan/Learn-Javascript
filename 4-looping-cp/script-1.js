// Mengembalikan urutan bilangan, dan mengetahui bilangan kelipatan 3 dan kelipatan 5
// contoh:
// baris = 5
// hasil:
// 1
// 2
// 3 merupakan kelipatan 3
// 4
// 5 merupakan kelipatan 5
//
// catatam: ingat, 15 merupakan kelipatan 3 dan 5.


// Masukan jumlah bilangan yang ingin dicek, iterasi dari angka 1
const counter = 100;

for (let index = 1; index <= counter; index++) {
    if(index % 3 == 0 && index % 5 == 0){
        console.log(index + " meruoakan kelipatan 3 dan 5");
    } else if (index % 3 == 0) {
        console.log(index + " merupakan kelipatan 3");
    } else if(index % 5 == 0){
        console.log(index + " merupakan keliapatan 5");
    } else {
        console.log(index);
    }
}

// TODO: answer here
