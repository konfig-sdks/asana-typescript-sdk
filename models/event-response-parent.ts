/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AsanaNamedResource } from './asana-named-resource';

/**
 * 
 * @export
 * @interface EventResponseParent
 */
export interface EventResponseParent {
    /**
     * Globally unique identifier of the resource, as a string.
     * @type {string}
     * @memberof EventResponseParent
     */
    'gid'?: string;
    /**
     * The base type of this resource.
     * @type {string}
     * @memberof EventResponseParent
     */
    'resource_type'?: string;
    /**
     * The name of the object.
     * @type {string}
     * @memberof EventResponseParent
     */
    'name'?: string;
}

