let arts = document.querySelectorAll('article'); //노드리스트 : 유사배열
let lis = document.querySelectorAll(".leftnav li");
//스크롤이벤트
document.addEventListener("scroll",function(){
    let sct = document.documentElement.scrollTop;
    arts.forEach((ar,index)=>{
        let zoomNum = (index * -5000) +sct;
        console.log(zoomNum);
        ar.style.transform = `translateZ(${zoomNum}px)`;
        if(sct > 1000 + (4000 * index)){
            ar.classList.add('on');
            arts.forEach((ar.index2)=>{
                if(index != index2){
                    ar.classList.remove
                }
            })
        }
    })
})
lis.forEach((li,index)=>{
    li.addEventListener("click",function(e){
        //이벤트제거
        e.preventDefault
        window.scrollTo({top: index * 5000, behavior: "smooth"})
    })
})
//0번째 아티클은 sct값이 1000보다 커지면 on 0
if(sct >= 1000){
    arts[0].classList.add('on');
    arts[1].classList.remove('on');
    arts[2].classList.remove('on');
    arts[3].classList.remove('on');
    arts[4].classList.remove('on');
}
if(sct >= 5000){
    arts[1].classList.add('on');
    arts[0].classList.remove('on');
    arts[2].classList.remove('on');
    arts[3].classList.remove('on');
    arts[4].classList.remove('on');
}
if(sct >= 10000){
    arts[2].classList.add('on');
    arts[0].classList.remove('on');
    arts[1].classList.remove('on');
    arts[3].classList.remove('on');
    arts[4].classList.remove('on');
}
if(sct >= 15000){
    arts[3].classList.add('on');
    arts[0].classList.remove('on');
    arts[1].classList.remove('on');
    arts[3].classList.remove('on');
    arts[4].classList.remove('on');
}
if(sct >= 20000){
    arts[4].classList.add('on');
    arts[0].classList.remove('on');
    arts[1].classList.remove('on');
    arts[2].classList.remove('on');
    arts[3].classList.remove('on');
}
//1번째 아티클은 sct값이 6000보다 커지면 on 1
//2번째 아티클은 sct값이 11000보다 커지면 on    2
//3번째 아티클은 sct값이 16000보다 커지면 on    3
//4번째 아티클은 sct값이 21000보다 커지면 on    4
//li를 클릭했을 때
//0번째 li 0
//1번째 li 5000
//2번째 li 10000
//3번째 li 15000
//4번째 li 20000
//lis[0].addEventListener("click", this.fullscreenElement(){

//})



/*
let arts = document.querySelectorAll('article');
let lis = document.querySelectorAll('.leftnav li');
document.addEventListener('scroll',function(){
    let sct = document.documentElement.scrollTop;
    for(let i=0; i<arts.length; i++){
        let znum = i*-5000;
        let znum2 = znum+sct;
        arts[i].style.transform = `translateZ(${znum2}px)`;
    }
    if(sct < 1000){
        arts[0].style.opacity = 0.5;
    }
    // if(sct >=1000 ){
    //     arts[0].style.opacity = 1; 
    //     arts[1].style.opacity = 0.5; 
    //     arts[2].style.opacity = 0.5;
    //     arts[3].style.opacity = 0.5; 
    //     arts[4].style.opacity = 0.5;
    // }
    // if( sct>=5000 ){
    //     arts[1].style.opacity = 1;
    //     arts[0].style.opacity = 0.5; 
    //     arts[2].style.opacity = 0.5; 
    //     arts[3].style.opacity = 0.5; 
    //     arts[4].style.opacity = 0.5;
    // }
    // if( sct >=9000 ){
    //     arts[2].style.opacity = 1;
    //     arts[0].style.opacity = 0.5; 
    //     arts[1].style.opacity = 0.5; 
    //     arts[3].style.opacity = 0.5; 
    //     arts[4].style.opacity = 0.5;
    // }
    // if( sct >= 13000 ){
    //     arts[3].style.opacity = 1;
    //     arts[0].style.opacity = 0.5; 
    //     arts[1].style.opacity = 0.5; 
    //     arts[2].style.opacity = 0.5; 
    //     arts[4].style.opacity = 0.5; 
    // }
    // if ( sct >= 17000 ){
    //     arts[4].style.opacity = 1;
    //     arts[0].style.opacity = 0.5; 
    //     arts[1].style.opacity = 0.5; 
    //     arts[2].style.opacity = 0.5;
    //     arts[3].style.opacity = 0.5; 
    // }
    for(let i=0; i<arts.length; i++){
        if(sct >= 1000+(4000*i)){
            arts[i].style.opacity = 1;
            lis[i].classList.add('on');
            arts.forEach((art,index)=>{
                if(i!=index){
                    art.style.opacity = 0.5;
                }
            })
            lis.forEach((li,index)=>{
                if(i!=index){
                    li.classList.remove('on');
                }
            })
        }
    }
})
lis.forEach((li,index)=>{
    li.addEventListener('click',function(e){
        //이벤트를 제거 
        e.preventDefault();
        let scTop = 1000+(index*4000);
        window.scrollTo({top:scTop,behavior:'smooth'});
        console.log(scTop);
    })
})
*/