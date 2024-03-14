/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GoalCompact } from './goal-compact';
import { NextPage } from './next-page';

/**
 * 
 * @export
 * @interface GoalsGetCompactRecordsResponse
 */
export interface GoalsGetCompactRecordsResponse {
    /**
     * 
     * @type {Array<GoalCompact>}
     * @memberof GoalsGetCompactRecordsResponse
     */
    'data'?: Array<GoalCompact>;
    /**
     * 
     * @type {NextPage}
     * @memberof GoalsGetCompactRecordsResponse
     */
    'next_page'?: NextPage | null;
}

