import { TestBed } from '@angular/core/testing';

import { ChatbotGenericService } from './chatbot-generic.service';

describe('ChatbotGenericService', () => {
  let service: ChatbotGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
