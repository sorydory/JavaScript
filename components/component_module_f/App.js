//생성자 함수
import Input from "./input.js";
export default function App({target}){
    this.render = () => {
        target.innerHTML = `
        <h1>안녕하세요</h1>
        `
    }
    this.render();
    const input = new Input({target});
}