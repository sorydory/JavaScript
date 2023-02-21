//컴포넌트 클래스 선언
export default class Component{
    //필드
    $target;
    $state;
    //생성자
    constructor(target){
        this.target = target;
        this.setup();
        this.render();
    }
    //메소드
    setup(){}
    //화면구현 리턴
    template(){ return ""; }
    setEvent(){}
    //화면에 나타내기
    //DOM요소 이벤트 연결
    render(){
        this.target.innerHTML = this.template();
        this.setEvent();
    }
    setState(newState){
        this.state = {...this.state, ...newState};
        //화면그리기호출
        this.render();
        }
}
