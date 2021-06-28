/**
 * Search output type
 */
export const enum SearchOutputType {
    /**
     * HTML response type
     */
    HTML,
    /**
     * XML response type
     */
    XML,
    /**
     * JSON response type
     */
    JSON
}

/**
 * Search dedupe type
 */
export const enum SearchDedupe {
    /**
     * No result deduping
     */
    Disable,

    /**
     * Consolidate booru results and dedupe by item identifier
     */
    Booru,

    /**
     * All implemented dedupe methods such as by series name
     */
    All
}

export const enum SearchHideExplicit {
    /**
     * Don't hide explicit content
     */
    None,

    /**
     * Hide explicitly explicit content
     */
    Known,

    /**
     * Hide presumably explicit content
     */
    Suspected,

    /**
     * Hide all explicit content
     */
    All
}

export const enum SearchBackgroundColor {
    /**
     * Without background
     */
    None = 'none',

    /**
     * White background
     */
    White = 'white',

    /**
     * Black background
     */
    Black = 'black',

    /**
     * Gray background
     */
    Gray = 'grey'
}

/**
 * Search indexes values
 */
export const enum SearchIndexes {
    // The following indexes either don't work at all or don't work correctly, so i excluded them
    //
    // ==================
    // h-mags = 0
    // h-anime = 1
    // hcg = 2
    // ddb-objects = 3
    // ddb-samples = 4
    // anime = 7
    // animeop = 13
    // Shutterstock = 15
    // ==================

    Pixiv = 5,
    PixivHistorical = 6,
    Seiga = 8,
    Danbooru = 9,
    Drawr = 10,
    Nijie = 11,
    Yandere = 12,
    Fakku = 16,
    NHentai = 18,
    Market2D = 19,
    Medibang = 20,
    Anime = 21,
    HAnime = 22,
    Movies = 23,
    Shows = 24,
    Gelbooru = 25,
    Konachan = 26,
    Sankaku = 27,
    AnimePictures = 28,
    E621 = 29,
    IdolComplex = 30,
    BcyIllust = 31,
    BcyCosplay = 32,
    PortalGraphics = 33,
    DeviantArt = 34,
    Pawoo = 35,
    Madokami = 36,
    MangaDex = 37,
    EHentai = 38,
    ArtStation = 39,
    FurAffinity = 40,
    Twitter = 41,
    FurryNetwork = 42,

    All = 999
}

export const enum SearchIndexesMasks {
    Pixiv = 0x20,
    PixivHistorical = 0x40,
    Seiga = 0x100,
    Danbooru = 0x200,
    Drawr = 0x400,
    Nijie = 0x800,
    Yandere = 0x1000,
    Fakku = 0x10000,
    NHentai = 0x20000,
    Market2D = 0x40000,
    Medibang = 0x80000,
    Anime = 0x100000,
    HAnime = 0x200000,
    Movies = 0x400000,
    Shows = 0x800000,
    Gelbooru = 0x1000000,
    Konachan = 0x2000000,
    Sankaku = 0x4000000,
    AnimePictures = 0x8000000,
    E621 = 0x10000000,
    IdolComplex = 0x20000000,
    BcyIllust = 0x40000000,
    BcyCosplay = 0x80000000,
    PortalGraphics = 0x100000000,
    DeviantArt = 0x200000000,
    Pawoo = 0x400000000,
    Madokami = 0x800000000,
    MangaDex = 0x1000000000,
    EHentai = 0x2000000000,
    ArtStation = 0x4000000000,
    FurAffinity = 0x8000000000,
    Twitter = 0x10000000000,
    FurryNetwork = 0x20000000000
}