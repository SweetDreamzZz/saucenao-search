import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawBcyData } from "../../../../api/schemas/results";
import { BcyDataContext } from "./data";

export type BcyResultContextName = 'bcy'

export type BcyResultContextOptions = FactoryResultContextOptions<IRawBcyData>

export class BcyResultContext extends ResultContext<
    IRawBcyData,
    BcyResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: BcyResultContextOptions) {
        super({
            name: "bcy",

            ...options
        });
    }

    public get data(): BcyDataContext {
        return new BcyDataContext({
            payload: this.payload.data
        });
    }
}