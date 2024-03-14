/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { pact } from './pact';
import { CustomFieldCompact } from './custom-field-compact';
import { EnumOption } from './enum-option';
import { Like } from './like';
import { Preview } from './preview';
import { ProjectCompact } from './project-compact';
import { SectionCompact } from './section-compact';
import { StoryBase } from './story-base';
import { StoryCompact } from './story-compact';
import { StoryResponseAllOf } from './story-response-all-of';
import { StoryResponseDates } from './story-response-dates';
import { TagCompact } from './tag-compact';
import { TaskCompact } from './task-compact';
import { UserCompact } from './user-compact';

/**
 * @type StoryResponse
 * @export
 */
export type StoryResponse = StoryBase & StoryResponseAllOf;


