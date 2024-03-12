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
import { ErrorResponse } from '../models';
// @ts-ignore
import { ProjectStatusBase } from '../models';
// @ts-ignore
import { ProjectStatusesCreateNewStatusUpdateRecordRequest } from '../models';
// @ts-ignore
import { ProjectStatusesCreateNewStatusUpdateRecordResponse } from '../models';
// @ts-ignore
import { ProjectStatusesDeleteSpecificStatusUpdateResponse } from '../models';
// @ts-ignore
import { ProjectStatusesGetProjectUpdatesResponse } from '../models';
// @ts-ignore
import { ProjectStatusesGetStatusUpdateRecordResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ProjectStatusesApi - axios parameter creator
 * @export
 */
export const ProjectStatusesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
         * @summary Create a project status
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {ProjectStatusesCreateNewStatusUpdateRecordRequest} projectStatusesCreateNewStatusUpdateRecordRequest The project status to create.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewStatusUpdateRecord: async (projectGid: string, projectStatusesCreateNewStatusUpdateRecordRequest: ProjectStatusesCreateNewStatusUpdateRecordRequest, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectGid' is not null or undefined
            assertParamExists('createNewStatusUpdateRecord', 'projectGid', projectGid)
            // verify required parameter 'projectStatusesCreateNewStatusUpdateRecordRequest' is not null or undefined
            assertParamExists('createNewStatusUpdateRecord', 'projectStatusesCreateNewStatusUpdateRecordRequest', projectStatusesCreateNewStatusUpdateRecordRequest)
            const localVarPath = `/projects/{project_gid}/project_statuses`
                .replace(`{${"project_gid"}}`, encodeURIComponent(String(projectGid !== undefined ? projectGid : `-project_gid-`)));
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

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: projectStatusesCreateNewStatusUpdateRecordRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/projects/{project_gid}/project_statuses',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(projectStatusesCreateNewStatusUpdateRecordRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.
         * @summary Delete a project status
         * @param {string} projectStatusGid The project status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpecificStatusUpdate: async (projectStatusGid: string, optPretty?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectStatusGid' is not null or undefined
            assertParamExists('deleteSpecificStatusUpdate', 'projectStatusGid', projectStatusGid)
            const localVarPath = `/project_statuses/{project_status_gid}`
                .replace(`{${"project_status_gid"}}`, encodeURIComponent(String(projectStatusGid !== undefined ? projectStatusGid : `-project_status_gid-`)));
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
                pathTemplate: '/project_statuses/{project_status_gid}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.
         * @summary Get statuses from a project
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectUpdates: async (projectGid: string, optPretty?: boolean, limit?: number, offset?: string, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectGid' is not null or undefined
            assertParamExists('getProjectUpdates', 'projectGid', projectGid)
            const localVarPath = `/projects/{project_gid}/project_statuses`
                .replace(`{${"project_gid"}}`, encodeURIComponent(String(projectGid !== undefined ? projectGid : `-project_gid-`)));
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
                pathTemplate: '/projects/{project_gid}/project_statuses',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.
         * @summary Get a project status
         * @param {string} projectStatusGid The project status update to get.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatusUpdateRecord: async (projectStatusGid: string, optPretty?: boolean, optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectStatusGid' is not null or undefined
            assertParamExists('getStatusUpdateRecord', 'projectStatusGid', projectStatusGid)
            const localVarPath = `/project_statuses/{project_status_gid}`
                .replace(`{${"project_status_gid"}}`, encodeURIComponent(String(projectStatusGid !== undefined ? projectStatusGid : `-project_status_gid-`)));
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
                pathTemplate: '/project_statuses/{project_status_gid}',
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
 * ProjectStatusesApi - functional programming interface
 * @export
 */
export const ProjectStatusesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectStatusesApiAxiosParamCreator(configuration)
    return {
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
         * @summary Create a project status
         * @param {ProjectStatusesApiCreateNewStatusUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewStatusUpdateRecord(requestParameters: ProjectStatusesApiCreateNewStatusUpdateRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectStatusesCreateNewStatusUpdateRecordResponse>> {
            const projectStatusesCreateNewStatusUpdateRecordRequest: ProjectStatusesCreateNewStatusUpdateRecordRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewStatusUpdateRecord(requestParameters.projectGid, projectStatusesCreateNewStatusUpdateRecordRequest, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.
         * @summary Delete a project status
         * @param {ProjectStatusesApiDeleteSpecificStatusUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSpecificStatusUpdate(requestParameters: ProjectStatusesApiDeleteSpecificStatusUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectStatusesDeleteSpecificStatusUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSpecificStatusUpdate(requestParameters.projectStatusGid, requestParameters.optPretty, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.
         * @summary Get statuses from a project
         * @param {ProjectStatusesApiGetProjectUpdatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectUpdates(requestParameters: ProjectStatusesApiGetProjectUpdatesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectStatusesGetProjectUpdatesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectUpdates(requestParameters.projectGid, requestParameters.optPretty, requestParameters.limit, requestParameters.offset, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.
         * @summary Get a project status
         * @param {ProjectStatusesApiGetStatusUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatusUpdateRecord(requestParameters: ProjectStatusesApiGetStatusUpdateRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectStatusesGetStatusUpdateRecordResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStatusUpdateRecord(requestParameters.projectStatusGid, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectStatusesApi - factory interface
 * @export
 */
export const ProjectStatusesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectStatusesApiFp(configuration)
    return {
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
         * @summary Create a project status
         * @param {ProjectStatusesApiCreateNewStatusUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewStatusUpdateRecord(requestParameters: ProjectStatusesApiCreateNewStatusUpdateRecordRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectStatusesCreateNewStatusUpdateRecordResponse> {
            return localVarFp.createNewStatusUpdateRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.
         * @summary Delete a project status
         * @param {ProjectStatusesApiDeleteSpecificStatusUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpecificStatusUpdate(requestParameters: ProjectStatusesApiDeleteSpecificStatusUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectStatusesDeleteSpecificStatusUpdateResponse> {
            return localVarFp.deleteSpecificStatusUpdate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.
         * @summary Get statuses from a project
         * @param {ProjectStatusesApiGetProjectUpdatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectUpdates(requestParameters: ProjectStatusesApiGetProjectUpdatesRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectStatusesGetProjectUpdatesResponse> {
            return localVarFp.getProjectUpdates(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.
         * @summary Get a project status
         * @param {ProjectStatusesApiGetStatusUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatusUpdateRecord(requestParameters: ProjectStatusesApiGetStatusUpdateRecordRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectStatusesGetStatusUpdateRecordResponse> {
            return localVarFp.getStatusUpdateRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewStatusUpdateRecord operation in ProjectStatusesApi.
 * @export
 * @interface ProjectStatusesApiCreateNewStatusUpdateRecordRequest
 */
export type ProjectStatusesApiCreateNewStatusUpdateRecordRequest = {
    
    /**
    * Globally unique identifier for the project.
    * @type {string}
    * @memberof ProjectStatusesApiCreateNewStatusUpdateRecord
    */
    readonly projectGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof ProjectStatusesApiCreateNewStatusUpdateRecord
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>}
    * @memberof ProjectStatusesApiCreateNewStatusUpdateRecord
    */
    readonly optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>
    
} & ProjectStatusesCreateNewStatusUpdateRecordRequest

/**
 * Request parameters for deleteSpecificStatusUpdate operation in ProjectStatusesApi.
 * @export
 * @interface ProjectStatusesApiDeleteSpecificStatusUpdateRequest
 */
export type ProjectStatusesApiDeleteSpecificStatusUpdateRequest = {
    
    /**
    * The project status update to get.
    * @type {string}
    * @memberof ProjectStatusesApiDeleteSpecificStatusUpdate
    */
    readonly projectStatusGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof ProjectStatusesApiDeleteSpecificStatusUpdate
    */
    readonly optPretty?: boolean
    
}

/**
 * Request parameters for getProjectUpdates operation in ProjectStatusesApi.
 * @export
 * @interface ProjectStatusesApiGetProjectUpdatesRequest
 */
export type ProjectStatusesApiGetProjectUpdatesRequest = {
    
    /**
    * Globally unique identifier for the project.
    * @type {string}
    * @memberof ProjectStatusesApiGetProjectUpdates
    */
    readonly projectGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof ProjectStatusesApiGetProjectUpdates
    */
    readonly optPretty?: boolean
    
    /**
    * Results per page. The number of objects to return per page. The value must be between 1 and 100.
    * @type {number}
    * @memberof ProjectStatusesApiGetProjectUpdates
    */
    readonly limit?: number
    
    /**
    * Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'
    * @type {string}
    * @memberof ProjectStatusesApiGetProjectUpdates
    */
    readonly offset?: string
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>}
    * @memberof ProjectStatusesApiGetProjectUpdates
    */
    readonly optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'offset' | 'path' | 'text' | 'title' | 'uri'>
    
}

/**
 * Request parameters for getStatusUpdateRecord operation in ProjectStatusesApi.
 * @export
 * @interface ProjectStatusesApiGetStatusUpdateRecordRequest
 */
export type ProjectStatusesApiGetStatusUpdateRecordRequest = {
    
    /**
    * The project status update to get.
    * @type {string}
    * @memberof ProjectStatusesApiGetStatusUpdateRecord
    */
    readonly projectStatusGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof ProjectStatusesApiGetStatusUpdateRecord
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>}
    * @memberof ProjectStatusesApiGetStatusUpdateRecord
    */
    readonly optFields?: Array<'author' | 'author.name' | 'color' | 'created_at' | 'created_by' | 'created_by.name' | 'html_text' | 'modified_at' | 'text' | 'title'>
    
}

/**
 * ProjectStatusesApiGenerated - object-oriented interface
 * @export
 * @class ProjectStatusesApiGenerated
 * @extends {BaseAPI}
 */
export class ProjectStatusesApiGenerated extends BaseAPI {
    /**
     * *Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  Returns the full record of the newly created project status update.
     * @summary Create a project status
     * @param {ProjectStatusesApiCreateNewStatusUpdateRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectStatusesApiGenerated
     */
    public createNewStatusUpdateRecord(requestParameters: ProjectStatusesApiCreateNewStatusUpdateRecordRequest, options?: AxiosRequestConfig) {
        return ProjectStatusesApiFp(this.configuration).createNewStatusUpdateRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing project status update.  Returns an empty data record.
     * @summary Delete a project status
     * @param {ProjectStatusesApiDeleteSpecificStatusUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectStatusesApiGenerated
     */
    public deleteSpecificStatusUpdate(requestParameters: ProjectStatusesApiDeleteSpecificStatusUpdateRequest, options?: AxiosRequestConfig) {
        return ProjectStatusesApiFp(this.configuration).deleteSpecificStatusUpdate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * *Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update records for all updates on the project.
     * @summary Get statuses from a project
     * @param {ProjectStatusesApiGetProjectUpdatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectStatusesApiGenerated
     */
    public getProjectUpdates(requestParameters: ProjectStatusesApiGetProjectUpdatesRequest, options?: AxiosRequestConfig) {
        return ProjectStatusesApiFp(this.configuration).getProjectUpdates(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for a single status update.
     * @summary Get a project status
     * @param {ProjectStatusesApiGetStatusUpdateRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectStatusesApiGenerated
     */
    public getStatusUpdateRecord(requestParameters: ProjectStatusesApiGetStatusUpdateRecordRequest, options?: AxiosRequestConfig) {
        return ProjectStatusesApiFp(this.configuration).getStatusUpdateRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
