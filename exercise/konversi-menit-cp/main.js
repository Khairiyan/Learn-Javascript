let menit = 0;
let detik = 0;
function konversiMenit(input) {
  menit = Math.floor(input / 60);
  if(input < 60){
    detik = input;
  } else {
    for (let i = 1; i <= Math.floor(input / 60); i++) {      
      if (input > 60) {
        detik = input % 60;
        if (detik < 10) {
          detik = "0" + (input % 60);
        }
      }
    }
  }
  
  return `${menit}:${detik}`;
}


console.log(konversiMenit(50));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(700));

module.exports = konversiMenit;
