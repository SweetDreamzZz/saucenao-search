import { Search } from "./search";
import { SauceOptions } from "./types";

export class SauceNAO {
    public search: Search;

    public constructor(options: SauceOptions) {
        this.search = new Search(options);
    }
}