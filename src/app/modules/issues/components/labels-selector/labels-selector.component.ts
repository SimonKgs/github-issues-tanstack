import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GithubLabel } from '@interfaces/github-label.interface';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css'
})
export class LabelsSelectorComponent {

  public labels = input.required<GithubLabel[]>();

}
