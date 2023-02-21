import Component from "./components/component.js";
 //앱 클래스 선언
 class App extends Component {
    setup(){
        this.state = { students: ["stu1", "stu2", "stu3", "stu4"]}
    }
    template(){
        const { students } = this.state;
        return`
        <ul>
            ${students.map(stu=>`<li>${stu}</li>`).join("")}
        </ul>
        <button id="add">추가</button>
        `;
    }
    setEvent(){
        const { students } = this.state;
        this.target.querySelector("#add")
        .addEventListener("click"()=>{
            console.log("클릭은 됨");
            this.setState({students: [...students, `stu$[students.length +1}`]})
        })
    }
}
new App(document.querySelector("#app"));