let starters = document.getElementById("starters")
let startersBtn = document.getElementById("startersBtn")

startersBtn.addEventListener("click",()=>{
  starters.style.display = "block";
  milkShake.style.display = "none";
  iceCream.style.display = "none";
  soups.style.display = "none";
  thali.style.display = "none";
  southIndian.style.display = "none";
  northIndian.style.display = "none";
});

let northIndian = document.getElementById("northIndian")
let northIndianBtn = document.getElementById("northBtn")

northIndianBtn.addEventListener("click",()=>{
  northIndian.style.display = "block";
  milkShake.style.display = "none";
  iceCream.style.display = "none";
  soups.style.display = "none";
  thali.style.display = "none";
  southIndian.style.display = "none";
  starters.style.display = "none";
});

let southIndian = document.getElementById("southIndian")
let southIndianBtn = document.getElementById("southBtn")

southIndianBtn.addEventListener("click",()=>{
  southIndian.style.display = "block";
  milkShake.style.display = "none";
  iceCream.style.display = "none";
  soups.style.display = "none";
  thali.style.display = "none";
  starters.style.display = "none";
  northIndian.style.display = "none"
});

let thali = document.getElementById("thali")
let thaliBtn = document.getElementById("thaliBtn")

thaliBtn.addEventListener("click",()=>{
  thali.style.display = "block";
  milkShake.style.display = "none";
  iceCream.style.display = "none";
  soups.style.display = "none";
  southIndian.style.display = "none";
  starters.style.display = "none";
  northIndian.style.display = "none"
});

let soups = document.getElementById("soups")
let soupBtn = document.getElementById("soupBtn")

soupBtn.addEventListener("click",()=>{
  soups.style.display = "block";
  milkShake.style.display = "none";
  iceCream.style.display = "none";
  thali.style.display = "none";
  southIndian.style.display = "none";
  starters.style.display = "none";
  northIndian.style.display = "none"
});

let iceCream = document.getElementById("iceCream")
let iceCreamBtn = document.getElementById("iceCreamBtn")

iceCreamBtn.addEventListener("click",()=>{
  iceCream.style.display = "block";
  milkShake.style.display = "none";
  soups.style.display = "none";
  thali.style.display = "none";
  southIndian.style.display = "none";
  starters.style.display = "none";
  northIndian.style.display = "none"
});

let milkShake = document.getElementById("milkShake")
let milkShakeBtn = document.getElementById("shakeBtn")

milkShakeBtn.addEventListener("click",()=>{
  milkShake.style.display = "block";
  iceCream.style.display = "none";
  soups.style.display = "none";
  thali.style.display = "none";
  southIndian.style.display = "none";
  starters.style.display = "none";
  northIndian.style.display = "none"
});








milkShake.style.display = "none";
iceCream.style.display = "none";
soups.style.display = "none";
thali.style.display = "none";
southIndian.style.display = "none";
northIndian.style.display = "none"