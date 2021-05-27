import { BaseComponent, Component } from "../component.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListner = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    
    private closeListner?: OnCloseListener;
    private submitListner?: OnSubmitListner;
    constructor(){
        super(`<dialog class="dialog">
                <div class="dialog__container">
                    <button class="close">&times;</button>
                    <div id="dialog__body"></div>
                    <button class="dialog__submit">add</button>
                </div>
            </dialog>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListner && this.closeListner();
        }  

        submitBtn.onclick = () => {
            this.submitListner && this.submitListner();
        }
    }

    addChild(child: Component){
        const body = this.element.querySelector('#dialog__body')! as HTMLElement;
        child.attachTo(body);
    }
    
    setOnCloseListner (listener: OnCloseListener) {
        this.closeListner = listener;
    }

    setOnSubmitListner (listener: OnSubmitListner) {
        this.submitListner = listener;
    }
}