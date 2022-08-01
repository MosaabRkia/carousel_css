var arr = [{
  id: 1,
  name: "שם הפרופיל - לורם איפסום",
  description: " לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי."
},
{
  id: 2,
  name: "שם הפרופיל",
  description: " לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי."
},
{
  id: 3,
  name: "שם הפרופיל - לורם ",
  description: "1 לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.1"
},
];
var container = document.getElementById('bigContainer');
var touchstartX = 0;
var touchendX = 0;

function checkDirection() {
if (touchendX < touchstartX && touchstartX - touchendX > 130)
  moveBetweenThreeInArrayLoop('Right');
if (touchendX > touchstartX && touchstartX - touchendX < -130)
  moveBetweenThreeInArrayLoop('Left');
}
container.addEventListener('touchstart', function(e) {
touchstartX = e.changedTouches[0].screenX;
});
container.addEventListener('touchend', function(e) {
touchendX = e.changedTouches[0].screenX;
checkDirection();
});
var updateLeft = "ready";
var sort = [0, 1, 2];
var hidden = arr.length - 1;

function updateData() {
//* titles
card1_title.textContent = arr[sort[0]].name;
console.log(card2.children[0].children[1]);
card2.children[0].children[0].textContent = arr[sort[1]].name;
card3_title.textContent = arr[sort[2]].name;
console.log(card3_title);
cardhidden1_title.textContent = arr[hidden].name;
cardhidden2_title.textContent = arr[hidden].name;
//* descriptions
card1_description.textContent = arr[sort[0]].description;
card2_description.textContent = arr[sort[1]].description;
card3_description.textContent = arr[sort[2]].description;
cardhidden1_description.textContent = arr[hidden].description;
cardhidden2_description.textContent = arr[hidden].description;
}

function animationMoves(animationSide) {
card1.classList.add(animationSide ? "useAnimation_card_1_Left" : "useAnimation_card_1_Right");
card2.classList.add(animationSide ? "useAnimation_card_2_Left" : "useAnimation_card_2_Right");
card3.classList.add(animationSide ? "useAnimationLeftCard_3_Left" : "useAnimationLeftCard_3_Right");
hidden1.classList.add(animationSide ? "useAnimation_Hidden1_Right" : "useAnimation_Hidden1_Left");
hidden2.classList.add(animationSide ? "useAnimationRight2_Hidden" : "useAnimation_hidden2_Left");
card2_description.classList.add("useAnimation_center_big_to_small");
animationSide?
card1_description.classList.add('useAnimation_LOrR_small_to_big'):
card3_description.classList.add('useAnimation_LOrR_small_to_big');

setTimeout(function() {
  animationSide?
  card1_description.classList.remove('useAnimation_LOrR_small_to_big'):
  card3_description.classList.remove('useAnimation_LOrR_small_to_big');
  card2_description.classList.remove( "useAnimation_center_big_to_small");
  card1.classList.remove(animationSide ? "useAnimation_card_1_Left" : "useAnimation_card_1_Right");
  card2.classList.remove(animationSide ? "useAnimation_card_2_Left" : "useAnimation_card_2_Right");
  card3.classList.remove(animationSide ? "useAnimationLeftCard_3_Left" : "useAnimationLeftCard_3_Right");
  hidden1.classList.remove(animationSide ? "useAnimation_Hidden1_Right" : "useAnimation_Hidden1_Left");
  hidden2.classList.remove(animationSide ? "useAnimationRight2_Hidden" : "useAnimation_hidden2_Left");
}, 1400);
}
updateData();

function moveBetweenThreeInArrayLoop(leftOrRight) {
var newarr = [0];
//animation
var temp = [sort[0], sort[1], sort[2]]; // clone the array without generic
//! -----------------------------LEFT---------------------------------- 
if (leftOrRight === "Left") {
  updateLeft = true;
  updateData(true);
  newarr[1] = temp[0];
  newarr[2] = temp[1];
  if (temp[0] === arr.length - 1)
      newarr[0] = temp[0] - 1; // x y arr.len -> y 
  else if (temp[0] === 0)
      newarr[0] = arr.length - 1; // x y 0 ->  x-1 x y}
  else
      newarr[0] = temp[0] - 1; // x y 0 =>  y 0 1       
}
//! -----------------------------RIGHT---------------------------------- 
else if (leftOrRight === "Right") {
  updateLeft = false;
  newarr[0] = temp[1];
  newarr[1] = temp[2];
  if (temp[2] === arr.length - 1)
      newarr[2] = 0; // x y arr.len -> y 
  else if (temp[2] === 0)
      newarr[2] = 1; // x y 0 ->  y 0 1
  else
      newarr[2] = temp[2] + 1; // x y 0 =>  y 0 1                   
}
hidden = leftOrRight === "Left" ? newarr[0] : newarr[2];
cardhidden1_description.textContent = arr[hidden].description;
cardhidden2_description.textContent = arr[hidden].description;
cardhidden1_title.textContent = arr[hidden].name;
cardhidden2_title.textContent = arr[hidden].name;
animationMoves(leftOrRight === "Left");
setTimeout(function() {
  updateLeft = 'ready';
  sort = newarr;
  updateData();
}, 1400);
}