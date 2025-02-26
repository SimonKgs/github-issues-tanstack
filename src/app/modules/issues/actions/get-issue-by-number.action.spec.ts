import { environment } from "src/environments/environment.development"
import { getIssueByNumber } from "./get-issue-by-number.action";


const BASE_URL = environment.baseUrl;
const issueNumber = '123';

const mockIssue = {
    id: 123,
    number: issueNumber,
    body: '# Hola mundo'
}

describe('GetIssueByNumberAction', () => {

    it('Should fetch issue successfully', async () => {
        
        // preparation
        const requestURL = `${ BASE_URL }/issues/${ issueNumber }`;
        const issueResponse = new Response(JSON.stringify(mockIssue), {
            status: 200,
            statusText: 'OK'
        });

        spyOn(window, 'fetch').and.resolveTo(issueResponse);

        // test
        const issue = await getIssueByNumber(issueNumber)

        console.log(issue);
        
        expect( window.fetch ).toHaveBeenCalled()
    })

})