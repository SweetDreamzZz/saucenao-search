import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawSankakuData } from "../../../../api/schemas/results";
import { SankakuDataContext } from "./data";

export type SankakuResultContextName = 'sankaku'

export type SankakuResultContextOptions = FactoryResultContextOptions<IRawSankakuData>

export class SankakuResultContext extends ResultContext<
    IRawSankakuData,
    SankakuResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: SankakuResultContextOptions) {
        super({
            name: "sankaku",

            ...options
        });
    }

    public get data(): SankakuDataContext {
        return new SankakuDataContext({
            payload: this.payload.data
        });
    }
}