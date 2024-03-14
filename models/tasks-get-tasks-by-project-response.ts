/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NextPage } from './next-page';
import { TaskCompact } from './task-compact';

/**
 * 
 * @export
 * @interface TasksGetTasksByProjectResponse
 */
export interface TasksGetTasksByProjectResponse {
    /**
     * 
     * @type {Array<TaskCompact>}
     * @memberof TasksGetTasksByProjectResponse
     */
    'data'?: Array<TaskCompact>;
    /**
     * 
     * @type {NextPage}
     * @memberof TasksGetTasksByProjectResponse
     */
    'next_page'?: NextPage | null;
}

