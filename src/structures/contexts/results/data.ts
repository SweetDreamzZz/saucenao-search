import { Context } from "../context";

export interface IDataContextOptions<
    P
> {
    payload: P;
}

export type FactoryDataContextOptions<P> = IDataContextOptions<P>

export abstract class DataContext<
    P extends object = {}
> extends Context<P> {

    /**
     * Constructor
     */
    protected constructor(options: IDataContextOptions<P>) {
        super(options);
    }
}