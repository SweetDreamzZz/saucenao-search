import fetch from 'node-fetch';
import { Agent, globalAgent } from "https";

import { version } from '../../package.json'

import { IAPISearchParams } from "./types";
import { APIError } from "../errors/api";
import { IRawSearch } from "./schemas/response";

export interface IAPIOptions {
    /**
     * SauceNAO API key
     */
    apiKey: string;

    /**
     * HTTPS agent
     */
    agent: Agent;

    /**
     * Base API URL
     *
     * @default `https://saucenao.com/search.php`
     */
    apiBaseUrl: string;

    /**
     * Wait time for one request
     *
     * @default `10000`
     */
    apiTimeout: number;

    /**
     * Headers sent to the API
     *
     * @default `{ User-Agent: `saucenao-search@${version} (https://github.com/SweetDreamZzZ/saucenao-search)` }`
     */
    apiHeaders: Record<string, string>;
}

export class API {
    private options: IAPIOptions;

    /**
     * Constructor
     */
    public constructor(options: Partial<IAPIOptions> & { apiKey: string }) {
        this.options = {
            agent: globalAgent,
            apiBaseUrl: 'https://saucenao.com/search.php',
            apiTimeout: 10e3,
            apiHeaders: {
                'User-Agent': `saucenao-search@${version} (https://github.com/SweetDreamZzZ/saucenao-search)`
            },

            ...options
        };
    }

    public async search(params: IAPISearchParams): Promise<IRawSearch> {
        console.log(new URLSearchParams(
            Object.entries(params)
                .filter(({ 1: value }) => Boolean(value))
        ));

        const controller = new AbortController();

        const timeout = setTimeout(() => controller.abort(), this.options.apiTimeout);

        let result: IRawSearch
        try {
            const response = await fetch(this.options.apiBaseUrl, {
                method: 'POST',
                compress: false,
                agent: this.options.agent,
                signal: controller.signal,
                headers: {
                    ...this.options.apiHeaders,

                    connection: 'keep-alive'
                },
                body: new URLSearchParams(
                    Object.entries(params)
                        .filter(({ 1: value }) => Boolean(value))
                )
            });

            if (!response.ok) {
                throw new APIError({
                    message: `[Request Error]: ${response.statusText}`
                });
            }

            result = await response.json();
        } finally {
            clearTimeout(timeout);
        }

        if (result.header.status !== 0) {
            throw new APIError({
                message: `[Sauce Response Error]: ${result.header.message}`
            });
        }

        return result;
    }
}