/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectDuplicateRequestScheduleDates } from './project-duplicate-request-schedule-dates';

/**
 * 
 * @export
 * @interface ProjectDuplicateRequest
 */
export interface ProjectDuplicateRequest {
    /**
     * The name of the new project.
     * @type {string}
     * @memberof ProjectDuplicateRequest
     */
    'name': string;
    /**
     * Sets the team of the new project. If team is not defined, the new project will be in the same team as the the original project.
     * @type {string}
     * @memberof ProjectDuplicateRequest
     */
    'team'?: string;
    /**
     * A comma-separated list of elements that will be duplicated to the new project. Tasks are always included. ##### Fields - allocations - forms - members - notes - task_assignee - task_attachments - task_dates - task_dependencies - task_followers - task_notes - task_projects - task_subtasks - task_tags
     * @type {string}
     * @memberof ProjectDuplicateRequest
     */
    'include'?: string;
    /**
     * 
     * @type {ProjectDuplicateRequestScheduleDates}
     * @memberof ProjectDuplicateRequest
     */
    'schedule_dates'?: ProjectDuplicateRequestScheduleDates;
}

