import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReceiveMessageModel } from '../../models/receiveMessage.model';
import { MessageBaseComponent } from '../message-base/message-base.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TextToSpeechService } from '../../services/text-to-speech.service';
import { MessageInputMode } from '../../constants/message-input-mode.enum';

@Component({
  selector: 'lib-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.scss']
})
export class ReceiveMessageComponent extends MessageBaseComponent<ReceiveMessageModel> implements OnInit {

  voiceActive: boolean = false;

  constructor(private _sanitizer: DomSanitizer, private ttsService: TextToSpeechService){
    super();
  }
  
  ngOnInit(): void {
    this.ttsService.isSpeeking$.subscribe((isSpeeking) => {
      this.voiceActive = isSpeeking;
    });

    if(this.message?.messageInputMode === MessageInputMode.VOICE) {
      this.activateSpeech();
    }
  }

  getSanitized(textUrl: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(textUrl);
  }

  activateSpeech() {
    if(this.voiceActive) {
      this.ttsService.abort();
      this.voiceActive = false;
      return;
    }

    if(this.message && this.message.text){
      this.voiceActive = true;
      this.ttsService.speek(this.message.text);
    }   
    
  }
}
