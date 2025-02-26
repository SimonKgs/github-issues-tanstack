import { Component, computed, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from "../../components/labels-selector/labels-selector.component";
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";
import { State } from '@interfaces/github-issue.interface';

@Component({
  selector: 'issues-list-page',
  imports: [CommonModule, LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
  styleUrl: './issues-list-page.component.css'
})
export default class IssuesListPageComponent {

  private issuesService = inject(IssuesService);
  public currentState = computed(() => this.issuesService.selectedState());

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeState(newState: string) {
    const state = {
      'all': State.All,
      'open': State.Open,
      'closed': State.CLosed,
    }[newState] ?? State.All;

    this.issuesService.showIssuesByState(state);
  }
}
