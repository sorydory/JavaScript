import Component from "./components/Component.js";
import ContentInput from "./components/Contentinput.js";
import Lists from "./components/Component.js";

export default class App extends Component{
    setup(){
        this.state = {
            students: [
                {
                    no:1,
                    contents:"stu1",
                    actice:false
                },
                {
                    no:2,
                    contents:"stu2",
                    actice:false
                },
                {
                    no:3,
                    contents:"stu3",
                    actice:false
                },
            ]
        }
    }
    template(){
        return `
        <div id="contentAdd"></div>
        <div id="studentLists"></div>
        <div id="viewBtn"></div>
        `;
    }
    mounted(){
        const {students} = this.state;
        const contentAppender = document.querySelector("#contentAdd");
        const studentDiv = document.querySelector("#studentLists");
        new ContentInput(contentAppender);
        new Lists(studentDiv, {students: students });
        
    }
}