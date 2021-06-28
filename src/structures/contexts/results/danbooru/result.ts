import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawDanbooruData } from "../../../../api/schemas/results";
import { DanbooruDataContext } from "./data";

export type DanbooruResultContextName = 'danbooru'

export type DanbooruResultContextOptions = FactoryResultContextOptions<IRawDanbooruData>

export class DanbooruResultContext extends ResultContext<
    IRawDanbooruData,
    DanbooruResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: DanbooruResultContextOptions) {
        super({
            name: "danbooru",

            ...options
        });
    }

    public get data(): DanbooruDataContext {
        return new DanbooruDataContext({
            payload: this.payload.data
        });
    }
}