import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawArtStationData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type ArtStationDataContextOptions = FactoryDataContextOptions<IRawArtStationData>

export class ArtStationDataContext extends DataContext<
    IRawArtStationData
> {
    /**
     * Constructor
     */
    public constructor(options: ArtStationDataContextOptions) {
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
        return this.payload.title;
    }

    /**
     * Returns the art station project
     */
    public get project(): string {
        return this.payload.as_project;
    }

    /**
     * Returns the name of author
     */
    public get authorName(): string {
        return this.payload.author_name;
    }

    /**
     * Returns the author url
     */
    public get authorUrl(): string {
        return this.payload.author_url;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'title',
            'project',
            'authorName',
            'authorUrl'
        ]);
    }
}
