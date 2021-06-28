import { SearchIndexesMasks } from "./constants";

const lt = /&lt;/g;
const qt = /&gt;/g;
const br = /<br>/g;
const amp = /&amp;/g;
const quot = /&quot;/g;

export const unescapeHTML = (text: string): string => (
    text
        .replace(lt, '<')
        .replace(qt, '>')
        .replace(br, '\n')
        .replace(amp, '&')
        .replace(quot, '"')
);

export const pickProperties = <
    T,
    K extends keyof T
>(params: T, properties: K[]): Pick<T, K> => {
    const copies: Pick<T, K> = {} as Pick<T, K>;

    for (const property of properties) {
        if (params[property])
            copies[property] = params[property];
    }

    return copies;
};

export const calculateIndexMask = (indexes: SearchIndexesMasks[]): string => (
    indexes.reduce((acc, index) => BigInt(acc) | BigInt(index), 0n).toString()
);

export const isURL = (string: string): boolean => /^https?:\/\//i.test(string);