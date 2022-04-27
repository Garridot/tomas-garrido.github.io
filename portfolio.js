var icon_menu = document.querySelector('.icon-menu')
var menu      = document.querySelector('.menu')

icon_menu.addEventListener("click",function(){
    icon_menu.classList.toggle('clicked')
    menu.classList.toggle('view') 
})

var nav = document.querySelector('#nav')

window.addEventListener("wheel", function(event){
    
    if(event.wheelDelta >= 0){        
        nav.style.top = "0" 
        nav.style.transition= 'all .5s'         
        nav.style.color = "white"
        
        
        
      
    }else{
        nav.style.top = "-6rem" 
        nav.style.transition = 'all .5s'          
                  
      
    }
  })

var projects  = document.querySelector('.hg')
var project_1 = document.querySelector('._1')
var project_2 = document.querySelector('._2')

    
        



     
        
    
    

