import { API } from "../api/";

import { SearchSourceValue } from "./types";
import {
    SearchBackgroundColor,
    SearchDedupe,
    SearchHideExplicit,
    SearchIndexes,
    SearchOutputType
} from "../utils/constants";

import * as helpers from '../utils/helpers';

export interface ISearchOptions {
    /**
     * SauceNAO API key
     */
    apiKey: string;

    /**
     * SauceNAO response type
     *
     * @default 2
     */
    outputType: SearchOutputType;

    /**
     * Causes each index which has a match to output at most 1 for testing
     *
     * @default false
     */
    testmode?: boolean;

    /**
     * Selecting specific indexes for search
     */
    database: {
        /**
         * A specific index number or all
         *
         * @default 999
         */
        index: SearchIndexes

        /**
         * Include specific indexes from mask
         */
        includeMask?: string | number;

        /**
         * Exclude specific indexes from mask
         *
         * @default false
         */
        excludeMask?: string | number;
    }

    /**
     * Number of results requested
     */
    resultsCount: number;

    /**
     *  Search depth, deeper searches are slower but can pull out additional matches
     *
     * @default 128
     */
    depth: number;

    /**
     * Minimal similarity to display. Adaptively reduced unless forced with ! i.e. "55!"
     *
     * @default 52
     */
    minSimilarity: number | string;

    /**
     * Maximum similarity yield modifier
     *
     * @default 20
     */
    bias: number;

    /**
     * Minimal similarity to active priority yield mode
     *
     * @default 62
     */
    minBias: number;

    /**
     * GIF/Video frame
     */
    frame: number;

    /**
     * Background color
     */
    bgColor: SearchBackgroundColor

    /**
     * Hides explicit content (html only)
     */
    hideExplicit: SearchHideExplicit

    /**
     * Removes duplicate results
     *
     * @default 2
     */
    dedupe: SearchDedupe;
}

export class Search {
    private api: API;

    private options: Omit<ISearchOptions, 'api'>;

    /**
     * Constructor
     */
    public constructor(options: Partial<ISearchOptions> & { apiKey: string; api: API }) {
        this.api = options.api;

        this.options = {
            outputType: SearchOutputType.JSON,
            resultsCount: 8,
            dedupe: SearchDedupe.All,
            minSimilarity: 52,
            depth: 128,
            bias: 20,
            minBias: 62,
            frame: 1,
            bgColor: SearchBackgroundColor.None,
            hideExplicit: SearchHideExplicit.None,
            database: {
                index: SearchIndexes.All,
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
    public async it(source: SearchSourceValue): Promise<void> {
        const sourceValue = helpers.checkSourceValue(source);

        const rawSearch = await this.api.search(sourceValue, {
            output_type: this.options.outputType,
            api_key: this.options.apiKey,
            numres: this.options.resultsCount,
            depth: this.options.depth,
            minsim: this.options.minSimilarity,
            bias: this.options.bias,
            biasmin: this.options.minBias,
            frame: this.options.frame,
            bgcolor: this.options.bgColor,
            hide: this.options.hideExplicit,
            dedupe: this.options.dedupe,
            db: this.options.database.index,
            dbmask: this.options.database?.includeMask,
            dbmaski: this.options.database?.excludeMask
        });
    }
}