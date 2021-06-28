import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawFurAffinityData } from "../../../../api/schemas/results";
import { FurAffinityDataContext } from "./data";

export type FurAffinityResultContextName = 'furaffinity'

export type FurAffinityResultContextOptions = FactoryResultContextOptions<IRawFurAffinityData>

export class FurAffinityResultContext extends ResultContext<
    IRawFurAffinityData,
    FurAffinityResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: FurAffinityResultContextOptions) {
        super({
            name: "furaffinity",

            ...options
        });
    }

    public get data(): FurAffinityDataContext {
        return new FurAffinityDataContext({
            payload: this.payload.data
        });
    }
}