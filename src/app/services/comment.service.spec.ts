import { TestBed, inject } from '@angular/core/testing';

import { CommentService } from './comment.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('CommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClient],
    providers: [CommentService]
  }));

  it('should be created', inject([CommentService], (service: CommentService) => {
    expect(service).toBeTruthy();
  }));
});
