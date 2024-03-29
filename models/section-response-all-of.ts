/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectCompact } from './project-compact';

/**
 * 
 * @export
 * @interface SectionResponseAllOf
 */
export interface SectionResponseAllOf {
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof SectionResponseAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {ProjectCompact}
     * @memberof SectionResponseAllOf
     */
    'project'?: ProjectCompact;
    /**
     * *Deprecated - please use project instead*
     * @type {Array<ProjectCompact>}
     * @memberof SectionResponseAllOf
     */
    'projects'?: Array<ProjectCompact>;
}

