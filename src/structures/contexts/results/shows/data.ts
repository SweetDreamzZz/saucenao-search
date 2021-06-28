import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawShowsData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type ShowsDataContextOptions = FactoryDataContextOptions<IRawShowsData>

export class ShowsDataContext extends DataContext<
    IRawShowsData
> {
    /**
     * Constructor
     */
    public constructor(options: ShowsDataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.source;
    }

    /**
     * Returns the imdb id
     */
    public get id(): string {
        return this.payload.imdb_id;
    }

    /**
     * Returns the part
     */
    public get part(): string {
        return this.payload.part;
    }

    /**
     * Returns the year
     */
    public get year(): string {
        return this.payload.year;
    }

    /**
     * Returns the estimated time
     */
    public get estimatedTime(): string {
        return this.payload.est_time;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'title',
            'id',
            'part',
            'year',
            'estimatedTime'
        ]);
    }
}
