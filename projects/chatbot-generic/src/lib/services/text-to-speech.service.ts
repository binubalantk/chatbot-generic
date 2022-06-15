import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  synth: SpeechSynthesis;
  isSpeeking$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.synth = this.getSynthesisObject();
  }
  getWindowObject() {
    return (window as any);
  }
  getSynthesisObject() {
    return this.getWindowObject().speechSynthesis;
  }

  speek(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.onend = () => {
      this.isSpeeking$.next(false);
    }
    utterance.onstart = () => {
      this.isSpeeking$.next(true);
    }
    this.synth.speak(utterance);
  }

  abort() {
    this.synth.cancel();
  }



}
