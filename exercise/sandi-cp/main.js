function terjemahKataSandi(kataSandi) {
  // TODO: answer here
  var kataSandi = kataSandi.split("");
  var terjemahKataSandi = "";
  for (var i = 0; i < kataSandi.length; i++) {
    if (kataSandi[i] == "&") {
      kataSandi[i] = "";
    } else if (kataSandi[i] == "%") {
      kataSandi[i] = "";
    } else if (kataSandi[i] == "^") {
      kataSandi[i] = "";
    } else if (kataSandi[i] == "#") {
      kataSandi[i] = " ";
    } else if (kataSandi[i] == "]") {
      kataSandi[i] = ",";
    } else if (kataSandi[i] == "+") {
      kataSandi[i] = "A";
    } else if (kataSandi[i] == " ") {
      kataSandi[i] = "E";
    }
  }
  terjemahKataSandi = kataSandi.join("");
  return terjemahKataSandi;
}
 
console.log(
  terjemahKataSandi(
    "&P%&+^S&^U&K+%N#1]#M&^+J^%%U#K #+^R&& +#2]#J+M#3#S^%%O&^R #"
  )
);
// PASUKAN 1, MAJU KE AREA 2, JAM 3 SORE
 
 module.exports = terjemahKataSandi;



