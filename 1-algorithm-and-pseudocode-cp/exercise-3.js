// Buatlah pseudocode untuk menjumlahkan bilangan genap yang ada di antara 1 sampai 10

// TODO: answer here
let bilangan = 0;
for (let index = 0; index < 11; index++) {
    if(index % 2 == 0){
        bilangan += index;
        console.log(bilangan);
    }
}