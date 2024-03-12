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
import { ProjectBriefRequest } from '../models';
// @ts-ignore
import { ProjectBriefsCreateNewRecordRequest } from '../models';
// @ts-ignore
import { ProjectBriefsCreateNewRecordResponse } from '../models';
// @ts-ignore
import { ProjectBriefsGetFullRecordResponse } from '../models';
// @ts-ignore
import { ProjectBriefsRemoveBriefResponse } from '../models';
// @ts-ignore
import { ProjectBriefsUpdateBriefRecordRequest } from '../models';
// @ts-ignore
import { ProjectBriefsUpdateBriefRecordResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ProjectBriefsApi - axios parameter creator
 * @export
 */
export const ProjectBriefsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new project brief.  Returns the full record of the newly created project brief.
         * @summary Create a project brief
         * @param {string} projectGid Globally unique identifier for the project.
         * @param {ProjectBriefsCreateNewRecordRequest} projectBriefsCreateNewRecordRequest The project brief to create.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRecord: async (projectGid: string, projectBriefsCreateNewRecordRequest: ProjectBriefsCreateNewRecordRequest, optPretty?: boolean, optFields?: Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectGid' is not null or undefined
            assertParamExists('createNewRecord', 'projectGid', projectGid)
            // verify required parameter 'projectBriefsCreateNewRecordRequest' is not null or undefined
            assertParamExists('createNewRecord', 'projectBriefsCreateNewRecordRequest', projectBriefsCreateNewRecordRequest)
            const localVarPath = `/projects/{project_gid}/project_briefs`
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
                requestBody: projectBriefsCreateNewRecordRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/projects/{project_gid}/project_briefs',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(projectBriefsCreateNewRecordRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the full record for a project brief.
         * @summary Get a project brief
         * @param {string} projectBriefGid Globally unique identifier for the project brief.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFullRecord: async (projectBriefGid: string, optPretty?: boolean, optFields?: Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectBriefGid' is not null or undefined
            assertParamExists('getFullRecord', 'projectBriefGid', projectBriefGid)
            const localVarPath = `/project_briefs/{project_brief_gid}`
                .replace(`{${"project_brief_gid"}}`, encodeURIComponent(String(projectBriefGid !== undefined ? projectBriefGid : `-project_brief_gid-`)));
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
                pathTemplate: '/project_briefs/{project_brief_gid}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a specific, existing project brief.  Returns an empty data record.
         * @summary Delete a project brief
         * @param {string} projectBriefGid Globally unique identifier for the project brief.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeBrief: async (projectBriefGid: string, optPretty?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectBriefGid' is not null or undefined
            assertParamExists('removeBrief', 'projectBriefGid', projectBriefGid)
            const localVarPath = `/project_briefs/{project_brief_gid}`
                .replace(`{${"project_brief_gid"}}`, encodeURIComponent(String(projectBriefGid !== undefined ? projectBriefGid : `-project_brief_gid-`)));
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
                pathTemplate: '/project_briefs/{project_brief_gid}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.
         * @summary Update a project brief
         * @param {string} projectBriefGid Globally unique identifier for the project brief.
         * @param {ProjectBriefsUpdateBriefRecordRequest} projectBriefsUpdateBriefRecordRequest The updated fields for the project brief.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBriefRecord: async (projectBriefGid: string, projectBriefsUpdateBriefRecordRequest: ProjectBriefsUpdateBriefRecordRequest, optPretty?: boolean, optFields?: Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectBriefGid' is not null or undefined
            assertParamExists('updateBriefRecord', 'projectBriefGid', projectBriefGid)
            // verify required parameter 'projectBriefsUpdateBriefRecordRequest' is not null or undefined
            assertParamExists('updateBriefRecord', 'projectBriefsUpdateBriefRecordRequest', projectBriefsUpdateBriefRecordRequest)
            const localVarPath = `/project_briefs/{project_brief_gid}`
                .replace(`{${"project_brief_gid"}}`, encodeURIComponent(String(projectBriefGid !== undefined ? projectBriefGid : `-project_brief_gid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
                requestBody: projectBriefsUpdateBriefRecordRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/project_briefs/{project_brief_gid}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(projectBriefsUpdateBriefRecordRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectBriefsApi - functional programming interface
 * @export
 */
export const ProjectBriefsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectBriefsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new project brief.  Returns the full record of the newly created project brief.
         * @summary Create a project brief
         * @param {ProjectBriefsApiCreateNewRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewRecord(requestParameters: ProjectBriefsApiCreateNewRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectBriefsCreateNewRecordResponse>> {
            const projectBriefsCreateNewRecordRequest: ProjectBriefsCreateNewRecordRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewRecord(requestParameters.projectGid, projectBriefsCreateNewRecordRequest, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the full record for a project brief.
         * @summary Get a project brief
         * @param {ProjectBriefsApiGetFullRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFullRecord(requestParameters: ProjectBriefsApiGetFullRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectBriefsGetFullRecordResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFullRecord(requestParameters.projectBriefGid, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a specific, existing project brief.  Returns an empty data record.
         * @summary Delete a project brief
         * @param {ProjectBriefsApiRemoveBriefRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeBrief(requestParameters: ProjectBriefsApiRemoveBriefRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectBriefsRemoveBriefResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeBrief(requestParameters.projectBriefGid, requestParameters.optPretty, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.
         * @summary Update a project brief
         * @param {ProjectBriefsApiUpdateBriefRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBriefRecord(requestParameters: ProjectBriefsApiUpdateBriefRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectBriefsUpdateBriefRecordResponse>> {
            const projectBriefsUpdateBriefRecordRequest: ProjectBriefsUpdateBriefRecordRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBriefRecord(requestParameters.projectBriefGid, projectBriefsUpdateBriefRecordRequest, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectBriefsApi - factory interface
 * @export
 */
export const ProjectBriefsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectBriefsApiFp(configuration)
    return {
        /**
         * Creates a new project brief.  Returns the full record of the newly created project brief.
         * @summary Create a project brief
         * @param {ProjectBriefsApiCreateNewRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRecord(requestParameters: ProjectBriefsApiCreateNewRecordRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectBriefsCreateNewRecordResponse> {
            return localVarFp.createNewRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the full record for a project brief.
         * @summary Get a project brief
         * @param {ProjectBriefsApiGetFullRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFullRecord(requestParameters: ProjectBriefsApiGetFullRecordRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectBriefsGetFullRecordResponse> {
            return localVarFp.getFullRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a specific, existing project brief.  Returns an empty data record.
         * @summary Delete a project brief
         * @param {ProjectBriefsApiRemoveBriefRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeBrief(requestParameters: ProjectBriefsApiRemoveBriefRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectBriefsRemoveBriefResponse> {
            return localVarFp.removeBrief(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.
         * @summary Update a project brief
         * @param {ProjectBriefsApiUpdateBriefRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBriefRecord(requestParameters: ProjectBriefsApiUpdateBriefRecordRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectBriefsUpdateBriefRecordResponse> {
            return localVarFp.updateBriefRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewRecord operation in ProjectBriefsApi.
 * @export
 * @interface ProjectBriefsApiCreateNewRecordRequest
 */
export type ProjectBriefsApiCreateNewRecordRequest = {
    
    /**
    * Globally unique identifier for the project.
    * @type {string}
    * @memberof ProjectBriefsApiCreateNewRecord
    */
    readonly projectGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof ProjectBriefsApiCreateNewRecord
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>}
    * @memberof ProjectBriefsApiCreateNewRecord
    */
    readonly optFields?: Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>
    
} & ProjectBriefsCreateNewRecordRequest

/**
 * Request parameters for getFullRecord operation in ProjectBriefsApi.
 * @export
 * @interface ProjectBriefsApiGetFullRecordRequest
 */
export type ProjectBriefsApiGetFullRecordRequest = {
    
    /**
    * Globally unique identifier for the project brief.
    * @type {string}
    * @memberof ProjectBriefsApiGetFullRecord
    */
    readonly projectBriefGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof ProjectBriefsApiGetFullRecord
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>}
    * @memberof ProjectBriefsApiGetFullRecord
    */
    readonly optFields?: Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>
    
}

/**
 * Request parameters for removeBrief operation in ProjectBriefsApi.
 * @export
 * @interface ProjectBriefsApiRemoveBriefRequest
 */
export type ProjectBriefsApiRemoveBriefRequest = {
    
    /**
    * Globally unique identifier for the project brief.
    * @type {string}
    * @memberof ProjectBriefsApiRemoveBrief
    */
    readonly projectBriefGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof ProjectBriefsApiRemoveBrief
    */
    readonly optPretty?: boolean
    
}

/**
 * Request parameters for updateBriefRecord operation in ProjectBriefsApi.
 * @export
 * @interface ProjectBriefsApiUpdateBriefRecordRequest
 */
export type ProjectBriefsApiUpdateBriefRecordRequest = {
    
    /**
    * Globally unique identifier for the project brief.
    * @type {string}
    * @memberof ProjectBriefsApiUpdateBriefRecord
    */
    readonly projectBriefGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof ProjectBriefsApiUpdateBriefRecord
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>}
    * @memberof ProjectBriefsApiUpdateBriefRecord
    */
    readonly optFields?: Array<'html_text' | 'permalink_url' | 'project' | 'project.name' | 'text' | 'title'>
    
} & ProjectBriefsUpdateBriefRecordRequest

/**
 * ProjectBriefsApiGenerated - object-oriented interface
 * @export
 * @class ProjectBriefsApiGenerated
 * @extends {BaseAPI}
 */
export class ProjectBriefsApiGenerated extends BaseAPI {
    /**
     * Creates a new project brief.  Returns the full record of the newly created project brief.
     * @summary Create a project brief
     * @param {ProjectBriefsApiCreateNewRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectBriefsApiGenerated
     */
    public createNewRecord(requestParameters: ProjectBriefsApiCreateNewRecordRequest, options?: AxiosRequestConfig) {
        return ProjectBriefsApiFp(this.configuration).createNewRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the full record for a project brief.
     * @summary Get a project brief
     * @param {ProjectBriefsApiGetFullRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectBriefsApiGenerated
     */
    public getFullRecord(requestParameters: ProjectBriefsApiGetFullRecordRequest, options?: AxiosRequestConfig) {
        return ProjectBriefsApiFp(this.configuration).getFullRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a specific, existing project brief.  Returns an empty data record.
     * @summary Delete a project brief
     * @param {ProjectBriefsApiRemoveBriefRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectBriefsApiGenerated
     */
    public removeBrief(requestParameters: ProjectBriefsApiRemoveBriefRequest, options?: AxiosRequestConfig) {
        return ProjectBriefsApiFp(this.configuration).removeBrief(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.
     * @summary Update a project brief
     * @param {ProjectBriefsApiUpdateBriefRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectBriefsApiGenerated
     */
    public updateBriefRecord(requestParameters: ProjectBriefsApiUpdateBriefRecordRequest, options?: AxiosRequestConfig) {
        return ProjectBriefsApiFp(this.configuration).updateBriefRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}