
let navbar = document.querySelector(".main-header-bar-wrap");
let firstsection = document.querySelector(".elementor-column-wrap elementor-element-populated");
let logosort = document.getElementById("rc-logo-sort");
//let navpunkt = document.querySelector(".menu-link");//
let sticky = navbar.offsetTop;
let navbarbottom = sticky+60;
let logoimg = document.querySelector(".custom-logo");
let menulinks = document.getElementsByClassName('menu-link');


function myFunction() {
  if (window.pageYOffset > 0 ) {
  navbar.classList.add("sticky");
  navbar.classList.add("header-background");
 //navpunkt.classList.add("header-menu-punkter");//
  logoimg.classList.add("logo-img-rc");
  logosort.classList.add("rc-logo-vis-sort");
  navbar.style.transition= "0.5s";
  logoimg.style.transition= "0.5s";
  logosort.style.transition= "0.5s";
      console.log(navbarbottom);
      


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
}




















 
  
