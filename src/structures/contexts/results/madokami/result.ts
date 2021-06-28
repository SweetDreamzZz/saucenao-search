import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawMadokamiData } from "../../../../api/schemas/results";
import { MadokamiDataContext } from "./data";

export type MadokamiResultContextName = 'madokami'

export type MadokamiResultContextOptions = FactoryResultContextOptions<IRawMadokamiData>

export class MadokamiResultContext extends ResultContext<
    IRawMadokamiData,
    MadokamiResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: MadokamiResultContextOptions) {
        super({
            name: "madokami",

            ...options
        });
    }

    public get data(): MadokamiDataContext {
        return new MadokamiDataContext({
            payload: this.payload.data
        });
    }
}