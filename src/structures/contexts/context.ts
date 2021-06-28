import { inspectable } from "inspectable";
import { kSerializeData } from "../../utils";

export interface IContextOptions<
    P
> {
    payload: P;
}

export type FactoryContextOptions<P> = IContextOptions<P>

export class Context<
    P extends object = {}
> {
    protected payload: P;

    /**
     * Constructor
     */
    public constructor(options: IContextOptions<P>) {
        this.payload = options.payload;
    }

    /**
     * Returns the serialized data
     */
    public serialize(): object {
        return {
            ...this[kSerializeData]()
        }
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        const { payload } = this;

        return payload;
    }

    /**
     * Returns custom tag
     */
    public get [Symbol.toStringTag](): string {
        return this.constructor.name;
    }
}

inspectable(Context, {
    serialize: instance => instance.serialize(),
    stringify: (instance, payload, context): string => (
        `${context.stylize(instance.constructor.name, 'special')} ${context.inspect(payload)}`
    )
});