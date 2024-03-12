/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { pact } from './pact';

/**
 * 
 * @export
 * @interface AttachmentResponseAllOf
 */
export interface AttachmentResponseAllOf {
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof AttachmentResponseAllOf
     */
    'created_at'?: string;
    /**
     * The URL containing the content of the attachment. *Note:* May be null if the attachment is hosted by [Box](https://www.box.com/) and will be null if the attachment is a Video Message hosted by [Vimeo](https://vimeo.com/). If present, this URL may only be valid for two minutes from the time of retrieval. You should avoid persisting this URL somewhere and just refresh it on demand to ensure you do not keep stale URLs.
     * @type {string}
     * @memberof AttachmentResponseAllOf
     */
    'download_url'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttachmentResponseAllOf
     */
    'permanent_url'?: string | null;
    /**
     * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, and `vimeo`.
     * @type {string}
     * @memberof AttachmentResponseAllOf
     */
    'host'?: string;
    /**
     * 
     * @type {TaskCompact & object}
     * @memberof AttachmentResponseAllOf
     */
    'parent'?: TaskCompact & object;
    /**
     * The size of the attachment in bytes. Only present when the `resource_subtype` is `asana`.
     * @type {number}
     * @memberof AttachmentResponseAllOf
     */
    'size'?: number;
    /**
     * The URL where the attachment can be viewed, which may be friendlier to users in a browser than just directing them to a raw file. May be null if no view URL exists for the service.
     * @type {string}
     * @memberof AttachmentResponseAllOf
     */
    'view_url'?: string | null;
    /**
     * Whether the attachment is connected to the app making the request for the purposes of showing an app components widget. Only present when the `resource_subtype` is `external` or `gdrive`.
     * @type {boolean}
     * @memberof AttachmentResponseAllOf
     */
    'connected_to_app'?: boolean;
}
