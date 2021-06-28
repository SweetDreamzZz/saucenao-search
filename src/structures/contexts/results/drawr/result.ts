import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawDrawrData } from "../../../../api/schemas/results";
import { DrawrDataContext } from "./data";

export type DrawrResultContextName = 'drawr'

export type DrawrResultContextOptions = FactoryResultContextOptions<IRawDrawrData>

export class DrawrResultContext extends ResultContext<
    IRawDrawrData,
    DrawrResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: DrawrResultContextOptions) {
        super({
            name: "drawr",

            ...options
        });
    }

    public get data(): DrawrDataContext {
        return new DrawrDataContext({
            payload: this.payload.data
        });
    }
}