import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawHentai } from "../../../../api/schemas/results";
import { HentaiDataContext } from "./data";

export type HentaiResultContextName = 'hentai'

export type HentaiResultContextOptions = FactoryResultContextOptions<IRawHentai>

export class HentaiResultContext extends ResultContext<
    IRawHentai,
    HentaiResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: HentaiResultContextOptions) {
        super({
            name: "hentai",

            ...options
        });
    }

    public get data(): HentaiDataContext {
        return new HentaiDataContext({
            payload: this.payload.data
        });
    }
}