import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawArtStationData } from "../../../../api/schemas/results";
import { ArtStationDataContext } from "./data";

export type ArtStationResultContextName = 'artstation'

export type ArtStationResultContextOptions = FactoryResultContextOptions<IRawArtStationData>

export class ArtStationResultContext extends ResultContext<
    IRawArtStationData,
    ArtStationResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: ArtStationResultContextOptions) {
        super({
            name: "artstation",

            ...options
        });
    }

    public get data(): ArtStationDataContext {
        return new ArtStationDataContext({
            payload: this.payload.data
        });
    }
}