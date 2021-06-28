import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawFakkuData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type FakkuDataContextOptions = FactoryDataContextOptions<IRawFakkuData>

export class FakkuDataContext extends DataContext<
    IRawFakkuData
> {
    /**
     * Constructor
     */
    public constructor(options: FakkuDataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the creator
     */
    public get creator(): string {
        return this.payload.creator;
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.source;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'creator',
            'title'
        ]);
    }
}
