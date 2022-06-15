import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxLauncherComponent } from './message-box-launcher.component';

describe('MessageBoxLauncherComponent', () => {
  let component: MessageBoxLauncherComponent;
  let fixture: ComponentFixture<MessageBoxLauncherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBoxLauncherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
