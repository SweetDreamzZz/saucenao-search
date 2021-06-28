import { FactoryResultContextOptions, IResultContext, ResultContext } from "../result";
import { IRawPortalGraphicsData } from "../../../../api/schemas/results";
import { PortalGraphicsDataContext } from "./data";

export type PortalGraphicsResultContextName = 'portalgraphics'

export type PortalGraphicsResultContextOptions = FactoryResultContextOptions<IRawPortalGraphicsData>

export class PortalGraphicsResultContext extends ResultContext<
    IRawPortalGraphicsData,
    PortalGraphicsResultContextName
> implements IResultContext {
    /**
     * Constructor
     */
    public constructor(options: PortalGraphicsResultContextOptions) {
        super({
            name: "portalgraphics",

            ...options
        });
    }

    public get data(): PortalGraphicsDataContext {
        return new PortalGraphicsDataContext({
            payload: this.payload.data
        });
    }
}