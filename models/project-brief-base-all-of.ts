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
 * @interface ProjectBriefBaseAllOf
 */
export interface ProjectBriefBaseAllOf {
    /**
     * The title of the project brief.
     * @type {string}
     * @memberof ProjectBriefBaseAllOf
     */
    'title'?: string;
    /**
     * HTML formatted text for the project brief.
     * @type {string}
     * @memberof ProjectBriefBaseAllOf
     */
    'html_text'?: string;
}

