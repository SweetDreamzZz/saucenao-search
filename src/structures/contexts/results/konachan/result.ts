import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawKonachanData } from "../../../../api/schemas/results";
import { KonachanDataContext } from "./data";

export type KonachanResultContextName = 'konachan'

export type KonachanResultContextOptions = FactoryResultContextOptions<IRawKonachanData>

export class KonachanResultContext extends ResultContext<
    IRawKonachanData,
    KonachanResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: KonachanResultContextOptions) {
        super({
            name: "konachan",

            ...options
        });
    }

    public get data(): KonachanDataContext {
        return new KonachanDataContext({
            payload: this.payload.data
        });
    }
}