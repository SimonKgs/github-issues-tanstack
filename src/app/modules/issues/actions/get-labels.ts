import { sleep } from "@helpers/sleep";
import { GithubLabel } from "../interfaces";

export const getLabels = async(): Promise<GithubLabel[]> => {

    await sleep(2000);

    const url = "https://api.github.com/repos/angular/angular/labels"

    try {
        const resp = await fetch(url);

        if (!resp.ok) throw "Cant Load Labels";

        const labels: GithubLabel[] = await resp.json();
        console.log({labels});
        

        return labels;
        
    } catch (error) {
        throw "Cant Load Labels"
    }

}