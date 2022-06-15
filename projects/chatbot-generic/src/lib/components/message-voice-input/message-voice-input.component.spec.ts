import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageVoiceInputComponent } from './message-voice-input.component';

describe('MessageVoiceInputComponent', () => {
  let component: MessageVoiceInputComponent;
  let fixture: ComponentFixture<MessageVoiceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageVoiceInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageVoiceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
