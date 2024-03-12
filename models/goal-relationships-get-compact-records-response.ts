/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalRelationshipCompact } from './goal-relationship-compact';
import { NextPage } from './next-page';

/**
 * 
 * @export
 * @interface GoalRelationshipsGetCompactRecordsResponse
 */
export interface GoalRelationshipsGetCompactRecordsResponse {
    /**
     * 
     * @type {Array<GoalRelationshipCompact>}
     * @memberof GoalRelationshipsGetCompactRecordsResponse
     */
    'data'?: Array<GoalRelationshipCompact>;
    /**
     * 
     * @type {NextPage}
     * @memberof GoalRelationshipsGetCompactRecordsResponse
     */
    'next_page'?: NextPage | null;
}

