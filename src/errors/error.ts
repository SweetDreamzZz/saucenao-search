export interface ISauceErrorOptions {
    message: string;
}

export class SauceError extends Error {
    public stack!: string;

    /**
     * Constructor
     */
    public constructor({ message }: ISauceErrorOptions) {
        super(message);

        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }

    /**
     * Returns custom tag
     */
    public get [Symbol.toStringTag](): string {
        return this.constructor.name;
    }
}