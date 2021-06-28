import { ISearchOptions } from "./search";

export type Constructor<T = {}> = new (...args: any[]) => T;

interface ISauceOptions {
    apiKey: string;
}

export type SauceOptions = ISauceOptions & ISearchOptions;