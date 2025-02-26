import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { GithubLabel } from '@interfaces/github-label.interface';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css'
})
export class LabelsSelectorComponent {

  private issuesService = inject(IssuesService)
  public labels = input.required<GithubLabel[]>();

  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }
}
