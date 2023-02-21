//모듈 내보내기
export default class Component {
    target;
    props;
    state;
    constructor(target, props){
        this.target = target;
        this.props = props;
        //메소드 호출
        this.setup();   //setup역할: this.state에 값을넣어준다 (초기화
        this.render();
        this.setEvent();
        console.log(this);
    }
    template() {return ""}
    render(){
        this.target.innerHTML = this.template();
        this.mounted(); //app에 div를그리고 div에 들어갈 객체를 여기서 만들어줌
    }
    setState(newState){
        this.state = {...this.state, ...newState};
        this.render();
    }
    setup(){};
    mounted(){};
    setEvent(){};
}