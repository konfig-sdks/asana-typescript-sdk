/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EventsGetResourceEvents412ResponseErrorsInner } from './events-get-resource-events412-response-errors-inner';

/**
 * 
 * @export
 * @interface EventsGetResourceEvents412Response
 */
export interface EventsGetResourceEvents412Response {
    /**
     * 
     * @type {Array<EventsGetResourceEvents412ResponseErrorsInner>}
     * @memberof EventsGetResourceEvents412Response
     */
    'errors'?: Array<EventsGetResourceEvents412ResponseErrorsInner>;
    /**
     * A sync token to be used with the next call to the /events endpoint.
     * @type {string}
     * @memberof EventsGetResourceEvents412Response
     */
    'sync'?: string;
}

