import { TestBed } from "@angular/core/testing";
import { IssuesService } from "./issues.service";
import { provideTanStackQuery, QueryClient } from "@tanstack/angular-query-experimental";
import { State } from "@interfaces/github-issue.interface";

describe('IssuesService', () => {

    let service: IssuesService;
    const queryClient = new QueryClient()

    beforeEach(() => {
        TestBed.configureTestingModule({
          teardown: { destroyAfterEach: false },
          providers: [
            provideTanStackQuery(queryClient)
          ]
        });
        service = TestBed.inject(IssuesService);
    });


    it('Should be created', () => {
        expect(service).toBeTruthy();
    });


    it('Should load 30 labels', async() => {
      const { data } = await service.labelsQuery.refetch();

      expect(data?.length).toBe(30);

      const [label] = data!;

      expect(typeof label.color).toBe('string')
      expect(typeof label.default).toBe('boolean')
      expect(typeof label.description).toBe('string')
      expect(typeof label.id).toBe('number')
      expect(typeof label.name).toBe('string')
      expect(typeof label.node_id).toBe('string')
      expect(typeof label.url).toBe('string')

    });


    it('Should set selected state', async() => {

      const state = State.Open;
      // checking set working
      service.selectedState.set(state);
      expect(service.selectedState()).toBe(state);
      //checking filtered data
      service.showIssuesByState(State.CLosed);
      expect(service.selectedState()).toBe(State.CLosed);
      // checking there are issues
      const { data } = await service.issuesQuery.refetch();
      expect(data?.length).toBeGreaterThan(0);
      // checking if each issue has the correct state
      data?.forEach(issue => expect(issue.state).toBe(State.CLosed));
    });


    it('Should set selected labels', async() => {

      const label = 'Accessibility';

      // check the label is selected
      service.toggleLabel(label);
      expect(service.selectedLabels().size).toBe(1);
      expect(service.selectedLabels().has(label)).toBe(true);

      // check that all elements has the label
      const { data } = await service.issuesQuery.refetch();
      expect(data?.length).toBeGreaterThan(0);      
      data?.forEach(issue => {
        const hasLabel = issue.labels.some(l => l.name === label);
        expect(hasLabel).toBeTrue()
      });

      // check that the label is deleted
      service.toggleLabel(label);
      expect(service.selectedLabels().size).toBe(0);
      expect(service.selectedLabels().has(label)).toBe(false);

    });

})