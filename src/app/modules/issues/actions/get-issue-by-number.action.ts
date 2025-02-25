import { sleep } from "@helpers/sleep";
import { GithubIssue } from "@interfaces/github-issue.interface";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueByNumber = async(issueNumber: string): Promise<GithubIssue> => {

    await sleep(1500);


    try {
        const resp = await fetch(
            `${ BASE_URL }/issues/${ issueNumber }`,
            {
                headers: {
                    Authorization: `Bearer ${  GITHUB_TOKEN }`
                }
            }
        );

        if (!resp.ok) throw "Cant Load Issue";

        const issue: GithubIssue = await resp.json();        
        console.log({issue});
        
        return issue;
        
    } catch (error) {
        throw "Cant Load Issue"
    }

}