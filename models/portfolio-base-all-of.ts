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
 * @interface PortfolioBaseAllOf
 */
export interface PortfolioBaseAllOf {
    /**
     * Color of the portfolio.
     * @type {string}
     * @memberof PortfolioBaseAllOf
     */
    'color'?: PortfolioBaseAllOfColorEnum;
}

type PortfolioBaseAllOfColorEnum = 'dark-pink' | 'dark-green' | 'dark-blue' | 'dark-red' | 'dark-teal' | 'dark-brown' | 'dark-orange' | 'dark-purple' | 'dark-warm-gray' | 'light-pink' | 'light-green' | 'light-blue' | 'light-red' | 'light-teal' | 'light-brown' | 'light-orange' | 'light-purple' | 'light-warm-gray'


