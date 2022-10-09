let bars = document.querySelector(".hamburger");
let resNav = document.querySelector(".res-nav")
let bgResNav = document.querySelector(".bg-res-nav")
let closeContent = document.querySelector(".close")

bars.addEventListener('click', function(){
    resNav.classList.add("showNav")
    bgResNav.style.display = "block"
   
})

closeContent.addEventListener('click', closeNav)
bgResNav.addEventListener('click', closeNav)

function closeNav(){
    resNav.classList.remove("showNav")
    bgResNav.style.display = "none"
}

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 190){
        console.log(window.scrollY);
        document.querySelector('.navbar').classList.add('sticky-navbar')
    }else{
        document.querySelector('.navbar').classList.remove('sticky-navbar')
    }
})