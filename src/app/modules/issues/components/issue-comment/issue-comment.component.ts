import { Component, input } from '@angular/core';
import { GithubIssue } from '@interfaces/github-issue.interface';

import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  imports: [ MarkdownModule ],
  templateUrl: './issue-comment.component.html',
  styleUrl: './issue-comment.component.css'
})
export class IssueCommentComponent {
  public issue = input.required<GithubIssue>();
}
