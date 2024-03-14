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
 * @interface TaskSetParentRequest
 */
export interface TaskSetParentRequest {
    /**
     * The new parent of the task, or `null` for no parent.
     * @type {string}
     * @memberof TaskSetParentRequest
     */
    'parent': string;
    /**
     * A subtask of the parent to insert the task after, or `null` to insert at the beginning of the list.
     * @type {string}
     * @memberof TaskSetParentRequest
     */
    'insert_after'?: string;
    /**
     * A subtask of the parent to insert the task before, or `null` to insert at the end of the list.
     * @type {string}
     * @memberof TaskSetParentRequest
     */
    'insert_before'?: string;
}

