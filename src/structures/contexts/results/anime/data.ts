import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawAnimeData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type AnimeDataContextOptions = FactoryDataContextOptions<IRawAnimeData>

export class AnimeDataContext extends DataContext<
    IRawAnimeData
> {
    /**
     * Constructor
     */
    public constructor(options: AnimeDataContextOptions) {
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
     * Returns the anidb id
     */
    public get id(): number {
        return this.payload.anidb_aid;
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
