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
import { StatusUpdateRequest } from '../models';
// @ts-ignore
import { StatusUpdatesCreateNewStatusUpdateRecordRequest } from '../models';
// @ts-ignore
import { StatusUpdatesCreateNewStatusUpdateRecordResponse } from '../models';
// @ts-ignore
import { StatusUpdatesDeleteSpecificStatusUpdateResponse } from '../models';
// @ts-ignore
import { StatusUpdatesGetCompactRecordsResponse } from '../models';
// @ts-ignore
import { StatusUpdatesGetRecordByIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * StatusUpdatesApi - axios parameter creator
 * @export
 */
export const StatusUpdatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new status update on an object. Returns the full record of the newly created status update.
         * @summary Create a status update
         * @param {StatusUpdatesCreateNewStatusUpdateRecordRequest} statusUpdatesCreateNewStatusUpdateRecordRequest The status update to create.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'parent' | 'parent.name' | 'resource_subtype' | 'status_type' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewStatusUpdateRecord: async (statusUpdatesCreateNewStatusUpdateRecordRequest: StatusUpdatesCreateNewStatusUpdateRecordRequest, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'parent' | 'parent.name' | 'resource_subtype' | 'status_type' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'statusUpdatesCreateNewStatusUpdateRecordRequest' is not null or undefined
            assertParamExists('createNewStatusUpdateRecord', 'statusUpdatesCreateNewStatusUpdateRecordRequest', statusUpdatesCreateNewStatusUpdateRecordRequest)
            const localVarPath = `/status_updates`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: statusUpdatesCreateNewStatusUpdateRecordRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/status_updates',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(statusUpdatesCreateNewStatusUpdateRecordRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a specific, existing status update.  Returns an empty data record.
         * @summary Delete a status update
         * @param {string} statusUpdateGid The status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpecificStatusUpdate: async (statusUpdateGid: string, optPretty?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'statusUpdateGid' is not null or undefined
            assertParamExists('deleteSpecificStatusUpdate', 'statusUpdateGid', statusUpdateGid)
            const localVarPath = `/status_updates/{status_update_gid}`
                .replace(`{${"status_update_gid"}}`, encodeURIComponent(String(statusUpdateGid !== undefined ? statusUpdateGid : `-status_update_gid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/status_updates/{status_update_gid}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the compact status update records for all updates on the object.
         * @summary Get status updates from an object
         * @param {string} parent Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {string} [createdSince] Only return statuses that have been created since the given time.
         * @param {Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'offset' | 'parent' | 'parent.name' | 'path' | 'resource_subtype' | 'status_type' | 'text' | 'title' | 'uri'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompactRecords: async (parent: string, optPretty?: boolean, limit?: number, offset?: string, createdSince?: string, optFields?: Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'offset' | 'parent' | 'parent.name' | 'path' | 'resource_subtype' | 'status_type' | 'text' | 'title' | 'uri'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'parent' is not null or undefined
            assertParamExists('getCompactRecords', 'parent', parent)
            const localVarPath = `/status_updates`;
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

            if (parent !== undefined) {
                localVarQueryParameter['parent'] = parent;
            }

            if (createdSince !== undefined) {
                localVarQueryParameter['created_since'] = (createdSince as any instanceof Date) ?
                    (createdSince as any).toISOString() :
                    createdSince;
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
                pathTemplate: '/status_updates',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the complete record for a single status update.
         * @summary Get a status update
         * @param {string} statusUpdateGid The status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'parent' | 'parent.name' | 'resource_subtype' | 'status_type' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecordById: async (statusUpdateGid: string, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'parent' | 'parent.name' | 'resource_subtype' | 'status_type' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'statusUpdateGid' is not null or undefined
            assertParamExists('getRecordById', 'statusUpdateGid', statusUpdateGid)
            const localVarPath = `/status_updates/{status_update_gid}`
                .replace(`{${"status_update_gid"}}`, encodeURIComponent(String(statusUpdateGid !== undefined ? statusUpdateGid : `-status_update_gid-`)));
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
                pathTemplate: '/status_updates/{status_update_gid}',
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
 * StatusUpdatesApi - functional programming interface
 * @export
 */
export const StatusUpdatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StatusUpdatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new status update on an object. Returns the full record of the newly created status update.
         * @summary Create a status update
         * @param {StatusUpdatesApiCreateNewStatusUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewStatusUpdateRecord(requestParameters: StatusUpdatesApiCreateNewStatusUpdateRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StatusUpdatesCreateNewStatusUpdateRecordResponse>> {
            const statusUpdatesCreateNewStatusUpdateRecordRequest: StatusUpdatesCreateNewStatusUpdateRecordRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewStatusUpdateRecord(statusUpdatesCreateNewStatusUpdateRecordRequest, requestParameters.optPretty, requestParameters.limit, requestParameters.offset, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a specific, existing status update.  Returns an empty data record.
         * @summary Delete a status update
         * @param {StatusUpdatesApiDeleteSpecificStatusUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSpecificStatusUpdate(requestParameters: StatusUpdatesApiDeleteSpecificStatusUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StatusUpdatesDeleteSpecificStatusUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSpecificStatusUpdate(requestParameters.statusUpdateGid, requestParameters.optPretty, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the compact status update records for all updates on the object.
         * @summary Get status updates from an object
         * @param {StatusUpdatesApiGetCompactRecordsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompactRecords(requestParameters: StatusUpdatesApiGetCompactRecordsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StatusUpdatesGetCompactRecordsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompactRecords(requestParameters.parent, requestParameters.optPretty, requestParameters.limit, requestParameters.offset, requestParameters.createdSince, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the complete record for a single status update.
         * @summary Get a status update
         * @param {StatusUpdatesApiGetRecordByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecordById(requestParameters: StatusUpdatesApiGetRecordByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StatusUpdatesGetRecordByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecordById(requestParameters.statusUpdateGid, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StatusUpdatesApi - factory interface
 * @export
 */
export const StatusUpdatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StatusUpdatesApiFp(configuration)
    return {
        /**
         * Creates a new status update on an object. Returns the full record of the newly created status update.
         * @summary Create a status update
         * @param {StatusUpdatesApiCreateNewStatusUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewStatusUpdateRecord(requestParameters: StatusUpdatesApiCreateNewStatusUpdateRecordRequest, options?: AxiosRequestConfig): AxiosPromise<StatusUpdatesCreateNewStatusUpdateRecordResponse> {
            return localVarFp.createNewStatusUpdateRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a specific, existing status update.  Returns an empty data record.
         * @summary Delete a status update
         * @param {StatusUpdatesApiDeleteSpecificStatusUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpecificStatusUpdate(requestParameters: StatusUpdatesApiDeleteSpecificStatusUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<StatusUpdatesDeleteSpecificStatusUpdateResponse> {
            return localVarFp.deleteSpecificStatusUpdate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the compact status update records for all updates on the object.
         * @summary Get status updates from an object
         * @param {StatusUpdatesApiGetCompactRecordsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompactRecords(requestParameters: StatusUpdatesApiGetCompactRecordsRequest, options?: AxiosRequestConfig): AxiosPromise<StatusUpdatesGetCompactRecordsResponse> {
            return localVarFp.getCompactRecords(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the complete record for a single status update.
         * @summary Get a status update
         * @param {StatusUpdatesApiGetRecordByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecordById(requestParameters: StatusUpdatesApiGetRecordByIdRequest, options?: AxiosRequestConfig): AxiosPromise<StatusUpdatesGetRecordByIdResponse> {
            return localVarFp.getRecordById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewStatusUpdateRecord operation in StatusUpdatesApi.
 * @export
 * @interface StatusUpdatesApiCreateNewStatusUpdateRecordRequest
 */
export type StatusUpdatesApiCreateNewStatusUpdateRecordRequest = {
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof StatusUpdatesApiCreateNewStatusUpdateRecord
    */
    readonly optPretty?: boolean
    
    /**
    * Results per page. The number of objects to return per page. The value must be between 1 and 100.
    * @type {number}
    * @memberof StatusUpdatesApiCreateNewStatusUpdateRecord
    */
    readonly limit?: number
    
    /**
    * Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'
    * @type {string}
    * @memberof StatusUpdatesApiCreateNewStatusUpdateRecord
    */
    readonly offset?: string
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'parent' | 'parent.name' | 'resource_subtype' | 'status_type' | 'text' | 'title'>}
    * @memberof StatusUpdatesApiCreateNewStatusUpdateRecord
    */
    readonly optFields?: Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'parent' | 'parent.name' | 'resource_subtype' | 'status_type' | 'text' | 'title'>
    
} & StatusUpdatesCreateNewStatusUpdateRecordRequest

/**
 * Request parameters for deleteSpecificStatusUpdate operation in StatusUpdatesApi.
 * @export
 * @interface StatusUpdatesApiDeleteSpecificStatusUpdateRequest
 */
export type StatusUpdatesApiDeleteSpecificStatusUpdateRequest = {
    
    /**
    * The status update to get.
    * @type {string}
    * @memberof StatusUpdatesApiDeleteSpecificStatusUpdate
    */
    readonly statusUpdateGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof StatusUpdatesApiDeleteSpecificStatusUpdate
    */
    readonly optPretty?: boolean
    
}

/**
 * Request parameters for getCompactRecords operation in StatusUpdatesApi.
 * @export
 * @interface StatusUpdatesApiGetCompactRecordsRequest
 */
export type StatusUpdatesApiGetCompactRecordsRequest = {
    
    /**
    * Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
    * @type {string}
    * @memberof StatusUpdatesApiGetCompactRecords
    */
    readonly parent: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof StatusUpdatesApiGetCompactRecords
    */
    readonly optPretty?: boolean
    
    /**
    * Results per page. The number of objects to return per page. The value must be between 1 and 100.
    * @type {number}
    * @memberof StatusUpdatesApiGetCompactRecords
    */
    readonly limit?: number
    
    /**
    * Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'
    * @type {string}
    * @memberof StatusUpdatesApiGetCompactRecords
    */
    readonly offset?: string
    
    /**
    * Only return statuses that have been created since the given time.
    * @type {string}
    * @memberof StatusUpdatesApiGetCompactRecords
    */
    readonly createdSince?: string
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'offset' | 'parent' | 'parent.name' | 'path' | 'resource_subtype' | 'status_type' | 'text' | 'title' | 'uri'>}
    * @memberof StatusUpdatesApiGetCompactRecords
    */
    readonly optFields?: Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'offset' | 'parent' | 'parent.name' | 'path' | 'resource_subtype' | 'status_type' | 'text' | 'title' | 'uri'>
    
}

/**
 * Request parameters for getRecordById operation in StatusUpdatesApi.
 * @export
 * @interface StatusUpdatesApiGetRecordByIdRequest
 */
export type StatusUpdatesApiGetRecordByIdRequest = {
    
    /**
    * The status update to get.
    * @type {string}
    * @memberof StatusUpdatesApiGetRecordById
    */
    readonly statusUpdateGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof StatusUpdatesApiGetRecordById
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'parent' | 'parent.name' | 'resource_subtype' | 'status_type' | 'text' | 'title'>}
    * @memberof StatusUpdatesApiGetRecordById
    */
    readonly optFields?: Array<'author' | 'author.name' | 'created_at' | 'created_by' | 'created_by.name' | 'hearted' | 'hearts' | 'hearts.user' | 'hearts.user.name' | 'html_text' | 'liked' | 'likes' | 'likes.user' | 'likes.user.name' | 'modified_at' | 'num_hearts' | 'num_likes' | 'parent' | 'parent.name' | 'resource_subtype' | 'status_type' | 'text' | 'title'>
    
}

/**
 * StatusUpdatesApiGenerated - object-oriented interface
 * @export
 * @class StatusUpdatesApiGenerated
 * @extends {BaseAPI}
 */
export class StatusUpdatesApiGenerated extends BaseAPI {
    /**
     * Creates a new status update on an object. Returns the full record of the newly created status update.
     * @summary Create a status update
     * @param {StatusUpdatesApiCreateNewStatusUpdateRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusUpdatesApiGenerated
     */
    public createNewStatusUpdateRecord(requestParameters: StatusUpdatesApiCreateNewStatusUpdateRecordRequest, options?: AxiosRequestConfig) {
        return StatusUpdatesApiFp(this.configuration).createNewStatusUpdateRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a specific, existing status update.  Returns an empty data record.
     * @summary Delete a status update
     * @param {StatusUpdatesApiDeleteSpecificStatusUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusUpdatesApiGenerated
     */
    public deleteSpecificStatusUpdate(requestParameters: StatusUpdatesApiDeleteSpecificStatusUpdateRequest, options?: AxiosRequestConfig) {
        return StatusUpdatesApiFp(this.configuration).deleteSpecificStatusUpdate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the compact status update records for all updates on the object.
     * @summary Get status updates from an object
     * @param {StatusUpdatesApiGetCompactRecordsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusUpdatesApiGenerated
     */
    public getCompactRecords(requestParameters: StatusUpdatesApiGetCompactRecordsRequest, options?: AxiosRequestConfig) {
        return StatusUpdatesApiFp(this.configuration).getCompactRecords(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the complete record for a single status update.
     * @summary Get a status update
     * @param {StatusUpdatesApiGetRecordByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusUpdatesApiGenerated
     */
    public getRecordById(requestParameters: StatusUpdatesApiGetRecordByIdRequest, options?: AxiosRequestConfig) {
        return StatusUpdatesApiFp(this.configuration).getRecordById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
