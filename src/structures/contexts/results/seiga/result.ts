import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawSeigaData } from "../../../../api/schemas/results";
import { SeigaDataContext } from "./data";

export type SeigaResultContextName = 'seiga'

export type SeigaResultContextOptions = FactoryResultContextOptions<IRawSeigaData>

export class SeigaResultContext extends ResultContext<
    IRawSeigaData,
    SeigaResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: SeigaResultContextOptions) {
        super({
            name: "seiga",

            ...options
        });
    }

    public get data(): SeigaDataContext {
        return new SeigaDataContext({
            payload: this.payload.data
        });
    }
}