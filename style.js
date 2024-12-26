let imgList =Array.from(document.querySelectorAll('.item img '))


let lightContainer = document.querySelector('.light-container')

let btnClose = document.getElementById("close")

let box =document.querySelector('.box')

let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let index;

for(let i=0; i < imgList.length; i++){
    imgList[i].addEventListener("click",function(e){

        index = imgList.indexOf(e.target);
        lightContainer.classList.remove("d-none");
        let currentSrc = e.target.getAttribute("src");
        box.style.backgroundImage = `url(${currentSrc})`;
    });
}

btnClose.addEventListener("click",function(){
    closeSlider()
});

btnNext.addEventListener('click',function(){
    slide(1)
})

btnPrev.addEventListener('click',function(){
    slide(-1)
})

document.addEventListener('keydown',function(e){
    if(!lightContainer.classList.contains("d-none")){
     if(e.key === "ArrowRight"){
        slide(1)
     }
     if(e.key === "ArrowLeft"){
        slide(-1)
     }
     if(e.key === "Escape"){
        closeSlider()
     }
    }
})

function slide(step){
index += step;
if(index===imgList.length){
            index=0
        }
        else if(index<0){
                    index=imgList.length-1
                }
                let currentSrc = imgList[index].getAttribute("src");
                box.style.backgroundImage = `url(${currentSrc})`;
}

// function nextSlider(){
//     index++;
//     if(index===imgList.length){
//         index=0
//     }
// let currentSrc = imgList[index].getAttribute("src");
// box.style.backgroundImage = `url(${currentSrc})`;
// }

// function prevSlider(){
// index--;
//     if(index<0){
//         index=imgList.length-1
//     }
// let currentSrc = imgList[index].getAttribute("src");
// box.style.backgroundImage = `url(${currentSrc})`;
// }


function closeSlider(){
    lightContainer.classList.add("d-none");
}


document.addEventListener('click',function(e){
    if(e.target===lightContainer){
        closeSlider()
    }
})