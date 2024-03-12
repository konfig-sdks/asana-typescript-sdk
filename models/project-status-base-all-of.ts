/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ProjectStatusBaseAllOf
 */
export interface ProjectStatusBaseAllOf {
    /**
     * The text content of the status update.
     * @type {string}
     * @memberof ProjectStatusBaseAllOf
     */
    'text'?: string;
    /**
     * [Opt In](https://raw.githubusercontent.com). The text content of the status update with formatting as HTML.
     * @type {string}
     * @memberof ProjectStatusBaseAllOf
     */
    'html_text'?: string;
    /**
     * The color associated with the status update.
     * @type {string}
     * @memberof ProjectStatusBaseAllOf
     */
    'color'?: ProjectStatusBaseAllOfColorEnum;
}

type ProjectStatusBaseAllOfColorEnum = 'green' | 'yellow' | 'red' | 'blue' | 'complete'


