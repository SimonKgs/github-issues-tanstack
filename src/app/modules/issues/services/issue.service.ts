import { getIssueByNumber } from '@actions/get-issue-by-number.action';
import { getIssueComments } from '@actions/get-issue-comments.action';
import { inject, Injectable, signal } from '@angular/core';
import { GithubIssue } from '@interfaces/github-issue.interface';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueNumber = signal<string|null>(null);
  private queryClient = inject(QueryClient)


  public issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber( this.issueNumber()! ),
    enabled: this.issueNumber() !== null
  }));


  public issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueComments( this.issueNumber()! ),
    enabled: this.issueNumber() !== null
  }));


  setIssueNumber(issueNumber: string) {
    this.issueNumber.set(issueNumber);
  }


  prefetchIssue(issueNumber: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issue', issueNumber], // strict type different type different query
      queryFn: () => getIssueByNumber(issueNumber),
      // this will keep the response and use that info for 5 minutes
      // before make a new request
      staleTime: 1000 * 60 * 5, 
    })
  }


  setIssueData( issue: GithubIssue) {
    this.queryClient.setQueryData(
      ['issue', issue.number.toString()],
      issue,
      {
        updatedAt: Date.now() + 1000 * 60,
      }
    );
  }

}
