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
import { CreateMembershipRequest } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { MembershipsCreateNewRecordRequest } from '../models';
// @ts-ignore
import { MembershipsCreateNewRecordResponse } from '../models';
// @ts-ignore
import { MembershipsDeleteRecordResponse } from '../models';
// @ts-ignore
import { MembershipsGetMembershipRecordResponse } from '../models';
// @ts-ignore
import { MembershipsGetMultipleResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MembershipsApi - axios parameter creator
 * @export
 */
export const MembershipsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new membership in a `goal` or `project`. `Teams` or `users` can be a member of `goals` or `projects`.  Returns the full record of the newly created membership.
         * @summary Create a membership
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {MembershipsCreateNewRecordRequest} [membershipsCreateNewRecordRequest] The updated fields for the membership.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRecord: async (optPretty?: boolean, membershipsCreateNewRecordRequest?: MembershipsCreateNewRecordRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/memberships`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: membershipsCreateNewRecordRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/memberships',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(membershipsCreateNewRecordRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * A specific, existing membership for a `goal` or `project` can be deleted by making a `DELETE` request on the URL for that membership.  Returns an empty data record.
         * @summary Delete a membership
         * @param {string} membershipGid Globally unique identifier for the membership.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRecord: async (membershipGid: string, optPretty?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'membershipGid' is not null or undefined
            assertParamExists('deleteRecord', 'membershipGid', membershipGid)
            const localVarPath = `/memberships/{membership_gid}`
                .replace(`{${"membership_gid"}}`, encodeURIComponent(String(membershipGid !== undefined ? membershipGid : `-membership_gid-`)));
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
                pathTemplate: '/memberships/{membership_gid}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns compact `project_membership` record for a single membership. `GET` only supports project memberships currently
         * @summary Get a membership
         * @param {string} membershipGid Globally unique identifier for the membership.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'access_level' | 'member' | 'member.name' | 'parent' | 'parent.name' | 'resource_subtype'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMembershipRecord: async (membershipGid: string, optPretty?: boolean, optFields?: Array<'access_level' | 'member' | 'member.name' | 'parent' | 'parent.name' | 'resource_subtype'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'membershipGid' is not null or undefined
            assertParamExists('getMembershipRecord', 'membershipGid', membershipGid)
            const localVarPath = `/memberships/{membership_gid}`
                .replace(`{${"membership_gid"}}`, encodeURIComponent(String(membershipGid !== undefined ? membershipGid : `-membership_gid-`)));
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
                pathTemplate: '/memberships/{membership_gid}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns compact `goal_membership` or `project_membership` records. The possible types for `parent` in this request are `goal` or `project`. An additional member (user GID or team GID) can be passed in to filter to a specific membership.
         * @summary Get multiple memberships
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {string} [parent] Globally unique identifier for &#x60;goal&#x60; or &#x60;project&#x60;.
         * @param {string} [member] Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'offset' | 'path' | 'uri'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMultiple: async (optPretty?: boolean, parent?: string, member?: string, limit?: number, offset?: string, optFields?: Array<'offset' | 'path' | 'uri'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/memberships`;
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

            if (parent !== undefined) {
                localVarQueryParameter['parent'] = parent;
            }

            if (member !== undefined) {
                localVarQueryParameter['member'] = member;
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/memberships',
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
 * MembershipsApi - functional programming interface
 * @export
 */
export const MembershipsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MembershipsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new membership in a `goal` or `project`. `Teams` or `users` can be a member of `goals` or `projects`.  Returns the full record of the newly created membership.
         * @summary Create a membership
         * @param {MembershipsApiCreateNewRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewRecord(requestParameters: MembershipsApiCreateNewRecordRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MembershipsCreateNewRecordResponse>> {
            const membershipsCreateNewRecordRequest: MembershipsCreateNewRecordRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewRecord(requestParameters.optPretty, membershipsCreateNewRecordRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * A specific, existing membership for a `goal` or `project` can be deleted by making a `DELETE` request on the URL for that membership.  Returns an empty data record.
         * @summary Delete a membership
         * @param {MembershipsApiDeleteRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRecord(requestParameters: MembershipsApiDeleteRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MembershipsDeleteRecordResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRecord(requestParameters.membershipGid, requestParameters.optPretty, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns compact `project_membership` record for a single membership. `GET` only supports project memberships currently
         * @summary Get a membership
         * @param {MembershipsApiGetMembershipRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMembershipRecord(requestParameters: MembershipsApiGetMembershipRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MembershipsGetMembershipRecordResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMembershipRecord(requestParameters.membershipGid, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns compact `goal_membership` or `project_membership` records. The possible types for `parent` in this request are `goal` or `project`. An additional member (user GID or team GID) can be passed in to filter to a specific membership.
         * @summary Get multiple memberships
         * @param {MembershipsApiGetMultipleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMultiple(requestParameters: MembershipsApiGetMultipleRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MembershipsGetMultipleResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMultiple(requestParameters.optPretty, requestParameters.parent, requestParameters.member, requestParameters.limit, requestParameters.offset, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MembershipsApi - factory interface
 * @export
 */
export const MembershipsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MembershipsApiFp(configuration)
    return {
        /**
         * Creates a new membership in a `goal` or `project`. `Teams` or `users` can be a member of `goals` or `projects`.  Returns the full record of the newly created membership.
         * @summary Create a membership
         * @param {MembershipsApiCreateNewRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRecord(requestParameters: MembershipsApiCreateNewRecordRequest = {}, options?: AxiosRequestConfig): AxiosPromise<MembershipsCreateNewRecordResponse> {
            return localVarFp.createNewRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * A specific, existing membership for a `goal` or `project` can be deleted by making a `DELETE` request on the URL for that membership.  Returns an empty data record.
         * @summary Delete a membership
         * @param {MembershipsApiDeleteRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRecord(requestParameters: MembershipsApiDeleteRecordRequest, options?: AxiosRequestConfig): AxiosPromise<MembershipsDeleteRecordResponse> {
            return localVarFp.deleteRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns compact `project_membership` record for a single membership. `GET` only supports project memberships currently
         * @summary Get a membership
         * @param {MembershipsApiGetMembershipRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMembershipRecord(requestParameters: MembershipsApiGetMembershipRecordRequest, options?: AxiosRequestConfig): AxiosPromise<MembershipsGetMembershipRecordResponse> {
            return localVarFp.getMembershipRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns compact `goal_membership` or `project_membership` records. The possible types for `parent` in this request are `goal` or `project`. An additional member (user GID or team GID) can be passed in to filter to a specific membership.
         * @summary Get multiple memberships
         * @param {MembershipsApiGetMultipleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMultiple(requestParameters: MembershipsApiGetMultipleRequest = {}, options?: AxiosRequestConfig): AxiosPromise<MembershipsGetMultipleResponse> {
            return localVarFp.getMultiple(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewRecord operation in MembershipsApi.
 * @export
 * @interface MembershipsApiCreateNewRecordRequest
 */
export type MembershipsApiCreateNewRecordRequest = {
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof MembershipsApiCreateNewRecord
    */
    readonly optPretty?: boolean
    
} & MembershipsCreateNewRecordRequest

/**
 * Request parameters for deleteRecord operation in MembershipsApi.
 * @export
 * @interface MembershipsApiDeleteRecordRequest
 */
export type MembershipsApiDeleteRecordRequest = {
    
    /**
    * Globally unique identifier for the membership.
    * @type {string}
    * @memberof MembershipsApiDeleteRecord
    */
    readonly membershipGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof MembershipsApiDeleteRecord
    */
    readonly optPretty?: boolean
    
}

/**
 * Request parameters for getMembershipRecord operation in MembershipsApi.
 * @export
 * @interface MembershipsApiGetMembershipRecordRequest
 */
export type MembershipsApiGetMembershipRecordRequest = {
    
    /**
    * Globally unique identifier for the membership.
    * @type {string}
    * @memberof MembershipsApiGetMembershipRecord
    */
    readonly membershipGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof MembershipsApiGetMembershipRecord
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'access_level' | 'member' | 'member.name' | 'parent' | 'parent.name' | 'resource_subtype'>}
    * @memberof MembershipsApiGetMembershipRecord
    */
    readonly optFields?: Array<'access_level' | 'member' | 'member.name' | 'parent' | 'parent.name' | 'resource_subtype'>
    
}

/**
 * Request parameters for getMultiple operation in MembershipsApi.
 * @export
 * @interface MembershipsApiGetMultipleRequest
 */
export type MembershipsApiGetMultipleRequest = {
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof MembershipsApiGetMultiple
    */
    readonly optPretty?: boolean
    
    /**
    * Globally unique identifier for `goal` or `project`.
    * @type {string}
    * @memberof MembershipsApiGetMultiple
    */
    readonly parent?: string
    
    /**
    * Globally unique identifier for `team` or `user`.
    * @type {string}
    * @memberof MembershipsApiGetMultiple
    */
    readonly member?: string
    
    /**
    * Results per page. The number of objects to return per page. The value must be between 1 and 100.
    * @type {number}
    * @memberof MembershipsApiGetMultiple
    */
    readonly limit?: number
    
    /**
    * Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'
    * @type {string}
    * @memberof MembershipsApiGetMultiple
    */
    readonly offset?: string
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'offset' | 'path' | 'uri'>}
    * @memberof MembershipsApiGetMultiple
    */
    readonly optFields?: Array<'offset' | 'path' | 'uri'>
    
}

/**
 * MembershipsApiGenerated - object-oriented interface
 * @export
 * @class MembershipsApiGenerated
 * @extends {BaseAPI}
 */
export class MembershipsApiGenerated extends BaseAPI {
    /**
     * Creates a new membership in a `goal` or `project`. `Teams` or `users` can be a member of `goals` or `projects`.  Returns the full record of the newly created membership.
     * @summary Create a membership
     * @param {MembershipsApiCreateNewRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiGenerated
     */
    public createNewRecord(requestParameters: MembershipsApiCreateNewRecordRequest = {}, options?: AxiosRequestConfig) {
        return MembershipsApiFp(this.configuration).createNewRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * A specific, existing membership for a `goal` or `project` can be deleted by making a `DELETE` request on the URL for that membership.  Returns an empty data record.
     * @summary Delete a membership
     * @param {MembershipsApiDeleteRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiGenerated
     */
    public deleteRecord(requestParameters: MembershipsApiDeleteRecordRequest, options?: AxiosRequestConfig) {
        return MembershipsApiFp(this.configuration).deleteRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns compact `project_membership` record for a single membership. `GET` only supports project memberships currently
     * @summary Get a membership
     * @param {MembershipsApiGetMembershipRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiGenerated
     */
    public getMembershipRecord(requestParameters: MembershipsApiGetMembershipRecordRequest, options?: AxiosRequestConfig) {
        return MembershipsApiFp(this.configuration).getMembershipRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns compact `goal_membership` or `project_membership` records. The possible types for `parent` in this request are `goal` or `project`. An additional member (user GID or team GID) can be passed in to filter to a specific membership.
     * @summary Get multiple memberships
     * @param {MembershipsApiGetMultipleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiGenerated
     */
    public getMultiple(requestParameters: MembershipsApiGetMultipleRequest = {}, options?: AxiosRequestConfig) {
        return MembershipsApiFp(this.configuration).getMultiple(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
