import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawShowsData } from "../../../../api/schemas/results";
import { ShowsDataContext } from "./data";

export type ShowsResultContextName = 'shows'

export type ShowsResultContextOptions = FactoryResultContextOptions<IRawShowsData>

export class ShowsResultContext extends ResultContext<
    IRawShowsData,
    ShowsResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: ShowsResultContextOptions) {
        super({
            name: "shows",

            ...options
        });
    }

    public get data(): ShowsDataContext {
        return new ShowsDataContext({
            payload: this.payload.data
        });
    }
}