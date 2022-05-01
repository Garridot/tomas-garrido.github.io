var intro   = document.querySelector('.intro')
var main    = document.querySelector('main')
var section = document.querySelector('.content')
section.style.display = 'none'

window.addEventListener('load',()=>{

  var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
    .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
    })
    .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
    }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
    }).add({
    targets: '.ml11 .line',
    opacity: [1,0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });

    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
      targets: '.ml12 .letter',
      translateX: [-40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 2500 + 30 * i
    }).add({
      targets: '.ml12 .letter',
      translateX: [0,30],
      opacity: [1,1],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });

  setTimeout(animation,2000)
  
  function animation(){   
    
    section.style.display = 'block'    
    
  }
})  



var icon_menu = document.querySelector('.icon-menu')
var menu      = document.querySelector('.menu')

icon_menu.addEventListener("click",function(){
    icon_menu.classList.toggle('clicked')
    menu.classList.toggle('view') 
})

var nav = document.querySelector('#nav')

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 

  var st = window.pageYOffset || document.documentElement.scrollTop; 


  if (st > lastScrollTop){    
  nav.style.top = "-6rem" 
  nav.style.transition = 'all .5s'
  // downscroll code
  }else{     
  nav.style.top = "0" 
  nav.style.transition= 'all .5s'         
  nav.style.color = "white"    
  // upscroll code
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

    


var projects  = document.querySelector('.projects')
var project_1 = document.querySelector('#_1')
var project_2 = document.querySelector('#_2')
var project_3 = document.querySelector('#_3')
var project_4 = document.querySelector('#_4')



projects.onwheel = function (e) {    
  
  var pointY =  e.wheelDelta
  setTransform(pointY=pointY)
}





function setTransform(pointY) { 
  
  // project_1.style.transform = "translateY(800px)" 
  // project_1.style.transform = "translateY("+ pointY +"px)"  
  
  // if (project_1.style.transform = "translateY(0px)"){ 
  //   project_2.style.transform = "translateY("+ pointY +"px)";    
    
  // }else{
  //   project_1.style.transform = "translateY("+ pointY +"px)";
  // }

  // if(project_2.style.transform = "translateY(120px)"){   
  //   project_2.style.transform = "translateY(0px)";    
  // } 


  // if(project_3.style.transform = "translateY(120px)"){   
  //   project_3.style.transform = "translateY(0px)";    
  // } 
  // if(project_4.style.transform = "translateY(120px)"){   
  //   project_4.style.transform = "translateY(0px)";    
  // } 
}      









     
        
    
    

