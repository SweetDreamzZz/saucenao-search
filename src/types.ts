import { ISearchOptions } from "./search";

interface ISauceOptions {
    apiKey: string;
}

export type SauceOptions = ISauceOptions & ISearchOptions;