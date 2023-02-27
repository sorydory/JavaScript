export default function Lists({target, initialState}){
    this.element = document.createElement('div');
    this.element.className = 'lists';
    target.appendChild(this.element);
    this.state = {
        lists: initialState
    }
    this.render = () => {
        const {lists} = this.state;
        this.element.innerHTML = `
        <ul>
            ${lists.map(list => `<li>${list}</li>`).join("")}
        </ul>
        `
    }
    this.render();
}