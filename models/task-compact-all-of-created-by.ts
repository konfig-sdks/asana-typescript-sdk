/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * [Opt In](https://raw.githubusercontent.com). A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 * @export
 * @interface TaskCompactAllOfCreatedBy
 */
export interface TaskCompactAllOfCreatedBy {
    /**
     * Globally unique identifier of the resource.
     * @type {string}
     * @memberof TaskCompactAllOfCreatedBy
     */
    'gid'?: string;
    /**
     * The type of resource.
     * @type {string}
     * @memberof TaskCompactAllOfCreatedBy
     */
    'resource_type'?: string;
}

