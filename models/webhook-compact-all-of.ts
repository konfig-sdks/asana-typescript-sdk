/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AsanaNamedResource } from './asana-named-resource';

/**
 * Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [event](https://raw.githubusercontent.com) schema.
 * @export
 * @interface WebhookCompactAllOf
 */
export interface WebhookCompactAllOf {
    /**
     * If true, the webhook will send events - if false it is considered inactive and will not generate events.
     * @type {boolean}
     * @memberof WebhookCompactAllOf
     */
    'active'?: boolean;
    /**
     * 
     * @type {AsanaNamedResource}
     * @memberof WebhookCompactAllOf
     */
    'resource'?: AsanaNamedResource;
    /**
     * The URL to receive the HTTP POST.
     * @type {string}
     * @memberof WebhookCompactAllOf
     */
    'target'?: string;
}

