const arr = [
    {
      id:1,name:"שם הפרופיל - לורם איפסום",description:" לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר למחרא אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסיי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה שלי סטום, לפריקך תצטריק לרטי."
    },
    {
      id:2,name:"שם הפרופיל - לורם איפסום",description:" לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר למחרא אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסיי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה שלי סטום, לפריקך תצטריק לרטי."
    },
    {
      id:3,name:"שם הפרופיל - לורם איפסום",description:" לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר למחרא אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסיי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה שלי סטום, לפריקך תצטריק לרטי."
    },

   
    ];


    let container = document.getElementById('bigContainer');

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX && touchstartX - touchendX > 130) moveBetweenThreeInArrayLoop('Right')
  if (touchendX > touchstartX && touchstartX - touchendX < -130) moveBetweenThreeInArrayLoop('Left')
}

container.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

container.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

var updateLeft = "ready";
var sort = [0,1,2];
var hidden = arr.length-1;

//TODO - all text document get element by id

//* cards
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let hidden1 = document.getElementById('hidden1');
let hidden2 = document.getElementById('hidden2');

//* titles
let card1_title = document.getElementById('card1_title');
let card2_title = document.getElementById('card2_title');
let card3_title = document.getElementById('card3_title');
let cardHidden1_title = document.getElementById('cardhidden1_title');
let cardHidden2_title = document.getElementById('cardhidden2_title');

//* descriptions
let card1_description = document.getElementById('card1_description');
let card2_description = document.getElementById('card2_description');
let card3_description = document.getElementById('card3_description');
let cardhidden1_description = document.getElementById('cardhidden1_description');
let cardhidden2_description = document.getElementById('cardhidden2_description');

function updateData(){
//* titles
card1_title.textContent = arr[sort[0]].name;
card2_title.textContent = arr[sort[1]].name;
card3_title.textContent = arr[sort[2]].name;
cardHidden1_title.textContent = arr[hidden].name;
cardHidden2_title.textContent = arr[hidden].name;

//* descriptions
card1_description.textContent = arr[sort[0]].description;
card2_description.textContent = arr[sort[1]].description;
card3_description.textContent = arr[sort[2]].description;
cardhidden1_description.textContent = arr[hidden].description;
cardhidden2_description.textContent = arr[hidden].description;
}

function animationMoves(animationSide){
        card1.classList.add(animationSide?"useAnimation_card_1_Left":"useAnimation_card_1_Right");
        card2.classList.add(animationSide?"useAnimation_card_2_Left":"useAnimation_card_2_Right");
        card3.classList.add(animationSide?"useAnimationLeftCard_3_Left":"useAnimationLeftCard_3_Right");
        hidden1.classList.add(animationSide?"useAnimation_Hidden1_Right":"useAnimation_Hidden1_Left");
        hidden2.classList.add(animationSide?"useAnimationRight2_Hidden":"useAnimation_hidden2_Left");

       
            card2_title.classList.add('useAnimation_text_bigToSmall_title');
            card2_description.classList.add('useAnimation_text_bigToSmall_p');
             card3_title.classList.add('useAnimation_text_smallToBig_title');            
             card3_description.classList.add('useAnimation_text_smallToBig_p');
            card1_title.classList.add('useAnimation_text_smallToBig_title');
            card1_description.classList.add('useAnimation_text_smallToBig_p');





    setTimeout(() => {
        card1.classList.remove(animationSide?"useAnimation_card_1_Left":"useAnimation_card_1_Right");
        card2.classList.remove(animationSide?"useAnimation_card_2_Left":"useAnimation_card_2_Right");
        card3.classList.remove(animationSide?"useAnimationLeftCard_3_Left":"useAnimationLeftCard_3_Right");
        hidden1.classList.remove(animationSide?"useAnimation_Hidden1_Right":"useAnimation_Hidden1_Left");
        hidden2.classList.remove(animationSide?"useAnimationRight2_Hidden":"useAnimation_hidden2_Left");

        card1_title.classList.remove('useAnimation_text_smallToBig_title');
        card1_description.classList.remove('useAnimation_text_smallToBig_p');

        card2_title.classList.remove('useAnimation_text_bigToSmall_title');
        card2_description.classList.remove('useAnimation_text_bigToSmall_p');
        
        card3_title.classList.remove('useAnimation_text_smallToBig_title');
        card3_description.classList.remove('useAnimation_text_smallToBig_p');
    }, 1400);
}


updateData();





function moveBetweenThreeInArrayLoop(leftOrRight){
    let newarr =[0];

    //animation
    
    
   
    var temp = [sort[0],sort[1], sort[2]]; // clone the array without generic

        //! -----------------------------LEFT---------------------------------- 
   if(leftOrRight === "Left")
   {
      updateLeft = true;
      updateData(true);
     newarr[1] = temp[0];
     newarr[2] = temp[1];

    if(temp[0] ===  arr.length-1 ) newarr[0] = temp[0]-1;// x y arr.len -> y 
    else if(temp[0] === 0 ) newarr[0] =  arr.length-1; // x y 0 ->  x-1 x y}
    else newarr[0] = temp[0]-1; // x y 0 =>  y 0 1       

     
   }
       //! -----------------------------RIGHT---------------------------------- 
   else if(leftOrRight === "Right")
   {    
      updateLeft = false;   
     
     newarr[0] =temp[1];
     newarr[1] = temp[2];
     
     if(temp[2] ===  arr.length-1 ) newarr[2] = 0;// x y arr.len -> y 
     else if(temp[2] === 0 ) newarr[2] = 1; // x y 0 ->  y 0 1
     else newarr[2] = temp[2]+1; // x y 0 =>  y 0 1                   
 } 


    hidden = leftOrRight === "Left"? newarr[0]:newarr[2];
    cardhidden1_description.textContent = arr[hidden].description;
    cardhidden2_description.textContent = arr[hidden].description;
    cardHidden1_title.textContent = arr[hidden].name;
    cardHidden2_title.textContent = arr[hidden].name;

 
 animationMoves(leftOrRight === "Left");


 setTimeout(() => {
 updateLeft ='ready';
 sort = newarr;
 updateData();
}, 1400);

    
}

