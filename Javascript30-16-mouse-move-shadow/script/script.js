const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;
hero.addEventListener('mousemove', shadow);      

function shadow(e){

    const {offsetWidth : width, offsetHeight:height}= hero;
    let {offsetX : x , offsetY : y} = e;
    
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    let xWalk =Math.round( (x /width * walk) - (walk/2));
    let yWalk =Math.round( (y /height * walk) - (walk/2));

    text.style.textShadow=`${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 yellow,
    ${yWalk}px ${xWalk}px 0 blue`;

    console.log(xWalk,yWalk);

}