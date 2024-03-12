/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserCompact } from './user-compact';
import { WorkspaceCompact } from './workspace-compact';

/**
 * 
 * @export
 * @interface TagResponseAllOf
 */
export interface TagResponseAllOf {
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof TagResponseAllOf
     */
    'created_at'?: string;
    /**
     * Array of users following this tag.
     * @type {Array<UserCompact>}
     * @memberof TagResponseAllOf
     */
    'followers'?: Array<UserCompact>;
    /**
     * 
     * @type {WorkspaceCompact}
     * @memberof TagResponseAllOf
     */
    'workspace'?: WorkspaceCompact;
    /**
     * A url that points directly to the object within Asana.
     * @type {string}
     * @memberof TagResponseAllOf
     */
    'permalink_url'?: string;
}
