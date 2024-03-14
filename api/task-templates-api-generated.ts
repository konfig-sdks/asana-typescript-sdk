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
import { TaskTemplateInstantiateTaskRequest } from '../models';
// @ts-ignore
import { TaskTemplatesDeleteTaskTemplateResponse } from '../models';
// @ts-ignore
import { TaskTemplatesGetSingleTemplateResponse } from '../models';
// @ts-ignore
import { TaskTemplatesInstantiateTaskJobRequest } from '../models';
// @ts-ignore
import { TaskTemplatesInstantiateTaskJobResponse } from '../models';
// @ts-ignore
import { TaskTemplatesListMultipleResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TaskTemplatesApi - axios parameter creator
 * @export
 */
export const TaskTemplatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.
         * @summary Delete a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaskTemplate: async (taskTemplateGid: string, optPretty?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskTemplateGid' is not null or undefined
            assertParamExists('deleteTaskTemplate', 'taskTemplateGid', taskTemplateGid)
            const localVarPath = `/task_templates/{task_template_gid}`
                .replace(`{${"task_template_gid"}}`, encodeURIComponent(String(taskTemplateGid !== undefined ? taskTemplateGid : `-task_template_gid-`)));
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
                pathTemplate: '/task_templates/{task_template_gid}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the complete task template record for a single task template.
         * @summary Get a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleTemplate: async (taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskTemplateGid' is not null or undefined
            assertParamExists('getSingleTemplate', 'taskTemplateGid', taskTemplateGid)
            const localVarPath = `/task_templates/{task_template_gid}`
                .replace(`{${"task_template_gid"}}`, encodeURIComponent(String(taskTemplateGid !== undefined ? taskTemplateGid : `-task_template_gid-`)));
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
                pathTemplate: '/task_templates/{task_template_gid}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates and returns a job that will asynchronously handle the task instantiation.
         * @summary Instantiate a task from a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {TaskTemplatesInstantiateTaskJobRequest} [taskTemplatesInstantiateTaskJobRequest] Describes the inputs used for instantiating a task - the task\&#39;s name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instantiateTaskJob: async (taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>, taskTemplatesInstantiateTaskJobRequest?: TaskTemplatesInstantiateTaskJobRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskTemplateGid' is not null or undefined
            assertParamExists('instantiateTaskJob', 'taskTemplateGid', taskTemplateGid)
            const localVarPath = `/task_templates/{task_template_gid}/instantiateTask`
                .replace(`{${"task_template_gid"}}`, encodeURIComponent(String(taskTemplateGid !== undefined ? taskTemplateGid : `-task_template_gid-`)));
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
                requestBody: taskTemplatesInstantiateTaskJobRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/task_templates/{task_template_gid}/instantiateTask',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(taskTemplatesInstantiateTaskJobRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the compact task template records for some filtered set of task templates. You must specify a `project`
         * @summary Get multiple task templates
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {string} [project] The project to filter task templates on.
         * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMultiple: async (optPretty?: boolean, limit?: number, offset?: string, project?: string, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/task_templates`;
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

            if (project !== undefined) {
                localVarQueryParameter['project'] = project;
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
                pathTemplate: '/task_templates',
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
 * TaskTemplatesApi - functional programming interface
 * @export
 */
export const TaskTemplatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskTemplatesApiAxiosParamCreator(configuration)
    return {
        /**
         * A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.
         * @summary Delete a task template
         * @param {TaskTemplatesApiDeleteTaskTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTaskTemplate(requestParameters: TaskTemplatesApiDeleteTaskTemplateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskTemplatesDeleteTaskTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTaskTemplate(requestParameters.taskTemplateGid, requestParameters.optPretty, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the complete task template record for a single task template.
         * @summary Get a task template
         * @param {TaskTemplatesApiGetSingleTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSingleTemplate(requestParameters: TaskTemplatesApiGetSingleTemplateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskTemplatesGetSingleTemplateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSingleTemplate(requestParameters.taskTemplateGid, requestParameters.optPretty, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates and returns a job that will asynchronously handle the task instantiation.
         * @summary Instantiate a task from a task template
         * @param {TaskTemplatesApiInstantiateTaskJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async instantiateTaskJob(requestParameters: TaskTemplatesApiInstantiateTaskJobRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskTemplatesInstantiateTaskJobResponse>> {
            const taskTemplatesInstantiateTaskJobRequest: TaskTemplatesInstantiateTaskJobRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.instantiateTaskJob(requestParameters.taskTemplateGid, requestParameters.optPretty, requestParameters.optFields, taskTemplatesInstantiateTaskJobRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the compact task template records for some filtered set of task templates. You must specify a `project`
         * @summary Get multiple task templates
         * @param {TaskTemplatesApiListMultipleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMultiple(requestParameters: TaskTemplatesApiListMultipleRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskTemplatesListMultipleResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMultiple(requestParameters.optPretty, requestParameters.limit, requestParameters.offset, requestParameters.project, requestParameters.optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TaskTemplatesApi - factory interface
 * @export
 */
export const TaskTemplatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskTemplatesApiFp(configuration)
    return {
        /**
         * A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.
         * @summary Delete a task template
         * @param {TaskTemplatesApiDeleteTaskTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaskTemplate(requestParameters: TaskTemplatesApiDeleteTaskTemplateRequest, options?: AxiosRequestConfig): AxiosPromise<TaskTemplatesDeleteTaskTemplateResponse> {
            return localVarFp.deleteTaskTemplate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the complete task template record for a single task template.
         * @summary Get a task template
         * @param {TaskTemplatesApiGetSingleTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleTemplate(requestParameters: TaskTemplatesApiGetSingleTemplateRequest, options?: AxiosRequestConfig): AxiosPromise<TaskTemplatesGetSingleTemplateResponse> {
            return localVarFp.getSingleTemplate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates and returns a job that will asynchronously handle the task instantiation.
         * @summary Instantiate a task from a task template
         * @param {TaskTemplatesApiInstantiateTaskJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instantiateTaskJob(requestParameters: TaskTemplatesApiInstantiateTaskJobRequest, options?: AxiosRequestConfig): AxiosPromise<TaskTemplatesInstantiateTaskJobResponse> {
            return localVarFp.instantiateTaskJob(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the compact task template records for some filtered set of task templates. You must specify a `project`
         * @summary Get multiple task templates
         * @param {TaskTemplatesApiListMultipleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMultiple(requestParameters: TaskTemplatesApiListMultipleRequest = {}, options?: AxiosRequestConfig): AxiosPromise<TaskTemplatesListMultipleResponse> {
            return localVarFp.listMultiple(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteTaskTemplate operation in TaskTemplatesApi.
 * @export
 * @interface TaskTemplatesApiDeleteTaskTemplateRequest
 */
export type TaskTemplatesApiDeleteTaskTemplateRequest = {
    
    /**
    * Globally unique identifier for the task template.
    * @type {string}
    * @memberof TaskTemplatesApiDeleteTaskTemplate
    */
    readonly taskTemplateGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof TaskTemplatesApiDeleteTaskTemplate
    */
    readonly optPretty?: boolean
    
}

/**
 * Request parameters for getSingleTemplate operation in TaskTemplatesApi.
 * @export
 * @interface TaskTemplatesApiGetSingleTemplateRequest
 */
export type TaskTemplatesApiGetSingleTemplateRequest = {
    
    /**
    * Globally unique identifier for the task template.
    * @type {string}
    * @memberof TaskTemplatesApiGetSingleTemplate
    */
    readonly taskTemplateGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof TaskTemplatesApiGetSingleTemplate
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>}
    * @memberof TaskTemplatesApiGetSingleTemplate
    */
    readonly optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>
    
}

/**
 * Request parameters for instantiateTaskJob operation in TaskTemplatesApi.
 * @export
 * @interface TaskTemplatesApiInstantiateTaskJobRequest
 */
export type TaskTemplatesApiInstantiateTaskJobRequest = {
    
    /**
    * Globally unique identifier for the task template.
    * @type {string}
    * @memberof TaskTemplatesApiInstantiateTaskJob
    */
    readonly taskTemplateGid: string
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof TaskTemplatesApiInstantiateTaskJob
    */
    readonly optPretty?: boolean
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>}
    * @memberof TaskTemplatesApiInstantiateTaskJob
    */
    readonly optFields?: Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>
    
} & TaskTemplatesInstantiateTaskJobRequest

/**
 * Request parameters for listMultiple operation in TaskTemplatesApi.
 * @export
 * @interface TaskTemplatesApiListMultipleRequest
 */
export type TaskTemplatesApiListMultipleRequest = {
    
    /**
    * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    * @type {boolean}
    * @memberof TaskTemplatesApiListMultiple
    */
    readonly optPretty?: boolean
    
    /**
    * Results per page. The number of objects to return per page. The value must be between 1 and 100.
    * @type {number}
    * @memberof TaskTemplatesApiListMultiple
    */
    readonly limit?: number
    
    /**
    * Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'
    * @type {string}
    * @memberof TaskTemplatesApiListMultiple
    */
    readonly offset?: string
    
    /**
    * The project to filter task templates on.
    * @type {string}
    * @memberof TaskTemplatesApiListMultiple
    */
    readonly project?: string
    
    /**
    * This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
    * @type {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>}
    * @memberof TaskTemplatesApiListMultiple
    */
    readonly optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>
    
}

/**
 * TaskTemplatesApiGenerated - object-oriented interface
 * @export
 * @class TaskTemplatesApiGenerated
 * @extends {BaseAPI}
 */
export class TaskTemplatesApiGenerated extends BaseAPI {
    /**
     * A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.
     * @summary Delete a task template
     * @param {TaskTemplatesApiDeleteTaskTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskTemplatesApiGenerated
     */
    public deleteTaskTemplate(requestParameters: TaskTemplatesApiDeleteTaskTemplateRequest, options?: AxiosRequestConfig) {
        return TaskTemplatesApiFp(this.configuration).deleteTaskTemplate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the complete task template record for a single task template.
     * @summary Get a task template
     * @param {TaskTemplatesApiGetSingleTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskTemplatesApiGenerated
     */
    public getSingleTemplate(requestParameters: TaskTemplatesApiGetSingleTemplateRequest, options?: AxiosRequestConfig) {
        return TaskTemplatesApiFp(this.configuration).getSingleTemplate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates and returns a job that will asynchronously handle the task instantiation.
     * @summary Instantiate a task from a task template
     * @param {TaskTemplatesApiInstantiateTaskJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskTemplatesApiGenerated
     */
    public instantiateTaskJob(requestParameters: TaskTemplatesApiInstantiateTaskJobRequest, options?: AxiosRequestConfig) {
        return TaskTemplatesApiFp(this.configuration).instantiateTaskJob(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the compact task template records for some filtered set of task templates. You must specify a `project`
     * @summary Get multiple task templates
     * @param {TaskTemplatesApiListMultipleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskTemplatesApiGenerated
     */
    public listMultiple(requestParameters: TaskTemplatesApiListMultipleRequest = {}, options?: AxiosRequestConfig) {
        return TaskTemplatesApiFp(this.configuration).listMultiple(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
