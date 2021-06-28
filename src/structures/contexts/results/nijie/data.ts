import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawNijieData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type NijieDataContextOptions = FactoryDataContextOptions<IRawNijieData>

export class NijieDataContext extends DataContext<
    IRawNijieData
> {
    /**
     * Constructor
     */
    public constructor(options: NijieDataContextOptions) {
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
     * Returns the nijie id
     */
    public get id(): number {
        return this.payload.nijie_id;
    }

    /**
     * Returns the member name
     */
    public get memberName(): string {
        return this.payload.member_name;
    }

    /**
     * Returns the member id
     */
    public get memberId(): number {
        return this.payload.member_id;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'title',
            'id',
            'memberName',
            'memberId'
        ]);
    }
}
