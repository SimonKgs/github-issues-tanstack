import { getIssues } from '@actions/get-issues.action';
import { getLabels } from '@actions/get-labels.action';
import { Injectable, signal } from '@angular/core';
import { State } from '@interfaces/github-issue.interface';
import { injectQuery } from '@tanstack/angular-query-experimental';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  selectedState = signal<State>(State.All);

  public labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  public issuesQuery = injectQuery(() => ({
    queryKey: ['issues', this.selectedState()],
    queryFn: () => getIssues( this.selectedState() ),
  }));
  

  showIssuesByState(state: State) {
    this.selectedState.set(state);
  }


}
