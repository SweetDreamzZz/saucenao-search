import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawPawooData } from "../../../../api/schemas/results";
import { PawooDataContext } from "./data";

export type PawooResultContextName = 'pawoo'

export type PawooResultContextOptions = FactoryResultContextOptions<IRawPawooData>

export class PawooResultContext extends ResultContext<
    IRawPawooData,
    PawooResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: PawooResultContextOptions) {
        super({
            name: "pawoo",

            ...options
        });
    }

    public get data(): PawooDataContext {
        return new PawooDataContext({
            payload: this.payload.data
        });
    }
}