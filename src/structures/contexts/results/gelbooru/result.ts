import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawGelbooruData } from "../../../../api/schemas/results";
import { GelbooruDataContext } from "./data";

export type GelbooruResultContextName = 'gelbooru'

export type GelbooruResultContextOptions = FactoryResultContextOptions<IRawGelbooruData>

export class GelbooruResultContext extends ResultContext<
    IRawGelbooruData,
    GelbooruResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: GelbooruResultContextOptions) {
        super({
            name: "gelbooru",

            ...options
        });
    }

    public get data(): GelbooruDataContext {
        return new GelbooruDataContext({
            payload: this.payload.data
        });
    }
}