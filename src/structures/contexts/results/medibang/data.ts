import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawMedibangData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type MedibangDataContextOptions = FactoryDataContextOptions<IRawMedibangData>

export class MedibangDataContext extends DataContext<
    IRawMedibangData
> {
    /**
     * Constructor
     */
    public constructor(options: MedibangDataContextOptions) {
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
     * Returns the url
     */
    public get url(): string {
        return this.payload.url;
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
            'url',
            'memberName',
            'memberId'
        ]);
    }
}
