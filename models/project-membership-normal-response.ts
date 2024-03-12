/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MemberCompact } from './member-compact';
import { ProjectCompact } from './project-compact';
import { ProjectMembershipCompact } from './project-membership-compact';
import { ProjectMembershipNormalResponseAllOf } from './project-membership-normal-response-all-of';
import { UserCompact } from './user-compact';

/**
 * @type ProjectMembershipNormalResponse
 * @export
 */
export type ProjectMembershipNormalResponse = ProjectMembershipCompact & ProjectMembershipNormalResponseAllOf;


