import { DataContext } from "./data";
import { Context } from "../context";
import { IRawResult } from "../../../api/schemas/response";
import { kSerializeData, pickProperties } from "../../../utils";

export interface IResultContextOptions<
    P,
    Name extends string = string
> {
    payload: IRawResult<P>
    name: Name;
}

export type FactoryResultContextOptions<P> = Omit<IResultContextOptions<P>, 'name'>

export abstract class ResultContext<
    P = {},
    Name extends string = string
> extends Context<IRawResult<P>> {
    public name: Name;

    /**
     * Constructor
     */
    protected constructor(options: IResultContextOptions<P, Name>) {
        super({
            payload: options.payload
        });

        this.name = options.name;
    }

    /**
     * Returns the similarity
     */
    public get similarity(): number {
        return parseFloat(this.payload.header.similarity);
    }

    /**
     * Returns the thumbnail URL
     */
    public get thumbnail(): string {
        return this.payload.header.thumbnail;
    }

    /**
     * Returns the index id
     */
    public get indexId(): number {
        return this.payload.header.index_id;
    }

    /**
     * Returns the index name
     */
    public get indexName(): string {
        return this.payload.header.index_name;
    }

    /**
     * Returns the dupes count
     */
    public get dupes(): number {
        return this.payload.header.dupes;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'similarity',
            'thumbnail',
            'indexId',
            'indexName',
            'dupes',

            // @ts-expect-error
            'data'
        ]);
    }
}

export interface IResultContext extends ResultContext {

    /**
     * Returns the result's data
     */
    get data(): DataContext
}