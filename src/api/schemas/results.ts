export interface IRawPixivData {
    ext_urls: string[];
    title: string;
    pixiv_id: number;
    member_name: string;
    member_id: number;
}

export interface IRawPixivHistoricalData extends IRawPixivData {}

export interface IRawSeigaData {
    ext_urls: string[];
    title: string;
    seiga_id: number;
    member_name: string;
    member_id: number;
}

export interface IRawDanbooruData {
    ext_urls: string[];
    danbooru_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
}

export interface IRawDrawrData {
    ext_urls: string[];
    title: string;
    drawr_id: number;
    member_name: string;
    member_id: number;
}

export interface IRawNijieData {
    ext_urls: string[];
    title: string;
    nijie_id: number;
    member_name: string;
    member_id: number;
}

export interface IRawYandereData {
    ext_urls: string[];
    yandere_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
}

export interface IRawFakkuData {
    ext_urls: string[];
    creator: string;
    source: string;
}

export interface IRawNHentaiData {
    source: string;
    creator: string[];
    eng_name: string;
    jp_name: string;
}

export interface IRaw2DMarketData {
    ext_urls: string[];
    creator: string;
    source: string;
}

export interface IRawMedibangData {
    ext_urls: string[];
    title: string;
    url: string;
    member_name: string;
    member_id: number;
}

export interface IRawAnimeData {
    ext_urls: string[];
    source: string;
    anidb_aid: number;
    part: string;
    year: string;
    est_time: string;
}

export interface IRawHAnimeData extends IRawAnimeData {}

export interface IRawMoviesData {
    ext_urls: string[];
    source: string;
    imdb_id: string;
    part: string;
    year: string;
    est_time: string;
}

export interface IRawShowsData extends IRawMoviesData {}

export interface IRawGelbooruData {
    ext_urls: string[];
    gelbooru_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
}

export interface IRawKonachanData {
    ext_urls: string[];
    konachan_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
}

export interface IRawSankakuData {
    ext_urls: string[];
    sankaku_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
}

export interface IRawAnimePicturesData {
    ext_urls: string[];
    "anime-pictures_id": number;
    creator: string;
    material: string;
    characters: string;
    source: string;
}

export interface IRawE621Data {
    ext_urls: string[];
    e621_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
}

export interface IRawIdolComplexData {
    ext_urls: string[];
    idol_id: number;
    creator: string;
    material: string;
    characters: string;
    source: string;
}

export interface IRawBcyIllustData {
    ext_urls: string[];
    title: string;
    bcy_id: number;
    member_name: string;
    member_id: number;
    member_link_id: number;
    bcy_type: string;
}

export interface IRawBcyCosplayData extends IRawBcyIllustData {}

export interface IRawPortalGraphicsData {
    ext_urls: string[];
    pg_id: number;
    title: string;
    member_name: string;
    member_id: number;
}

export interface IRawDeviantArtData {
    ext_urls: string[];
    title: string;
    da_id: number;
    author_name: string;
    author_url: string;
}

export interface IRawPawooData {
    ext_urls: string[];
    created_at: string;
    pawoo_id: number;
    pawoo_user_acct: string;
    pawoo_user_username: string;
    pawoo_user_display_name: string;
}

export interface IRawMadokamiData {
    ext_urls: string[];
    mu_id: number;
    source: string;
    part: string;
    type: string;
}

export interface IRawMangadexData {
    ext_urls: string[];
    md_id: number;
    mu_id: number;
    mal_id: number;
    source: string;
    part: string;
    artist: string;
    author: string;
}

export interface IRawEHentaiData extends IRawNHentaiData {}

export interface IRawArtStationData {
    ext_urls: string[]
    title: string;
    as_project: string;
    author_name: string;
    author_url: string;
}

export interface IRawFurAffinityData {
    ext_urls: string[]
    title: string;
    fa_id: number;
    author_name: string;
    author_url: string;
}

export interface IRawTwitterData {
    ext_urls: string[];
    created_at: string;
    tweet_id: string;
    twitter_user_id: string;
    twitter_user_handle: string;
}

export interface IRawFurryNetworkData {
    ext_urls: string[];
    title: string;
    fn_id: number;
    fn_type: string;
    author_name: string;
    author_url: string;
}