/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface RemoveFollowersRequest
 */
export interface RemoveFollowersRequest {
    /**
     * An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
     * @type {string}
     * @memberof RemoveFollowersRequest
     */
    'followers': string;
}

