import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawFurryNetworkData } from "../../../../api/schemas/results";
import { FurryNetworkDataContext } from "./data";

export type FurryNetworkResultContextName = 'furrynetwork'

export type FurryNetworkResultContextOptions = FactoryResultContextOptions<IRawFurryNetworkData>

export class FurryNetworkResultContext extends ResultContext<
    IRawFurryNetworkData,
    FurryNetworkResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: FurryNetworkResultContextOptions) {
        super({
            name: "furrynetwork",

            ...options
        });
    }

    public get data(): FurryNetworkDataContext {
        return new FurryNetworkDataContext({
            payload: this.payload.data
        });
    }
}