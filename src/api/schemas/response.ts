import {
    IRawAnimeData,
    IRawAnimePicturesData,
    IRawArtStationData,
    IRawDanbooruData,
    IRawDeviantArtData,
    IRawE621Data,
    IRawFakkuData,
    IRawFurAffinityData,
    IRawFurryNetworkData,
    IRawGelbooruData,
    IRawIdolComplexData,
    IRawKonachanData,
    IRawMadokamiData,
    IRawMedibangData,
    IRawMoviesData,
    IRawNijieData,
    IRawPawooData,
    IRawPixivData,
    IRawPixivHistoricalData,
    IRawPortalGraphicsData,
    IRawSankakuData,
    IRawSeigaData,
    IRawShowsData,
    IRawTwitterData,
    IRawYandereData,
    IRawHentai,
    IRawDrawrData,
    IRawMarket2DData,
    IRawBcyData,
    IRawMangaDexData
} from "./results";

export type IRawData =
    IRawPixivData
    | IRawPixivHistoricalData
    | IRawSeigaData
    | IRawDanbooruData
    | IRawDrawrData
    | IRawNijieData
    | IRawYandereData
    | IRawFakkuData
    | IRawHentai
    | IRawMarket2DData
    | IRawMedibangData
    | IRawAnimeData
    | IRawMoviesData
    | IRawShowsData
    | IRawGelbooruData
    | IRawKonachanData
    | IRawSankakuData
    | IRawAnimePicturesData
    | IRawE621Data
    | IRawIdolComplexData
    | IRawBcyData
    | IRawPortalGraphicsData
    | IRawDeviantArtData
    | IRawPawooData
    | IRawMadokamiData
    | IRawMangaDexData
    | IRawArtStationData
    | IRawFurAffinityData
    | IRawTwitterData
    | IRawFurryNetworkData;

export interface IRawHeader {
    user_id: string;
    account_type: string;
    short_limit: string;
    long_limit: number;
    long_remaining: number;
    status: number;
    results_requested: number;
    index: {
        [x: string]: {
            status: number;
            parent_id: number;
            id: number;
            results: number;
        }
    };
    search_depth: string;
    minimum_similarity: number;
    query_image_display: string;
    query_image: string;
    results_returned: number;
    message?: string;
}

export interface IRawResult<T = IRawData> {
    header: {
        similarity: string;
        thumbnail: string;
        index_id: number;
        index_name: string;
        dupes: number;
    }
    data: T;
}

export interface IRawSearch {
    header: IRawHeader;
    results: IRawResult[];
}