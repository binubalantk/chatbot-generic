import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomRecognition } from '../models/customRecognition.model';

@Injectable({
  providedIn: 'root'
})
export class SpeechToTextService implements OnInit{

  private listening$ = new Subject<boolean>();
  private recognizedText$ = new Subject<string>();

  private recognition?: any;

  constructor() {
    
  }
  ngOnInit(): void {
    this.initializeRecongnitionObject();
  }

  getListenStatus(): Subject<boolean> {
    return this.listening$;
  }

  getRecognizedText(): Subject<string> {
    return this.recognizedText$;
  }

  getWindowObject() {
    return (window as any);
  }
  getRecognitionObject() {
    return new (this.getWindowObject().SpeechRecognition
      || this.getWindowObject().webkitSpeechRecognition);
  }

  getRecognition(): any {
    if(!this.recognition) {
      this.initializeRecongnitionObject();
    }

    if(!this.recognition){
      throw new Error('Speech recongnition not supported by the browser')
    }

    return this.recognition;
  }

  initializeRecongnitionObject() {
    console.log('Initializing STT service...')
    this.recognition = this.getRecognitionObject();
    if(!this.recognition) {
      throw new Error('Speech recongnition not supported by the browser')
    }
    
    this.recognition.interimResults = false;
    this.recognition.continuous = false;
    this.recognition.lang = 'en-US';
    this.recognition.maxAlternatives = 1;
    const listeningObject = this.listening$;
    const textObject = this.recognizedText$;
    this.recognition.onstart = function(event: any) {
        console.log('Speech start: ', event);
        listeningObject.next(true);
    }
    this.recognition.onend = function(event: any) {
      console.log('Speech end: ', event);
      listeningObject.next(false);
    } 
    this.recognition.onresult = function(result: any) {
      console.log('Voice recognized: ', result);
      if(result.results && result.results.length && result.results[0]){
        textObject.next(result.results[0][0].transcript);
      }
    }
  }

  start() {
    this.getRecognition().start();
    
  }

  stop() {
    this.getRecognition().abort()
  }



}
