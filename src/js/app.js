const price = [200, 550, 4000, 23, 58, 5000, 485, 711];
let finalPrice = 0;
let finalBonus = 0;

const calcBonus = (price) => {

  for (let value of price) {
    finalPrice += value;
  }
  if(finalPrice > 10000) {
    finalBonus = (finalPrice * 0.05);
    finalBonus = Math.round(finalBonus);
  }
  else {
    finalBonus = 0;
  }
  return finalBonus;

}

console.log("Ваш бонус:", calcBonus(price));
