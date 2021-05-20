import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, todo: string){
        super(`<section class='todo'>
                <h2 class="todo__title"></h2>
                <input type="checkbox" class="todo-checkbox">
               </section>`);
        
        const tpdpElement = this.element.querySelector('.todo__title')! as HTMLHeadingElement;
        tpdpElement.textContent = title;

        const titleElement = this.element.querySelector('.todo-checkbox')! as HTMLInputElement;
        titleElement.insertAdjacentText('afterend', todo);
    }
}
