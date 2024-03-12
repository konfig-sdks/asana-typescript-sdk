/*
Asana

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A story represents an activity associated with an object in the Asana system.
 * @export
 * @interface StoryBaseAllOf
 */
export interface StoryBaseAllOf {
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'created_at'?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'resource_subtype'?: string;
    /**
     * The plain text of the comment to add. Cannot be used with html_text.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'text'?: string;
    /**
     * [Opt In](https://raw.githubusercontent.com). HTML formatted text for a comment. This will not include the name of the creator.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'html_text'?: string;
    /**
     * *Conditional*. Whether the story should be pinned on the resource.
     * @type {boolean}
     * @memberof StoryBaseAllOf
     */
    'is_pinned'?: boolean;
    /**
     * The name of the sticker in this story. `null` if there is no sticker.
     * @type {string}
     * @memberof StoryBaseAllOf
     */
    'sticker_name'?: StoryBaseAllOfStickerNameEnum;
}

type StoryBaseAllOfStickerNameEnum = 'green_checkmark' | 'people_dancing' | 'dancing_unicorn' | 'heart' | 'party_popper' | 'people_waving_flags' | 'splashing_narwhal' | 'trophy' | 'yeti_riding_unicorn' | 'celebrating_people' | 'determined_climbers' | 'phoenix_spreading_love'

