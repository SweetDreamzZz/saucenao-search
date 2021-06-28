export interface IAPISearchParams {
    /**
     * SauceNAO API key
     */
    api_key: string;

    /**
     * SauceNAO response type
     *
     * @default 2
     */
    output_type: number;

    /**
     * Causes each index which has a match to output at most 1 for testing
     *
     * @default false
     */
    testmode?: boolean;

    /**
     * A specific index number or all
     *
     * @default 999
     */
    db?: number;

    /**
     * Include specific indexes from mask
     */
    dbmask?: string | number;

    /**
     * Exclude specific indexes from mask
     *
     * @default false
     */
    dbmaski?: string | number;

    /**
     * Number of results requested
     */
    numres?: number;

    /**
     *  Search depth, deeper searches are slower but can pull out additional matches
     *
     * @default 128
     */
    depth?: number;

    /**
     * Minimal similarity to display. Adaptively reduced unless forced with ! i.e. "55!"
     *
     * @default 52
     */
    minsim?: number | string;

    /**
     * Maximum similarity yield modifier
     *
     * @default 20
     */
    bias?: number;

    /**
     * Minimal similarity to active priority yield mode
     *
     * @default 62
     */
    biasmin?: number;

    /**
     * GIF/Video frame
     */
    frame?: number;

    /**
     * Background color
     */
    bgcolor?: string;

    /**
     * Hides explicit content (html only)
     */
    hide?: number;

    /**
     * Removes duplicate results
     *
     * @default 2
     */
    dedupe?: number;

    /**
     * Absolute URL
     */
    url: string;

    /**
     * Crop image params
     */
    crop?: string;
}