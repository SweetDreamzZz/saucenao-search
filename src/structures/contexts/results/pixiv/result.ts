import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawPixivData } from "../../../../api/schemas/results";
import { PixivDataContext } from "./data";

export type PixivResultContextName = 'pixiv'

export type PixivResultContextOptions = FactoryResultContextOptions<IRawPixivData>

export class PixivResultContext extends ResultContext<
    IRawPixivData,
    PixivResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: PixivResultContextOptions) {
        super({
            name: "pixiv",

            ...options
        });
    }

    public get data(): PixivDataContext {
        return new PixivDataContext({
            payload: this.payload.data
        });
    }
}