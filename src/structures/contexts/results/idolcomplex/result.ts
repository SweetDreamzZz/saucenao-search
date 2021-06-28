import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawIdolComplexData } from "../../../../api/schemas/results";
import { IdolComplexDataContext } from "./data";

export type IdolComplexResultContextName = 'idolcomplex'

export type IdolComplexResultContextOptions = FactoryResultContextOptions<IRawIdolComplexData>

export class IdolComplexResultContext extends ResultContext<
    IRawIdolComplexData,
    IdolComplexResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: IdolComplexResultContextOptions) {
        super({
            name: "idolcomplex",

            ...options
        });
    }

    public get data(): IdolComplexDataContext {
        return new IdolComplexDataContext({
            payload: this.payload.data
        });
    }
}