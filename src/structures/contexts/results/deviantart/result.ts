import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawDeviantArtData } from "../../../../api/schemas/results";
import { DeviantArtDataContext } from "./data";

export type DeviantArtResultContextName = 'deviantart'

export type DeviantArtResultContextOptions = FactoryResultContextOptions<IRawDeviantArtData>

export class DeviantArtResultContext extends ResultContext<
    IRawDeviantArtData,
    DeviantArtResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: DeviantArtResultContextOptions) {
        super({
            name: "deviantart",

            ...options
        });
    }

    public get data(): DeviantArtDataContext {
        return new DeviantArtDataContext({
            payload: this.payload.data
        });
    }
}