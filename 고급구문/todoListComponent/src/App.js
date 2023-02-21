import Component from "./components/Component.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoLists from "./components/TodoLists.js";

export default class App extends Component{
    setup(){
        console.log("setup");
        this.state = {
            InputText:"",
            todoLists : [
                {
                    no:1,
                    content:"할일1",
                    isDone: false
                },
                {
                    no:2,
                    content:"할일2",
                    isDone: false
                },
                {
                    no:3,
                    content:"할일3",
                    isDone: false
                }

            ]
        }
        
    }
    template(){
        return`
        <div id = "insertTodo"></div>
        <div id = "listTodos"></div>
        `;
    }
    mounted(){
        const { addTodoList } = this;
        const TodoHeaer= document.querySelector("#insertTodo");
        const todolist = document.querySelector("#listTodos");
        new TodoHeader(TodoHeaer, {addTodoList: addTodoList.bind(this)});
        new TodoLists(todolist);
    }
    addTodoList(content){
        const { todoLists } = this.state;
        console.log(todoLists);
        console.log(this);
        this.setState({
            todoLists:[
                ...todoLists,
                {
                    no:4,
                    content:content,
                    isDone:false
                }
            ]
        })
    }
}