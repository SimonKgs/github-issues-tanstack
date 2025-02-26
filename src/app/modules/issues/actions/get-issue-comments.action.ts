import { sleep } from "@helpers/sleep";
import { GithubIssue } from "@interfaces/github-issue.interface";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueComments = async(issueNumber: string): Promise<GithubIssue[]> => {

    await sleep(1500);


    try {
        const resp = await fetch(
            `${ BASE_URL }/issues/${ issueNumber }/comments`,
            {
                headers: {
                    Authorization: `Bearer ${  GITHUB_TOKEN }`
                }
            }
        );

        if (!resp.ok) throw "Cant Load Comments";

        const comments: GithubIssue[] = await resp.json();        
        console.log({issue: comments});
        
        return comments;
        
    } catch (error) {
        throw "Cant Load Comments"
    }

}