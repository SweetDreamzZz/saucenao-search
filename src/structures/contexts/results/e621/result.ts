import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawE621Data } from "../../../../api/schemas/results";
import { E621DataContext } from "./data";

export type E621ResultContextName = 'e621'

export type E621ResultContextOptions = FactoryResultContextOptions<IRawE621Data>

export class E621ResultContext extends ResultContext<
    IRawE621Data,
    E621ResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: E621ResultContextOptions) {
        super({
            name: "e621",

            ...options
        });
    }

    public get data(): E621DataContext {
        return new E621DataContext({
            payload: this.payload.data
        });
    }
}