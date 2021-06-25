import { SearchOutputType } from "../utils/constants";

export interface IAPISearchParams {
    api_key: string;
    output_type: SearchOutputType;
    testmode?: boolean;
    db?: number;
    dbmask?: string | number;
    dbmaski?: string | number;
    numres?: number;
    depth?: number;
    minsim?: number | string;
    bias?: number;
    biasmin?: number;
    frame?: number;
    bgcolor?: string;
    hide?: number;
    dedupe?: number;
}