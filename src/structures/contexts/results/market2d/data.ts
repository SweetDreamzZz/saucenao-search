import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawMarket2DData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type Market2DDataContextOptions = FactoryDataContextOptions<IRawMarket2DData>

export class Market2DDataContext extends DataContext<
    IRawMarket2DData
> {
    /**
     * Constructor
     */
    public constructor(options: Market2DDataContextOptions) {
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
