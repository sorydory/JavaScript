//두 수 사이에 랜덤 실수를 반환
function randomFloat(min,max){
    return Math.random() * (max-min+1) + min;
}
//두 점(x1, y1), (x2, y2) 사이의 거리를 반환 해 주는 함수
function distance(x1, y1, x2, y2){
    let distX = x2 - x1;
    let distY = y2 - y1;
    //두 점의 거리 구하기
    return Math.sqrt(distX * distX + distY * distY);
}
//모듈 내보내기
export default { randomFloat, distance };
