/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhookFilter } from './webhook-filter';

/**
 * 
 * @export
 * @interface WebhookRequestFiltersInner
 */
export interface WebhookRequestFiltersInner {
    /**
     * The type of the resource which created the event when modified; for example, to filter to changes on regular tasks this field should be set to `task`.
     * @type {string}
     * @memberof WebhookRequestFiltersInner
     */
    'resource_type'?: string;
    /**
     * The resource subtype of the resource that the filter applies to. This should be set to the same value as is returned on the `resource_subtype` field on the resources themselves.
     * @type {string}
     * @memberof WebhookRequestFiltersInner
     */
    'resource_subtype'?: string;
    /**
     * The type of change on the **resource** to pass through the filter. For more information refer to `Event.action` in the [event](https://developers.asana.com/reference/rest-api-reference) schema. This can be one of `changed`, `added`, `removed`, `deleted`, and `undeleted` depending on the nature of what has occurred on the resource.
     * @type {string}
     * @memberof WebhookRequestFiltersInner
     */
    'action'?: string;
    /**
     * *Conditional.* A whitelist of fields for events which will pass the filter when the resource is changed. These can be any combination of the fields on the resources themselves. This field is only valid for `action` of type `changed`
     * @type {Array<string>}
     * @memberof WebhookRequestFiltersInner
     */
    'fields'?: Array<string>;
}

