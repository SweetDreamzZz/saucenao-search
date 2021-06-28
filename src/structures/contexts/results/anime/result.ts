import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawAnimeData } from "../../../../api/schemas/results";
import { AnimeDataContext } from "./data";

export type AnimeResultContextName = 'anime'

export type AnimeResultContextOptions = FactoryResultContextOptions<IRawAnimeData>

export class AnimeResultContext extends ResultContext<
    IRawAnimeData,
    AnimeResultContextName
> implements IResultContext {

    /**
     * Constructor
     */
    public constructor(options: AnimeResultContextOptions) {
        super({
            name: "anime",

            ...options
        });
    }

    public get data(): AnimeDataContext {
        return new AnimeDataContext({
            payload: this.payload.data
        });
    }
}