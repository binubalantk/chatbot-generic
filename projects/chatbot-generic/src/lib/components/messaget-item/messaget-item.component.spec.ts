import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagetItemComponent } from './messaget-item.component';

describe('MessagetItemComponent', () => {
  let component: MessagetItemComponent;
  let fixture: ComponentFixture<MessagetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagetItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
