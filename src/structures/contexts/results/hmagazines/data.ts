import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawHMagazines } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type HMagazinesDataContextOptions = FactoryDataContextOptions<IRawHMagazines>

export class HMagazinesDataContext extends DataContext<
    IRawHMagazines
> {
    /**
     * Constructor
     */
    public constructor(options: HMagazinesDataContextOptions) {
        super(options);
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.title;
    }

    /**
     * Returns the part
     */
    public get part(): string {
        return this.payload.part;
    }

    /**
     * Returns the date
     */
    public get date(): string {
        return this.payload.date
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'title',
            'part',
            'date'
        ]);
    }
}
