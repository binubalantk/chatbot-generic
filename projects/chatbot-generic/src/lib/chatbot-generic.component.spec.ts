import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotGenericComponent } from './chatbot-generic.component';

describe('ChatbotGenericComponent', () => {
  let component: ChatbotGenericComponent;
  let fixture: ComponentFixture<ChatbotGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
