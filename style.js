 const slide = document.querySelector('.slider').children;
 const next = document.querySelector('.next');
 const prev = document.querySelector('.prev');
 const indicator = document.querySelector('.indicator');
 let index=0;

 next.addEventListener('click', function(){
    nextSlide()
    ChangecircleSlide()
    resetTimer()
    console.log('next')
 })

 prev.addEventListener('click', function(){
    prevSlide()
    ChangecircleSlide()
    resetTimer()
    console.log('back')
 })

function circleSlide(){
    for(let i=0; i <slide.length; i++){
        const div=document.createElement("div")
         div.innerHTML=i+1
        div.setAttribute('onclick', 'indicatorSlide(this)')
        div.id=i
        if(i==0){
            div.className='active'
        }
        indicator.appendChild(div)
    }
}
circleSlide()

function ChangecircleSlide(){
    for(let i=0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
}

// ==============Circle slice click================
function indicatorSlide(element){
    index=element.id
    changeSlide()
    ChangecircleSlide()
    resetTimer()
}



 function prevSlide(){
    if(index==0){
        index=slide.length-1;
    }
    else{
        index --;
    }
    changeSlide()
 }
 function nextSlide(){
    if(index==slide.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide();
 }
 function changeSlide(){
          for(let i=0; i<slide.length; i++){
            slide[i].classList.remove('active')
          }
    slide[index].classList.add('active')
 }

//  ================================AUTOPLAY==================
function resetTimer(){
    clearInterval(timer)
    timer=setInterval(autoplay,5000);
}
function autoplay(){
    nextSlide()
    ChangecircleSlide()
}
let timer=setInterval(autoplay,5000);