import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string){
        super(`<section class='video'>
                <div class="video__player"><iframe class="video__iframe"></iframe></div>
                <h3 class="video__title"></h3>
               </section>`);
        
        const videoElement = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        videoElement.src = this.convertToEmbeddedUrl(url);  //  url -> videoId

        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleElement.textContent = title;
    }

    private convertToEmbeddedUrl(url: string): string {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        
        if(url) {
            let matchs = url.match(regExp);
            let videoId = matchs ? matchs[7] : undefined;
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
                }
        }
        return url;
    }
}
