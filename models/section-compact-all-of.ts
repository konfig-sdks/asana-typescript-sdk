/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
 * @export
 * @interface SectionCompactAllOf
 */
export interface SectionCompactAllOf {
    /**
     * The name of the section (i.e. the text displayed as the section header).
     * @type {string}
     * @memberof SectionCompactAllOf
     */
    'name'?: string;
}
