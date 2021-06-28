import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawDeviantArtData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type DeviantArtDataContextOptions = FactoryDataContextOptions<IRawDeviantArtData>

export class DeviantArtDataContext extends DataContext<
    IRawDeviantArtData
> {
    /**
     * Constructor
     */
    public constructor(options: DeviantArtDataContextOptions) {
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
     * Returns the deviant art id
     */
    public get id(): number {
        return this.payload.da_id;
    }

    /**
     * Returns the author name
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
            'id',
            'authorName',
            'authorUrl'
        ]);
    }
}
