import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseCommentCardComponent } from './response-comment-card.component';

describe('ResponseCommentCardComponent', () => {
  let component: ResponseCommentCardComponent;
  let fixture: ComponentFixture<ResponseCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseCommentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
