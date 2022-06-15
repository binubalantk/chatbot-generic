import { TestBed } from '@angular/core/testing';

import { QnamakerService } from './qnamaker.service';

describe('QnamakerService', () => {
  let service: QnamakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QnamakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
