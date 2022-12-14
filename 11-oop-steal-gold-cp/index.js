class Player {
  constructor(name) {
    this.name = name;
    this.gold = 50;
    this.stealChance = 0.25;
    this.hasBeenRobbed = false;
  }

  getGold() {
    // TODO: answer here
    return this.gold;
  }

  setGold(gold) {
    // TODO: answer here
    this.gold = gold;
  }

  getStealChance() {
    // TODO: answer here
    return this.stealChance;
  }

  setStealChance(chance) {
    // TODO: answer here
    this.stealChance = chance;
  }

  getHasBeenRobbed() {
    return this.hasBeenRobbed;
  }

  setHasBeenRobbed(status) {
    this.hasBeenRobbed = status;
  }

  randomizer() {
    return +Math.random().toFixed(2);
  }

  steal(player) {
    // TODO: answer here
    let goldTemp1 = 0;
    let goldTemp2 = 0;
    //Mengecek apakah musuh mempunyai gold lebih dari 5 dan peluang untuk mencurinya lebih besar daripada angka random dari 0-1
    if (player.randomizer() <= this.getStealChance() && player.getGold() >= 5) {
      goldTemp1 = this.getGold() + 5;
      goldTemp2 = player.getGold() - 5;
      this.setGold(goldTemp1);
      player.setGold(goldTemp2);
      player.setHasBeenRobbed(true);
      return "Berhasil mencuri 5 gold";
    } else if (player.getGold() < 5) {
      player.setHasBeenRobbed(false);
      return "Lawan terlalu miskin";
    } else {
      player.setHasBeenRobbed(false);
      return "Gagal mencuri, coba lain kali";
    }
  }
}

const p1 = new Player("Fauzan");
const p2 = new Player("Tegar");

console.log("Jumlah gold Player 1: " + p1.getGold());
console.log("Jumlah gold Player 2: " + p2.getGold());
console.log(p1.steal(p2));
console.log("Total gold Player 1: " + p1.getGold());
console.log("Total gold Player 2: " + p2.getGold());

module.exports = Player;
