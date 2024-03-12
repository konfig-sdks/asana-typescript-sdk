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
 * @interface AttachmentRequest
 */
export interface AttachmentRequest {
    /**
     * The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided. 
     * @type {string}
     * @memberof AttachmentRequest
     */
    'resource_subtype'?: AttachmentRequestResourceSubtypeEnum;
    /**
     * Required for `asana` attachments. 
     * @type {Uint8Array | File | buffer.File}
     * @memberof AttachmentRequest
     */
    'file'?: Uint8Array | File | buffer.File;
    /**
     * Required identifier of the parent task, project, or project_brief, as a string. 
     * @type {string}
     * @memberof AttachmentRequest
     */
    'parent': string;
    /**
     * The URL of the external resource being attached. Required for attachments of type `external`. 
     * @type {string}
     * @memberof AttachmentRequest
     */
    'url'?: string;
    /**
     * The name of the external resource being attached. Required for attachments of type `external`. 
     * @type {string}
     * @memberof AttachmentRequest
     */
    'name'?: string;
    /**
     * *Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in. 
     * @type {boolean}
     * @memberof AttachmentRequest
     */
    'connect_to_app'?: boolean;
}

type AttachmentRequestResourceSubtypeEnum = 'asana' | 'dropbox' | 'gdrive' | 'onedrive' | 'box' | 'vimeo' | 'external'

