import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawMadokamiData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type MadokamiDataContextOptions = FactoryDataContextOptions<IRawMadokamiData>

export class MadokamiDataContext extends DataContext<
    IRawMadokamiData
> {
    /**
     * Constructor
     */
    public constructor(options: MadokamiDataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the manga updates id
     */
    public get mangaUpdatesId(): number {
        return this.payload.mu_id;
    }

    /**
     * Returns the title
     */
    public title(): string {
        return this.payload.source;
    }

    /**
     * Returns the part
     */
    public get part(): string {
        return this.payload.part;
    }

    /**
     * Returns the type
     */
    public get type(): string {
        return this.payload.type;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'mangaUpdatesId',
            'title',
            'part',
            'type'
        ]);
    }
}
