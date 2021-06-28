import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawFurryNetworkData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type FurryNetworkDataContextOptions = FactoryDataContextOptions<IRawFurryNetworkData>

export class FurryNetworkDataContext extends DataContext<
    IRawFurryNetworkData
> {
    /**
     * Constructor
     */
    public constructor(options: FurryNetworkDataContextOptions) {
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
     * Returns the furry network id
     */
    public get id(): number {
        return this.payload.fn_id;
    }

    /**
     * Return the furry network type
     */
    public get type(): string {
        return this.payload.fn_type;
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
            'type',
            'authorName',
            'authorUrl'
        ]);
    }
}
