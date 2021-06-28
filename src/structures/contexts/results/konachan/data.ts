import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawKonachanData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type KonachanDataContextOptions = FactoryDataContextOptions<IRawKonachanData>

export class KonachanDataContext extends DataContext<
    IRawKonachanData
> {
    /**
     * Constructor
     */
    public constructor(options: KonachanDataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the konachan id
     */
    public get id(): number {
        return this.payload.konachan_id;
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
