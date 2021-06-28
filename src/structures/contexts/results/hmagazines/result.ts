import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawHMagazines } from "../../../../api/schemas/results";
import { HMagazinesDataContext } from "./data";

export type HMagazinesResultContextName = 'hmagazines'

export type HMagazinesResultContextOptions = FactoryResultContextOptions<IRawHMagazines>

export class HMagazinesResultContext extends ResultContext<
    IRawHMagazines,
    HMagazinesResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: HMagazinesResultContextOptions) {
        super({
            name: "hmagazines",

            ...options
        });
    }

    public get data(): HMagazinesDataContext {
        return new HMagazinesDataContext({
            payload: this.payload.data
        });
    }
}