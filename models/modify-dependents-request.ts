/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A set of dependent tasks.
 * @export
 * @interface ModifyDependentsRequest
 */
export interface ModifyDependentsRequest {
    /**
     * An array of task gids that are dependents of the given task.
     * @type {Array<string>}
     * @memberof ModifyDependentsRequest
     */
    'dependents'?: Array<string>;
}

