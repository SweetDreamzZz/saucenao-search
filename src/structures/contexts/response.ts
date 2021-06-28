import { Context, FactoryContextOptions } from "./context";
import { HeaderContext } from "./header";
import { ResultContext } from "./results";
import { kSerializeData, pickProperties } from "../../utils";

export interface IResponsePayload {
    header: HeaderContext;
    results: ResultContext[];
}

export type ResponseContextOptions = FactoryContextOptions<IResponsePayload>

export class ResponseContext extends Context<
    IResponsePayload
> {

    /**
     * Constructor
     */
    public constructor(options: ResponseContextOptions) {
        super(options);
    }

    /**
     * Returns the header
     */
    public get header(): HeaderContext {
        return this.payload.header;
    }

    /**
     * Returns the results
     */
    public get results(): ResultContext[] {
        return this.payload.results;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'header',
            'results'
        ]);
    }
}