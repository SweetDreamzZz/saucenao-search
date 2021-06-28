import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawMedibangData } from "../../../../api/schemas/results";
import { MedibangDataContext } from "./data";

export type MedibangResultContextName = 'medibang'

export type MedibangResultContextOptions = FactoryResultContextOptions<IRawMedibangData>

export class MedibangResultContext extends ResultContext<
    IRawMedibangData,
    MedibangResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: MedibangResultContextOptions) {
        super({
            name: "medibang",

            ...options
        });
    }

    public get data(): MedibangDataContext {
        return new MedibangDataContext({
            payload: this.payload.data
        });
    }
}