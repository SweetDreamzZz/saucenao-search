import { API } from "../api/";

import {
    SearchBackgroundColor,
    SearchDedupe,
    SearchHideExplicit,
    SearchIndexes,
    SearchOutputType,

    isURL
} from "../utils";

import { IAPISearchParams } from "../api/types";
import { Constructor } from "../types";

import { ResponseContext } from "../structures/contexts/response";

import {
    ResultContext,

    PixivResultContext,
    SeigaResultContext,
    DanbooruResultContext,
    DrawrResultContext,
    NijieResultContext,
    YandereResultContext,
    FakkuResultContext,
    HentaiResultContext,
    Market2DResultContext,
    MedibangResultContext,
    AnimeResultContext,
    MoviesResultContext,
    ShowsResultContext,
    GelbooruResultContext,
    KonachanResultContext,
    SankakuResultContext,
    AnimePicturesResultContext,
    E621ResultContext,
    IdolComplexResultContext,
    BcyResultContext,
    PortalGraphicsResultContext,
    DeviantArtResultContext,
    PawooResultContext,
    MadokamiResultContext,
    MangaDexResultContext,
    ArtStationResultContext,
    FurAffinityResultContext,
    TwitterResultContext,
    FurryNetworkResultContext
} from "../structures/contexts/results";
import { HeaderContext } from "../structures/contexts/header";
import { ValidateError } from "../errors/validate";

const contexts: [number[], Constructor<ResultContext>][] = [
    [
        [5, 6],
        PixivResultContext,
    ],
    [
        [8],
        SeigaResultContext
    ],
    [
        [9],
        DanbooruResultContext
    ],
    [
        [10],
        DrawrResultContext
    ],
    [
        [11],
        NijieResultContext
    ],
    [
        [12],
        YandereResultContext
    ],
    [
        [16],
        FakkuResultContext
    ],
    [
        [18, 38],
        HentaiResultContext
    ],
    [
        [19],
        Market2DResultContext
    ],
    [
        [20],
        MedibangResultContext
    ],
    [
        [21, 22],
        AnimeResultContext
    ],
    [
        [23],
        MoviesResultContext
    ],
    [
        [24],
        ShowsResultContext
    ],
    [
        [25],
        GelbooruResultContext
    ],
    [
        [26],
        KonachanResultContext
    ],
    [
        [27],
        SankakuResultContext
    ],
    [
        [28],
        AnimePicturesResultContext
    ],
    [
        [29],
        E621ResultContext
    ],
    [
        [30],
        IdolComplexResultContext
    ],
    [
        [30, 31],
        BcyResultContext
    ],
    [
        [33],
        PortalGraphicsResultContext
    ],
    [
        [34],
        DeviantArtResultContext
    ],
    [
        [35],
        PawooResultContext
    ],
    [
        [36],
        MadokamiResultContext
    ],
    [
        [37],
        MangaDexResultContext
    ],
    [
        [39],
        ArtStationResultContext
    ],
    [
        [40],
        FurAffinityResultContext
    ],
    [
        [41],
        TwitterResultContext
    ],
    [
        [42],
        FurryNetworkResultContext
    ]
];

const makeContexts = (
    groups: [number[], Constructor<ResultContext>][]
): Record<number, Constructor<ResultContext>> => {
    const contexts: Record<number, Constructor<ResultContext>> = {};

    for (const [index_ids, Context] of groups) {
        for (const index_id of index_ids) {
            contexts[index_id] = Context;
        }
    }

    return contexts;
};

const resultsContexts = makeContexts(contexts);

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
    resultsCount?: number;

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
    minSimilarity?: number | string;

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
    minBias?: number;

    /**
     * GIF/Video frame
     */
    frame?: number;

    /**
     * Background color
     */
    bgColor?: SearchBackgroundColor

    /**
     * Hides explicit content (html only)
     */
    hideExplicit?: SearchHideExplicit

    /**
     * Removes duplicate results
     *
     * @default 2
     */
    dedupe?: SearchDedupe;

    /**
     * Crop image params
     */
    crop?: {
        /**
         * X coordinate of the first point
         */
        x1: number;

        /**
         * Y coordinate of the first point
         */
        y1: number;

        /**
         * Y coordinate of the first point
         */
        x2: number;

        /**
         * Y coordinate of the second point
         */
        y2: number;
    }
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
    public async it(params: Partial<IAPISearchParams> & { url: string }): Promise<ResponseContext> {
        if (!isURL(params.url)) {
            throw new ValidateError({
                message: "`url` param isn't URL"
            });
        }

        const rawSearchResponse = await this.api.search({
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
            dbmask: this.options.database.includeMask,
            dbmaski: this.options.database.excludeMask,
            crop: Object.values(this.options.crop || {}).join("|"),

            ...params
        });

        return new ResponseContext({
            payload: {
                header: new HeaderContext({
                    payload: rawSearchResponse.header
                }),
                results: rawSearchResponse.results.map(result => {
                    const Context = resultsContexts[result.header.index_id];

                    return new Context({
                        payload: result
                    });
                })
            }
        })
    }
}