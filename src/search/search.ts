import { ISearchOptions, SearchSourceValue } from "./types";
import { SearchAllIndexes, SearchDedupe, SearchOutputType } from "../utils/constants";

export class Search {
    private options: ISearchOptions;

    /**
     * Constructor
     */
    public constructor(options: ISearchOptions) {
        this.options = {
            apiKey: options.apiKey,
            outputType: SearchOutputType.JSON,
            resultsCount: 16,
            dedupe: SearchDedupe.All,
            mask: {
                index: SearchAllIndexes
            },

            ...options
        };
    }

    /**
     * Returns custom tag
     */
    public get [Symbol.toStringTag](): string {
        return this.constructor.name;
    }

    /**
     * Returns the search result
     */
    public it(source: SearchSourceValue) {

    }
}