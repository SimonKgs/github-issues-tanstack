import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIssue, State } from '@interfaces/github-issue.interface';

@Component({
  selector: 'issue-item',
  imports: [RouterLink, CommonModule],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css'
})
export class IssueItemComponent {
  public issue = input.required<GithubIssue>()

  get isOpen() {
    return this.issue().state === State.Open;
  }
}
