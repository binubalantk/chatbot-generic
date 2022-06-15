import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTextInputComponent } from './message-text-input.component';

describe('MessageTextInputComponent', () => {
  let component: MessageTextInputComponent;
  let fixture: ComponentFixture<MessageTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageTextInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
