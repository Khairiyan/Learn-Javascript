// Masukan 3 bilangan bulat menggunakan if condition
const num1 = 12;
const num2 = 11;
const num3 = 10;

let largest;

// TODO: answer here
if (num1 < num2 && num3 < num2) {
    largest = num2;
} else if (num2 < num1 && num3 < num1){
    largest = num1;
} else{
    largest = num3;
}

// Menampilkan hasil
console.log("Bilangan terbesar adalah " + largest);