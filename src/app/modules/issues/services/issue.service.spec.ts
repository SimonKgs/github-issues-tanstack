import { TestBed } from '@angular/core/testing';

import { IssueService } from './issue.service';
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';

describe('IssueService', () => {
  let service: IssueService;
  const queryClient = new QueryClient()

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideTanStackQuery(queryClient)
      ]
    });
    service = TestBed.inject(IssueService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
