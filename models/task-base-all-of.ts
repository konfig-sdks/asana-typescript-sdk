/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AsanaResource } from './asana-resource';
import { Like } from './like';
import { TaskBaseAllOfExternal } from './task-base-all-of-external';
import { TaskBaseAllOfMemberships } from './task-base-all-of-memberships';
import { UserCompact } from './user-compact';

/**
 * 
 * @export
 * @interface TaskBaseAllOf
 */
export interface TaskBaseAllOf {
    /**
     * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'approval_status'?: TaskBaseAllOfApprovalStatusEnum;
    /**
     * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to \"inbox\" or \"upcoming\" inserts it at the top of the section, while the other options will insert at the bottom.
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'assignee_status'?: TaskBaseAllOfAssigneeStatusEnum;
    /**
     * True if the task is currently marked complete, false if not.
     * @type {boolean}
     * @memberof TaskBaseAllOf
     */
    'completed'?: boolean;
    /**
     * The time at which this task was completed, or null if the task is incomplete.
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'completed_at'?: string | null;
    /**
     * 
     * @type {UserCompact}
     * @memberof TaskBaseAllOf
     */
    'completed_by'?: UserCompact;
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'created_at'?: string;
    /**
     * [Opt In](https://developers.asana.com/reference/rest-api-reference). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.
     * @type {Array<AsanaResource>}
     * @memberof TaskBaseAllOf
     */
    'dependencies'?: Array<AsanaResource>;
    /**
     * [Opt In](https://developers.asana.com/reference/rest-api-reference). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.
     * @type {Array<AsanaResource>}
     * @memberof TaskBaseAllOf
     */
    'dependents'?: Array<AsanaResource>;
    /**
     * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'due_at'?: string | null;
    /**
     * The localized date on which this task is due, or null if the task has no due date. This takes a date with `YYYY-MM-DD` format and should not be used together with `due_at`.
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'due_on'?: string | null;
    /**
     * 
     * @type {TaskBaseAllOfExternal}
     * @memberof TaskBaseAllOf
     */
    'external'?: TaskBaseAllOfExternal;
    /**
     * [Opt In](https://developers.asana.com/reference/rest-api-reference). The notes of the text with formatting as HTML.
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'html_notes'?: string;
    /**
     * *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.
     * @type {boolean}
     * @memberof TaskBaseAllOf
     */
    'hearted'?: boolean;
    /**
     * *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
     * @type {Array<Like>}
     * @memberof TaskBaseAllOf
     */
    'hearts'?: Array<Like>;
    /**
     * [Opt In](https://developers.asana.com/reference/rest-api-reference). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](https://developers.asana.com/reference/rest-api-reference) without being true `section` objects. If a `task` object is rendered this way in any context it will have the property `is_rendered_as_separator` set to `true`.
     * @type {boolean}
     * @memberof TaskBaseAllOf
     */
    'is_rendered_as_separator'?: boolean;
    /**
     * True if the task is liked by the authorized user, false if not.
     * @type {boolean}
     * @memberof TaskBaseAllOf
     */
    'liked'?: boolean;
    /**
     * Array of likes for users who have liked this task.
     * @type {Array<Like>}
     * @memberof TaskBaseAllOf
     */
    'likes'?: Array<Like>;
    /**
     * *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the `addProject` and `removeProject` endpoints. Note that over time, more types of memberships may be added to this property.
     * @type {Array<TaskBaseAllOfMemberships>}
     * @memberof TaskBaseAllOf
     */
    'memberships'?: Array<TaskBaseAllOfMemberships>;
    /**
     * The time at which this task was last modified.  The following conditions will change `modified_at`:  - story is created on a task - story is trashed on a task - attachment is trashed on a task - task is assigned or unassigned - custom field value is changed - the task itself is trashed - Or if any of the following fields are updated:   - completed   - name   - due_date   - description   - attachments   - items   - schedule_status  The following conditions will _not_ change `modified_at`:  - moving to a new container (project, portfolio, etc) - comments being added to the task (but the stories they generate   _will_ affect `modified_at`)
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'modified_at'?: string;
    /**
     * Name of the task. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'name'?: string;
    /**
     * Free-form textual information associated with the task (i.e. its description).
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'notes'?: string;
    /**
     * *Deprecated - please use likes instead* The number of users who have hearted this task.
     * @type {number}
     * @memberof TaskBaseAllOf
     */
    'num_hearts'?: number;
    /**
     * The number of users who have liked this task.
     * @type {number}
     * @memberof TaskBaseAllOf
     */
    'num_likes'?: number;
    /**
     * [Opt In](https://developers.asana.com/reference/rest-api-reference). The number of subtasks on this task. 
     * @type {number}
     * @memberof TaskBaseAllOf
     */
    'num_subtasks'?: number;
    /**
     * Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with `start_on`. *Note: `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'start_at'?: string | null;
    /**
     * The day on which work begins for the task , or null if the task has no start date. This takes a date with `YYYY-MM-DD` format and should not be used together with `start_at`. *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*
     * @type {string}
     * @memberof TaskBaseAllOf
     */
    'start_on'?: string | null;
    /**
     * This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task. It is represented as a nullable long value.
     * @type {number}
     * @memberof TaskBaseAllOf
     */
    'actual_time_minutes'?: number | null;
}

type TaskBaseAllOfApprovalStatusEnum = 'pending' | 'approved' | 'rejected' | 'changes_requested'
type TaskBaseAllOfAssigneeStatusEnum = 'today' | 'upcoming' | 'later' | 'new' | 'inbox'


