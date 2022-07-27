// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  let strTemp = "";
  for (let i = 0; i < str.length; i++) {
    strTemp += str[i] + str[i];
  }
  return strTemp;
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  let cbTemp = cb(str);
  let arrCallback = cbTemp.split("");
  let output = [];
  let index = 0;
  for (let i = 0; i < arrCallback.length; i++) {
    for (let y = 0; y < num; y++) {
      output[index] = arrCallback[i];
      index++;
    }
  }

  let outputString = "";
  for (let j = 0; j < output.length; j++) {
    outputString += output[j];
  }
  return outputString;
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee
module.exports = {
  doubleChars,
  repeat,
};
