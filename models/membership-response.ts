/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { pact } from './pact';
import { pact } from './pact';
import { ceCompact } from './ce-compact';
import { GoalMembershipResponse } from './goal-membership-response';
import { MemberCompact } from './member-compact';
import { ProjectCompact } from './project-compact';
import { ProjectMembershipCompactResponse } from './project-membership-compact-response';

/**
 * @type MembershipResponse
 * @export
 */
export type MembershipResponse = GoalMembershipResponse | ProjectMembershipCompactResponse;

