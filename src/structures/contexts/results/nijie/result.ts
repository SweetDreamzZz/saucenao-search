import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawNijieData } from "../../../../api/schemas/results";
import { NijieDataContext } from "./data";

export type NijieResultContextName = 'nijie'

export type NijieResultContextOptions = FactoryResultContextOptions<IRawNijieData>

export class NijieResultContext extends ResultContext<
    IRawNijieData,
    NijieResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: NijieResultContextOptions) {
        super({
            name: "nijie",

            ...options
        });
    }

    public get data(): NijieDataContext {
        return new NijieDataContext({
            payload: this.payload.data
        });
    }
}