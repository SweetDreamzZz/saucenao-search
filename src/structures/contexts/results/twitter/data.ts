import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawTwitterData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type TwitterDataContextOptions = FactoryDataContextOptions<IRawTwitterData>

export class TwitterDataContext extends DataContext<
    IRawTwitterData
> {
    /**
     * Constructor
     */
    public constructor(options: TwitterDataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the created at
     */
    public get createdAt(): string {
        return this.payload.created_at;
    }

    /**
     * Returns the tweet id
     */
    public get id(): string {
        return this.payload.tweet_id;
    }

    /**
     * Returns the user id
     */
    public get userId(): string {
        return this.payload.twitter_user_id;
    }

    /**
     * Returns the user handle
     */
    public get userHandle(): string {
        return this.payload.twitter_user_handle;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'createdAt',
            'id',
            'userId',
            'userHandle'
        ]);
    }
}
