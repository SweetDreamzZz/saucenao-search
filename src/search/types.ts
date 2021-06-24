import { SearchDedupe, SearchOutputType } from "../utils/constants";

/**
 * Buffer or URL
 */
export type SearchSourceValue = Buffer | string;

export interface ISearchOptions {
    /**
     * SauceNAO response type
     *
     * @default 2
     */
    outputType?: SearchOutputType;

    /**
     * SauceNAO API key
     */
    apiKey?: string;

    /**
     * Causes each index which has a match to output at most 1 for testing
     *
     * @default false
     */
    testmode?: boolean;

    /**
     * Mask for selecting specific indexes to ENABLE
     */
    mask?: {
        /**
         * a specific index number or all
         *
         * @default 999
         */
        index?: string | number;

        /**
         * Mask for selecting specific indexes
         */
        mask?: string | number;

        /**
         * Include/Exclude specific indexes from mask
         *
         * @default false
         */
        isExcluding?: boolean;
    }

    /**
     * Number of results requested
     */
    resultsCount?: number;

    /**
     * Removes duplicate results
     *
     * @default 2
     */
    dedupe?: SearchDedupe;
}