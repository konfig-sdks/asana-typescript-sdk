/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserBaseResponse } from './user-base-response';
import { UserBaseResponseAllOfPhoto } from './user-base-response-all-of-photo';
import { UserResponseAllOf } from './user-response-all-of';
import { WorkspaceCompact } from './workspace-compact';

/**
 * @type UserResponse
 * @export
 */
export type UserResponse = UserBaseResponse & UserResponseAllOf;

