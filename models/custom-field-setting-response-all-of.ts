/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ieldResponse } from './ield-response';
import { Compact } from './compact';

/**
 * 
 * @export
 * @interface CustomFieldSettingResponseAllOf
 */
export interface CustomFieldSettingResponseAllOf {
    /**
     * 
     * @type {ProjectCompact & object}
     * @memberof CustomFieldSettingResponseAllOf
     */
    'project'?: ProjectCompact & object;
    /**
     * `is_important` is used in the Asana web application to determine if this custom field is displayed in the list/grid view of a project or portfolio.
     * @type {boolean}
     * @memberof CustomFieldSettingResponseAllOf
     */
    'is_important'?: boolean;
    /**
     * 
     * @type {ProjectCompact & object}
     * @memberof CustomFieldSettingResponseAllOf
     */
    'parent'?: ProjectCompact & object;
    /**
     * 
     * @type {CustomFieldResponse & object}
     * @memberof CustomFieldSettingResponseAllOf
     */
    'custom_field'?: CustomFieldResponse & object;
}
