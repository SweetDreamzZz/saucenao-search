import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawTwitterData } from "../../../../api/schemas/results";
import { TwitterDataContext } from "./data";

export type TwitterResultContextName = 'twitter'

export type TwitterResultContextOptions = FactoryResultContextOptions<IRawTwitterData>

export class TwitterResultContext extends ResultContext<
    IRawTwitterData,
    TwitterResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: TwitterResultContextOptions) {
        super({
            name: "twitter",

            ...options
        });
    }

    public get data(): TwitterDataContext {
        return new TwitterDataContext({
            payload: this.payload.data
        });
    }
}