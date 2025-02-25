import { getIssues } from '@actions/get-issues.action';
import { getLabels } from '@actions/get-labels.action';
import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  public labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  public issuesQuery = injectQuery(() => ({
    queryKey: ['issues'],
    queryFn: () => getIssues(),
  }));
  


}
