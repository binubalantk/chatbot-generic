import { MessageInputMode } from "../constants/message-input-mode.enum";
import { MessageMode } from "../constants/message-mode.enum";
import { MessageBaseModel } from "./messageBase.model";

export class ReceiveMessageModel extends MessageBaseModel {
    private _images?: string[];
    private _videos?: string[];
    private _urls?: string[];
    constructor(messageInputMode: MessageInputMode){
        super(MessageMode.RECEIVED, messageInputMode);
    }

    addImages(images: string[]) {
        if(!this._images){
            this._images = [];
        }

        this._images.push(...images);
    }

    addVideos(videos: string[]) {
        if(!this._videos){
            this._videos = [];
        }

        this._videos.push(...videos);
    }

    addUrls(urls: string[]) {
        if(!this._urls){
            this._urls = [];
        }

        this._urls.push(...urls);
        console.log('URLS: ', this._urls);
    }

    get images(): string[] | undefined {
        return this._images;
    }

    get videos(): string[] | undefined {
        return this._videos;
    }

    get urls(): string[] | undefined {
        return this._urls;
    }

}