
// Scroll Animation
////
var AnchorTags=document.querySelectorAll(".nav-menu a , .dropdown a");

for(var i=0;i<AnchorTags.length;i++){
    AnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        console.log(targetSection);
        var interval=setInterval(function(){
            var targetCoordinates=targetSection.getBoundingClientRect();
            if(targetCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },15);
    })
}
// 

// AutoFill Animation

var skillBars=document.querySelectorAll('.skill-indicator>div');

var animationDone= new Array(skillBars.length);
for(var i=0;i<skillBars.length;i++){
    animationDone[i]=false;
}

function fillAllZero() {
    for(var i=0;i<skillBars.length;i++){
        skillBars[i].style.width=0+"%";
    }
}

fillAllZero();

function fillZero(bar){
    bar.style.width=0+"%";
}

function fillToWidth(bar){
    var targetWidth=bar.getAttribute('data-width');
    var currentWidth=0;
    var interval= setInterval(function(){
        if(currentWidth>targetWidth){
            clearInterval(interval);
            return;
        }
        bar.style.width=currentWidth+"%";
        currentWidth++;
    },8);
}

window.addEventListener('scroll', scrolling );

function scrolling(){
    for(var i=0;i<skillBars.length;i++){
        if(!animationDone[i]&&skillBars[i].getBoundingClientRect().top<=window.innerHeight){
            animationDone[i]=true;
            fillToWidth(skillBars[i]);
        }
        if(skillBars[i].getBoundingClientRect().top>window.innerHeight){
            animationDone[i]=false;
            fillZero(skillBars[i]);
        }
    }
}

// 
// 