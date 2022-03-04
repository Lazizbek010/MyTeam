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
