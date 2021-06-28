import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawFurAffinityData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type FurAffinityDataContextOptions = FactoryDataContextOptions<IRawFurAffinityData>

export class FurAffinityDataContext extends DataContext<
    IRawFurAffinityData
> {
    /**
     * Constructor
     */
    public constructor(options: FurAffinityDataContextOptions) {
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
     * Returns the fur affinity id
     */
    public get id(): number {
        return this.payload.fa_id;
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
