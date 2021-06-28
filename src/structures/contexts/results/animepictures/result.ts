import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawAnimePicturesData } from "../../../../api/schemas/results";
import { AnimePicturesDataContext } from "./data";

export type AnimePicturesResultContextName = 'animepictures'

export type AnimePicturesResultContextOptions = FactoryResultContextOptions<IRawAnimePicturesData>

export class AnimePicturesResultContext extends ResultContext<
    IRawAnimePicturesData,
    AnimePicturesResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: AnimePicturesResultContextOptions) {
        super({
            name: "animepictures",

            ...options
        });
    }

    public get data(): AnimePicturesDataContext {
        return new AnimePicturesDataContext({
            payload: this.payload.data
        });
    }
}