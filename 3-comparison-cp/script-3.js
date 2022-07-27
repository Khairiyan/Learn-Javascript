// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = 60;

// TODO: answer here
if(score <= 50){
    console.log("nilai mu adalah E");
} else if (score <= 60){
    console.log("nilai mu adalah D");
} else if (score <= 70){
    console.log("nilai mu adalah C");
} else if (score <= 90){
    console.log("nilai mu adalah B");
} else if (score <= 100){
    console.log("nilai mu adalah A");
} else {
    console("nilai yang anda inputkan tidak sesuai");
}
