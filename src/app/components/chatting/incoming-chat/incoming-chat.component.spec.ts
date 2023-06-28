import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingChatComponent } from './incoming-chat.component';

describe('IncomingChatComponent', () => {
  let component: IncomingChatComponent;
  let fixture: ComponentFixture<IncomingChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
