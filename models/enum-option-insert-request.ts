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
 * @interface EnumOptionInsertRequest
 */
export interface EnumOptionInsertRequest {
    /**
     * The gid of the enum option to relocate.
     * @type {string}
     * @memberof EnumOptionInsertRequest
     */
    'enum_option': string;
    /**
     * An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
     * @type {string}
     * @memberof EnumOptionInsertRequest
     */
    'before_enum_option'?: string;
    /**
     * An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
     * @type {string}
     * @memberof EnumOptionInsertRequest
     */
    'after_enum_option'?: string;
}

