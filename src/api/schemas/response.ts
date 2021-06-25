import {
    IRaw2DMarketData,
    IRawAnimeData,
    IRawAnimePicturesData,
    IRawArtStationData,
    IRawBcyCosplayData,
    IRawBcyIllustData,
    IRawDanbooruData,
    IRawDeviantArtData,
    IRawE621Data,
    IRawEHentaiData,
    IRawFakkuData,
    IRawFurAffinityData,
    IRawFurryNetworkData,
    IRawGelbooruData,
    IRawHAnimeData,
    IRawIdolComplexData,
    IRawKonachanData,
    IRawMadokamiData,
    IRawMangadexData,
    IRawMedibangData,
    IRawMoviesData,
    IRawNHentaiData,
    IRawNijieData,
    IRawPawooData,
    IRawPixivData,
    IRawPixivHistoricalData,
    IRawPortalGraphicsData,
    IRawSankakuData,
    IRawSeigaData,
    IRawShowsData,
    IRawTwitterData,
    IRawYandereData
} from "./results";

export type IRawData =
    IRawPixivData
    | IRawPixivHistoricalData
    | IRawSeigaData
    | IRawDanbooruData
    | IRawNijieData
    | IRawYandereData
    | IRawFakkuData
    | IRawNHentaiData
    | IRaw2DMarketData
    | IRawMedibangData
    | IRawAnimeData
    | IRawHAnimeData
    | IRawMoviesData
    | IRawShowsData
    | IRawGelbooruData
    | IRawKonachanData
    | IRawSankakuData
    | IRawAnimePicturesData
    | IRawE621Data
    | IRawIdolComplexData
    | IRawBcyIllustData
    | IRawBcyCosplayData
    | IRawPortalGraphicsData
    | IRawDeviantArtData
    | IRawPawooData
    | IRawMadokamiData
    | IRawMangadexData
    | IRawEHentaiData
    | IRawArtStationData
    | IRawFurAffinityData
    | IRawTwitterData
    | IRawFurryNetworkData;

export interface IRawSearch {
    header: {
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
    };
    results: {
        header: {
            similarity: string;
            thumbnail: string;
            index_id: string;
            index_name: string;
            dupes: number;
        }
        data: IRawData;
    }[];
}