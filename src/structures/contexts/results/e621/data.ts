import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawE621Data } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type E621DataContextOptions = FactoryDataContextOptions<IRawE621Data>

export class E621DataContext extends DataContext<
    IRawE621Data
> {
    /**
     * Constructor
     */
    public constructor(options: E621DataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the e621 id
     */
    public get id(): number {
        return this.payload.e621_id;
    }

    /**
     * Returns the creator
     */
    public get creator(): string {
        return this.payload.creator;
    }

    /**
     * Returns the material
     */
    public get material(): string {
        return this.payload.material;
    }

    /**
     * Returns characters
     */
    public get characters(): string {
        return this.payload.characters;
    }

    /**
     * Returns the source
     */
    public get source(): string {
        return this.payload.source;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'id',
            'creator',
            'material',
            'characters',
            'source'
        ]);
    }
}
