/* tslint:disable */
/* eslint-disable */
/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { TimePeriodsGetCompactTimePeriodsResponse } from '../models';
// @ts-ignore
import { TimePeriodsGetFullRecordResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TimePeriodsApi - axios parameter creator
 * @export
 */
export const TimePeriodsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns compact time period records.
         * @summary Get time periods
         * @param {string} workspace Globally unique identifier for the workspace.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {string | Date} [startOn] ISO 8601 date string
         * @param {string | Date} [endOn] ISO 8601 date string
         * @param {Array<'display_name' | 'end_on' | 'offset' | 'parent' | 'parent.display_name' | 'parent.end_on' | 'parent.period' | 'parent.start_on' | 'path' | 'period' | 'start_on' | 'uri'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompactTimePeriods: async (workspace: string, optPretty?: boolean, limit?: number, offset?: string, startOn?: string | Date, endOn?: string | Date, optFields?: Array<'display_name' | 'end_on' | 'offset' | 'parent' | 'parent.display_name' | 'parent.end_on' | 'parent.period' | 'parent.start_on' | 'path' | 'period' | 'start_on' | 'uri'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspace' is not null or undefined
            assertParamExists('getCompactTimePeriods', 'workspace', workspace)
            const localVarPath = `/time_periods`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)
            // authentication personalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (optPretty !== undefined) {
                localVarQueryParameter['opt_pretty'] = optPretty;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (startOn !== undefined) {
                localVarQueryParameter['start_on'] = (startOn as any instanceof Date) ?
                    (startOn as any).toISOString().substr(0,10) :
                    startOn;
            }

            if (endOn !== undefined) {
                localVarQueryParameter['end_on'] = (endOn as any instanceof Date) ?
                    (endOn as any).toISOString().substr(0,10) :
                    endOn;
            }

            if (workspace !== undefined) {
                localVarQueryParameter['workspace'] = workspace;
            }

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/time_periods',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the full record for a single time period.
         * @summary Get a time period
         * @param {string} timePeriodGid Globally unique identifier for the time period.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'display_name' | 'end_on' | 'parent' | 'parent.display_name' | 'parent.end_on' | 'parent.period' | 'parent.start_on' | 'period' | 'start_on'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFullRecord: async (timePeriodGid: string, optPretty?: boolean, optFields?: Array<'display_name' | 'end_on' | 'parent' | 'parent.display_name' | 'parent.end_on' | 'parent.period' | 'parent.start_on' | 'period' | 'start_on'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timePeriodGid' is not null or undefined
            assertParamExists('getFullRecord', 'timePeriodGid', timePeriodGid)
            const localVarPath = `/time_periods/{time_period_gid}`
                .replace(`{${"time_period_gid"}}`, encodeURIComponent(String(timePeriodGid !== undefined ? timePeriodGid : `-time_period_gid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)
            // authentication personalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (optPretty !== undefined) {
                localVarQueryParameter['opt_pretty'] = optPretty;
            }

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/time_periods/{time_period_gid}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TimePeriodsApi - functional programming interface
 * @export
 */
export const TimePeriodsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TimePeriodsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns compact time period records.
         * @summary Get time periods
         * @param {TimePeriodsApiGetCompactTimePeriodsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompactTimePeriods(requestParameters: TimePeriodsApiGetCompactTimePeriodsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimePeriodsGetCompactTimePeriodsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompactTimePeriods(requestParameters.workspace, requestParameters.optPretty, requestParameters.limit, requestParameters.offset, requestParameters.startOn, requestParameters.endOn, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the full record for a single time period.
         * @summary Get a time period
         * @param {TimePeriodsApiGetFullRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFullRecord(requestParameters: TimePeriodsApiGetFullRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimePeriodsGetFullRecordResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFullRecord(requestParameters.timePeriodGid, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TimePeriodsApi - factory interface
 * @export
 */
export const TimePeriodsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TimePeriodsApiFp(configuration)
    return {
        /**
         * Returns compact time period records.
         * @summary Get time periods
         * @param {TimePeriodsApiGetCompactTimePeriodsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompactTimePeriods(requestParameters: TimePeriodsApiGetCompactTimePeriodsRequest, options?: AxiosRequestConfig): AxiosPromise<TimePeriodsGetCompactTimePeriodsResponse> {
            return localVarFp.getCompactTimePeriods(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the full record for a single time period.
         * @summary Get a time period
         * @param {TimePeriodsApiGetFullRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFullRecord(requestParameters: TimePeriodsApiGetFullRecordRequest, options?: AxiosRequestConfig): AxiosPromise<TimePeriodsGetFullRecordResponse> {
            return localVarFp.getFullRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCompactTimePeriods operation in TimePeriodsApi.
 * @export
 * @interface TimePeriodsApiGetCompactTimePeriodsRequest
 */
export type TimePeriodsApiGetCompactTimePeriodsRequest = {
    
    /**
    * Globally unique identifier for the workspace.
    * @type {string}
    * @memberof TimePeriodsApiGetCompactTimePeriods
    */
    readonly workspace: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof TimePeriodsApiGetCompactTimePeriods
    */
    readonly optPretty?: boolean
    
    /**
    * Results per page. The number of objects to return per page. The value must be between 1 and 100.
    * @type {number}
    * @memberof TimePeriodsApiGetCompactTimePeriods
    */
    readonly limit?: number
    
    /**
    * Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'
    * @type {string}
    * @memberof TimePeriodsApiGetCompactTimePeriods
    */
    readonly offset?: string
    
    /**
    * ISO 8601 date string
    * @type {string | Date}
    * @memberof TimePeriodsApiGetCompactTimePeriods
    */
    readonly startOn?: string | Date
    
    /**
    * ISO 8601 date string
    * @type {string | Date}
    * @memberof TimePeriodsApiGetCompactTimePeriods
    */
    readonly endOn?: string | Date
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'display_name' | 'end_on' | 'offset' | 'parent' | 'parent.display_name' | 'parent.end_on' | 'parent.period' | 'parent.start_on' | 'path' | 'period' | 'start_on' | 'uri'>}
    * @memberof TimePeriodsApiGetCompactTimePeriods
    */
    readonly optFields?: Array<'display_name' | 'end_on' | 'offset' | 'parent' | 'parent.display_name' | 'parent.end_on' | 'parent.period' | 'parent.start_on' | 'path' | 'period' | 'start_on' | 'uri'>
    
}

/**
 * Request parameters for getFullRecord operation in TimePeriodsApi.
 * @export
 * @interface TimePeriodsApiGetFullRecordRequest
 */
export type TimePeriodsApiGetFullRecordRequest = {
    
    /**
    * Globally unique identifier for the time period.
    * @type {string}
    * @memberof TimePeriodsApiGetFullRecord
    */
    readonly timePeriodGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof TimePeriodsApiGetFullRecord
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'display_name' | 'end_on' | 'parent' | 'parent.display_name' | 'parent.end_on' | 'parent.period' | 'parent.start_on' | 'period' | 'start_on'>}
    * @memberof TimePeriodsApiGetFullRecord
    */
    readonly optFields?: Array<'display_name' | 'end_on' | 'parent' | 'parent.display_name' | 'parent.end_on' | 'parent.period' | 'parent.start_on' | 'period' | 'start_on'>
    
}

/**
 * TimePeriodsApiGenerated - object-oriented interface
 * @export
 * @class TimePeriodsApiGenerated
 * @extends {BaseAPI}
 */
export class TimePeriodsApiGenerated extends BaseAPI {
    /**
     * Returns compact time period records.
     * @summary Get time periods
     * @param {TimePeriodsApiGetCompactTimePeriodsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimePeriodsApiGenerated
     */
    public getCompactTimePeriods(requestParameters: TimePeriodsApiGetCompactTimePeriodsRequest, options?: AxiosRequestConfig) {
        return TimePeriodsApiFp(this.configuration).getCompactTimePeriods(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the full record for a single time period.
     * @summary Get a time period
     * @param {TimePeriodsApiGetFullRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimePeriodsApiGenerated
     */
    public getFullRecord(requestParameters: TimePeriodsApiGetFullRecordRequest, options?: AxiosRequestConfig) {
        return TimePeriodsApiFp(this.configuration).getFullRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
