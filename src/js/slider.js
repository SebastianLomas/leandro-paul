const $leftArrow = document.getElementById("leftArrow");
const $rightArrow = document.getElementById("rightArrow");
const $sliderImg = document.querySelectorAll(".sliderImg");
let sliderImgWidth = $sliderImg[0].clientWidth;
let imgShown = 1
let move = 0;
const maxLimit = (sliderImgWidth * $sliderImg.length)-sliderImgWidth
const minLimit = 0

$rightArrow.addEventListener("click",()=>{
    if(move < maxLimit) {
        move += sliderImgWidth;
            $sliderImg.forEach(img =>{
                debugger
                img.style.left = `-${move}px`
            })
    }
})

$leftArrow.addEventListener("click",()=>{
    if(move > minLimit) {
        move -= sliderImgWidth;
        $sliderImg.forEach(img =>{
            img.style.left = `-${move}px`
        })
    }
    console.log(move)
})

