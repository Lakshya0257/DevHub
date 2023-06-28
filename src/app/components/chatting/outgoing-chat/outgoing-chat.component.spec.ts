import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingChatComponent } from './outgoing-chat.component';

describe('OutgoingChatComponent', () => {
  let component: OutgoingChatComponent;
  let fixture: ComponentFixture<OutgoingChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutgoingChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
