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
import { RuleTriggerRequest } from '../models';
// @ts-ignore
import { RulesTriggerRuleRequestRequest } from '../models';
// @ts-ignore
import { RulesTriggerRuleRequestResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RulesApi - axios parameter creator
 * @export
 */
export const RulesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Trigger a rule which uses an [\"incoming web request\"](https://raw.githubusercontent.com) trigger.
         * @summary Trigger a rule
         * @param {string} ruleTriggerGid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
         * @param {RulesTriggerRuleRequestRequest} rulesTriggerRuleRequestRequest A dictionary of variables accessible from within the rule.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        triggerRuleRequest: async (ruleTriggerGid: string, rulesTriggerRuleRequestRequest: RulesTriggerRuleRequestRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ruleTriggerGid' is not null or undefined
            assertParamExists('triggerRuleRequest', 'ruleTriggerGid', ruleTriggerGid)
            // verify required parameter 'rulesTriggerRuleRequestRequest' is not null or undefined
            assertParamExists('triggerRuleRequest', 'rulesTriggerRuleRequestRequest', rulesTriggerRuleRequestRequest)
            const localVarPath = `/rule_triggers/{rule_trigger_gid}/run`
                .replace(`{${"rule_trigger_gid"}}`, encodeURIComponent(String(ruleTriggerGid !== undefined ? ruleTriggerGid : `-rule_trigger_gid-`)));
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

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: rulesTriggerRuleRequestRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/rule_triggers/{rule_trigger_gid}/run',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(rulesTriggerRuleRequestRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RulesApi - functional programming interface
 * @export
 */
export const RulesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RulesApiAxiosParamCreator(configuration)
    return {
        /**
         * Trigger a rule which uses an [\"incoming web request\"](https://raw.githubusercontent.com) trigger.
         * @summary Trigger a rule
         * @param {RulesApiTriggerRuleRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async triggerRuleRequest(requestParameters: RulesApiTriggerRuleRequestRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RulesTriggerRuleRequestResponse>> {
            const rulesTriggerRuleRequestRequest: RulesTriggerRuleRequestRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.triggerRuleRequest(requestParameters.ruleTriggerGid, rulesTriggerRuleRequestRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RulesApi - factory interface
 * @export
 */
export const RulesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RulesApiFp(configuration)
    return {
        /**
         * Trigger a rule which uses an [\"incoming web request\"](https://raw.githubusercontent.com) trigger.
         * @summary Trigger a rule
         * @param {RulesApiTriggerRuleRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        triggerRuleRequest(requestParameters: RulesApiTriggerRuleRequestRequest, options?: AxiosRequestConfig): AxiosPromise<RulesTriggerRuleRequestResponse> {
            return localVarFp.triggerRuleRequest(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for triggerRuleRequest operation in RulesApi.
 * @export
 * @interface RulesApiTriggerRuleRequestRequest
 */
export type RulesApiTriggerRuleRequestRequest = {
    
    /**
    * The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
    * @type {string}
    * @memberof RulesApiTriggerRuleRequest
    */
    readonly ruleTriggerGid: string
    
} & RulesTriggerRuleRequestRequest

/**
 * RulesApiGenerated - object-oriented interface
 * @export
 * @class RulesApiGenerated
 * @extends {BaseAPI}
 */
export class RulesApiGenerated extends BaseAPI {
    /**
     * Trigger a rule which uses an [\"incoming web request\"](https://raw.githubusercontent.com) trigger.
     * @summary Trigger a rule
     * @param {RulesApiTriggerRuleRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApiGenerated
     */
    public triggerRuleRequest(requestParameters: RulesApiTriggerRuleRequestRequest, options?: AxiosRequestConfig) {
        return RulesApiFp(this.configuration).triggerRuleRequest(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
