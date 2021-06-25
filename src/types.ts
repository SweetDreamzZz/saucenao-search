import { ISearchOptions, SearchSourceValue } from "./search";

export type SourceValueType = 'stream' | 'buffer' | 'url' | 'file' | null;

export interface ISourceValue {
    type: SourceValueType;
    value: SearchSourceValue
}

interface ISauceOptions {
    apiKey: string;
}

export type SauceOptions = ISauceOptions & ISearchOptions;