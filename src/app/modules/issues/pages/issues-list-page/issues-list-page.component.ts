import { Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from "../../components/labels-selector/labels-selector.component";
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";

@Component({
  selector: 'issues-list-page',
  imports: [CommonModule, LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
  styleUrl: './issues-list-page.component.css'
})
export default class IssuesListPageComponent {

  private issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }
}
