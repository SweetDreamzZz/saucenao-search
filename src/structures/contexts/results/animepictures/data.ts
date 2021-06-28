import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawAnimePicturesData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type AnimePicturesDataContextOptions = FactoryDataContextOptions<IRawAnimePicturesData>

export class AnimePicturesDataContext extends DataContext<
    IRawAnimePicturesData
> {
    /**
     * Constructor
     */
    public constructor(options: AnimePicturesDataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the anime pictures id
     */
    public get id(): number {
        return this.payload["anime-pictures_id"];
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
     * Returns the characters
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
