import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawIdolComplexData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type IdolComplexDataContextOptions = FactoryDataContextOptions<IRawIdolComplexData>

export class IdolComplexDataContext extends DataContext<
    IRawIdolComplexData
> {
    /**
     * Constructor
     */
    public constructor(options: IdolComplexDataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the idol complex id
     */
    public get id(): number {
        return this.payload.idol_id;
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
