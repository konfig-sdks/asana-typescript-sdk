/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ceCompact } from './ce-compact';

/**
 * 
 * @export
 * @interface TeamResponseAllOf
 */
export interface TeamResponseAllOf {
    /**
     * [Opt In](https://raw.githubusercontent.com). The description of the team. 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'description'?: string;
    /**
     * [Opt In](https://raw.githubusercontent.com). The description of the team with formatting as HTML. 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'html_description'?: string;
    /**
     * 
     * @type {WorkspaceCompact & object}
     * @memberof TeamResponseAllOf
     */
    'organization'?: WorkspaceCompact & object;
    /**
     * A url that points directly to the object within Asana.
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'permalink_url'?: string;
    /**
     * The visibility of the team to users in the same organization 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'visibility'?: TeamResponseAllOfVisibilityEnum;
    /**
     * Controls who can edit team name and description 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'edit_team_name_or_description_access_level'?: TeamResponseAllOfEditTeamNameOrDescriptionAccessLevelEnum;
    /**
     * Controls who can edit team visibility and trash teams 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'edit_team_visibility_or_trash_team_access_level'?: TeamResponseAllOfEditTeamVisibilityOrTrashTeamAccessLevelEnum;
    /**
     * Controls who can accept or deny member invites for a given team 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'member_invite_management_access_level'?: TeamResponseAllOfMemberInviteManagementAccessLevelEnum;
    /**
     * Controls who can accept or deny guest invites for a given team 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'guest_invite_management_access_level'?: TeamResponseAllOfGuestInviteManagementAccessLevelEnum;
    /**
     * Controls who can accept or deny join team requests for a Membership by Request team 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'join_request_management_access_level'?: TeamResponseAllOfJoinRequestManagementAccessLevelEnum;
    /**
     * Controls who can remove team members 
     * @type {string}
     * @memberof TeamResponseAllOf
     */
    'team_member_removal_access_level'?: TeamResponseAllOfTeamMemberRemovalAccessLevelEnum;
}

type TeamResponseAllOfVisibilityEnum = 'secret' | 'request_to_join' | 'public'
type TeamResponseAllOfEditTeamNameOrDescriptionAccessLevelEnum = 'all_team_members' | 'only_team_admins'
type TeamResponseAllOfEditTeamVisibilityOrTrashTeamAccessLevelEnum = 'all_team_members' | 'only_team_admins'
type TeamResponseAllOfMemberInviteManagementAccessLevelEnum = 'all_team_members' | 'only_team_admins'
type TeamResponseAllOfGuestInviteManagementAccessLevelEnum = 'all_team_members' | 'only_team_admins'
type TeamResponseAllOfJoinRequestManagementAccessLevelEnum = 'all_team_members' | 'only_team_admins'
type TeamResponseAllOfTeamMemberRemovalAccessLevelEnum = 'all_team_members' | 'only_team_admins'

