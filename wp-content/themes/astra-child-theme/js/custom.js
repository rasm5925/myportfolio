
let navbar = document.querySelector(".main-header-bar-wrap");
let logosort = document.getElementById("rc-logo-sort");
//let navpunkt = document.querySelector(".menu-link");//
let sticky = navbar.offsetTop;
let logoimg = document.querySelector(".custom-logo");
let menulinks = document.getElementsByClassName('menu-link');
let firstsection = document.querySelector(".first-section");



/*let options = {
    root: null,
    rootMargin: '0px',
    threshold:1.0
};

let vid = document.getElementById("velkommen-video");
vid.autoplay = true;
vid.loop = true;

let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.target.id == 'velkommen-video')
            {
                if(entry.isIntersecting){
                    entry.target.play();
                }
                else{
                    entry.target.pause();
                }
            }
    });
} 

let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#velkommen-video')); */

window.onscroll = function() {
  if (window.pageYOffset > 0 ) {
  navbar.classList.add("sticky");
  navbar.classList.add("header-background");
 //navpunkt.classList.add("header-menu-punkter");//
  logoimg.classList.add("logo-img-rc");
  logosort.classList.add("rc-logo-vis-sort");
  navbar.style.transition= "0.5s";
  logoimg.style.transition= "0.5s";
  logosort.style.transition= "0.5s";


      


Array.from(menulinks).forEach(function(item){
    item.classList.add("header-menu-punkter");
    item.style.transition= "0.5s";})
      
     
  } else {
  navbar.classList.remove("sticky");
  navbar.classList.remove("header-background");
  //navpunkt.classList.remove("header-menu-punkter");//
      Array.from(menulinks).forEach(function(item){
    item.classList.remove("header-menu-punkter");
      item.style.transition= "0.5s";})
      
      logoimg.classList.remove("logo-img-rc");
      logosort.classList.remove("rc-logo-vis-sort");
  navbar.style.transition= "0.5s";
  logoimg.style.transition= "0.5s";
  logosort.style.transition= "0.5s";
  }
    

    
    let firstsectionTop = firstsection.getBoundingClientRect(".first-section").top
    let navbarBottom = navbar.getBoundingClientRect(".first-section").bottom
    
    
    if(firstsectionTop<=navbarBottom){
        navbar.classList.add("header-background-box-shadow")

    } else if(firstsectionTop=>navbarBottom){
        navbar.classList.remove("header-background-box-shadow")
    }
    
  

} 



let options = {
    root: null,
    rootMargin: '0px',
    threshold:1.0
};

let vid = document.getElementById("velkommen-video");

let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.target.id == 'velkommen-video')
            {
                if(entry.isIntersecting){
                    entry.target.play();
                }
                else{
                    entry.target.pause();
                }
            }
    });
} 

let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#velkommen-video'));


















 
  
