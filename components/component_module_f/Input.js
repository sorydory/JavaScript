export default function Input({target}){
    //폼생성
    this.element = document.createElement('form');
    //class지정
    this.element.className="inputForm";
    target.appendChild(this.element);
    this.render = () => {
        this.element.innerHTML = `
        <input type ="text" placeholder="입력하세요" />
        `
    }
    this.render();
}