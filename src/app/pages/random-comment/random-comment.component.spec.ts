import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCommentComponent } from './random-comment.component';

describe('RandomCommentComponent', () => {
  let component: RandomCommentComponent;
  let fixture: ComponentFixture<RandomCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
