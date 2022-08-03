var arr = [{
  id: 1,
  name: "David",
  description: "Perfect Website im really glad to use this website"
},
{
  id: 2,
  name: "justin asade",
  description: "Wow its so easy to use and really helped me in all my work Thaaanks !"
},
{
  id: 3,
  name: "martin bark",
  description: "i liked the tool because its really helped me in my things to be easier and thanks for all the staff here .i liked the tool because its really helped me in my things to be easier and thanks for all the staff here .i liked the tool because its really helped me in my things to be easier and thanks for all the staff here .i liked the tool because its really helped me in my things to be easier and thanks for all the staff here .i liked the tool because its really helped me in my things to be easier and thanks for all the staff here ."
},
];

var container = document.getElementById('bigContainer');
var updateLeft = "ready";
var sort = [0, 1, 2];
var hidden = arr.length - 1;
var touchstartX = 0;
var touchendX = 0;


//! touch functions
function checkDirection() {
    if(updateLeft === 'ready'){
      if (touchendX < touchstartX && touchstartX - touchendX > 130)
           moveBetweenThreeInArrayLoop('Right');
      if (touchendX > touchstartX && touchstartX - touchendX < -130)
           moveBetweenThreeInArrayLoop('Left');
    }
}

container.addEventListener('touchstart', function(e) {
touchstartX = e.changedTouches[0].screenX;
});

container.addEventListener('touchend', function(e) {
touchendX = e.changedTouches[0].screenX;
checkDirection();
});



function updateData() {
//* titles
card1_title.textContent = arr[sort[0]].name;
card2.children[0].children[0].textContent = arr[sort[1]].name;
card3_title.textContent = arr[sort[2]].name;
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