import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawPawooData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type PawooDataContextOptions = FactoryDataContextOptions<IRawPawooData>

export class PawooDataContext extends DataContext<
    IRawPawooData
> {
    /**
     * Constructor
     */
    public constructor(options: PawooDataContextOptions) {
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
     * Returns the pawoo id
     */
    public get id(): number {
        return this.payload.pawoo_id;
    }

    /**
     * Returns the account
     */
    public get account(): string {
        return this.payload.pawoo_user_acct;
    }

    /**
     * Returns the username
     */
    public get username(): string {
        return this.payload.pawoo_user_username;
    }

    /**
     * Returns the display name
     */
    public get displayName(): string {
        return this.payload.pawoo_user_display_name;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'createdAt',
            'id',
            'account',
            'username',
            'displayName'
        ]);
    }
}
