import { IRawHeader } from "../../api/schemas/response";
import { Context, FactoryContextOptions } from "./context";
import { kSerializeData, pickProperties } from "../../utils";

export type HeaderContextOptions = FactoryContextOptions<IRawHeader>

export class HeaderContext extends Context<
    IRawHeader
> {

    /**
     * Constructor
     */
    public constructor(options: HeaderContextOptions) {
        super(options);
    }

    /**
     * Returns the user id
     */
    public get userId(): number {
        return Number(this.payload.user_id);
    }

    /**
     * Returns the account type
     */
    public get accountType(): string {
        return this.payload.account_type;
    }

    /**
     * Returns the short limit count
     */
    public get shortLimit(): number {
        return Number(this.payload.short_limit);
    }

    /**
     * Returns the long limit count
     */
    public get longLimit(): number {
        return Number(this.payload.long_limit);
    }

    /**
     * Returns the status
     */
    public get status(): number {
        return this.payload.status;
    }

    /**
     * Returns the results requested count
     */
    public get resultsRequested(): number {
        return this.payload.results_requested;
    }

    /**
     * Returns the indexes
     */
    public get index(): IRawHeader['index'] {
        return this.payload.index;
    }

    /**
     * Returns the search depth
     */
    public get searchDepth(): number {
        return Number(this.payload.search_depth);
    }

    /**
     * Returns the minimum similarity
     */
    public get minimumSimilarity(): number {
        return this.payload.minimum_similarity;
    }

    /**
     * Returns the query image display
     */
    public get queryImageDisplay(): string {
        return this.payload.query_image_display;
    }

    /**
     * Returns the query image
     */
    public get queryImage(): string {
        return this.payload.query_image;
    }

    /**
     * Returns the results returned
     */
    public get resultsReturned(): number {
        return this.payload.results_returned;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'userId',
            'accountType',
            'shortLimit',
            'longLimit',
            'status',
            'resultsRequested',
            'index',
            'searchDepth',
            'minimumSimilarity',
            'queryImageDisplay',
            'queryImage',
            'resultsReturned'
        ]);
    }
}