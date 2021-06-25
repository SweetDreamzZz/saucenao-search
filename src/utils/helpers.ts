import { Stream } from 'stream';

import { SearchSourceValue } from "../search";
import { ISourceValue, SourceValueType } from "../types";

export const checkSourceValue = (source: SearchSourceValue): ISourceValue => {
    let type: SourceValueType = null;

    if (typeof source === 'string') {
        if (isURL(source)) {
            type = 'url';
        } else if (isFilePath(source)) {
            type = 'file';
        }
    } else {
        if (isBuffer(source)) {
            type = 'buffer';
        } else if (isStream(source)) {
            type = 'stream';
        }
    }

    return { type, value: source }
}

export const isBuffer = (source: SearchSourceValue) => (
    Buffer.isBuffer(source)
);

export const isStream = (source: SearchSourceValue) => (
    typeof source === 'object' && source instanceof Stream
);

export const isURL = (string: string): boolean => /^https?:\/\//i.test(string);
export const isFilePath = (string: string): boolean => /^(.+)\/([^\/]+)$/i.test(string);