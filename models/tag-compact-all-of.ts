/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
 * @export
 * @interface TagCompactAllOf
 */
export interface TagCompactAllOf {
    /**
     * Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     * @type {string}
     * @memberof TagCompactAllOf
     */
    'name'?: string;
}

