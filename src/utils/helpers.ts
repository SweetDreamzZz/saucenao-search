import { SearchIndexesMasks } from "./constants";

export const calculateIndexMask = (indexes: SearchIndexesMasks[]): string => (
    indexes.reduce((acc, index) => BigInt(acc) | BigInt(index), 0n).toString()
);

export const isURL = (string: string): boolean => /^https?:\/\//i.test(string);