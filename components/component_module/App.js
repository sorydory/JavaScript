import Student from "./Student.js";

class App{
    constructor(){
        const app = document.querySelector("#app");
        new Student(app);
    }
}
new App();