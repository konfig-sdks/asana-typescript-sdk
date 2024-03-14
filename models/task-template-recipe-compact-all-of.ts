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
 * @interface TaskTemplateRecipeCompactAllOf
 */
export interface TaskTemplateRecipeCompactAllOf {
    /**
     * Name of the task that will be created from this template.
     * @type {string}
     * @memberof TaskTemplateRecipeCompactAllOf
     */
    'name'?: string;
    /**
     * The subtype of the task that will be created from this template.
     * @type {string}
     * @memberof TaskTemplateRecipeCompactAllOf
     */
    'task_resource_subtype'?: TaskTemplateRecipeCompactAllOfTaskResourceSubtypeEnum;
}

type TaskTemplateRecipeCompactAllOfTaskResourceSubtypeEnum = 'default_task' | 'milestone_task' | 'approval_task'


