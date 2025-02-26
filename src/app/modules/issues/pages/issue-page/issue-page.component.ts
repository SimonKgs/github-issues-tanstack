import { Component, computed, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { IssueService } from '@services/issue.service';
import { IssueCommentComponent } from "../../components/issue-comment/issue-comment.component";

@Component({
  selector: 'issue-page',
  imports: [IssueCommentComponent],
  templateUrl: './issue-page.component.html',
  styleUrl: './issue-page.component.css'
})
export default class IssuePageComponent implements OnInit{
  private route = inject(ActivatedRoute)
  private issueService = inject(IssueService)
  public issueNumber = computed(() => this.route.snapshot.paramMap.get('number'))
  public issueQuery = this.issueService.issueQuery
  public issueCommentsQuey = this.issueService.issueCommentsQuery
  // two alternatives
  // this will get the value from the url param, after add withComponentInputBinding on config file
  // public number = input.required<string>()
  // using toSignal with rxjs
  // issueNumber = toSignal(
  //   this.route.paramMap.pipe(map(params => params.get('number')))
  // )
  
  ngOnInit(): void {
    if (!this.issueNumber()) return
    this.issueService.setIssueNumber(this.issueNumber()!);
  }

  

}
