/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhookRequestFiltersInner } from './webhook-request-filters-inner';

/**
 * 
 * @export
 * @interface WebhookRequest
 */
export interface WebhookRequest {
    /**
     * A resource ID to subscribe to. Many Asana resources are valid to create webhooks on, but higher-level resources require filters.
     * @type {string}
     * @memberof WebhookRequest
     */
    'resource': string;
    /**
     * The URL to receive the HTTP POST. The full URL will be used to deliver events from this webhook (including parameters) which allows encoding of application-specific state when the webhook is created.
     * @type {string}
     * @memberof WebhookRequest
     */
    'target': string;
    /**
     * An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
     * @type {Array<WebhookRequestFiltersInner>}
     * @memberof WebhookRequest
     */
    'filters'?: Array<WebhookRequestFiltersInner>;
}

