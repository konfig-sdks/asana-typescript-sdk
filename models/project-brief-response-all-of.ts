/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Compact } from './compact';

/**
 * 
 * @export
 * @interface ProjectBriefResponseAllOf
 */
export interface ProjectBriefResponseAllOf {
    /**
     * [Opt In](https://raw.githubusercontent.com). The plain text of the project brief.
     * @type {string}
     * @memberof ProjectBriefResponseAllOf
     */
    'text'?: string;
    /**
     * A url that points directly to the object within Asana.
     * @type {string}
     * @memberof ProjectBriefResponseAllOf
     */
    'permalink_url'?: string;
    /**
     * 
     * @type {ProjectCompact & object}
     * @memberof ProjectBriefResponseAllOf
     */
    'project'?: ProjectCompact & object;
}

