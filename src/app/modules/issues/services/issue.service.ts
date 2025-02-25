import { getIssueByNumber } from '@actions/get-issue-by-number.action';
import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueNumber = signal<string|null>(null);

  public issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber( this.issueNumber()! ),
    enabled: this.issueNumber() !== null
  }));


  setIssueNumber(issueNumber: string) {
    this.issueNumber.set(issueNumber);
  }

}
