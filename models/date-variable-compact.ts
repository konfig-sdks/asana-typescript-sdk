/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface DateVariableCompact
 */
export interface DateVariableCompact {
    /**
     * The description of what the date variable is used for when instantiating a project.
     * @type {string}
     * @memberof DateVariableCompact
     */
    'description'?: string;
    /**
     * Globally unique identifier of the date field in the project template. A value of `1` refers to the project start date, while `2` refers to the project due date.
     * @type {string}
     * @memberof DateVariableCompact
     */
    'gid'?: string;
    /**
     * The name of the date variable.
     * @type {string}
     * @memberof DateVariableCompact
     */
    'name'?: string;
}

