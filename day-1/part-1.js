const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text
  .split("\n")
  .map(d => {
    return calcFuelPerModule(d)
  })
  .reduce((acc, curr) => acc + curr, 0);
console.log(output);

function calcFuelPerModule(mass) {
  const reqdFuel = Math.floor(mass/3)
  if(reqdFuel > 2){
    return reqdFuel -2
  }else{
    return 0
  }
}