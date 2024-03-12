/* tslint:disable */
/* eslint-disable */
/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

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
import { AuditLogApiGetAuditLogEventsResponse } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AuditLogApiApi - axios parameter creator
 * @export
 */
export const AuditLogApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEvent](https://raw.githubusercontent.com) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.  There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](https://raw.githubusercontent.com) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.  The list of events will always be [paginated](https://raw.githubusercontent.com). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.  *Note: If the filters you provided match events in your domain and `next_page` is present in the response, we will continue to send `next_page` on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty `data` response for the end of current events that match your filters.*  When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](https://raw.githubusercontent.com) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
         * @summary Get audit log events
         * @param {string} workspaceGid Globally unique identifier for the workspace or organization.
         * @param {string} [startAt] Filter to events created after this time (inclusive).
         * @param {string} [endAt] Filter to events created before this time (exclusive).
         * @param {string} [eventType] Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values.
         * @param {'user' | 'asana' | 'asana_support' | 'anonymous' | 'external_administrator'} [actorType] Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If &#x60;actor_gid&#x60; is included, this should be excluded.
         * @param {string} [actorGid] Filter to events triggered by the actor with this ID.
         * @param {string} [resourceGid] Filter to events with this resource ID.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuditLogEvents: async (workspaceGid: string, startAt?: string, endAt?: string, eventType?: string, actorType?: 'user' | 'asana' | 'asana_support' | 'anonymous' | 'external_administrator', actorGid?: string, resourceGid?: string, limit?: number, offset?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workspaceGid' is not null or undefined
            assertParamExists('getAuditLogEvents', 'workspaceGid', workspaceGid)
            const localVarPath = `/workspaces/{workspace_gid}/audit_log_events`
                .replace(`{${"workspace_gid"}}`, encodeURIComponent(String(workspaceGid !== undefined ? workspaceGid : `-workspace_gid-`)));
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
            if (startAt !== undefined) {
                localVarQueryParameter['start_at'] = (startAt as any instanceof Date) ?
                    (startAt as any).toISOString() :
                    startAt;
            }

            if (endAt !== undefined) {
                localVarQueryParameter['end_at'] = (endAt as any instanceof Date) ?
                    (endAt as any).toISOString() :
                    endAt;
            }

            if (eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }

            if (actorType !== undefined) {
                localVarQueryParameter['actor_type'] = actorType;
            }

            if (actorGid !== undefined) {
                localVarQueryParameter['actor_gid'] = actorGid;
            }

            if (resourceGid !== undefined) {
                localVarQueryParameter['resource_gid'] = resourceGid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/workspaces/{workspace_gid}/audit_log_events',
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
 * AuditLogApiApi - functional programming interface
 * @export
 */
export const AuditLogApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuditLogApiApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEvent](https://raw.githubusercontent.com) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.  There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](https://raw.githubusercontent.com) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.  The list of events will always be [paginated](https://raw.githubusercontent.com). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.  *Note: If the filters you provided match events in your domain and `next_page` is present in the response, we will continue to send `next_page` on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty `data` response for the end of current events that match your filters.*  When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](https://raw.githubusercontent.com) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
         * @summary Get audit log events
         * @param {AuditLogApiApiGetAuditLogEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuditLogEvents(requestParameters: AuditLogApiApiGetAuditLogEventsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditLogApiGetAuditLogEventsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditLogEvents(requestParameters.workspaceGid, requestParameters.startAt, requestParameters.endAt, requestParameters.eventType, requestParameters.actorType, requestParameters.actorGid, requestParameters.resourceGid, requestParameters.limit, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuditLogApiApi - factory interface
 * @export
 */
export const AuditLogApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuditLogApiApiFp(configuration)
    return {
        /**
         * Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEvent](https://raw.githubusercontent.com) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.  There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](https://raw.githubusercontent.com) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.  The list of events will always be [paginated](https://raw.githubusercontent.com). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.  *Note: If the filters you provided match events in your domain and `next_page` is present in the response, we will continue to send `next_page` on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty `data` response for the end of current events that match your filters.*  When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](https://raw.githubusercontent.com) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
         * @summary Get audit log events
         * @param {AuditLogApiApiGetAuditLogEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuditLogEvents(requestParameters: AuditLogApiApiGetAuditLogEventsRequest, options?: AxiosRequestConfig): AxiosPromise<AuditLogApiGetAuditLogEventsResponse> {
            return localVarFp.getAuditLogEvents(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAuditLogEvents operation in AuditLogApiApi.
 * @export
 * @interface AuditLogApiApiGetAuditLogEventsRequest
 */
export type AuditLogApiApiGetAuditLogEventsRequest = {
    
    /**
    * Globally unique identifier for the workspace or organization.
    * @type {string}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly workspaceGid: string
    
    /**
    * Filter to events created after this time (inclusive).
    * @type {string}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly startAt?: string
    
    /**
    * Filter to events created before this time (exclusive).
    * @type {string}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly endAt?: string
    
    /**
    * Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values.
    * @type {string}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly eventType?: string
    
    /**
    * Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.
    * @type {'user' | 'asana' | 'asana_support' | 'anonymous' | 'external_administrator'}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly actorType?: 'user' | 'asana' | 'asana_support' | 'anonymous' | 'external_administrator'
    
    /**
    * Filter to events triggered by the actor with this ID.
    * @type {string}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly actorGid?: string
    
    /**
    * Filter to events with this resource ID.
    * @type {string}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly resourceGid?: string
    
    /**
    * Results per page. The number of objects to return per page. The value must be between 1 and 100.
    * @type {number}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly limit?: number
    
    /**
    * Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'
    * @type {string}
    * @memberof AuditLogApiApiGetAuditLogEvents
    */
    readonly offset?: string
    
}

/**
 * AuditLogApiApiGenerated - object-oriented interface
 * @export
 * @class AuditLogApiApiGenerated
 * @extends {BaseAPI}
 */
export class AuditLogApiApiGenerated extends BaseAPI {
    /**
     * Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEvent](https://raw.githubusercontent.com) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.  There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](https://raw.githubusercontent.com) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.  The list of events will always be [paginated](https://raw.githubusercontent.com). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.  *Note: If the filters you provided match events in your domain and `next_page` is present in the response, we will continue to send `next_page` on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty `data` response for the end of current events that match your filters.*  When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](https://raw.githubusercontent.com) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
     * @summary Get audit log events
     * @param {AuditLogApiApiGetAuditLogEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditLogApiApiGenerated
     */
    public getAuditLogEvents(requestParameters: AuditLogApiApiGetAuditLogEventsRequest, options?: AxiosRequestConfig) {
        return AuditLogApiApiFp(this.configuration).getAuditLogEvents(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
