const $navButton = document.getElementById("navButton")
const $navMobile = document.getElementById("navMobile")
const $body = document.getElementById("body")
const $navBackButton = document.getElementById("navBackButton")

$navButton.addEventListener('click',()=>{
    $navMobile.classList.remove("hideMenu-animation")
    $navMobile.style.display = "grid"
    $navMobile.classList.add("showMenu-animation")
    $navButton.style.display = "none"
    $body.style.width = "100vw"
    $body.style.overflow = "hidden"
})

$navBackButton.addEventListener("click",()=>{
    $navMobile.classList.remove("showMenu-animation")
    $navMobile.style.display = "none"
    $navButton.style.display = "flex"
    $body.style.width = "initial"
    $body.style.overflow = "initial"
})


console.log($body)