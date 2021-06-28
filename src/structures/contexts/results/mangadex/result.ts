import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawMangaDexData } from "../../../../api/schemas/results";
import { MangaDexDataContext } from "./data";

export type MangaDexResultContextName = 'mangadex'

export type MangaDexResultContextOptions = FactoryResultContextOptions<IRawMangaDexData>

export class MangaDexResultContext extends ResultContext<
    IRawMangaDexData,
    MangaDexResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: MangaDexResultContextOptions) {
        super({
            name: "mangadex",

            ...options
        });
    }

    public get data(): MangaDexDataContext {
        return new MangaDexDataContext({
            payload: this.payload.data
        });
    }
}