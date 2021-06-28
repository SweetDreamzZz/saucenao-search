import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawDrawrData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type DrawrDataContextOptions = FactoryDataContextOptions<IRawDrawrData>

export class DrawrDataContext extends DataContext<
    IRawDrawrData
> {
    /**
     * Constructor
     */
    public constructor(options: DrawrDataContextOptions) {
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
     * Returns the drawr id
     */
    public get id(): number {
        return this.payload.drawr_id;
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
            'memberId',
        ]);
    }
}
