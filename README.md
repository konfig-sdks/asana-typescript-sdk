<div align="left">

[![Visit Asana](./header.png)](https://asana.com)

# [Asana](https://asana.com)<a id="asana"></a>

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`asana.attachments.deleteSpecific`](#asanaattachmentsdeletespecific)
  * [`asana.attachments.getAllForObject`](#asanaattachmentsgetallforobject)
  * [`asana.attachments.getAttachmentRecord`](#asanaattachmentsgetattachmentrecord)
  * [`asana.attachments.uploadAttachment`](#asanaattachmentsuploadattachment)
  * [`asana.auditLogApi.getAuditLogEvents`](#asanaauditlogapigetauditlogevents)
  * [`asana.batchApi.submitParallelRequests`](#asanabatchapisubmitparallelrequests)
  * [`asana.customFieldSettings.getPortfolioCustomFieldSettings`](#asanacustomfieldsettingsgetportfoliocustomfieldsettings)
  * [`asana.customFieldSettings.getProjectCustomFieldSettings`](#asanacustomfieldsettingsgetprojectcustomfieldsettings)
  * [`asana.customFields.addEnumOption`](#asanacustomfieldsaddenumoption)
  * [`asana.customFields.createNewFieldRecord`](#asanacustomfieldscreatenewfieldrecord)
  * [`asana.customFields.deleteFieldRecord`](#asanacustomfieldsdeletefieldrecord)
  * [`asana.customFields.getMetadata`](#asanacustomfieldsgetmetadata)
  * [`asana.customFields.listWorkspaceCustomFields`](#asanacustomfieldslistworkspacecustomfields)
  * [`asana.customFields.reorderEnumOption`](#asanacustomfieldsreorderenumoption)
  * [`asana.customFields.updateEnumOption`](#asanacustomfieldsupdateenumoption)
  * [`asana.customFields.updateFieldRecord`](#asanacustomfieldsupdatefieldrecord)
  * [`asana.events.getResourceEvents`](#asanaeventsgetresourceevents)
  * [`asana.goalRelationships.createSupportingRelationship`](#asanagoalrelationshipscreatesupportingrelationship)
  * [`asana.goalRelationships.getCompactRecords`](#asanagoalrelationshipsgetcompactrecords)
  * [`asana.goalRelationships.getRecordById`](#asanagoalrelationshipsgetrecordbyid)
  * [`asana.goalRelationships.removeSupportingRelationship`](#asanagoalrelationshipsremovesupportingrelationship)
  * [`asana.goalRelationships.updateGoalRelationshipRecord`](#asanagoalrelationshipsupdategoalrelationshiprecord)
  * [`asana.goals.addCollaboratorsToGoal`](#asanagoalsaddcollaboratorstogoal)
  * [`asana.goals.createMetric`](#asanagoalscreatemetric)
  * [`asana.goals.createNewGoalRecord`](#asanagoalscreatenewgoalrecord)
  * [`asana.goals.deleteRecord`](#asanagoalsdeleterecord)
  * [`asana.goals.getCompactRecords`](#asanagoalsgetcompactrecords)
  * [`asana.goals.getGoalRecord`](#asanagoalsgetgoalrecord)
  * [`asana.goals.getParentGoals`](#asanagoalsgetparentgoals)
  * [`asana.goals.removeFollowersFromGoal`](#asanagoalsremovefollowersfromgoal)
  * [`asana.goals.updateGoalRecord`](#asanagoalsupdategoalrecord)
  * [`asana.goals.updateMetricCurrentValue`](#asanagoalsupdatemetriccurrentvalue)
  * [`asana.jobs.getById`](#asanajobsgetbyid)
  * [`asana.memberships.createNewRecord`](#asanamembershipscreatenewrecord)
  * [`asana.memberships.deleteRecord`](#asanamembershipsdeleterecord)
  * [`asana.memberships.getMembershipRecord`](#asanamembershipsgetmembershiprecord)
  * [`asana.memberships.getMultiple`](#asanamembershipsgetmultiple)
  * [`asana.organizationExports.createExportRequest`](#asanaorganizationexportscreateexportrequest)
  * [`asana.organizationExports.getExportDetails`](#asanaorganizationexportsgetexportdetails)
  * [`asana.portfolioMemberships.getCompact`](#asanaportfoliomembershipsgetcompact)
  * [`asana.portfolioMemberships.getCompleteRecord`](#asanaportfoliomembershipsgetcompleterecord)
  * [`asana.portfolioMemberships.listMultipleMemberships`](#asanaportfoliomembershipslistmultiplememberships)
  * [`asana.portfolios.addCustomFieldSetting`](#asanaportfoliosaddcustomfieldsetting)
  * [`asana.portfolios.addMembersToPortfolio`](#asanaportfoliosaddmemberstoportfolio)
  * [`asana.portfolios.addPortfolioItem`](#asanaportfoliosaddportfolioitem)
  * [`asana.portfolios.createNewPortfolioRecord`](#asanaportfolioscreatenewportfoliorecord)
  * [`asana.portfolios.deleteRecord`](#asanaportfoliosdeleterecord)
  * [`asana.portfolios.getItems`](#asanaportfoliosgetitems)
  * [`asana.portfolios.getRecord`](#asanaportfoliosgetrecord)
  * [`asana.portfolios.listMultiplePortfolios`](#asanaportfolioslistmultipleportfolios)
  * [`asana.portfolios.removeCustomFieldSetting`](#asanaportfoliosremovecustomfieldsetting)
  * [`asana.portfolios.removeItemFromPortfolio`](#asanaportfoliosremoveitemfromportfolio)
  * [`asana.portfolios.removeMembersFromPortfolio`](#asanaportfoliosremovemembersfromportfolio)
  * [`asana.portfolios.updatePortfolioRecord`](#asanaportfoliosupdateportfoliorecord)
  * [`asana.projectBriefs.createNewRecord`](#asanaprojectbriefscreatenewrecord)
  * [`asana.projectBriefs.getFullRecord`](#asanaprojectbriefsgetfullrecord)
  * [`asana.projectBriefs.removeBrief`](#asanaprojectbriefsremovebrief)
  * [`asana.projectBriefs.updateBriefRecord`](#asanaprojectbriefsupdatebriefrecord)
  * [`asana.projectMemberships.getCompactRecords`](#asanaprojectmembershipsgetcompactrecords)
  * [`asana.projectMemberships.getRecord`](#asanaprojectmembershipsgetrecord)
  * [`asana.projectStatuses.createNewStatusUpdateRecord`](#asanaprojectstatusescreatenewstatusupdaterecord)
  * [`asana.projectStatuses.deleteSpecificStatusUpdate`](#asanaprojectstatusesdeletespecificstatusupdate)
  * [`asana.projectStatuses.getProjectUpdates`](#asanaprojectstatusesgetprojectupdates)
  * [`asana.projectStatuses.getStatusUpdateRecord`](#asanaprojectstatusesgetstatusupdaterecord)
  * [`asana.projectTemplates.deleteTemplateRecord`](#asanaprojecttemplatesdeletetemplaterecord)
  * [`asana.projectTemplates.getAllTemplateRecords`](#asanaprojecttemplatesgetalltemplaterecords)
  * [`asana.projectTemplates.getRecord`](#asanaprojecttemplatesgetrecord)
  * [`asana.projectTemplates.instantiateProjectJob`](#asanaprojecttemplatesinstantiateprojectjob)
  * [`asana.projectTemplates.listMultiple`](#asanaprojecttemplateslistmultiple)
  * [`asana.projects.addCustomFieldSetting`](#asanaprojectsaddcustomfieldsetting)
  * [`asana.projects.addFollowersToProject`](#asanaprojectsaddfollowerstoproject)
  * [`asana.projects.addMembersToProject`](#asanaprojectsaddmemberstoproject)
  * [`asana.projects.createInWorkspace`](#asanaprojectscreateinworkspace)
  * [`asana.projects.createNewProjectRecord`](#asanaprojectscreatenewprojectrecord)
  * [`asana.projects.createProjectForTeam`](#asanaprojectscreateprojectforteam)
  * [`asana.projects.createProjectTemplateJob`](#asanaprojectscreateprojecttemplatejob)
  * [`asana.projects.deleteProjectById`](#asanaprojectsdeleteprojectbyid)
  * [`asana.projects.duplicateProjectJob`](#asanaprojectsduplicateprojectjob)
  * [`asana.projects.getAllInWorkspace`](#asanaprojectsgetallinworkspace)
  * [`asana.projects.getProjectRecord`](#asanaprojectsgetprojectrecord)
  * [`asana.projects.getTaskCounts`](#asanaprojectsgettaskcounts)
  * [`asana.projects.getTeamProjects`](#asanaprojectsgetteamprojects)
  * [`asana.projects.listMultiple`](#asanaprojectslistmultiple)
  * [`asana.projects.removeCustomField`](#asanaprojectsremovecustomfield)
  * [`asana.projects.removeMembersFromProject`](#asanaprojectsremovemembersfromproject)
  * [`asana.projects.removeProjectFollowers`](#asanaprojectsremoveprojectfollowers)
  * [`asana.projects.taskProjectsList`](#asanaprojectstaskprojectslist)
  * [`asana.projects.updateProjectRecord`](#asanaprojectsupdateprojectrecord)
  * [`asana.rules.triggerRuleRequest`](#asanarulestriggerrulerequest)
  * [`asana.sections.addTaskToSection`](#asanasectionsaddtasktosection)
  * [`asana.sections.createNewSection`](#asanasectionscreatenewsection)
  * [`asana.sections.deleteSection`](#asanasectionsdeletesection)
  * [`asana.sections.getRecord`](#asanasectionsgetrecord)
  * [`asana.sections.listProjectSections`](#asanasectionslistprojectsections)
  * [`asana.sections.moveOrInsert`](#asanasectionsmoveorinsert)
  * [`asana.sections.updateSectionRecord`](#asanasectionsupdatesectionrecord)
  * [`asana.statusUpdates.createNewStatusUpdateRecord`](#asanastatusupdatescreatenewstatusupdaterecord)
  * [`asana.statusUpdates.deleteSpecificStatusUpdate`](#asanastatusupdatesdeletespecificstatusupdate)
  * [`asana.statusUpdates.getCompactRecords`](#asanastatusupdatesgetcompactrecords)
  * [`asana.statusUpdates.getRecordById`](#asanastatusupdatesgetrecordbyid)
  * [`asana.stories.createComment`](#asanastoriescreatecomment)
  * [`asana.stories.deleteStoryRecord`](#asanastoriesdeletestoryrecord)
  * [`asana.stories.getFullRecord`](#asanastoriesgetfullrecord)
  * [`asana.stories.getTaskStories`](#asanastoriesgettaskstories)
  * [`asana.stories.updateFullRecord`](#asanastoriesupdatefullrecord)
  * [`asana.tags.createNewTagRecord`](#asanatagscreatenewtagrecord)
  * [`asana.tags.createTagInWorkspace`](#asanatagscreatetaginworkspace)
  * [`asana.tags.getFilteredTags`](#asanatagsgetfilteredtags)
  * [`asana.tags.getRecord`](#asanatagsgetrecord)
  * [`asana.tags.getTaskTags`](#asanatagsgettasktags)
  * [`asana.tags.listFilteredTags`](#asanatagslistfilteredtags)
  * [`asana.tags.removeTag`](#asanatagsremovetag)
  * [`asana.tags.updateTagRecord`](#asanatagsupdatetagrecord)
  * [`asana.taskTemplates.deleteTaskTemplate`](#asanatasktemplatesdeletetasktemplate)
  * [`asana.taskTemplates.getSingleTemplate`](#asanatasktemplatesgetsingletemplate)
  * [`asana.taskTemplates.instantiateTaskJob`](#asanatasktemplatesinstantiatetaskjob)
  * [`asana.taskTemplates.listMultiple`](#asanatasktemplateslistmultiple)
  * [`asana.tasks.addFollowersToTask`](#asanatasksaddfollowerstotask)
  * [`asana.tasks.addProjectToTask`](#asanatasksaddprojecttotask)
  * [`asana.tasks.addTagToTask`](#asanatasksaddtagtotask)
  * [`asana.tasks.createNewTask`](#asanataskscreatenewtask)
  * [`asana.tasks.createSubtaskRecord`](#asanataskscreatesubtaskrecord)
  * [`asana.tasks.deleteTask`](#asanatasksdeletetask)
  * [`asana.tasks.duplicateTaskJob`](#asanatasksduplicatetaskjob)
  * [`asana.tasks.getAllDependencies`](#asanatasksgetalldependencies)
  * [`asana.tasks.getByCustomId`](#asanatasksgetbycustomid)
  * [`asana.tasks.getDependents`](#asanatasksgetdependents)
  * [`asana.tasks.getMultiple`](#asanatasksgetmultiple)
  * [`asana.tasks.getMultipleWithTag`](#asanatasksgetmultiplewithtag)
  * [`asana.tasks.getSectionTasks`](#asanatasksgetsectiontasks)
  * [`asana.tasks.getSubtaskList`](#asanatasksgetsubtasklist)
  * [`asana.tasks.getTaskRecord`](#asanatasksgettaskrecord)
  * [`asana.tasks.getTasksByProject`](#asanatasksgettasksbyproject)
  * [`asana.tasks.getUserTaskListTasks`](#asanatasksgetusertasklisttasks)
  * [`asana.tasks.removeFollowersFromTask`](#asanatasksremovefollowersfromtask)
  * [`asana.tasks.removeProjectFromTask`](#asanatasksremoveprojectfromtask)
  * [`asana.tasks.removeTagFromTask`](#asanatasksremovetagfromtask)
  * [`asana.tasks.searchInWorkspace`](#asanataskssearchinworkspace)
  * [`asana.tasks.setDependenciesForTask`](#asanataskssetdependenciesfortask)
  * [`asana.tasks.setParentTask`](#asanataskssetparenttask)
  * [`asana.tasks.setTaskDependents`](#asanataskssettaskdependents)
  * [`asana.tasks.unlinkDependenciesFromTask`](#asanatasksunlinkdependenciesfromtask)
  * [`asana.tasks.unlinkDependents`](#asanatasksunlinkdependents)
  * [`asana.tasks.updateTaskRecord`](#asanatasksupdatetaskrecord)
  * [`asana.teamMemberships.getCompact`](#asanateammembershipsgetcompact)
  * [`asana.teamMemberships.getCompactRecords`](#asanateammembershipsgetcompactrecords)
  * [`asana.teamMemberships.getRecordById`](#asanateammembershipsgetrecordbyid)
  * [`asana.teamMemberships.getUserCompact`](#asanateammembershipsgetusercompact)
  * [`asana.teams.addUserToTeam`](#asanateamsaddusertoteam)
  * [`asana.teams.createTeamRecord`](#asanateamscreateteamrecord)
  * [`asana.teams.getTeamRecord`](#asanateamsgetteamrecord)
  * [`asana.teams.getUserTeams`](#asanateamsgetuserteams)
  * [`asana.teams.listWorkspaceTeams`](#asanateamslistworkspaceteams)
  * [`asana.teams.removeUserFromTeam`](#asanateamsremoveuserfromteam)
  * [`asana.teams.updateTeamRecord`](#asanateamsupdateteamrecord)
  * [`asana.timePeriods.getCompactTimePeriods`](#asanatimeperiodsgetcompacttimeperiods)
  * [`asana.timePeriods.getFullRecord`](#asanatimeperiodsgetfullrecord)
  * [`asana.timeTrackingEntries.createNewTimeEntryRecord`](#asanatimetrackingentriescreatenewtimeentryrecord)
  * [`asana.timeTrackingEntries.deleteTimeEntry`](#asanatimetrackingentriesdeletetimeentry)
  * [`asana.timeTrackingEntries.getForTask`](#asanatimetrackingentriesgetfortask)
  * [`asana.timeTrackingEntries.getRecord`](#asanatimetrackingentriesgetrecord)
  * [`asana.timeTrackingEntries.updateTimeTrackingEntry`](#asanatimetrackingentriesupdatetimetrackingentry)
  * [`asana.typeahead.getResults`](#asanatypeaheadgetresults)
  * [`asana.userTaskLists.getRecord`](#asanausertasklistsgetrecord)
  * [`asana.userTaskLists.getUserTaskList`](#asanausertasklistsgetusertasklist)
  * [`asana.users.getFavoritesForUser`](#asanausersgetfavoritesforuser)
  * [`asana.users.getUserRecord`](#asanausersgetuserrecord)
  * [`asana.users.listMultipleUsers`](#asanauserslistmultipleusers)
  * [`asana.users.listTeamUsers`](#asanauserslistteamusers)
  * [`asana.users.listWorkspaceUsers`](#asanauserslistworkspaceusers)
  * [`asana.webhooks.establishWebhook`](#asanawebhooksestablishwebhook)
  * [`asana.webhooks.getWebhookRecord`](#asanawebhooksgetwebhookrecord)
  * [`asana.webhooks.listMultipleWebhooks`](#asanawebhookslistmultiplewebhooks)
  * [`asana.webhooks.removeWebhook`](#asanawebhooksremovewebhook)
  * [`asana.webhooks.updateWebhookFilters`](#asanawebhooksupdatewebhookfilters)
  * [`asana.workspaceMemberships.getRecordById`](#asanaworkspacemembershipsgetrecordbyid)
  * [`asana.workspaceMemberships.getUserMemberships`](#asanaworkspacemembershipsgetusermemberships)
  * [`asana.workspaceMemberships.listForWorkspace`](#asanaworkspacemembershipslistforworkspace)
  * [`asana.workspaces.addUserToWorkspace`](#asanaworkspacesaddusertoworkspace)
  * [`asana.workspaces.getWorkspaceRecord`](#asanaworkspacesgetworkspacerecord)
  * [`asana.workspaces.listMultiple`](#asanaworkspaceslistmultiple)
  * [`asana.workspaces.removeUserFromWorkspace`](#asanaworkspacesremoveuserfromworkspace)
  * [`asana.workspaces.updateWorkspaceRecord`](#asanaworkspacesupdateworkspacerecord)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Asana&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Asana } from "asana-typescript-sdk";

const asana = new Asana({
  // Defining the base path is optional and defaults to https://app.asana.com/api/1.0
  // basePath: "https://app.asana.com/api/1.0",
  accessToken: "ACCESS_TOKEN",
});

const deleteSpecificResponse = await asana.attachments.deleteSpecific({});

console.log(deleteSpecificResponse);
```

## Reference<a id="reference"></a>


### `asana.attachments.deleteSpecific`<a id="asanaattachmentsdeletespecific"></a>

Deletes a specific, existing attachment.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificResponse = await asana.attachments.deleteSpecific({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### attachmentGid: `string`<a id="attachmentgid-string"></a>

Globally unique identifier for the attachment.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[AttachmentsDeleteSpecificResponse](./models/attachments-delete-specific-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attachments/{attachment_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.attachments.getAllForObject`<a id="asanaattachmentsgetallforobject"></a>

Returns the compact records for all attachments on the object.

There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.

Note that within the Asana app, inline images in the task description do not appear in the index of image thumbnails nor as stories in the task. However, requests made to `GET /attachments` for a task will return all of the images in the task, including inline images.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllForObjectResponse = await asana.attachments.getAllForObject({
  parent: "parent_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parent: `string`<a id="parent-string"></a>

Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[AttachmentsGetAllForObjectResponse](./models/attachments-get-all-for-object-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attachments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.attachments.getAttachmentRecord`<a id="asanaattachmentsgetattachmentrecord"></a>

Get the full record for a single attachment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAttachmentRecordResponse = await asana.attachments.getAttachmentRecord(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### attachmentGid: `string`<a id="attachmentgid-string"></a>

Globally unique identifier for the attachment.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[AttachmentsGetAttachmentRecordResponse](./models/attachments-get-attachment-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attachments/{attachment_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.attachments.uploadAttachment`<a id="asanaattachmentsuploadattachment"></a>

Upload an attachment.

This method uploads an attachment on an object and returns the compact
record for the created attachment object. This is possible by either:

- Providing the URL of the external resource being attached, or
- Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
files from third party services such as Dropbox, Box, Vimeo & Google Drive via the API

The 100MB size limit on attachments in Asana is enforced on this endpoint.

This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.

Requests made should follow the HTTP/1.1 specification that line
terminators are of the form `CRLF` or `\r\n` outlined
[here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadAttachmentResponse = await asana.attachments.uploadAttachment({
  resource_subtype: "external",
  parent: "parent_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parent: `string`<a id="parent-string"></a>

Required identifier of the parent task, project, or project_brief, as a string. 

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

##### resourceSubtype: `string`<a id="resourcesubtype-string"></a>

The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided. 

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

Required for `asana` attachments. 

##### url: `string`<a id="url-string"></a>

The URL of the external resource being attached. Required for attachments of type `external`. 

##### name: `string`<a id="name-string"></a>

The name of the external resource being attached. Required for attachments of type `external`. 

##### connectToApp: `boolean`<a id="connecttoapp-boolean"></a>

*Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in. 

#### 🔄 Return<a id="🔄-return"></a>

[AttachmentsUploadAttachmentResponse](./models/attachments-upload-attachment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attachments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.auditLogApi.getAuditLogEvents`<a id="asanaauditlogapigetauditlogevents"></a>

Retrieve the audit log events that have been captured in your domain.

This endpoint will return a list of [AuditLogEvent](https://raw.githubusercontent.com) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.

There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](https://raw.githubusercontent.com) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.

The list of events will always be [paginated](https://raw.githubusercontent.com). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.

*Note: If the filters you provided match events in your domain and `next_page` is present in the response, we will continue to send `next_page` on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty `data` response for the end of current events that match your filters.*

When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](https://raw.githubusercontent.com) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAuditLogEventsResponse = await asana.auditLogApi.getAuditLogEvents({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### startAt: `string`<a id="startat-string"></a>

Filter to events created after this time (inclusive).

##### endAt: `string`<a id="endat-string"></a>

Filter to events created before this time (exclusive).

##### eventType: `string`<a id="eventtype-string"></a>

Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values.

##### actorType: `'user' | 'asana' | 'asana_support' | 'anonymous' | 'external_administrator'`<a id="actortype-user--asana--asana_support--anonymous--external_administrator"></a>

Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.

##### actorGid: `string`<a id="actorgid-string"></a>

Filter to events triggered by the actor with this ID.

##### resourceGid: `string`<a id="resourcegid-string"></a>

Filter to events with this resource ID.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

#### 🔄 Return<a id="🔄-return"></a>

[AuditLogApiGetAuditLogEventsResponse](./models/audit-log-api-get-audit-log-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/audit_log_events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.batchApi.submitParallelRequests`<a id="asanabatchapisubmitparallelrequests"></a>

Make multiple requests in parallel to Asana's API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitParallelRequestsResponse =
  await asana.batchApi.submitParallelRequests({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`BatchRequest`](./models/batch-request.ts)<a id="data-batchrequestmodelsbatch-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[BatchApiSubmitParallelRequestsResponse](./models/batch-api-submit-parallel-requests-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batch` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFieldSettings.getPortfolioCustomFieldSettings`<a id="asanacustomfieldsettingsgetportfoliocustomfieldsettings"></a>

Returns a list of all of the custom fields settings on a portfolio, in compact form.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPortfolioCustomFieldSettingsResponse =
  await asana.customFieldSettings.getPortfolioCustomFieldSettings({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldSettingsGetPortfolioCustomFieldSettingsResponse](./models/custom-field-settings-get-portfolio-custom-field-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/custom_field_settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFieldSettings.getProjectCustomFieldSettings`<a id="asanacustomfieldsettingsgetprojectcustomfieldsettings"></a>

Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [documentation for input/output options](https://developers.asana.com/docs/inputoutput-options) for more information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectCustomFieldSettingsResponse =
  await asana.customFieldSettings.getProjectCustomFieldSettings({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldSettingsGetProjectCustomFieldSettingsResponse](./models/custom-field-settings-get-project-custom-field-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/custom_field_settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFields.addEnumOption`<a id="asanacustomfieldsaddenumoption"></a>

Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list.
Locked custom fields can only have enum options added by the user who locked the field.
Returns the full record of the newly created enum option.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEnumOptionResponse = await asana.customFields.addEnumOption({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldGid: `string`<a id="customfieldgid-string"></a>

Globally unique identifier for the custom field.

##### data: [`EnumOptionRequest`](./models/enum-option-request.ts)<a id="data-enumoptionrequestmodelsenum-option-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsAddEnumOptionResponse](./models/custom-fields-add-enum-option-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_fields/{custom_field_gid}/enum_options` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFields.createNewFieldRecord`<a id="asanacustomfieldscreatenewfieldrecord"></a>

Creates a new custom field in a workspace. Every custom field is required
to be created in a specific workspace, and this workspace cannot be
changed once set.

A custom field’s name must be unique within a workspace and not conflict
with names of existing task properties such as `Due Date` or `Assignee`.
A custom field’s type must be one of `text`, `enum`, `multi_enum`, `number`,
`date`, or `people`.

Returns the full record of the newly created custom field.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewFieldRecordResponse =
  await asana.customFields.createNewFieldRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`CustomFieldRequest`](./models/custom-field-request.ts)<a id="data-customfieldrequestmodelscustom-field-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsCreateNewFieldRecordResponse](./models/custom-fields-create-new-field-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_fields` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFields.deleteFieldRecord`<a id="asanacustomfieldsdeletefieldrecord"></a>

A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.
Locked custom fields can only be deleted by the user who locked the field.
Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFieldRecordResponse = await asana.customFields.deleteFieldRecord(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldGid: `string`<a id="customfieldgid-string"></a>

Globally unique identifier for the custom field.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsDeleteFieldRecordResponse](./models/custom-fields-delete-field-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_fields/{custom_field_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFields.getMetadata`<a id="asanacustomfieldsgetmetadata"></a>

Get the complete definition of a custom field’s metadata.

Since custom fields can be defined for one of a number of types, and
these types have different data and behaviors, there are fields that are
relevant to a particular type. For instance, as noted above, enum_options
is only relevant for the enum type and defines the set of choices that
the enum could represent. The examples below show some of these
type-specific custom field definitions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMetadataResponse = await asana.customFields.getMetadata({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldGid: `string`<a id="customfieldgid-string"></a>

Globally unique identifier for the custom field.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsGetMetadataResponse](./models/custom-fields-get-metadata-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_fields/{custom_field_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFields.listWorkspaceCustomFields`<a id="asanacustomfieldslistworkspacecustomfields"></a>

Returns a list of the compact representation of all of the custom fields in a workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWorkspaceCustomFieldsResponse =
  await asana.customFields.listWorkspaceCustomFields({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsListWorkspaceCustomFieldsResponse](./models/custom-fields-list-workspace-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFields.reorderEnumOption`<a id="asanacustomfieldsreorderenumoption"></a>

Moves a particular enum option to be either before or after another specified enum option in the custom field.
Locked custom fields can only be reordered by the user who locked the field.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const reorderEnumOptionResponse = await asana.customFields.reorderEnumOption(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldGid: `string`<a id="customfieldgid-string"></a>

Globally unique identifier for the custom field.

##### data: [`EnumOptionInsertRequest`](./models/enum-option-insert-request.ts)<a id="data-enumoptioninsertrequestmodelsenum-option-insert-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsReorderEnumOptionResponse](./models/custom-fields-reorder-enum-option-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_fields/{custom_field_gid}/enum_options/insert` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFields.updateEnumOption`<a id="asanacustomfieldsupdateenumoption"></a>

Updates an existing enum option. Enum custom fields require at least one enabled enum option.
Locked custom fields can only be updated by the user who locked the field.
Returns the full record of the updated enum option.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEnumOptionResponse = await asana.customFields.updateEnumOption({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### enumOptionGid: `string`<a id="enumoptiongid-string"></a>

Globally unique identifier for the enum option.

##### data: [`EnumOption`](./models/enum-option.ts)<a id="data-enumoptionmodelsenum-optionts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsUpdateEnumOptionResponse](./models/custom-fields-update-enum-option-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/enum_options/{enum_option_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.customFields.updateFieldRecord`<a id="asanacustomfieldsupdatefieldrecord"></a>

A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged
When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.
A custom field’s `type` cannot be updated.
An enum custom field’s `enum_options` cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update `enum_options`.
Locked custom fields can only be updated by the user who locked the field.
Returns the complete updated custom field record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFieldRecordResponse = await asana.customFields.updateFieldRecord(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldGid: `string`<a id="customfieldgid-string"></a>

Globally unique identifier for the custom field.

##### data: [`CustomFieldRequest`](./models/custom-field-request.ts)<a id="data-customfieldrequestmodelscustom-field-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsUpdateFieldRecordResponse](./models/custom-fields-update-field-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_fields/{custom_field_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.events.getResourceEvents`<a id="asanaeventsgetresourceevents"></a>

Returns the full record for all events that have occurred since the sync
token was created.

A `GET` request to the endpoint `/[path_to_resource]/events` can be made in
lieu of including the resource ID in the data for the request.

Asana limits a single sync token to 100 events. If more than 100 events exist
for a given resource, `has_more: true` will be returned in the response, indicating
that there are more events to pull.

*Note: The resource returned will be the resource that triggered the
event. This may be different from the one that the events were requested
for. For example, a subscription to a project will contain events for
tasks contained within the project.*

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResourceEventsResponse = await asana.events.getResourceEvents({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resource: `string`<a id="resource-string"></a>

A resource ID to subscribe to. The resource can be a task, project, or goal.

##### sync: `string`<a id="sync-string"></a>

A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated. *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.*

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[EventsGetResourceEventsResponse](./models/events-get-resource-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goalRelationships.createSupportingRelationship`<a id="asanagoalrelationshipscreatesupportingrelationship"></a>

Creates a goal relationship by adding a supporting resource to a given goal.

Returns the newly created goal relationship record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSupportingRelationshipResponse =
  await asana.goalRelationships.createSupportingRelationship({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### data: [`GoalAddSupportingRelationshipRequest`](./models/goal-add-supporting-relationship-request.ts)<a id="data-goaladdsupportingrelationshiprequestmodelsgoal-add-supporting-relationship-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalRelationshipsCreateSupportingRelationshipResponse](./models/goal-relationships-create-supporting-relationship-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}/addSupportingRelationship` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goalRelationships.getCompactRecords`<a id="asanagoalrelationshipsgetcompactrecords"></a>

Returns compact goal relationship records.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompactRecordsResponse =
  await asana.goalRelationships.getCompactRecords({
    supportedGoal: "supportedGoal_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### supportedGoal: `string`<a id="supportedgoal-string"></a>

Globally unique identifier for the supported goal in the goal relationship.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### resourceSubtype: `string`<a id="resourcesubtype-string"></a>

If provided, filter to goal relationships with a given resource_subtype.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalRelationshipsGetCompactRecordsResponse](./models/goal-relationships-get-compact-records-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goal_relationships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goalRelationships.getRecordById`<a id="asanagoalrelationshipsgetrecordbyid"></a>

Returns the complete updated goal relationship record for a single goal relationship.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordByIdResponse = await asana.goalRelationships.getRecordById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalRelationshipGid: `string`<a id="goalrelationshipgid-string"></a>

Globally unique identifier for the goal relationship.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalRelationshipsGetRecordByIdResponse](./models/goal-relationships-get-record-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goal_relationships/{goal_relationship_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goalRelationships.removeSupportingRelationship`<a id="asanagoalrelationshipsremovesupportingrelationship"></a>

Removes a goal relationship for a given parent goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSupportingRelationshipResponse =
  await asana.goalRelationships.removeSupportingRelationship({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### data: [`GoalRemoveSupportingRelationshipRequest`](./models/goal-remove-supporting-relationship-request.ts)<a id="data-goalremovesupportingrelationshiprequestmodelsgoal-remove-supporting-relationship-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[GoalRelationshipsRemoveSupportingRelationshipResponse](./models/goal-relationships-remove-supporting-relationship-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}/removeSupportingRelationship` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goalRelationships.updateGoalRelationshipRecord`<a id="asanagoalrelationshipsupdategoalrelationshiprecord"></a>

An existing goal relationship can be updated by making a PUT request on the URL for
that goal relationship. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal relationship record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateGoalRelationshipRecordResponse =
  await asana.goalRelationships.updateGoalRelationshipRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalRelationshipGid: `string`<a id="goalrelationshipgid-string"></a>

Globally unique identifier for the goal relationship.

##### data: [`GoalRelationshipRequest`](./models/goal-relationship-request.ts)<a id="data-goalrelationshiprequestmodelsgoal-relationship-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalRelationshipsUpdateGoalRelationshipRecordResponse](./models/goal-relationships-update-goal-relationship-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goal_relationships/{goal_relationship_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.addCollaboratorsToGoal`<a id="asanagoalsaddcollaboratorstogoal"></a>

Adds followers to a goal. Returns the goal the followers were added to.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCollaboratorsToGoalResponse = await asana.goals.addCollaboratorsToGoal(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### data: [`TaskAddFollowersRequest`](./models/task-add-followers-request.ts)<a id="data-taskaddfollowersrequestmodelstask-add-followers-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsAddCollaboratorsToGoalResponse](./models/goals-add-collaborators-to-goal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}/addFollowers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.createMetric`<a id="asanagoalscreatemetric"></a>

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMetricResponse = await asana.goals.createMetric({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### data: [`GoalMetricBase`](./models/goal-metric-base.ts)<a id="data-goalmetricbasemodelsgoal-metric-basets"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsCreateMetricResponse](./models/goals-create-metric-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}/setMetric` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.createNewGoalRecord`<a id="asanagoalscreatenewgoalrecord"></a>

Creates a new goal in a workspace or team.

Returns the full record of the newly created goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewGoalRecordResponse = await asana.goals.createNewGoalRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`GoalRequest`](./models/goal-request.ts)<a id="data-goalrequestmodelsgoal-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsCreateNewGoalRecordResponse](./models/goals-create-new-goal-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.deleteRecord`<a id="asanagoalsdeleterecord"></a>

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRecordResponse = await asana.goals.deleteRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsDeleteRecordResponse](./models/goals-delete-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.getCompactRecords`<a id="asanagoalsgetcompactrecords"></a>

Returns compact goal records.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompactRecordsResponse = await asana.goals.getCompactRecords({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### portfolio: `string`<a id="portfolio-string"></a>

Globally unique identifier for supporting portfolio.

##### project: `string`<a id="project-string"></a>

Globally unique identifier for supporting project.

##### task: `string`<a id="task-string"></a>

Globally unique identifier for supporting task.

##### isWorkspaceLevel: `boolean`<a id="isworkspacelevel-boolean"></a>

Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.

##### team: `string`<a id="team-string"></a>

Globally unique identifier for the team.

##### workspace: `string`<a id="workspace-string"></a>

Globally unique identifier for the workspace.

##### timePeriods: `string`[]<a id="timeperiods-string"></a>

Globally unique identifiers for the time periods.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetCompactRecordsResponse](./models/goals-get-compact-records-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.getGoalRecord`<a id="asanagoalsgetgoalrecord"></a>

Returns the complete goal record for a single goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGoalRecordResponse = await asana.goals.getGoalRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetGoalRecordResponse](./models/goals-get-goal-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.getParentGoals`<a id="asanagoalsgetparentgoals"></a>

Returns a compact representation of all of the parent goals of a goal.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getParentGoalsResponse = await asana.goals.getParentGoals({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetParentGoalsResponse](./models/goals-get-parent-goals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}/parentGoals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.removeFollowersFromGoal`<a id="asanagoalsremovefollowersfromgoal"></a>

Removes followers from a goal. Returns the goal the followers were removed from.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFollowersFromGoalResponse =
  await asana.goals.removeFollowersFromGoal({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### data: [`TaskAddFollowersRequest`](./models/task-add-followers-request.ts)<a id="data-taskaddfollowersrequestmodelstask-add-followers-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsRemoveFollowersFromGoalResponse](./models/goals-remove-followers-from-goal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}/removeFollowers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.updateGoalRecord`<a id="asanagoalsupdategoalrecord"></a>

An existing goal can be updated by making a PUT request on the URL for
that goal. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateGoalRecordResponse = await asana.goals.updateGoalRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### data: [`GoalUpdateRequest`](./models/goal-update-request.ts)<a id="data-goalupdaterequestmodelsgoal-update-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsUpdateGoalRecordResponse](./models/goals-update-goal-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.goals.updateMetricCurrentValue`<a id="asanagoalsupdatemetriccurrentvalue"></a>

Updates a goal's existing metric's `current_number_value` if one exists,
otherwise responds with a 400 status code.

Returns the complete updated goal metric record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMetricCurrentValueResponse =
  await asana.goals.updateMetricCurrentValue({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalGid: `string`<a id="goalgid-string"></a>

Globally unique identifier for the goal.

##### data: [`GoalMetricCurrentValueRequest`](./models/goal-metric-current-value-request.ts)<a id="data-goalmetriccurrentvaluerequestmodelsgoal-metric-current-value-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsUpdateMetricCurrentValueResponse](./models/goals-update-metric-current-value-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goals/{goal_gid}/setMetricCurrentValue` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.jobs.getById`<a id="asanajobsgetbyid"></a>

Returns the full record for a job.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await asana.jobs.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobGid: `string`<a id="jobgid-string"></a>

Globally unique identifier for the job.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[JobsGetByIdResponse](./models/jobs-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{job_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.memberships.createNewRecord`<a id="asanamembershipscreatenewrecord"></a>

Creates a new membership in a `goal` or `project`. `Teams` or `users` can be a member
of `goals` or `projects`.

Returns the full record of the newly created membership.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewRecordResponse = await asana.memberships.createNewRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`CreateMembershipRequest`](./models/create-membership-request.ts)<a id="data-createmembershiprequestmodelscreate-membership-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipsCreateNewRecordResponse](./models/memberships-create-new-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/memberships` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.memberships.deleteRecord`<a id="asanamembershipsdeleterecord"></a>

A specific, existing membership for a `goal` or `project` can be deleted by making a `DELETE` request
on the URL for that membership.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRecordResponse = await asana.memberships.deleteRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### membershipGid: `string`<a id="membershipgid-string"></a>

Globally unique identifier for the membership.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipsDeleteRecordResponse](./models/memberships-delete-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/memberships/{membership_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.memberships.getMembershipRecord`<a id="asanamembershipsgetmembershiprecord"></a>

Returns compact `project_membership` record for a single membership. `GET` only supports project memberships currently

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipRecordResponse = await asana.memberships.getMembershipRecord(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### membershipGid: `string`<a id="membershipgid-string"></a>

Globally unique identifier for the membership.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipsGetMembershipRecordResponse](./models/memberships-get-membership-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/memberships/{membership_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.memberships.getMultiple`<a id="asanamembershipsgetmultiple"></a>

Returns compact `goal_membership` or `project_membership` records. The possible types for `parent` in this request are `goal` or `project`. An additional member (user GID or team GID) can be passed in to filter to a specific membership.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMultipleResponse = await asana.memberships.getMultiple({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### parent: `string`<a id="parent-string"></a>

Globally unique identifier for `goal` or `project`.

##### member: `string`<a id="member-string"></a>

Globally unique identifier for `team` or `user`.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipsGetMultipleResponse](./models/memberships-get-multiple-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.organizationExports.createExportRequest`<a id="asanaorganizationexportscreateexportrequest"></a>

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createExportRequestResponse =
  await asana.organizationExports.createExportRequest({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`OrganizationExportRequest`](./models/organization-export-request.ts)<a id="data-organizationexportrequestmodelsorganization-export-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationExportsCreateExportRequestResponse](./models/organization-exports-create-export-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organization_exports` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.organizationExports.getExportDetails`<a id="asanaorganizationexportsgetexportdetails"></a>

Returns details of a previously-requested Organization export.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExportDetailsResponse =
  await asana.organizationExports.getExportDetails({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### organizationExportGid: `string`<a id="organizationexportgid-string"></a>

Globally unique identifier for the organization export.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationExportsGetExportDetailsResponse](./models/organization-exports-get-export-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organization_exports/{organization_export_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolioMemberships.getCompact`<a id="asanaportfoliomembershipsgetcompact"></a>

Returns the compact portfolio membership records for the portfolio.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompactResponse = await asana.portfolioMemberships.getCompact({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### user: `string`<a id="user-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfolioMembershipsGetCompactResponse](./models/portfolio-memberships-get-compact-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/portfolio_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolioMemberships.getCompleteRecord`<a id="asanaportfoliomembershipsgetcompleterecord"></a>

Returns the complete portfolio record for a single portfolio membership.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompleteRecordResponse =
  await asana.portfolioMemberships.getCompleteRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioMembershipGid: `string`<a id="portfoliomembershipgid-string"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfolioMembershipsGetCompleteRecordResponse](./models/portfolio-memberships-get-complete-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolio_memberships/{portfolio_membership_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolioMemberships.listMultipleMemberships`<a id="asanaportfoliomembershipslistmultiplememberships"></a>

Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMultipleMembershipsResponse =
  await asana.portfolioMemberships.listMultipleMemberships({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolio: `string`<a id="portfolio-string"></a>

The portfolio to filter results on.

##### workspace: `string`<a id="workspace-string"></a>

The workspace to filter results on.

##### user: `string`<a id="user-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfolioMembershipsListMultipleMembershipsResponse](./models/portfolio-memberships-list-multiple-memberships-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolio_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.addCustomFieldSetting`<a id="asanaportfoliosaddcustomfieldsetting"></a>

Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomFieldSettingResponse =
  await asana.portfolios.addCustomFieldSetting({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### data: [`AddCustomFieldSettingRequest`](./models/add-custom-field-setting-request.ts)<a id="data-addcustomfieldsettingrequestmodelsadd-custom-field-setting-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosAddCustomFieldSettingResponse](./models/portfolios-add-custom-field-setting-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/addCustomFieldSetting` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.addMembersToPortfolio`<a id="asanaportfoliosaddmemberstoportfolio"></a>

Adds the specified list of users as members of the portfolio.
Returns the updated portfolio record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMembersToPortfolioResponse =
  await asana.portfolios.addMembersToPortfolio({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### data: [`AddMembersRequest`](./models/add-members-request.ts)<a id="data-addmembersrequestmodelsadd-members-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosAddMembersToPortfolioResponse](./models/portfolios-add-members-to-portfolio-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/addMembers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.addPortfolioItem`<a id="asanaportfoliosaddportfolioitem"></a>

Add an item to a portfolio.
Returns an empty data block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPortfolioItemResponse = await asana.portfolios.addPortfolioItem({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### data: [`PortfolioAddItemRequest`](./models/portfolio-add-item-request.ts)<a id="data-portfolioadditemrequestmodelsportfolio-add-item-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosAddPortfolioItemResponse](./models/portfolios-add-portfolio-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/addItem` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.createNewPortfolioRecord`<a id="asanaportfolioscreatenewportfoliorecord"></a>

Creates a new portfolio in the given workspace with the supplied name.

Note that portfolios created in the Asana UI may have some state
(like the “Priority” custom field) which is automatically added
to the portfolio when it is created. Portfolios created via our
API will *not* be created with the same initial state to allow
integrations to create their own starting state on a portfolio.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewPortfolioRecordResponse =
  await asana.portfolios.createNewPortfolioRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`PortfolioRequest`](./models/portfolio-request.ts)<a id="data-portfoliorequestmodelsportfolio-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosCreateNewPortfolioRecordResponse](./models/portfolios-create-new-portfolio-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.deleteRecord`<a id="asanaportfoliosdeleterecord"></a>

An existing portfolio can be deleted by making a DELETE request on
the URL for that portfolio.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRecordResponse = await asana.portfolios.deleteRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosDeleteRecordResponse](./models/portfolios-delete-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.getItems`<a id="asanaportfoliosgetitems"></a>

Get a list of the items in compact form in a portfolio.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getItemsResponse = await asana.portfolios.getItems({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosGetItemsResponse](./models/portfolios-get-items-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.getRecord`<a id="asanaportfoliosgetrecord"></a>

Returns the complete portfolio record for a single portfolio.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await asana.portfolios.getRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosGetRecordResponse](./models/portfolios-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.listMultiplePortfolios`<a id="asanaportfolioslistmultipleportfolios"></a>

Returns a list of the portfolios in compact representation that are owned by the current API user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMultiplePortfoliosResponse =
  await asana.portfolios.listMultiplePortfolios({
    workspace: "workspace_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspace: `string`<a id="workspace-string"></a>

The workspace or organization to filter portfolios on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### owner: `string`<a id="owner-string"></a>

The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosListMultiplePortfoliosResponse](./models/portfolios-list-multiple-portfolios-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.removeCustomFieldSetting`<a id="asanaportfoliosremovecustomfieldsetting"></a>

Removes a custom field setting from a portfolio.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCustomFieldSettingResponse =
  await asana.portfolios.removeCustomFieldSetting({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### data: [`RemoveCustomFieldSettingRequest`](./models/remove-custom-field-setting-request.ts)<a id="data-removecustomfieldsettingrequestmodelsremove-custom-field-setting-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosRemoveCustomFieldSettingResponse](./models/portfolios-remove-custom-field-setting-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/removeCustomFieldSetting` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.removeItemFromPortfolio`<a id="asanaportfoliosremoveitemfromportfolio"></a>

Remove an item from a portfolio.
Returns an empty data block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeItemFromPortfolioResponse =
  await asana.portfolios.removeItemFromPortfolio({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### data: [`PortfolioRemoveItemRequest`](./models/portfolio-remove-item-request.ts)<a id="data-portfolioremoveitemrequestmodelsportfolio-remove-item-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosRemoveItemFromPortfolioResponse](./models/portfolios-remove-item-from-portfolio-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/removeItem` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.removeMembersFromPortfolio`<a id="asanaportfoliosremovemembersfromportfolio"></a>

Removes the specified list of users from members of the portfolio.
Returns the updated portfolio record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMembersFromPortfolioResponse =
  await asana.portfolios.removeMembersFromPortfolio({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### data: [`RemoveMembersRequest`](./models/remove-members-request.ts)<a id="data-removemembersrequestmodelsremove-members-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosRemoveMembersFromPortfolioResponse](./models/portfolios-remove-members-from-portfolio-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}/removeMembers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.portfolios.updatePortfolioRecord`<a id="asanaportfoliosupdateportfoliorecord"></a>

An existing portfolio can be updated by making a PUT request on the URL for
that portfolio. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated portfolio record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePortfolioRecordResponse =
  await asana.portfolios.updatePortfolioRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioGid: `string`<a id="portfoliogid-string"></a>

Globally unique identifier for the portfolio.

##### data: [`PortfolioRequest`](./models/portfolio-request.ts)<a id="data-portfoliorequestmodelsportfolio-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[PortfoliosUpdatePortfolioRecordResponse](./models/portfolios-update-portfolio-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/portfolios/{portfolio_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectBriefs.createNewRecord`<a id="asanaprojectbriefscreatenewrecord"></a>

Creates a new project brief.

Returns the full record of the newly created project brief.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewRecordResponse = await asana.projectBriefs.createNewRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`ProjectBriefRequest`](./models/project-brief-request.ts)<a id="data-projectbriefrequestmodelsproject-brief-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectBriefsCreateNewRecordResponse](./models/project-briefs-create-new-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/project_briefs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectBriefs.getFullRecord`<a id="asanaprojectbriefsgetfullrecord"></a>

Get the full record for a project brief.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFullRecordResponse = await asana.projectBriefs.getFullRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectBriefGid: `string`<a id="projectbriefgid-string"></a>

Globally unique identifier for the project brief.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectBriefsGetFullRecordResponse](./models/project-briefs-get-full-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_briefs/{project_brief_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectBriefs.removeBrief`<a id="asanaprojectbriefsremovebrief"></a>

Deletes a specific, existing project brief.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeBriefResponse = await asana.projectBriefs.removeBrief({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectBriefGid: `string`<a id="projectbriefgid-string"></a>

Globally unique identifier for the project brief.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectBriefsRemoveBriefResponse](./models/project-briefs-remove-brief-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_briefs/{project_brief_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectBriefs.updateBriefRecord`<a id="asanaprojectbriefsupdatebriefrecord"></a>

An existing project brief can be updated by making a PUT request on the URL for
that project brief. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated project brief record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBriefRecordResponse = await asana.projectBriefs.updateBriefRecord(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectBriefGid: `string`<a id="projectbriefgid-string"></a>

Globally unique identifier for the project brief.

##### data: [`ProjectBriefRequest`](./models/project-brief-request.ts)<a id="data-projectbriefrequestmodelsproject-brief-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectBriefsUpdateBriefRecordResponse](./models/project-briefs-update-brief-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_briefs/{project_brief_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectMemberships.getCompactRecords`<a id="asanaprojectmembershipsgetcompactrecords"></a>

Returns the compact project membership records for the project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompactRecordsResponse =
  await asana.projectMemberships.getCompactRecords({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### user: `string`<a id="user-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectMembershipsGetCompactRecordsResponse](./models/project-memberships-get-compact-records-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/project_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectMemberships.getRecord`<a id="asanaprojectmembershipsgetrecord"></a>

Returns the complete project record for a single project membership.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await asana.projectMemberships.getRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectMembershipGid: `string`<a id="projectmembershipgid-string"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectMembershipsGetRecordResponse](./models/project-memberships-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_memberships/{project_membership_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectStatuses.createNewStatusUpdateRecord`<a id="asanaprojectstatusescreatenewstatusupdaterecord"></a>

*Deprecated: new integrations should prefer the `/status_updates` route.*

Creates a new status update on the project.

Returns the full record of the newly created project status update.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewStatusUpdateRecordResponse =
  await asana.projectStatuses.createNewStatusUpdateRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`ProjectStatusBase`](./models/project-status-base.ts)<a id="data-projectstatusbasemodelsproject-status-basets"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectStatusesCreateNewStatusUpdateRecordResponse](./models/project-statuses-create-new-status-update-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/project_statuses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectStatuses.deleteSpecificStatusUpdate`<a id="asanaprojectstatusesdeletespecificstatusupdate"></a>

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Deletes a specific, existing project status update.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificStatusUpdateResponse =
  await asana.projectStatuses.deleteSpecificStatusUpdate({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectStatusGid: `string`<a id="projectstatusgid-string"></a>

The project status update to get.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectStatusesDeleteSpecificStatusUpdateResponse](./models/project-statuses-delete-specific-status-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_statuses/{project_status_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectStatuses.getProjectUpdates`<a id="asanaprojectstatusesgetprojectupdates"></a>

*Deprecated: new integrations should prefer the `/status_updates` route.*

Returns the compact project status update records for all updates on the project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectUpdatesResponse = await asana.projectStatuses.getProjectUpdates(
  {
    projectGid: "projectGid_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectStatusesGetProjectUpdatesResponse](./models/project-statuses-get-project-updates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/project_statuses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectStatuses.getStatusUpdateRecord`<a id="asanaprojectstatusesgetstatusupdaterecord"></a>

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Returns the complete record for a single status update.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStatusUpdateRecordResponse =
  await asana.projectStatuses.getStatusUpdateRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectStatusGid: `string`<a id="projectstatusgid-string"></a>

The project status update to get.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectStatusesGetStatusUpdateRecordResponse](./models/project-statuses-get-status-update-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_statuses/{project_status_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectTemplates.deleteTemplateRecord`<a id="asanaprojecttemplatesdeletetemplaterecord"></a>

A specific, existing project template can be deleted by making a DELETE request on the URL for that project template.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTemplateRecordResponse =
  await asana.projectTemplates.deleteTemplateRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectTemplateGid: `string`<a id="projecttemplategid-string"></a>

Globally unique identifier for the project template.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectTemplatesDeleteTemplateRecordResponse](./models/project-templates-delete-template-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_templates/{project_template_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectTemplates.getAllTemplateRecords`<a id="asanaprojecttemplatesgetalltemplaterecords"></a>

Returns the compact project template records for all project templates in the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllTemplateRecordsResponse =
  await asana.projectTemplates.getAllTemplateRecords({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectTemplatesGetAllTemplateRecordsResponse](./models/project-templates-get-all-template-records-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}/project_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectTemplates.getRecord`<a id="asanaprojecttemplatesgetrecord"></a>

Returns the complete project template record for a single project template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await asana.projectTemplates.getRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectTemplateGid: `string`<a id="projecttemplategid-string"></a>

Globally unique identifier for the project template.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectTemplatesGetRecordResponse](./models/project-templates-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_templates/{project_template_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectTemplates.instantiateProjectJob`<a id="asanaprojecttemplatesinstantiateprojectjob"></a>

Creates and returns a job that will asynchronously handle the project instantiation.

To form this request, it is recommended to first make a request to [get a project template](https://raw.githubusercontent.com). Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.

_Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](https://raw.githubusercontent.com) parameter._

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const instantiateProjectJobResponse =
  await asana.projectTemplates.instantiateProjectJob({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectTemplateGid: `string`<a id="projecttemplategid-string"></a>

Globally unique identifier for the project template.

##### data: [`ProjectTemplateInstantiateProjectRequest`](./models/project-template-instantiate-project-request.ts)<a id="data-projecttemplateinstantiateprojectrequestmodelsproject-template-instantiate-project-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectTemplatesInstantiateProjectJobResponse](./models/project-templates-instantiate-project-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_templates/{project_template_gid}/instantiateProject` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projectTemplates.listMultiple`<a id="asanaprojecttemplateslistmultiple"></a>

Returns the compact project template records for all project templates in the given team or workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMultipleResponse = await asana.projectTemplates.listMultiple({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### workspace: `string`<a id="workspace-string"></a>

The workspace to filter results on.

##### team: `string`<a id="team-string"></a>

The team to filter projects on.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectTemplatesListMultipleResponse](./models/project-templates-list-multiple-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.addCustomFieldSetting`<a id="asanaprojectsaddcustomfieldsetting"></a>

Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomFieldSettingResponse =
  await asana.projects.addCustomFieldSetting({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`AddCustomFieldSettingRequest`](./models/add-custom-field-setting-request.ts)<a id="data-addcustomfieldsettingrequestmodelsadd-custom-field-setting-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsAddCustomFieldSettingResponse](./models/projects-add-custom-field-setting-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/addCustomFieldSetting` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.addFollowersToProject`<a id="asanaprojectsaddfollowerstoproject"></a>

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
Returns the updated project record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addFollowersToProjectResponse =
  await asana.projects.addFollowersToProject({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`AddFollowersRequest`](./models/add-followers-request.ts)<a id="data-addfollowersrequestmodelsadd-followers-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsAddFollowersToProjectResponse](./models/projects-add-followers-to-project-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/addFollowers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.addMembersToProject`<a id="asanaprojectsaddmemberstoproject"></a>

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to `false`.
Returns the updated project record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMembersToProjectResponse = await asana.projects.addMembersToProject(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`AddMembersRequest`](./models/add-members-request.ts)<a id="data-addmembersrequestmodelsadd-members-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsAddMembersToProjectResponse](./models/projects-add-members-to-project-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/addMembers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.createInWorkspace`<a id="asanaprojectscreateinworkspace"></a>

Creates a project in the workspace.

If the workspace for your project is an organization, you must also
supply a team to share the project with.

Returns the full record of the newly created project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInWorkspaceResponse = await asana.projects.createInWorkspace({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### data: [`ProjectRequest`](./models/project-request.ts)<a id="data-projectrequestmodelsproject-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsCreateInWorkspaceResponse](./models/projects-create-in-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.createNewProjectRecord`<a id="asanaprojectscreatenewprojectrecord"></a>

Create a new project in a workspace or team.

Every project is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the `workspace` parameter regardless of whether or not it is an
organization.

If the workspace for your project is an organization, you must also
supply a `team` to share the project with.

Returns the full record of the newly created project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewProjectRecordResponse =
  await asana.projects.createNewProjectRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ProjectRequest`](./models/project-request.ts)<a id="data-projectrequestmodelsproject-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsCreateNewProjectRecordResponse](./models/projects-create-new-project-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.createProjectForTeam`<a id="asanaprojectscreateprojectforteam"></a>

Creates a project shared with the given team.

Returns the full record of the newly created project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createProjectForTeamResponse = await asana.projects.createProjectForTeam(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### data: [`ProjectRequest`](./models/project-request.ts)<a id="data-projectrequestmodelsproject-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsCreateProjectForTeamResponse](./models/projects-create-project-for-team-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.createProjectTemplateJob`<a id="asanaprojectscreateprojecttemplatejob"></a>

Creates and returns a job that will asynchronously handle the project template creation. Note that
while the resulting project template can be accessed with the API, it won't be visible in the Asana
UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createProjectTemplateJobResponse =
  await asana.projects.createProjectTemplateJob({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`ProjectSaveAsTemplateRequest`](./models/project-save-as-template-request.ts)<a id="data-projectsaveastemplaterequestmodelsproject-save-as-template-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsCreateProjectTemplateJobResponse](./models/projects-create-project-template-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/saveAsTemplate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.deleteProjectById`<a id="asanaprojectsdeleteprojectbyid"></a>

A specific, existing project can be deleted by making a DELETE request on
the URL for that project.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteProjectByIdResponse = await asana.projects.deleteProjectById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsDeleteProjectByIdResponse](./models/projects-delete-project-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.duplicateProjectJob`<a id="asanaprojectsduplicateprojectjob"></a>

Creates and returns a job that will asynchronously handle the duplication.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const duplicateProjectJobResponse = await asana.projects.duplicateProjectJob(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`ProjectDuplicateRequest`](./models/project-duplicate-request.ts)<a id="data-projectduplicaterequestmodelsproject-duplicate-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsDuplicateProjectJobResponse](./models/projects-duplicate-project-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/duplicate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.getAllInWorkspace`<a id="asanaprojectsgetallinworkspace"></a>

Returns the compact project records for all projects in the workspace.
*Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllInWorkspaceResponse = await asana.projects.getAllInWorkspace({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### archived: `boolean`<a id="archived-boolean"></a>

Only return projects whose `archived` field takes on the value of this parameter.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsGetAllInWorkspaceResponse](./models/projects-get-all-in-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.getProjectRecord`<a id="asanaprojectsgetprojectrecord"></a>

Returns the complete project record for a single project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProjectRecordResponse = await asana.projects.getProjectRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsGetProjectRecordResponse](./models/projects-get-project-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.getTaskCounts`<a id="asanaprojectsgettaskcounts"></a>

Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](https://raw.githubusercontent.com) using `opt_fields` to get any information from this endpoint.

This endpoint has an additional [rate limit](https://raw.githubusercontent.com) and each field counts especially high against our [cost limits](/docs/rate-limits#cost-limits).

Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskCountsResponse = await asana.projects.getTaskCounts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsGetTaskCountsResponse](./models/projects-get-task-counts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/task_counts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.getTeamProjects`<a id="asanaprojectsgetteamprojects"></a>

Returns the compact project records for all projects in the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTeamProjectsResponse = await asana.projects.getTeamProjects({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### archived: `boolean`<a id="archived-boolean"></a>

Only return projects whose `archived` field takes on the value of this parameter.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsGetTeamProjectsResponse](./models/projects-get-team-projects-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.listMultiple`<a id="asanaprojectslistmultiple"></a>

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
*Note: This endpoint may timeout for large domains. Try filtering by team!*

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMultipleResponse = await asana.projects.listMultiple({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### workspace: `string`<a id="workspace-string"></a>

The workspace or organization to filter projects on.

##### team: `string`<a id="team-string"></a>

The team to filter projects on.

##### archived: `boolean`<a id="archived-boolean"></a>

Only return projects whose `archived` field takes on the value of this parameter.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsListMultipleResponse](./models/projects-list-multiple-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.removeCustomField`<a id="asanaprojectsremovecustomfield"></a>

Removes a custom field setting from a project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCustomFieldResponse = await asana.projects.removeCustomField({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`RemoveCustomFieldSettingRequest`](./models/remove-custom-field-setting-request.ts)<a id="data-removecustomfieldsettingrequestmodelsremove-custom-field-setting-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsRemoveCustomFieldResponse](./models/projects-remove-custom-field-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/removeCustomFieldSetting` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.removeMembersFromProject`<a id="asanaprojectsremovemembersfromproject"></a>

Removes the specified list of users from members of the project.
Returns the updated project record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMembersFromProjectResponse =
  await asana.projects.removeMembersFromProject({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`RemoveMembersRequest`](./models/remove-members-request.ts)<a id="data-removemembersrequestmodelsremove-members-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsRemoveMembersFromProjectResponse](./models/projects-remove-members-from-project-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/removeMembers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.removeProjectFollowers`<a id="asanaprojectsremoveprojectfollowers"></a>

Removes the specified list of users from following the project, this will not affect project membership status.
Returns the updated project record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeProjectFollowersResponse =
  await asana.projects.removeProjectFollowers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`RemoveFollowersRequest`](./models/remove-followers-request.ts)<a id="data-removefollowersrequestmodelsremove-followers-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsRemoveProjectFollowersResponse](./models/projects-remove-project-followers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/removeFollowers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.taskProjectsList`<a id="asanaprojectstaskprojectslist"></a>

Returns a compact representation of all of the projects the task is in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const taskProjectsListResponse = await asana.projects.taskProjectsList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsTaskProjectsListResponse](./models/projects-task-projects-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.projects.updateProjectRecord`<a id="asanaprojectsupdateprojectrecord"></a>

A specific, existing project can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated project record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProjectRecordResponse = await asana.projects.updateProjectRecord(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`ProjectUpdateRequest`](./models/project-update-request.ts)<a id="data-projectupdaterequestmodelsproject-update-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectsUpdateProjectRecordResponse](./models/projects-update-project-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.rules.triggerRuleRequest`<a id="asanarulestriggerrulerequest"></a>

Trigger a rule which uses an ["incoming web request"](https://raw.githubusercontent.com) trigger.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerRuleRequestResponse = await asana.rules.triggerRuleRequest({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ruleTriggerGid: `string`<a id="ruletriggergid-string"></a>

The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.

##### data: [`RuleTriggerRequest`](./models/rule-trigger-request.ts)<a id="data-ruletriggerrequestmodelsrule-trigger-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RulesTriggerRuleRequestResponse](./models/rules-trigger-rule-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rule_triggers/{rule_trigger_gid}/run` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.sections.addTaskToSection`<a id="asanasectionsaddtasktosection"></a>

Add a task to a specific, existing section. This will remove the task from other sections of the project.

The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.

This does not work for separators (tasks with the resource_subtype of section).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTaskToSectionResponse = await asana.sections.addTaskToSection({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sectionGid: `string`<a id="sectiongid-string"></a>

The globally unique identifier for the section.

##### data: [`SectionTaskInsertRequest`](./models/section-task-insert-request.ts)<a id="data-sectiontaskinsertrequestmodelssection-task-insert-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[SectionsAddTaskToSectionResponse](./models/sections-add-task-to-section-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{section_gid}/addTask` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.sections.createNewSection`<a id="asanasectionscreatenewsection"></a>

Creates a new section in a project.
Returns the full record of the newly created section.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewSectionResponse = await asana.sections.createNewSection({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`SectionRequest`](./models/section-request.ts)<a id="data-sectionrequestmodelssection-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[SectionsCreateNewSectionResponse](./models/sections-create-new-section-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/sections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.sections.deleteSection`<a id="asanasectionsdeletesection"></a>

A specific, existing section can be deleted by making a DELETE request on
the URL for that section.

Note that sections must be empty to be deleted.

The last remaining section cannot be deleted.

Returns an empty data block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSectionResponse = await asana.sections.deleteSection({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sectionGid: `string`<a id="sectiongid-string"></a>

The globally unique identifier for the section.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[SectionsDeleteSectionResponse](./models/sections-delete-section-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{section_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.sections.getRecord`<a id="asanasectionsgetrecord"></a>

Returns the complete record for a single section.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await asana.sections.getRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sectionGid: `string`<a id="sectiongid-string"></a>

The globally unique identifier for the section.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[SectionsGetRecordResponse](./models/sections-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{section_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.sections.listProjectSections`<a id="asanasectionslistprojectsections"></a>

Returns the compact records for all sections in the specified project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProjectSectionsResponse = await asana.sections.listProjectSections(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[SectionsListProjectSectionsResponse](./models/sections-list-project-sections-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/sections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.sections.moveOrInsert`<a id="asanasectionsmoveorinsert"></a>

Move sections relative to each other. One of
`before_section` or `after_section` is required.

Sections cannot be moved between projects.

Returns an empty data block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const moveOrInsertResponse = await asana.sections.moveOrInsert({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### data: [`ProjectSectionInsertRequest`](./models/project-section-insert-request.ts)<a id="data-projectsectioninsertrequestmodelsproject-section-insert-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[SectionsMoveOrInsertResponse](./models/sections-move-or-insert-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/sections/insert` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.sections.updateSectionRecord`<a id="asanasectionsupdatesectionrecord"></a>

A specific, existing section can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged. (note that
at this time, the only field that can be updated is the `name` field.)

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated section record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSectionRecordResponse = await asana.sections.updateSectionRecord(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sectionGid: `string`<a id="sectiongid-string"></a>

The globally unique identifier for the section.

##### data: [`SectionRequest`](./models/section-request.ts)<a id="data-sectionrequestmodelssection-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[SectionsUpdateSectionRecordResponse](./models/sections-update-section-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{section_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.statusUpdates.createNewStatusUpdateRecord`<a id="asanastatusupdatescreatenewstatusupdaterecord"></a>

Creates a new status update on an object.
Returns the full record of the newly created status update.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewStatusUpdateRecordResponse =
  await asana.statusUpdates.createNewStatusUpdateRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`StatusUpdateRequest`](./models/status-update-request.ts)<a id="data-statusupdaterequestmodelsstatus-update-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[StatusUpdatesCreateNewStatusUpdateRecordResponse](./models/status-updates-create-new-status-update-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/status_updates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.statusUpdates.deleteSpecificStatusUpdate`<a id="asanastatusupdatesdeletespecificstatusupdate"></a>

Deletes a specific, existing status update.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificStatusUpdateResponse =
  await asana.statusUpdates.deleteSpecificStatusUpdate({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### statusUpdateGid: `string`<a id="statusupdategid-string"></a>

The status update to get.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[StatusUpdatesDeleteSpecificStatusUpdateResponse](./models/status-updates-delete-specific-status-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/status_updates/{status_update_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.statusUpdates.getCompactRecords`<a id="asanastatusupdatesgetcompactrecords"></a>

Returns the compact status update records for all updates on the object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompactRecordsResponse = await asana.statusUpdates.getCompactRecords({
  parent: "parent_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parent: `string`<a id="parent-string"></a>

Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### createdSince: `string`<a id="createdsince-string"></a>

Only return statuses that have been created since the given time.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[StatusUpdatesGetCompactRecordsResponse](./models/status-updates-get-compact-records-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/status_updates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.statusUpdates.getRecordById`<a id="asanastatusupdatesgetrecordbyid"></a>

Returns the complete record for a single status update.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordByIdResponse = await asana.statusUpdates.getRecordById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### statusUpdateGid: `string`<a id="statusupdategid-string"></a>

The status update to get.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[StatusUpdatesGetRecordByIdResponse](./models/status-updates-get-record-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/status_updates/{status_update_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.stories.createComment`<a id="asanastoriescreatecomment"></a>

Adds a story to a task. This endpoint currently only allows for comment
stories to be created. The comment will be authored by the currently
authenticated user, and timestamped when the server receives the request.

Returns the full record for the new story added to the task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCommentResponse = await asana.stories.createComment({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`StoryBase`](./models/story-base.ts)<a id="data-storybasemodelsstory-basets"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[StoriesCreateCommentResponse](./models/stories-create-comment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/stories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.stories.deleteStoryRecord`<a id="asanastoriesdeletestoryrecord"></a>

Deletes a story. A user can only delete stories they have created.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteStoryRecordResponse = await asana.stories.deleteStoryRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storyGid: `string`<a id="storygid-string"></a>

Globally unique identifier for the story.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[StoriesDeleteStoryRecordResponse](./models/stories-delete-story-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stories/{story_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.stories.getFullRecord`<a id="asanastoriesgetfullrecord"></a>

Returns the full record for a single story.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFullRecordResponse = await asana.stories.getFullRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storyGid: `string`<a id="storygid-string"></a>

Globally unique identifier for the story.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[StoriesGetFullRecordResponse](./models/stories-get-full-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stories/{story_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.stories.getTaskStories`<a id="asanastoriesgettaskstories"></a>

Returns the compact records for all stories on the task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskStoriesResponse = await asana.stories.getTaskStories({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[StoriesGetTaskStoriesResponse](./models/stories-get-task-stories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/stories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.stories.updateFullRecord`<a id="asanastoriesupdatefullrecord"></a>

Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of `text` and `html_text` can be specified.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFullRecordResponse = await asana.stories.updateFullRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storyGid: `string`<a id="storygid-string"></a>

Globally unique identifier for the story.

##### data: [`StoryBase`](./models/story-base.ts)<a id="data-storybasemodelsstory-basets"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[StoriesUpdateFullRecordResponse](./models/stories-update-full-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stories/{story_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tags.createNewTagRecord`<a id="asanatagscreatenewtagrecord"></a>

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTagRecordResponse = await asana.tags.createNewTagRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`TagRequest`](./models/tag-request.ts)<a id="data-tagrequestmodelstag-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TagsCreateNewTagRecordResponse](./models/tags-create-new-tag-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tags.createTagInWorkspace`<a id="asanatagscreatetaginworkspace"></a>

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTagInWorkspaceResponse = await asana.tags.createTagInWorkspace({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### data: [`TagCreateTagForWorkspaceRequest`](./models/tag-create-tag-for-workspace-request.ts)<a id="data-tagcreatetagforworkspacerequestmodelstag-create-tag-for-workspace-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TagsCreateTagInWorkspaceResponse](./models/tags-create-tag-in-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tags.getFilteredTags`<a id="asanatagsgetfilteredtags"></a>

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFilteredTagsResponse = await asana.tags.getFilteredTags({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TagsGetFilteredTagsResponse](./models/tags-get-filtered-tags-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tags.getRecord`<a id="asanatagsgetrecord"></a>

Returns the complete tag record for a single tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await asana.tags.getRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagGid: `string`<a id="taggid-string"></a>

Globally unique identifier for the tag.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TagsGetRecordResponse](./models/tags-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tags.getTaskTags`<a id="asanatagsgettasktags"></a>

Get a compact representation of all of the tags the task has.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskTagsResponse = await asana.tags.getTaskTags({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TagsGetTaskTagsResponse](./models/tags-get-task-tags-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tags.listFilteredTags`<a id="asanatagslistfilteredtags"></a>

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilteredTagsResponse = await asana.tags.listFilteredTags({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### workspace: `string`<a id="workspace-string"></a>

The workspace to filter tags on.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TagsListFilteredTagsResponse](./models/tags-list-filtered-tags-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tags.removeTag`<a id="asanatagsremovetag"></a>

A specific, existing tag can be deleted by making a DELETE request on
the URL for that tag.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTagResponse = await asana.tags.removeTag({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagGid: `string`<a id="taggid-string"></a>

Globally unique identifier for the tag.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TagsRemoveTagResponse](./models/tags-remove-tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tags.updateTagRecord`<a id="asanatagsupdatetagrecord"></a>

Updates the properties of a tag. Only the fields provided in the `data`
block will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the tag.

Returns the complete updated tag record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTagRecordResponse = await asana.tags.updateTagRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagGid: `string`<a id="taggid-string"></a>

Globally unique identifier for the tag.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TagsUpdateTagRecordResponse](./models/tags-update-tag-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.taskTemplates.deleteTaskTemplate`<a id="asanatasktemplatesdeletetasktemplate"></a>

A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTaskTemplateResponse = await asana.taskTemplates.deleteTaskTemplate(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskTemplateGid: `string`<a id="tasktemplategid-string"></a>

Globally unique identifier for the task template.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TaskTemplatesDeleteTaskTemplateResponse](./models/task-templates-delete-task-template-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/task_templates/{task_template_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.taskTemplates.getSingleTemplate`<a id="asanatasktemplatesgetsingletemplate"></a>

Returns the complete task template record for a single task template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleTemplateResponse = await asana.taskTemplates.getSingleTemplate(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskTemplateGid: `string`<a id="tasktemplategid-string"></a>

Globally unique identifier for the task template.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TaskTemplatesGetSingleTemplateResponse](./models/task-templates-get-single-template-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/task_templates/{task_template_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.taskTemplates.instantiateTaskJob`<a id="asanatasktemplatesinstantiatetaskjob"></a>

Creates and returns a job that will asynchronously handle the task instantiation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const instantiateTaskJobResponse = await asana.taskTemplates.instantiateTaskJob(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskTemplateGid: `string`<a id="tasktemplategid-string"></a>

Globally unique identifier for the task template.

##### data: [`TaskTemplateInstantiateTaskRequest`](./models/task-template-instantiate-task-request.ts)<a id="data-tasktemplateinstantiatetaskrequestmodelstask-template-instantiate-task-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TaskTemplatesInstantiateTaskJobResponse](./models/task-templates-instantiate-task-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/task_templates/{task_template_gid}/instantiateTask` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.taskTemplates.listMultiple`<a id="asanatasktemplateslistmultiple"></a>

Returns the compact task template records for some filtered set of task templates. You must specify a `project`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMultipleResponse = await asana.taskTemplates.listMultiple({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### project: `string`<a id="project-string"></a>

The project to filter task templates on.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TaskTemplatesListMultipleResponse](./models/task-templates-list-multiple-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/task_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.addFollowersToTask`<a id="asanatasksaddfollowerstotask"></a>

Adds followers to a task. Returns an empty data block.
Each task can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated task record, described above.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addFollowersToTaskResponse = await asana.tasks.addFollowersToTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskAddFollowersRequest`](./models/task-add-followers-request.ts)<a id="data-taskaddfollowersrequestmodelstask-add-followers-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksAddFollowersToTaskResponse](./models/tasks-add-followers-to-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/addFollowers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.addProjectToTask`<a id="asanatasksaddprojecttotask"></a>

Adds the task to the specified project, in the optional location
specified. If no location arguments are given, the task will be added to
the end of the project.

`addProject` can also be used to reorder a task within a project or
section that already contains it.

At most one of `insert_before`, `insert_after`, or `section` should be
specified. Inserting into a section in an non-order-dependent way can be
done by specifying section, otherwise, to insert within a section in a
particular place, specify `insert_before` or `insert_after` and a task
within the section to anchor the position of this task.

Returns an empty data block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addProjectToTaskResponse = await asana.tasks.addProjectToTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskAddProjectRequest`](./models/task-add-project-request.ts)<a id="data-taskaddprojectrequestmodelstask-add-project-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksAddProjectToTaskResponse](./models/tasks-add-project-to-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/addProject` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.addTagToTask`<a id="asanatasksaddtagtotask"></a>

Adds a tag to a task. Returns an empty data block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTagToTaskResponse = await asana.tasks.addTagToTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskAddTagRequest`](./models/task-add-tag-request.ts)<a id="data-taskaddtagrequestmodelstask-add-tag-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksAddTagToTaskResponse](./models/tasks-add-tag-to-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/addTag` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.createNewTask`<a id="asanataskscreatenewtask"></a>

Creating a new task is as easy as POSTing to the `/tasks` endpoint with a
data block containing the fields you’d like to set on the task. Any
unspecified fields will take on default values.

Every task is required to be created in a specific workspace, and this
workspace cannot be changed once set. The workspace need not be set
explicitly if you specify `projects` or a `parent` task instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTaskResponse = await asana.tasks.createNewTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`TaskRequest`](./models/task-request.ts)<a id="data-taskrequestmodelstask-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksCreateNewTaskResponse](./models/tasks-create-new-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.createSubtaskRecord`<a id="asanataskscreatesubtaskrecord"></a>

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSubtaskRecordResponse = await asana.tasks.createSubtaskRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskRequest`](./models/task-request.ts)<a id="data-taskrequestmodelstask-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksCreateSubtaskRecordResponse](./models/tasks-create-subtask-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/subtasks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.deleteTask`<a id="asanatasksdeletetask"></a>

A specific, existing task can be deleted by making a DELETE request on
the URL for that task. Deleted tasks go into the “trash” of the user
making the delete request. Tasks can be recovered from the trash within a
period of 30 days; afterward they are completely removed from the system.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTaskResponse = await asana.tasks.deleteTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksDeleteTaskResponse](./models/tasks-delete-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.duplicateTaskJob`<a id="asanatasksduplicatetaskjob"></a>

Creates and returns a job that will asynchronously handle the duplication.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const duplicateTaskJobResponse = await asana.tasks.duplicateTaskJob({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskDuplicateRequest`](./models/task-duplicate-request.ts)<a id="data-taskduplicaterequestmodelstask-duplicate-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksDuplicateTaskJobResponse](./models/tasks-duplicate-task-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/duplicate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getAllDependencies`<a id="asanatasksgetalldependencies"></a>

Returns the compact representations of all of the dependencies of a task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllDependenciesResponse = await asana.tasks.getAllDependencies({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetAllDependenciesResponse](./models/tasks-get-all-dependencies-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/dependencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getByCustomId`<a id="asanatasksgetbycustomid"></a>

Returns a task given a custom ID shortcode.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByCustomIdResponse = await asana.tasks.getByCustomId({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### customId: `string`<a id="customid-string"></a>

Generated custom ID for a task.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetByCustomIdResponse](./models/tasks-get-by-custom-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/tasks/custom_id/{custom_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getDependents`<a id="asanatasksgetdependents"></a>

Returns the compact representations of all of the dependents of a task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDependentsResponse = await asana.tasks.getDependents({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetDependentsResponse](./models/tasks-get-dependents-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/dependents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getMultiple`<a id="asanatasksgetmultiple"></a>

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.

For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](https://raw.githubusercontent.com).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMultipleResponse = await asana.tasks.getMultiple({
  completedSince: "2012-02-22T02:06:58.158Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### assignee: `string`<a id="assignee-string"></a>

The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified. *Note: If you specify `assignee`, you must also specify the `workspace` to filter on.*

##### project: `string`<a id="project-string"></a>

The project to filter tasks on.

##### section: `string`<a id="section-string"></a>

The section to filter tasks on.

##### workspace: `string`<a id="workspace-string"></a>

The workspace to filter tasks on. *Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*

##### completedSince: `string`<a id="completedsince-string"></a>

Only return tasks that are either incomplete or that have been completed since this time.

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.*

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetMultipleResponse](./models/tasks-get-multiple-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getMultipleWithTag`<a id="asanatasksgetmultiplewithtag"></a>

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMultipleWithTagResponse = await asana.tasks.getMultipleWithTag({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagGid: `string`<a id="taggid-string"></a>

Globally unique identifier for the tag.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetMultipleWithTagResponse](./models/tasks-get-multiple-with-tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_gid}/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getSectionTasks`<a id="asanatasksgetsectiontasks"></a>

*Board view only*: Returns the compact section records for all tasks within the given section.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSectionTasksResponse = await asana.tasks.getSectionTasks({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sectionGid: `string`<a id="sectiongid-string"></a>

The globally unique identifier for the section.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### completedSince: `string`<a id="completedsince-string"></a>

Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. 

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetSectionTasksResponse](./models/tasks-get-section-tasks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{section_gid}/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getSubtaskList`<a id="asanatasksgetsubtasklist"></a>

Returns a compact representation of all of the subtasks of a task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSubtaskListResponse = await asana.tasks.getSubtaskList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetSubtaskListResponse](./models/tasks-get-subtask-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/subtasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getTaskRecord`<a id="asanatasksgettaskrecord"></a>

Returns the complete task record for a single task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskRecordResponse = await asana.tasks.getTaskRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetTaskRecordResponse](./models/tasks-get-task-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getTasksByProject`<a id="asanatasksgettasksbyproject"></a>

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTasksByProjectResponse = await asana.tasks.getTasksByProject({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectGid: `string`<a id="projectgid-string"></a>

Globally unique identifier for the project.

##### completedSince: `string`<a id="completedsince-string"></a>

Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. 

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetTasksByProjectResponse](./models/tasks-get-tasks-by-project-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{project_gid}/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.getUserTaskListTasks`<a id="asanatasksgetusertasklisttasks"></a>

Returns the compact list of tasks in a user’s My Tasks list.
*Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
*Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTaskListTasksResponse = await asana.tasks.getUserTaskListTasks({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userTaskListGid: `string`<a id="usertasklistgid-string"></a>

Globally unique identifier for the user task list.

##### completedSince: `string`<a id="completedsince-string"></a>

Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. 

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksGetUserTaskListTasksResponse](./models/tasks-get-user-task-list-tasks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_task_lists/{user_task_list_gid}/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.removeFollowersFromTask`<a id="asanatasksremovefollowersfromtask"></a>

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFollowersFromTaskResponse =
  await asana.tasks.removeFollowersFromTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskRemoveFollowersRequest`](./models/task-remove-followers-request.ts)<a id="data-taskremovefollowersrequestmodelstask-remove-followers-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksRemoveFollowersFromTaskResponse](./models/tasks-remove-followers-from-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/removeFollowers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.removeProjectFromTask`<a id="asanatasksremoveprojectfromtask"></a>

Removes the task from the specified project. The task will still exist in
the system, but it will not be in the project anymore.

Returns an empty data block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeProjectFromTaskResponse = await asana.tasks.removeProjectFromTask(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskRemoveProjectRequest`](./models/task-remove-project-request.ts)<a id="data-taskremoveprojectrequestmodelstask-remove-project-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksRemoveProjectFromTaskResponse](./models/tasks-remove-project-from-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/removeProject` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.removeTagFromTask`<a id="asanatasksremovetagfromtask"></a>

Removes a tag from a task. Returns an empty data block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTagFromTaskResponse = await asana.tasks.removeTagFromTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskRemoveTagRequest`](./models/task-remove-tag-request.ts)<a id="data-taskremovetagrequestmodelstask-remove-tag-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksRemoveTagFromTaskResponse](./models/tasks-remove-tag-from-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/removeTag` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.searchInWorkspace`<a id="asanataskssearchinworkspace"></a>

To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
#### Premium access<a id="premium-access"></a>
Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:

- The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace

Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.
#### Pagination<a id="pagination"></a>
Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.
#### Eventual consistency<a id="eventual-consistency"></a>
Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
#### Rate limits<a id="rate-limits"></a>
You may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits).
#### Custom field parameters<a id="custom-field-parameters"></a>
| Parameter name | Custom field type | Accepted type |
|---|---|---|
| custom_fields.{gid}.is_set | All | Boolean |
| custom_fields.{gid}.value | Text | String |
| custom_fields.{gid}.value | Number | Number |
| custom_fields.{gid}.value | Enum | Enum option ID |
| custom_fields.{gid}.starts_with | Text only | String |
| custom_fields.{gid}.ends_with | Text only | String |
| custom_fields.{gid}.contains | Text only | String |
| custom_fields.{gid}.less_than | Number only | Number |
| custom_fields.{gid}.greater_than | Number only | Number |


For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.

**Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field

*Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchInWorkspaceResponse = await asana.tasks.searchInWorkspace({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### text: `string`<a id="text-string"></a>

Performs full-text search on both task name and description

##### resourceSubtype: `'default_task' | 'milestone'`<a id="resourcesubtype-default_task--milestone"></a>

Filters results by the task\'s resource_subtype

##### assigneeAny: `string`<a id="assigneeany-string"></a>

Comma-separated list of user identifiers

##### assigneeNot: `string`<a id="assigneenot-string"></a>

Comma-separated list of user identifiers

##### portfoliosAny: `string`<a id="portfoliosany-string"></a>

Comma-separated list of portfolio IDs

##### projectsAny: `string`<a id="projectsany-string"></a>

Comma-separated list of project IDs

##### projectsNot: `string`<a id="projectsnot-string"></a>

Comma-separated list of project IDs

##### projectsAll: `string`<a id="projectsall-string"></a>

Comma-separated list of project IDs

##### sectionsAny: `string`<a id="sectionsany-string"></a>

Comma-separated list of section or column IDs

##### sectionsNot: `string`<a id="sectionsnot-string"></a>

Comma-separated list of section or column IDs

##### sectionsAll: `string`<a id="sectionsall-string"></a>

Comma-separated list of section or column IDs

##### tagsAny: `string`<a id="tagsany-string"></a>

Comma-separated list of tag IDs

##### tagsNot: `string`<a id="tagsnot-string"></a>

Comma-separated list of tag IDs

##### tagsAll: `string`<a id="tagsall-string"></a>

Comma-separated list of tag IDs

##### teamsAny: `string`<a id="teamsany-string"></a>

Comma-separated list of team IDs

##### followersNot: `string`<a id="followersnot-string"></a>

Comma-separated list of user identifiers

##### createdByAny: `string`<a id="createdbyany-string"></a>

Comma-separated list of user identifiers

##### createdByNot: `string`<a id="createdbynot-string"></a>

Comma-separated list of user identifiers

##### assignedByAny: `string`<a id="assignedbyany-string"></a>

Comma-separated list of user identifiers

##### assignedByNot: `string`<a id="assignedbynot-string"></a>

Comma-separated list of user identifiers

##### likedByNot: `string`<a id="likedbynot-string"></a>

Comma-separated list of user identifiers

##### commentedOnByNot: `string`<a id="commentedonbynot-string"></a>

Comma-separated list of user identifiers

##### dueOnBefore: `string | Date`<a id="dueonbefore-string--date"></a>

ISO 8601 date string

##### dueOnAfter: `string | Date`<a id="dueonafter-string--date"></a>

ISO 8601 date string

##### dueOn: `string | Date`<a id="dueon-string--date"></a>

ISO 8601 date string or `null`

##### dueAtBefore: `string`<a id="dueatbefore-string"></a>

ISO 8601 datetime string

##### dueAtAfter: `string`<a id="dueatafter-string"></a>

ISO 8601 datetime string

##### startOnBefore: `string | Date`<a id="startonbefore-string--date"></a>

ISO 8601 date string

##### startOnAfter: `string | Date`<a id="startonafter-string--date"></a>

ISO 8601 date string

##### startOn: `string | Date`<a id="starton-string--date"></a>

ISO 8601 date string or `null`

##### createdOnBefore: `string | Date`<a id="createdonbefore-string--date"></a>

ISO 8601 date string

##### createdOnAfter: `string | Date`<a id="createdonafter-string--date"></a>

ISO 8601 date string

##### createdOn: `string | Date`<a id="createdon-string--date"></a>

ISO 8601 date string or `null`

##### createdAtBefore: `string`<a id="createdatbefore-string"></a>

ISO 8601 datetime string

##### createdAtAfter: `string`<a id="createdatafter-string"></a>

ISO 8601 datetime string

##### completedOnBefore: `string | Date`<a id="completedonbefore-string--date"></a>

ISO 8601 date string

##### completedOnAfter: `string | Date`<a id="completedonafter-string--date"></a>

ISO 8601 date string

##### completedOn: `string | Date`<a id="completedon-string--date"></a>

ISO 8601 date string or `null`

##### completedAtBefore: `string`<a id="completedatbefore-string"></a>

ISO 8601 datetime string

##### completedAtAfter: `string`<a id="completedatafter-string"></a>

ISO 8601 datetime string

##### modifiedOnBefore: `string | Date`<a id="modifiedonbefore-string--date"></a>

ISO 8601 date string

##### modifiedOnAfter: `string | Date`<a id="modifiedonafter-string--date"></a>

ISO 8601 date string

##### modifiedOn: `string | Date`<a id="modifiedon-string--date"></a>

ISO 8601 date string or `null`

##### modifiedAtBefore: `string`<a id="modifiedatbefore-string"></a>

ISO 8601 datetime string

##### modifiedAtAfter: `string`<a id="modifiedatafter-string"></a>

ISO 8601 datetime string

##### isBlocking: `boolean`<a id="isblocking-boolean"></a>

Filter to incomplete tasks with dependents

##### isBlocked: `boolean`<a id="isblocked-boolean"></a>

Filter to tasks with incomplete dependencies

##### hasAttachment: `boolean`<a id="hasattachment-boolean"></a>

Filter to tasks with attachments

##### completed: `boolean`<a id="completed-boolean"></a>

Filter to completed tasks

##### isSubtask: `boolean`<a id="issubtask-boolean"></a>

Filter to subtasks

##### sortBy: `'due_date' | 'created_at' | 'completed_at' | 'likes' | 'modified_at'`<a id="sortby-due_date--created_at--completed_at--likes--modified_at"></a>

One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`

##### sortAscending: `boolean`<a id="sortascending-boolean"></a>

Default `false`

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksSearchInWorkspaceResponse](./models/tasks-search-in-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/tasks/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.setDependenciesForTask`<a id="asanataskssetdependenciesfortask"></a>

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDependenciesForTaskResponse = await asana.tasks.setDependenciesForTask(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`ModifyDependenciesRequest`](./models/modify-dependencies-request.ts)<a id="data-modifydependenciesrequestmodelsmodify-dependencies-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksSetDependenciesForTaskResponse](./models/tasks-set-dependencies-for-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/addDependencies` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.setParentTask`<a id="asanataskssetparenttask"></a>

parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setParentTaskResponse = await asana.tasks.setParentTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskSetParentRequest`](./models/task-set-parent-request.ts)<a id="data-tasksetparentrequestmodelstask-set-parent-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksSetParentTaskResponse](./models/tasks-set-parent-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/setParent` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.setTaskDependents`<a id="asanataskssettaskdependents"></a>

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setTaskDependentsResponse = await asana.tasks.setTaskDependents({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`ModifyDependentsRequest`](./models/modify-dependents-request.ts)<a id="data-modifydependentsrequestmodelsmodify-dependents-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksSetTaskDependentsResponse](./models/tasks-set-task-dependents-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/addDependents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.unlinkDependenciesFromTask`<a id="asanatasksunlinkdependenciesfromtask"></a>

Unlinks a set of dependencies from this task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unlinkDependenciesFromTaskResponse =
  await asana.tasks.unlinkDependenciesFromTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`ModifyDependenciesRequest`](./models/modify-dependencies-request.ts)<a id="data-modifydependenciesrequestmodelsmodify-dependencies-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksUnlinkDependenciesFromTaskResponse](./models/tasks-unlink-dependencies-from-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/removeDependencies` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.unlinkDependents`<a id="asanatasksunlinkdependents"></a>

Unlinks a set of dependents from this task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unlinkDependentsResponse = await asana.tasks.unlinkDependents({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`ModifyDependentsRequest`](./models/modify-dependents-request.ts)<a id="data-modifydependentsrequestmodelsmodify-dependents-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TasksUnlinkDependentsResponse](./models/tasks-unlink-dependents-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/removeDependents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.tasks.updateTaskRecord`<a id="asanatasksupdatetaskrecord"></a>

A specific, existing task can be updated by making a PUT request on the
URL for that task. Only the fields provided in the `data` block will be
updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated task record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTaskRecordResponse = await asana.tasks.updateTaskRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`TaskRequest`](./models/task-request.ts)<a id="data-taskrequestmodelstask-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TasksUpdateTaskRecordResponse](./models/tasks-update-task-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teamMemberships.getCompact`<a id="asanateammembershipsgetcompact"></a>

Returns the compact team memberships for the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompactResponse = await asana.teamMemberships.getCompact({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamMembershipsGetCompactResponse](./models/team-memberships-get-compact-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}/team_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teamMemberships.getCompactRecords`<a id="asanateammembershipsgetcompactrecords"></a>

Returns compact team membership records.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompactRecordsResponse = await asana.teamMemberships.getCompactRecords(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### team: `string`<a id="team-string"></a>

Globally unique identifier for the team.

##### user: `string`<a id="user-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user. This parameter must be used with the workspace parameter.

##### workspace: `string`<a id="workspace-string"></a>

Globally unique identifier for the workspace. This parameter must be used with the user parameter.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamMembershipsGetCompactRecordsResponse](./models/team-memberships-get-compact-records-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teamMemberships.getRecordById`<a id="asanateammembershipsgetrecordbyid"></a>

Returns the complete team membership record for a single team membership.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordByIdResponse = await asana.teamMemberships.getRecordById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamMembershipGid: `string`<a id="teammembershipgid-string"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamMembershipsGetRecordByIdResponse](./models/team-memberships-get-record-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/team_memberships/{team_membership_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teamMemberships.getUserCompact`<a id="asanateammembershipsgetusercompact"></a>

Returns the compact team membership records for the user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserCompactResponse = await asana.teamMemberships.getUserCompact({
  workspace: "workspace_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGid: `string`<a id="usergid-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### workspace: `string`<a id="workspace-string"></a>

Globally unique identifier for the workspace.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamMembershipsGetUserCompactResponse](./models/team-memberships-get-user-compact-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_gid}/team_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teams.addUserToTeam`<a id="asanateamsaddusertoteam"></a>

The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.

Returns the complete team membership record for the newly added user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUserToTeamResponse = await asana.teams.addUserToTeam({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### data: [`TeamAddUserRequest`](./models/team-add-user-request.ts)<a id="data-teamadduserrequestmodelsteam-add-user-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsAddUserToTeamResponse](./models/teams-add-user-to-team-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}/addUser` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teams.createTeamRecord`<a id="asanateamscreateteamrecord"></a>

Creates a team within the current workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamRecordResponse = await asana.teams.createTeamRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`TeamRequest`](./models/team-request.ts)<a id="data-teamrequestmodelsteam-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsCreateTeamRecordResponse](./models/teams-create-team-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teams.getTeamRecord`<a id="asanateamsgetteamrecord"></a>

Returns the full record for a single team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTeamRecordResponse = await asana.teams.getTeamRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsGetTeamRecordResponse](./models/teams-get-team-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teams.getUserTeams`<a id="asanateamsgetuserteams"></a>

Returns the compact records for all teams to which the given user is assigned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTeamsResponse = await asana.teams.getUserTeams({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGid: `string`<a id="usergid-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### organization: `string`<a id="organization-string"></a>

The workspace or organization to filter teams on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsGetUserTeamsResponse](./models/teams-get-user-teams-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_gid}/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teams.listWorkspaceTeams`<a id="asanateamslistworkspaceteams"></a>

Returns the compact records for all teams in the workspace visible to the authorized user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWorkspaceTeamsResponse = await asana.teams.listWorkspaceTeams({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsListWorkspaceTeamsResponse](./models/teams-list-workspace-teams-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teams.removeUserFromTeam`<a id="asanateamsremoveuserfromteam"></a>

The user making this call must be a member of the team in order to remove themselves or others.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserFromTeamResponse = await asana.teams.removeUserFromTeam({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### data: [`TeamRemoveUserRequest`](./models/team-remove-user-request.ts)<a id="data-teamremoveuserrequestmodelsteam-remove-user-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsRemoveUserFromTeamResponse](./models/teams-remove-user-from-team-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}/removeUser` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.teams.updateTeamRecord`<a id="asanateamsupdateteamrecord"></a>

Updates a team within the current workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTeamRecordResponse = await asana.teams.updateTeamRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### data: [`TeamRequest`](./models/team-request.ts)<a id="data-teamrequestmodelsteam-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TeamsUpdateTeamRecordResponse](./models/teams-update-team-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.timePeriods.getCompactTimePeriods`<a id="asanatimeperiodsgetcompacttimeperiods"></a>

Returns compact time period records.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompactTimePeriodsResponse =
  await asana.timePeriods.getCompactTimePeriods({
    workspace: "workspace_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspace: `string`<a id="workspace-string"></a>

Globally unique identifier for the workspace.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### startOn: `string | Date`<a id="starton-string--date"></a>

ISO 8601 date string

##### endOn: `string | Date`<a id="endon-string--date"></a>

ISO 8601 date string

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TimePeriodsGetCompactTimePeriodsResponse](./models/time-periods-get-compact-time-periods-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/time_periods` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.timePeriods.getFullRecord`<a id="asanatimeperiodsgetfullrecord"></a>

Returns the full record for a single time period.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFullRecordResponse = await asana.timePeriods.getFullRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timePeriodGid: `string`<a id="timeperiodgid-string"></a>

Globally unique identifier for the time period.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TimePeriodsGetFullRecordResponse](./models/time-periods-get-full-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/time_periods/{time_period_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.timeTrackingEntries.createNewTimeEntryRecord`<a id="asanatimetrackingentriescreatenewtimeentryrecord"></a>

Creates a time tracking entry on a given task.

Returns the record of the newly created time tracking entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTimeEntryRecordResponse =
  await asana.timeTrackingEntries.createNewTimeEntryRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### data: [`CreateTimeTrackingEntryRequest`](./models/create-time-tracking-entry-request.ts)<a id="data-createtimetrackingentryrequestmodelscreate-time-tracking-entry-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TimeTrackingEntriesCreateNewTimeEntryRecordResponse](./models/time-tracking-entries-create-new-time-entry-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/time_tracking_entries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.timeTrackingEntries.deleteTimeEntry`<a id="asanatimetrackingentriesdeletetimeentry"></a>

A specific, existing time tracking entry can be deleted by making a `DELETE` request on
the URL for that time tracking entry.

Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTimeEntryResponse = await asana.timeTrackingEntries.deleteTimeEntry(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeTrackingEntryGid: `string`<a id="timetrackingentrygid-string"></a>

Globally unique identifier for the time tracking entry.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[TimeTrackingEntriesDeleteTimeEntryResponse](./models/time-tracking-entries-delete-time-entry-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/time_tracking_entries/{time_tracking_entry_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.timeTrackingEntries.getForTask`<a id="asanatimetrackingentriesgetfortask"></a>

Returns time tracking entries for a given task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getForTaskResponse = await asana.timeTrackingEntries.getForTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskGid: `string`<a id="taskgid-string"></a>

The task to operate on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TimeTrackingEntriesGetForTaskResponse](./models/time-tracking-entries-get-for-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_gid}/time_tracking_entries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.timeTrackingEntries.getRecord`<a id="asanatimetrackingentriesgetrecord"></a>

Returns the complete time tracking entry record for a single time tracking entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await asana.timeTrackingEntries.getRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeTrackingEntryGid: `string`<a id="timetrackingentrygid-string"></a>

Globally unique identifier for the time tracking entry.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TimeTrackingEntriesGetRecordResponse](./models/time-tracking-entries-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/time_tracking_entries/{time_tracking_entry_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.timeTrackingEntries.updateTimeTrackingEntry`<a id="asanatimetrackingentriesupdatetimetrackingentry"></a>

A specific, existing time tracking entry can be updated by making a `PUT` request on
the URL for that time tracking entry. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated time tracking entry record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTimeTrackingEntryResponse =
  await asana.timeTrackingEntries.updateTimeTrackingEntry({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeTrackingEntryGid: `string`<a id="timetrackingentrygid-string"></a>

Globally unique identifier for the time tracking entry.

##### data: [`UpdateTimeTrackingEntryRequest`](./models/update-time-tracking-entry-request.ts)<a id="data-updatetimetrackingentryrequestmodelsupdate-time-tracking-entry-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TimeTrackingEntriesUpdateTimeTrackingEntryResponse](./models/time-tracking-entries-update-time-tracking-entry-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/time_tracking_entries/{time_tracking_entry_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.typeahead.getResults`<a id="asanatypeaheadgetresults"></a>

Retrieves objects in the workspace based via an auto-completion/typeahead
search algorithm. This feature is meant to provide results quickly, so do
not rely on this API to provide extremely accurate search results. The
result set is limited to a single page of results with a maximum size, so
you won’t be able to fetch large numbers of results.

The typeahead search API provides search for objects from a single
workspace. This endpoint should be used to query for objects when
creating an auto-completion/typeahead search feature. This API is meant
to provide results quickly and should not be relied upon for accurate or
exhaustive search results. The results sets are limited in size and
cannot be paginated.

Queries return a compact representation of each object which is typically
the gid and name fields. Interested in a specific set of fields or all of
the fields?! Of course you are. Use field selectors to manipulate what
data is included in a response.

Resources with type `user` are returned in order of most contacted to
least contacted. This is determined by task assignments, adding the user
to projects, and adding the user as a follower to tasks, messages,
etc.

Resources with type `project` are returned in order of recency. This is
determined when the user visits the project, is added to the project, and
completes tasks in the project.

Resources with type `task` are returned with priority placed on tasks
the user is following, but no guarantee on the order of those tasks.

Resources with type `project_template` are returned with priority
placed on favorited project templates.

Leaving the `query` string empty or omitted will give you results, still
following the resource ordering above. This could be used to list users or
projects that are relevant for the requesting user's api token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResultsResponse = await asana.typeahead.getResults({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### resourceType: `'custom_field' | 'goal' | 'project' | 'project_template' | 'portfolio' | 'tag' | 'task' | 'team' | 'user'`<a id="resourcetype-custom_field--goal--project--project_template--portfolio--tag--task--team--user"></a>

The type of values the typeahead should return. You can choose from one of the following: `custom_field`, `goal`, `project`, `project_template`, `portfolio`, `tag`, `task`, `team`, and `user`. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. `task`). Using multiple types is not yet supported.

##### type: `'custom_field' | 'portfolio' | 'project' | 'tag' | 'task' | 'user'`<a id="type-custom_field--portfolio--project--tag--task--user"></a>

*Deprecated: new integrations should prefer the resource_type field.*

##### query: `string`<a id="query-string"></a>

The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results.

##### count: `number`<a id="count-number"></a>

The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[TypeaheadGetResultsResponse](./models/typeahead-get-results-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/typeahead` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.userTaskLists.getRecord`<a id="asanausertasklistsgetrecord"></a>

Returns the full record for a user task list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await asana.userTaskLists.getRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userTaskListGid: `string`<a id="usertasklistgid-string"></a>

Globally unique identifier for the user task list.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[UserTaskListsGetRecordResponse](./models/user-task-lists-get-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_task_lists/{user_task_list_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.userTaskLists.getUserTaskList`<a id="asanausertasklistsgetusertasklist"></a>

Returns the full record for a user's task list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTaskListResponse = await asana.userTaskLists.getUserTaskList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGid: `string`<a id="usergid-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### workspace: `string`<a id="workspace-string"></a>

The workspace in which to get the user task list.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[UserTaskListsGetUserTaskListResponse](./models/user-task-lists-get-user-task-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_gid}/user_task_list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.users.getFavoritesForUser`<a id="asanausersgetfavoritesforuser"></a>

Returns all of a user's favorites in the given workspace, of the given type.
Results are given in order (The same order as Asana's sidebar).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFavoritesForUserResponse = await asana.users.getFavoritesForUser({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGid: `string`<a id="usergid-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### resourceType: `'portfolio' | 'project' | 'tag' | 'task' | 'user' | 'project_template'`<a id="resourcetype-portfolio--project--tag--task--user--project_template"></a>

The resource type of favorites to be returned.

##### workspace: `string`<a id="workspace-string"></a>

The workspace in which to get favorites.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetFavoritesForUserResponse](./models/users-get-favorites-for-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_gid}/favorites` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.users.getUserRecord`<a id="asanausersgetuserrecord"></a>

Returns the full user record for the single user with the provided ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserRecordResponse = await asana.users.getUserRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGid: `string`<a id="usergid-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetUserRecordResponse](./models/users-get-user-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.users.listMultipleUsers`<a id="asanauserslistmultipleusers"></a>

Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
Results are sorted by user ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMultipleUsersResponse = await asana.users.listMultipleUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspace: `string`<a id="workspace-string"></a>

The workspace or organization ID to filter users on.

##### team: `string`<a id="team-string"></a>

The team ID to filter users on.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[ErrorResponse](./models/error-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.users.listTeamUsers`<a id="asanauserslistteamusers"></a>

Returns the compact records for all users that are members of the team.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamUsersResponse = await asana.users.listTeamUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamGid: `string`<a id="teamgid-string"></a>

Globally unique identifier for the team.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[UsersListTeamUsersResponse](./models/users-list-team-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_gid}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.users.listWorkspaceUsers`<a id="asanauserslistworkspaceusers"></a>

Returns the compact records for all users in the specified workspace or organization.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWorkspaceUsersResponse = await asana.users.listWorkspaceUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[UsersListWorkspaceUsersResponse](./models/users-list-workspace-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.webhooks.establishWebhook`<a id="asanawebhooksestablishwebhook"></a>

Establishing a webhook is a two-part process. First, a simple HTTP POST
request initiates the creation similar to creating any other resource.

Next, in the middle of this request comes the confirmation handshake.
When a webhook is created, we will send a test POST to the target with an
`X-Hook-Secret` header. The target must respond with a `200 OK` or `204
No Content` and a matching `X-Hook-Secret` header to confirm that this
webhook subscription is indeed expected. We strongly recommend storing
this secret to be used to verify future webhook event signatures.

The POST request to create the webhook will then return with the status
of the request. If you do not acknowledge the webhook’s confirmation
handshake it will fail to setup, and you will receive an error in
response to your attempt to create it. This means you need to be able to
receive and complete the webhook *while* the POST request is in-flight
(in other words, have a server that can handle requests asynchronously).

Invalid hostnames like localhost will recieve a 403 Forbidden status code.

```
# Request
curl -H "Authorization: Bearer <personal_access_token>" \
-X POST https://app.asana.com/api/1.0/webhooks \
-d "resource=8675309" \
-d "target=https://example.com/receive-webhook/7654"
```

```
# Handshake sent to https://example.com/
POST /receive-webhook/7654
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Handshake response sent by example.com
HTTP/1.1 200
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Response
HTTP/1.1 201
{
  "data": {
    "gid": "43214",
    "resource": {
      "gid": "8675309",
      "name": "Bugs"
    },
    "target": "https://example.com/receive-webhook/7654",
    "active": false,
    "last_success_at": null,
    "last_failure_at": null,
    "last_failure_content": null
  }
}
```

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const establishWebhookResponse = await asana.webhooks.establishWebhook({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`WebhookRequest`](./models/webhook-request.ts)<a id="data-webhookrequestmodelswebhook-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksEstablishWebhookResponse](./models/webhooks-establish-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.webhooks.getWebhookRecord`<a id="asanawebhooksgetwebhookrecord"></a>

Returns the full record for the given webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhookRecordResponse = await asana.webhooks.getWebhookRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookGid: `string`<a id="webhookgid-string"></a>

Globally unique identifier for the webhook.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksGetWebhookRecordResponse](./models/webhooks-get-webhook-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{webhook_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.webhooks.listMultipleWebhooks`<a id="asanawebhookslistmultiplewebhooks"></a>

Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMultipleWebhooksResponse = await asana.webhooks.listMultipleWebhooks({
  workspace: "workspace_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspace: `string`<a id="workspace-string"></a>

The workspace to query for webhooks in.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### resource: `string`<a id="resource-string"></a>

Only return webhooks for the given resource.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksListMultipleWebhooksResponse](./models/webhooks-list-multiple-webhooks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.webhooks.removeWebhook`<a id="asanawebhooksremovewebhook"></a>

This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeWebhookResponse = await asana.webhooks.removeWebhook({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookGid: `string`<a id="webhookgid-string"></a>

Globally unique identifier for the webhook.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksRemoveWebhookResponse](./models/webhooks-remove-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{webhook_gid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.webhooks.updateWebhookFilters`<a id="asanawebhooksupdatewebhookfilters"></a>

An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookFiltersResponse = await asana.webhooks.updateWebhookFilters(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookGid: `string`<a id="webhookgid-string"></a>

Globally unique identifier for the webhook.

##### data: [`WebhookUpdateRequest`](./models/webhook-update-request.ts)<a id="data-webhookupdaterequestmodelswebhook-update-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksUpdateWebhookFiltersResponse](./models/webhooks-update-webhook-filters-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{webhook_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.workspaceMemberships.getRecordById`<a id="asanaworkspacemembershipsgetrecordbyid"></a>

Returns the complete workspace record for a single workspace membership.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordByIdResponse = await asana.workspaceMemberships.getRecordById(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceMembershipGid: `string`<a id="workspacemembershipgid-string"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WorkspaceMembershipsGetRecordByIdResponse](./models/workspace-memberships-get-record-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspace_memberships/{workspace_membership_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.workspaceMemberships.getUserMemberships`<a id="asanaworkspacemembershipsgetusermemberships"></a>

Returns the compact workspace membership records for the user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserMembershipsResponse =
  await asana.workspaceMemberships.getUserMemberships({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGid: `string`<a id="usergid-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WorkspaceMembershipsGetUserMembershipsResponse](./models/workspace-memberships-get-user-memberships-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_gid}/workspace_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.workspaceMemberships.listForWorkspace`<a id="asanaworkspacemembershipslistforworkspace"></a>

Returns the compact workspace membership records for the workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForWorkspaceResponse =
  await asana.workspaceMemberships.listForWorkspace({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### user: `string`<a id="user-string"></a>

A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WorkspaceMembershipsListForWorkspaceResponse](./models/workspace-memberships-list-for-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/workspace_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.workspaces.addUserToWorkspace`<a id="asanaworkspacesaddusertoworkspace"></a>

Add a user to a workspace or organization.
The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUserToWorkspaceResponse = await asana.workspaces.addUserToWorkspace(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### data: [`WorkspaceAddUserRequest`](./models/workspace-add-user-request.ts)<a id="data-workspaceadduserrequestmodelsworkspace-add-user-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WorkspacesAddUserToWorkspaceResponse](./models/workspaces-add-user-to-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/addUser` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.workspaces.getWorkspaceRecord`<a id="asanaworkspacesgetworkspacerecord"></a>

Returns the full workspace record for a single workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkspaceRecordResponse = await asana.workspaces.getWorkspaceRecord(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WorkspacesGetWorkspaceRecordResponse](./models/workspaces-get-workspace-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.workspaces.listMultiple`<a id="asanaworkspaceslistmultiple"></a>

Returns the compact records for all workspaces visible to the authorized user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMultipleResponse = await asana.workspaces.listMultiple({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### limit: `number`<a id="limit-number"></a>

Results per page. The number of objects to return per page. The value must be between 1 and 100.

##### offset: `string`<a id="offset-string"></a>

Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \'Note: You can only pass in an offset that was returned to you via a previously paginated request.\'

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WorkspacesListMultipleResponse](./models/workspaces-list-multiple-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.workspaces.removeUserFromWorkspace`<a id="asanaworkspacesremoveuserfromworkspace"></a>

Remove a user from a workspace or organization.
The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
Returns an empty data record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserFromWorkspaceResponse =
  await asana.workspaces.removeUserFromWorkspace({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### data: [`WorkspaceRemoveUserRequest`](./models/workspace-remove-user-request.ts)<a id="data-workspaceremoveuserrequestmodelsworkspace-remove-user-requestts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

#### 🔄 Return<a id="🔄-return"></a>

[WorkspacesRemoveUserFromWorkspaceResponse](./models/workspaces-remove-user-from-workspace-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}/removeUser` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `asana.workspaces.updateWorkspaceRecord`<a id="asanaworkspacesupdateworkspacerecord"></a>

A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
Currently the only field that can be modified for a workspace is its name.
Returns the complete, updated workspace record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWorkspaceRecordResponse =
  await asana.workspaces.updateWorkspaceRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceGid: `string`<a id="workspacegid-string"></a>

Globally unique identifier for the workspace or organization.

##### data: [`WorkspaceCompact`](./models/workspace-compact.ts)<a id="data-workspacecompactmodelsworkspace-compactts"></a>

##### optPretty: `boolean`<a id="optpretty-boolean"></a>

Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.

##### optFields: `string`[]<a id="optfields-string"></a>

This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.

#### 🔄 Return<a id="🔄-return"></a>

[WorkspacesUpdateWorkspaceRecordResponse](./models/workspaces-update-workspace-record-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_gid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
