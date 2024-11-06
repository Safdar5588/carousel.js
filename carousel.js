let cards = document.querySelectorAll(".card")
let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev")
let countainer = document.querySelector(".carousel-countainer")


let totalCard = cards.length

let startIndex = 0 ;

function mover(){
    width = 34;
    cardWidth = startIndex * width;
    countainer.style.transform = `translateX(${-cardWidth}%)`;
}

nextBtn.addEventListener("click" , function(){
    if(startIndex < totalCard-1){
        startIndex ++
    }
    // else{
    //     startIndex = 0; 
    // }
    mover()
})


prevBtn.addEventListener("click", function(){
    if(startIndex > 0){
        startIndex--
    }

    mover()
})



