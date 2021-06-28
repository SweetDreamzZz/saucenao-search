import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawYandereData } from "../../../../api/schemas/results";
import { YandereDataContext } from "./data";

export type YandereResultContextName = 'yandere'

export type YandereResultContextOptions = FactoryResultContextOptions<IRawYandereData>

export class YandereResultContext extends ResultContext<
    IRawYandereData,
    YandereResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: YandereResultContextOptions) {
        super({
            name: "yandere",

            ...options
        });
    }

    public get data(): YandereDataContext {
        return new YandereDataContext({
            payload: this.payload.data
        });
    }
}