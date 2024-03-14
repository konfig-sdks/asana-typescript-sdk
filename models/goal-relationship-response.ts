/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { pact } from './pact';
import { Compact } from './compact';
import { GoalRelationshipBase } from './goal-relationship-base';

/**
 * 
 * @export
 * @interface GoalRelationshipResponse
 */
export interface GoalRelationshipResponse {
    /**
     * Globally unique identifier of the resource, as a string.
     * @type {string}
     * @memberof GoalRelationshipResponse
     */
    'gid'?: string;
    /**
     * The base type of this resource.
     * @type {string}
     * @memberof GoalRelationshipResponse
     */
    'resource_type'?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * @type {string}
     * @memberof GoalRelationshipResponse
     */
    'resource_subtype'?: GoalRelationshipResponseResourceSubtypeEnum;
    /**
     * 
     * @type {ProjectCompact & object}
     * @memberof GoalRelationshipResponse
     */
    'supporting_resource'?: ProjectCompact & object;
    /**
     * The weight that the supporting resource\'s progress contributes to the supported goal\'s progress. This can only be 0 or 1.
     * @type {number}
     * @memberof GoalRelationshipResponse
     */
    'contribution_weight'?: number;
    /**
     * 
     * @type {GoalCompact & object}
     * @memberof GoalRelationshipResponse
     */
    'supported_goal'?: GoalCompact & object;
}

type GoalRelationshipResponseResourceSubtypeEnum = 'subgoal' | 'supporting_work'


