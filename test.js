// !
// function Hero() {
//   this.q = "consume";
//   this.w = "snowball";
// }

// let arr = [1, 2, 3, 4];

// Hero.prototype.name = "kim";

// arr.prototype.name = "taek";

// function Car(opt1, opt2, opt3) {
//   this.op1 = opt1;
//   this.opt2 = opt2;
//   this.opt3 = opt3;
//   this.opt = opt;
// }

// Car.prototype.opt1 = "door";
// Car.prototype.opt2 = "tire";
// Car.prototype.opt3 = "engine";

function Hero() {
  this.q = "consume";
  this.w = "snowball";
}

Hero.prototype.name = "kim";

console.log(Hero.prototype.hasOwnProperty("name"));
