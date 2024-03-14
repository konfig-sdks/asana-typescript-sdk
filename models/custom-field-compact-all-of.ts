/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ion } from './ion';
import { CustomFieldCompactAllOfDateValue } from './custom-field-compact-all-of-date-value';
import { EnumOption } from './enum-option';

/**
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [custom fields](https://raw.githubusercontent.com) developer documentation for more information about how custom fields relate to various resources in Asana.  Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
 * @export
 * @interface CustomFieldCompactAllOf
 */
export interface CustomFieldCompactAllOf {
    /**
     * The name of the custom field.
     * @type {string}
     * @memberof CustomFieldCompactAllOf
     */
    'name'?: string;
    /**
     * The type of the custom field. Must be one of the given values. 
     * @type {string}
     * @memberof CustomFieldCompactAllOf
     */
    'resource_subtype'?: CustomFieldCompactAllOfResourceSubtypeEnum;
    /**
     * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values. 
     * @type {string}
     * @memberof CustomFieldCompactAllOf
     */
    'type'?: CustomFieldCompactAllOfTypeEnum;
    /**
     * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](https://raw.githubusercontent.com).
     * @type {Array<EnumOption>}
     * @memberof CustomFieldCompactAllOf
     */
    'enum_options'?: Array<EnumOption>;
    /**
     * *Conditional*. Determines if the custom field is enabled or not.
     * @type {boolean}
     * @memberof CustomFieldCompactAllOf
     */
    'enabled'?: boolean;
    /**
     * This field tells the type of the custom field.
     * @type {string}
     * @memberof CustomFieldCompactAllOf
     */
    'representation_type'?: CustomFieldCompactAllOfRepresentationTypeEnum;
    /**
     * This field is the unique custom ID string for the custom field.
     * @type {string}
     * @memberof CustomFieldCompactAllOf
     */
    'id_prefix'?: string | null;
    /**
     * *Conditional*. This flag describes whether a custom field is a formula custom field.
     * @type {boolean}
     * @memberof CustomFieldCompactAllOf
     */
    'is_formula_field'?: boolean;
    /**
     * 
     * @type {CustomFieldCompactAllOfDateValue}
     * @memberof CustomFieldCompactAllOf
     */
    'date_value'?: CustomFieldCompactAllOfDateValue | null;
    /**
     * 
     * @type {EnumOption & object}
     * @memberof CustomFieldCompactAllOf
     */
    'enum_value'?: EnumOption & object;
    /**
     * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
     * @type {Array<EnumOption>}
     * @memberof CustomFieldCompactAllOf
     */
    'multi_enum_values'?: Array<EnumOption>;
    /**
     * *Conditional*. This number is the value of a `number` custom field.
     * @type {number}
     * @memberof CustomFieldCompactAllOf
     */
    'number_value'?: number | null;
    /**
     * *Conditional*. This string is the value of a `text` custom field.
     * @type {string}
     * @memberof CustomFieldCompactAllOf
     */
    'text_value'?: string | null;
    /**
     * A string representation for the value of the custom field. Integrations that don\'t require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
     * @type {string}
     * @memberof CustomFieldCompactAllOf
     */
    'display_value'?: string | null;
}

type CustomFieldCompactAllOfResourceSubtypeEnum = 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people'
type CustomFieldCompactAllOfTypeEnum = 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people'
type CustomFieldCompactAllOfRepresentationTypeEnum = 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | 'formula' | 'custom_id'


