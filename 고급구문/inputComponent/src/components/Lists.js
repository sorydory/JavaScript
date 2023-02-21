import Component from "./Component.js";

export default class Lists extends Component{
    template(){
        return`
        <ul>
            <li>항목1</li>
            <li>항목2</li>
            <li>항목3</li>
        </ul>
        `;
    }
}