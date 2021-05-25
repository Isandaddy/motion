import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const video = new VideoComponent('Video Title', 'https://youtu.be/NLo3Y3NzTQg');
        this.page.addChild(video);
        const note = new NoteComponent('Note', 'note body');
        this.page.addChild(note);
        const todo = new TodoComponent('Todo', 'todo body');
        this.page.addChild(todo);
    }
}
new App(document.querySelector('.document'));
