import { DataContext, FactoryDataContextOptions } from "../data";
import { IRawMangaDexData } from "../../../../api/schemas/results";
import { kSerializeData, pickProperties } from "../../../../utils";

export type MangaDexDataContextOptions = FactoryDataContextOptions<IRawMangaDexData>

export class MangaDexDataContext extends DataContext<
    IRawMangaDexData
> {
    /**
     * Constructor
     */
    public constructor(options: MangaDexDataContextOptions) {
        super(options);
    }

    /**
     * Returns the external urls
     */
    public get externalUrls(): string[] {
        return this.payload.ext_urls;
    }

    /**
     * Returns the manga dex id
     */
    public get id(): number {
        return this.payload.md_id;
    }

    /**
     * Returns the manga updates id
     */
    public get mangaUpdatesId(): number {
        return this.payload.mu_id;
    }

    /**
     * Returns the my anime list id
     */
    public get myAnimeListId(): number {
        return this.payload.mal_id;
    }

    /**
     * Returns the title
     */
    public get title(): string {
        return this.payload.source;
    }

    /**
     * Returns the part
     */
    public get part(): string {
        return this.payload.part;
    }

    /**
     * Returns the artist
     */
    public get artist(): string {
        return this.payload.artist;
    }

    /**
     * Returns the author
     */
    public get author(): string {
        return this.payload.author;
    }

    /**
     * Returns the custom data
     */
    public [kSerializeData](): object {
        return pickProperties(this, [
            'externalUrls',
            'id',
            'mangaUpdatesId',
            'myAnimeListId',
            'title',
            'part',
            'artist',
            'author'
        ]);
    }
}
