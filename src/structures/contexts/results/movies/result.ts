import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawMoviesData } from "../../../../api/schemas/results";
import { MoviesDataContext } from "./data";

export type MoviesResultContextName = 'movies'

export type MoviesResultContextOptions = FactoryResultContextOptions<IRawMoviesData>

export class MoviesResultContext extends ResultContext<
    IRawMoviesData,
    MoviesResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: MoviesResultContextOptions) {
        super({
            name: "movies",

            ...options
        });
    }

    public get data(): MoviesDataContext {
        return new MoviesDataContext({
            payload: this.payload.data
        });
    }
}