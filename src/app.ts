import { MediaSectionInput } from "./components/dialog/input/media-input.js"
import { TextSectionInput } from "./components/dialog/input/text-input.js"
import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {

            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListner(() => {
                dialog.removeFrom(dialogRoot);
            });

            dialog.setOnSubmitListner(() => {
                const image = new ImageComponent(mediaSection.title, mediaSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });

        });

        const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {

            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListner(() => {
                dialog.removeFrom(dialogRoot);
            });

            dialog.setOnSubmitListner(() => {
                const video = new VideoComponent(mediaSection.title, mediaSection.url);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            });

        });

        const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
        noteBtn.addEventListener('click', () => {

            const dialog = new InputDialog();
            const textSection = new TextSectionInput();
            dialog.addChild(textSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListner(() => {
                dialog.removeFrom(dialogRoot);
            });

            dialog.setOnSubmitListner(() => {
                const note = new NoteComponent(textSection.title, textSection.body);
                this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            });

        });

        const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
        todoBtn.addEventListener('click', () => {

            const dialog = new InputDialog();
            const textSection = new TextSectionInput();
            dialog.addChild(textSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListner(() => {
                dialog.removeFrom(dialogRoot);
            });

            dialog.setOnSubmitListner(() => {
                const todo = new TodoComponent(textSection.title, textSection.body);
                this.page.addChild(todo);
                dialog.removeFrom(dialogRoot);
            });

        });
    }


}

new App(document.querySelector('.document')! as HTMLElement, document.body);
