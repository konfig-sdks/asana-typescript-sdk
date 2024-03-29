/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BatchRequestAction } from './batch-request-action';

/**
 * A request object for use in a batch request.
 * @export
 * @interface BatchRequest
 */
export interface BatchRequest {
    /**
     * 
     * @type {Array<BatchRequestAction>}
     * @memberof BatchRequest
     */
    'actions'?: Array<BatchRequestAction>;
}

