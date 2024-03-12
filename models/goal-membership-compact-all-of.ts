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
 * @interface GoalMembershipCompactAllOf
 */
export interface GoalMembershipCompactAllOf {
    /**
     * *Deprecated: new integrations should prefer the `role` field.* Describes if the member is comment only in goal.
     * @type {boolean}
     * @memberof GoalMembershipCompactAllOf
     * @deprecated
     */
    'is_commenter'?: boolean;
    /**
     * *Deprecated: new integrations should prefer the `role` field.* Describes if the member is editor in goal.
     * @type {boolean}
     * @memberof GoalMembershipCompactAllOf
     * @deprecated
     */
    'is_editor'?: boolean;
}

