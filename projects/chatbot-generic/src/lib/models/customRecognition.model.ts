export class CustomRecognition {
    interimResults: boolean;
    continuous: false;
    lang: string;
    maxAlternatives: number;
    start: any;
    abort: any;
    onresult: any;

    constructor(interimResults: boolean,
      continuous: false,
      lang: string,
      maxAlternatives: number) {
      this.interimResults = interimResults;
      this.continuous = continuous;
      this.lang = lang;
      this.maxAlternatives = maxAlternatives;
    }
  }