import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawMarket2DData } from "../../../../api/schemas/results";
import { Market2DDataContext } from "./data";

export type Market2DResultContextName = 'market2d'

export type Market2DResultContextOptions = FactoryResultContextOptions<IRawMarket2DData>

export class Market2DResultContext extends ResultContext<
    IRawMarket2DData,
    Market2DResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: Market2DResultContextOptions) {
        super({
            name: "market2d",

            ...options
        });
    }

    public get data(): Market2DDataContext {
        return new Market2DDataContext({
            payload: this.payload.data
        });
    }
}