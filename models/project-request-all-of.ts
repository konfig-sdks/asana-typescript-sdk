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
 * @interface ProjectRequestAllOf
 */
export interface ProjectRequestAllOf {
    /**
     * An object where each key is the GID of a custom field and its corresponding value is either an enum GID, string, number, or object (depending on the custom field type). See the [custom fields guide](https://raw.githubusercontent.com) for details on creating and updating custom field values.
     * @type {{ [key: string]: string; }}
     * @memberof ProjectRequestAllOf
     */
    'custom_fields'?: { [key: string]: string; };
    /**
     * *Create-only*. Comma separated string of users. Followers are a subset of members who have opted in to receive \"tasks added\" notifications for a project.
     * @type {string}
     * @memberof ProjectRequestAllOf
     */
    'followers'?: string;
    /**
     * The current owner of the project, may be null.
     * @type {string}
     * @memberof ProjectRequestAllOf
     */
    'owner'?: string | null;
    /**
     * The team that this project is shared with.
     * @type {string}
     * @memberof ProjectRequestAllOf
     */
    'team'?: string;
    /**
     * The `gid` of a workspace.
     * @type {string}
     * @memberof ProjectRequestAllOf
     */
    'workspace'?: string;
}

