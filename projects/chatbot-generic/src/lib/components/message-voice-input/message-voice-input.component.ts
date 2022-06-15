import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { SpeechToTextService } from '../../services/speech-to-text.service';

@Component({
  selector: 'lib-message-voice-input',
  templateUrl: './message-voice-input.component.html',
  styleUrls: ['./message-voice-input.component.scss']
})
export class MessageVoiceInputComponent implements OnInit, OnDestroy {

  @Output() onSend = new EventEmitter<string>();
  @Output() onVoiceEnd = new EventEmitter<void>();

  listening: boolean = false;
  textRecognized: string = 'Not Listening';

  constructor(
    private sttService: SpeechToTextService
  ) { }

  ngOnInit(): void {
    this.sttService.getListenStatus()
      .subscribe((status)=>{
        this.listening = status;
        if(!status) {
          this.onVoiceEnd.emit();
        }
      });
    this.sttService.getRecognizedText()
      .subscribe((text)=>{
        this.textRecognized = text;
        this.onSend.emit(text);
      });
    this.sttService.start();
  }

  ngOnDestroy(): void {
    this.sttService.stop();
  }
}
