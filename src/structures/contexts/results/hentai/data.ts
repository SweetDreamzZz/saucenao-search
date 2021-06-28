import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawHentai } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type HentaiDataContextOptions = FactoryDataContextOptions<IRawHentai>

export class HentaiDataContext extends DataContext<
    IRawHentai
> {
    /**
     * Constructor
     */
    public constructor(options: HentaiDataContextOptions) {
        super(options);
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.source;
    }

    /**
     * Returns the creator
     */
    public get creator(): string[] {
        return this.payload.creator;
    }

    /**
     * Returns the english name
     */
    public get engName(): string {
        return this.payload.eng_name;
    }

    /**
     * Returns the japanese name
     */
    public get jpName(): string {
        return this.payload.jp_name;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'title',
            'creator',
            'engName',
            'jpName'
        ]);
    }
}
