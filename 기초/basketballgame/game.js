        /*
        농구게임 만들기
        1. 컴퓨터 먼저시작
        2. 슛 횟수 각각 15번
        3. 컴퓨터가 먼저 슛하기를 하면 3점슛과 2점슛 중 
            50%의 확률로 랜덤하게 던질 수 있다.
            3점슛은 30% 확률로 성공, 2점슛은 50% 확률로 성공
            결과는 텍스트로 표시
        4. 성공시 사람의 점수를 더해준다.
        5. 컴퓨터 순서가 끝나면 사용자의 순서가 된다.
        6. 사용자는 2점슛 3점슛을 선택할 수 있다.
            2점슛은 50% 확률로 성공
            3점슛은 30% 확률로 성공
        7. 결과는 텍스트로 표시
        8. 성공 시 사람의 점수를 더해준다.
        9. 사용자 턴이 끝나면 남은 슛 횟수가 1씩 줄어든다.
        10. 남은 슛 횟수가 0이 되면 누가 이겼는지 결과를 텍스트로 나타낸다.
            <button disabled="false"></button>

            document.querySelector("#comsh").disabled=true
        */

//변수설정
//컴퓨터 점수, 사람점수, 남은 슛 횟수
//html변경되는 요소
let comScore = 0;
let userScore = 0;
let shortsLeft = 3;
let isComputerTurn = true; /*false면 유저차례*/
//html요소
let shortleftElem = document.querySelector("#short-left");
let comScoreElem = document.querySelector("#computer-score");
let userScoreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");

//컴퓨터 먼저 슛을 한다.
//2점슛인지 3점슛인지 랜덤으로 결정
//2점슛이면 50% 확률로 성공, 3점슛이면 30% 확률로 성공
//컴퓨터가 슛을 할 때 동작하는 함수

shortleftElem.innerHTML = shortsLeft;

//컴퓨터 슛하기 눌렀을 때 동작
function onComputerShoot(){
    //2점슛인지 3점슛인지 랜덤 지정
    let shootType = Math.random()>0.5 ? 2:3;
    //2점슛일 때 실행
    if(shootType==2){
        //성공했을 때
        if(Math.random()<0.5){
            //컴퓨터의 점수를 올린다.
            //글자를 변경
            //컴퓨터가 2점슛을 성공시켰습니다.
            //원래있던 점수에서 누적2점씩 플러스
            comScore = comScore + 2;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 2점슛을 성공시켰습니다.";
        }else {
            textElem.innerHTML = "실패했습니다.";
        }
        //3점슛 일 때 
    }else{
        if(Math.random()<0.3){
            //30%확률을 0.3으로 작성
            comScore = comScore + 3;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 3점슛을 성공시켰습니다.";
        }else {
            textElem.innerHTML = "실패했습니다.";
        }
    }
    isComputerTurn = false;
    userBtns.forEach(btn=>{
        btn.disabled = false;
    })
    //true면 버튼이 활성화됨
    comBtn.disabled = true;
}

//사용자가 2점슛을 클릭 했을 때
function onUserShoot2(){
    if(Math.random()<0.5){
        //컴퓨터의 점수를 올린다.
        //글자를 변경
        //컴퓨터가 2점슛을 성공시켰습니다.
        userScore = userScore + 2;
        userScoreElem.innerHTML = comScore;
        textElem.innerHTML = "당신이 2점슛을 성공시켰습니다.";
    }else {
        textElem.innerHTML = "실패했습니다.";
    }
    userBtns.forEach(btn=>{
        btn.disabled = true;
    })
    comBtn.disabled = false;
    //남은 슛 횟수를 1씩 빼기
    --shortsLeft;
    //슛 횟수 화면 변경하기
    //innerHTML보여지는화면 달라짐
    shortleftElem.innerHTML = shortsLeft;
    if(shortsLeft==0){
        gameOver();
    }
}
//사용자가 3점슛을 클릭 했을 때 
function onUserShoot3(){
    if(Math.random()<0.3){
        //컴퓨터의 점수를 올린다.
        //글자를 변경
        //컴퓨터가 2점슛을 성공시켰습니다.
        userScore = userScore + 3;
        userScoreElem.innerHTML = comScore;
        textElem.innerHTML = "당신이 3점슛을 성공시켰습니다.";
    }else {
        textElem.innerHTML = "실패했습니다.";
    }
    userBtns.forEach(btn=>{
        btn.disabled = true;
    })
    comBtn.disabled = false;
    //남은 슛 횟수를 1씩 빼기
    --shortsLeft;
    //슛 횟수 화면 변경하기
    //innerHTML보여지는화면 달라짐
    shortleftElem.innerHTML = shortsLeft;
    if(shortsLeft==0){
        gameOver();
    }
}

//슛 횟수가 0이 되면 승자를 결정하는 함수
function gameOver(){
    if(userScore>comScore){
        textElem.innerHTML = "승리했습니다.";
    }else if(userScore == comScore){
        textElem.innerHTML = "비겼습니다.";
    }else {
        textElem.innerHTML = "졌습니다.";
    }
    userBtns.forEach(btn=>{
        btn.disabled = true;
    })
    //true면 버튼이 활성화됨
    comBtn.disabled = true;
}
