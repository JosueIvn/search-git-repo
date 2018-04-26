import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TestBed, inject } from '@angular/core/testing';

import { GitHubServiceService } from './git-hub-service.service';

describe('GitHubServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      providers: [GitHubServiceService],
    });
  });

  it('should be created', inject([GitHubServiceService], (service: GitHubServiceService) => {
    expect(service).toBeTruthy();
  }));
});
