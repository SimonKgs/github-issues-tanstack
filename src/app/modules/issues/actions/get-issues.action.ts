import { sleep } from "@helpers/sleep";
import { GithubIssue, State } from "@interfaces/github-issue.interface";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssues = async(
    state: State = State.All, 
    selectedLabels: string[]
): Promise<GithubIssue[]> => {

    const params = new URLSearchParams();
    params.append('state', state);

    if (selectedLabels.length > 0) {
        params.append('labels', selectedLabels.join(','));
    }


    try {
        const resp = await fetch(
            `${ BASE_URL }/issues?${ params }`,
            {
                headers: {
                    Authorization: `Bearer ${  GITHUB_TOKEN }`
                }
            }
        );

        if (!resp.ok) throw "Cant Load Issues";

        const issues: GithubIssue[] = await resp.json();
        return issues;
        
    } catch (error) {
        throw "Cant Load Issues"
    }

}