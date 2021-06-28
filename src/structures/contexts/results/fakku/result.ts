import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawFakkuData } from "../../../../api/schemas/results";
import { FakkuDataContext } from "./data";

export type FakkuResultContextName = 'fakku'

export type FakkuResultContextOptions = FactoryResultContextOptions<IRawFakkuData>

export class FakkuResultContext extends ResultContext<
    IRawFakkuData,
    FakkuResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: FakkuResultContextOptions) {
        super({
            name: "fakku",

            ...options
        });
    }

    public get data(): FakkuDataContext {
        return new FakkuDataContext({
            payload: this.payload.data
        });
    }
}