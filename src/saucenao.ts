import { Search } from "./search";
import { SauceOptions } from "./types";
import { API } from "./api";

export class SauceNAO {
    public api: API;

    public search: Search;

    public constructor(options: Partial<SauceOptions> & { apiKey: string }) {
        this.api = new API(options);

        this.search = new Search({
            api: this.api,

            ...options
        });
    }

    /**
     * Returns custom tag
     */
    public get [Symbol.toStringTag](): string {
        return this.constructor.name;
    }
}