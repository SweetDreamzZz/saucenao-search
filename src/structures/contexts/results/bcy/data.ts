import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawBcyData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type BcyDataContextOptions = FactoryDataContextOptions<IRawBcyData>

export class BcyDataContext extends DataContext<
    IRawBcyData
> {
    /**
     * Constructor
     */
    public constructor(options: BcyDataContextOptions) {
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
     * Returns the bcy id
     */
    public get id(): number {
        return this.payload.bcy_id;
    }

    /**
     * Return the bcy type
     */
    public get type(): string {
        return this.payload.bcy_type;
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
     * Returns the member link id
     */
    public get memberLinkId(): number {
        return this.payload.member_link_id;
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
            'memberName',
            'memberId',
            'memberLinkId'
        ]);
    }
}
