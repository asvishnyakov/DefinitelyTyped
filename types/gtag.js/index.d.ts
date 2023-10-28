declare var gtag: Gtag.Gtag;
declare namespace Gtag {
    interface GtagCommands {
        config: [targetId: string, config?: ControlParams | EventParams | ConfigParams | CustomParams];
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        set: [targetId: string, config: CustomParams | boolean | string] | [config: CustomParams];
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        js: [config: Date];
        // event: [eventName: EventNames | (string & {}), eventParams?: ControlParams | EventParams | CustomParams]
        get: [
            targetId: string,
            fieldName: FieldNames | string,
            callback?: (field: string | CustomParams | undefined) => any,
        ];
        consent: [consentArg: ConsentArg | (string & {}), consentParams: ConsentParams];
    }

    interface Gtag {
        // <Command extends keyof GtagCommands>(command: Command, ...args: GtagCommands[Command]): void;

        /**
         * This event signifies a user has submitted their payment information in an ecommerce checkout process.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info}
         */
        (command: "event", eventName: "add_payment_info", eventParams?: AddPaymentInfoEventParams): void;

        /**
         * This event signifies a user has submitted their shipping information in an ecommerce checkout process.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info}
         */
        (command: "event", eventName: "add_shipping_info", eventParams?: AddShippingInfoEventParams): void;

        /**
         * This event signifies that an item was added to a cart for purchase.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart}
         */
        (command: "event", eventName: "add_to_cart", eventParams?: AddToCartEventParams): void;

        /**
         * The event signifies that an item was added to a wishlist. Use this event to identify popular gift items in your app.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist}
         */
        (command: "event", eventName: "add_to_wishlist", eventParams?: AddToWishlistEventParams): void;

        /**
         * This event signifies that a user has begun a checkout.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout}
         */
        (command: "event", eventName: "begin_checkout", eventParams?: BeginCheckoutEventParams): void;

        /**
         * This event measures when a user is awarded virtual currency in a game. Log this along with spend_virtual_currency to better understand your virtual economy.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout}
         */
        (command: "event", eventName: "earn_virtual_currency", eventParams?: EarnVirtualCurrencyEventParams): void;

        /**
         * This event measures when a lead has been generated (for example, through a form). Log this to understand the effectiveness of your marketing campaigns and how many customers re-engage with your business after remarketing to the customers.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead}
         */
        (command: "event", eventName: "generate_lead", eventParams?: GenerateLeadEventParams): void;

        /**
         * Log this event when a user joins a group such as a guild, team, or family. Use this event to analyze how popular certain groups or social features are.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group}
         */
        (command: "event", eventName: "join_group", eventParams?: JoinGroupEventParams): void;

        /**
         * This event signifies that a player has reached the end of a level in a game.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_end}
         */
        (command: "event", eventName: "level_end", eventParams?: LevelEndEventParams): void;

        /**
         * This event signifies that a player has started a level in a game.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_start}
         */
        (command: "event", eventName: "level_start", eventParams?: LevelStartEventParams): void;

        /**
         * This event signifies that a player has leveled up in a game. Use it to gauge the level distribution of your user base and identify levels that are difficult to complete.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_up}
         */
        (command: "event", eventName: "level_up", eventParams?: LevelUpEventParams): void;

        /**
         * Send this event to signify that a user has logged in to your website or app.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#login}
         */
        (command: "event", eventName: "login", eventParams?: LoginEventParams): void;

        /**
         * Send this event when the user posts a score. Use this event to understand how users are performing in your game and correlate high scores with audiences or behaviors.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#post_score}
         */
        (command: "event", eventName: "post_score", eventParams?: PostScoreEventParams): void;

        /**
         * This event signifies when one or more items is purchased by a user.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase}
         */
        (command: "event", eventName: "purchase", eventParams?: PurchaseEventParams): void;

        /**
         * This event signifies when one or more items is refunded to a user.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund}
         */
        (command: "event", eventName: "refund", eventParams?: RefundEventParams): void;

        /**
         * This event signifies that an item was removed from a cart.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_from_cart}
         */
        (command: "event", eventName: "remove_from_cart", eventParams?: RemoveFromCartEventParams): void;

        /**
         * Log this event to indicate when the user has performed a search. You can use this event to identify what users are searching for on your website or app. For example, you could send this event when a user views a search results page after performing a search.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#search}
         */
        (command: "event", eventName: "search", eventParams?: SearchEventParams): void;

        /**
         * This event signifies that a user has selected some content of a certain type. This event can help you identify popular content and categories of content on your website or app.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content}
         */
        (command: "event", eventName: "select_content", eventParams?: SelectContentEventParams): void;

        /**
         * This event signifies an item was selected from a list.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item}
         */
        (command: "event", eventName: "select_item", eventParams?: SelectItemEventParams): void;

        /**
         * This event signifies a promotion was selected from a list.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_promotion}
         */
        (command: "event", eventName: "select_promotion", eventParams?: SelectPromotionEventParams): void;

        /**
         * Use this event when a user has shared content.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share}
         */
        (command: "event", eventName: "share", eventParams?: ShareEventParams): void;

        /**
         * This event indicates that a user has signed up for an account. Use this event to understand the different behaviors of logged in and logged out users.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#sign_up}
         */
        (command: "event", eventName: "sign_up", eventParams?: SignUpEventParams): void;

        /**
         * This event measures the sale of virtual goods in your app and helps you identify which virtual goods are the most popular.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency}
         */
        (command: "event", eventName: "spend_virtual_currency", eventParams?: SpendVirtualCurrencyEventParams): void;

        /**
         * This event signifies the start of the on-boarding process. Use this in a funnel with tutorial_complete to understand how many users complete the tutorial.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin}
         */
        // tslint:disable-next-line:unified-signatures
        (command: "event", eventName: "tutorial_begin"): void;

        /**
         * This event signifies the user's completion of your on-boarding process. Use this in a funnel with tutorial_begin to understand how many users complete the tutorial.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete}
         */
        // tslint:disable-next-line:unified-signatures
        (command: "event", eventName: "tutorial_complete"): void;

        /**
         * Log this event when the user has unlocked an achievement. This event can help you understand how users are experiencing your game.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#unlock_achievement}
         */
        (command: "event", eventName: "unlock_achievement", eventParams?: UnlockAchievementEventParams): void;

        /**
         * This event signifies that a user viewed their cart.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart}
         */
        (command: "event", eventName: "view_cart", eventParams?: ViewCartEventParams): void;

        /**
         * This event signifies that some content was shown to the user. Use this event to discover the most popular items viewed.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item}
         */
        (command: "event", eventName: "view_item", eventParams?: ViewItemEventParams): void;

        /**
         * Log this event when the user has been presented with a list of items of a certain category.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list}
         */
        (command: "event", eventName: "view_item_list", eventParams?: ViewItemListEventParams): void;

        /**
         * This event signifies a promotion was viewed from a list.
         *
         * Reference:
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_promotion}
         */
        (command: "event", eventName: "view_promotion", eventParams?: ViewPromotionEventParams): void;
    }

    interface ConfigParams {
        page_title?: string | undefined;
        page_location?: string | undefined;
        page_path?: string | undefined;
        send_page_view?: boolean | undefined;
    }

    interface CustomParams {
        [key: string]: any;
    }

    interface ControlParams {
        groups?: string | string[] | undefined;
        send_to?: string | string[] | undefined;
        event_callback?: (() => void) | undefined;
        event_timeout?: number | undefined;
    }

    type EventNames =
        | "add_payment_info"
        | "add_shipping_info"
        | "add_to_cart"
        | "add_to_wishlist"
        | "begin_checkout"
        | "checkout_progress"
        | "earn_virtual_currency"
        | "exception"
        | "generate_lead"
        | "join_group"
        | "level_end"
        | "level_start"
        | "level_up"
        | "login"
        | "page_view"
        | "post_score"
        | "purchase"
        | "refund"
        | "remove_from_cart"
        | "screen_view"
        | "search"
        | "select_content"
        | "select_item"
        | "select_promotion"
        | "set_checkout_option"
        | "share"
        | "sign_up"
        | "spend_virtual_currency"
        | "tutorial_begin"
        | "tutorial_complete"
        | "unlock_achievement"
        | "timing_complete"
        | "view_cart"
        | "view_item"
        | "view_item_list"
        | "view_promotion"
        | "view_search_results";

    // Shared event parameter types

    type HasCurrency = {
        currency?: never;
        value?: never;
    } | {
        /**
         * Currency of the items associated with the event, in {@link https://en.wikipedia.org/wiki/ISO_4217#Active_codes 3-letter ISO 4217} format.
         */
        currency: string;

        /**
         * The monetary value of the event.
         *
         * * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
         */
        value: number;
    };

    interface HasCoupon {
        /**
         * The coupon name/code associated with the event.
         *
         * Event-level and item-level coupon parameters are independent.
         */
        coupon?: string;
    }

    interface HasItemId {
        /**
         * The ID of the item.
         *
         * * One of item_id or item_name is required.
         */
        item_id: string;
    }

    interface HasItemName {
        /**
         * The name of the item.
         *
         * * One of item_id or item_name is required.
         */
        item_name: string;
    }

    /**
     * Interface of an item object used in lists for this event.
     *
     * Reference:
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info_item add_payment_info_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info_item add_shipping_info_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart_item add_to_cart_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist_item add_to_wishlist_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase_item purchase_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund_item refund_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_to_cart_item remove_to_cart_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item_item select_item_item}
     *
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_item view_item_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list_item view_item_list_item}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart_item view_cart_item}
     */
    type Item = ((HasItemId | HasItemName) | (HasItemId & HasItemName)) & {
        /**
         * A product affiliation to designate a supplying company or brick and mortar store location.
         * Note: `affiliation` is only available at the item-scope.
         */
        affiliation?: string;

        /**
         * The coupon name/code associated with the item.
         *
         * Event-level and item-level coupon parameters are independent.
         */
        coupon?: string;

        /** The monetary discount value associated with the item. */
        discount?: number;

        /** The index/position of the item in a list. */
        index?: number;

        /** The brand of the item. */
        item_brand?: string;

        /** The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category. */
        item_category?: string;

        /** The second category hierarchy or additional taxonomy for the item. */
        item_category2?: string;

        /** The third category hierarchy or additional taxonomy for the item. */
        item_category3?: string;

        /** The fourth category hierarchy or additional taxonomy for the item. */
        item_category4?: string;

        /** The fifth category hierarchy or additional taxonomy for the item. */
        item_category5?: string;

        /**
         * 	The ID of the list in which the item was presented to the user.
         *
         * If set, event-level item_list_id is ignored.
         * If not set, event-level item_list_id is used, if present.
         */
        item_list_id?: string;

        /**
         * The name of the list in which the item was presented to the user.
         *
         * If set, event-level item_list_name is ignored.
         * If not set, event-level item_list_name is used, if present.
         */
        item_list_name?: string;

        /** The item variant or unique code or description for additional item details/options. */
        item_variant?: string;

        /**
         * The physical location associated with the item (e.g. the physical store location). It's recommended to use the {@link https://developers.google.com/maps/documentation/places/web-service/place-id Google Place ID} that corresponds to the associated item. A custom location ID can also be used.
         * Note: `location id` is only available at the item-scope.
         */
        location_id?: string;

        /** The monetary price of the item, in units of the specified currency parameter. */
        price?: number;

        /**
         * Item quantity.
         *
         * If not set, quantity is set to 1.
         */
        quantity?: number;
    };

    interface HasItems {
        /** The items for the event. */
        items: Item[];
    }

    interface HasSingleItem {
        /**
         * The items for the event.
         *
         * * The items array is expected to have a single element, representing the selected item. If multiple elements are provided, only the first element in items will be used.
         */
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        items: [Item];
    }

    interface HasLevel {
        /** The name of the level. */
        level_name?: string;
    }

    interface HasVirtualCurrency {
        /** The name of the virtual currency. */
        virtual_currency_name?: string;

        /** The value of the virtual currency. */
        value?: number;
    }

    interface ItemList {
        /**
         * The ID of the list in which the item was presented to the user.
         *
         * Ignored if set at the item-level.
         */
        item_list_id?: string;

        /**
         * The name of the list in which the item was presented to the user.
         *
         * Ignored if set at the item-level.
         */
        item_list_name?: string;
    }

    interface Promotion {
        /**
         * The name of the promotional creative.
         *
         * Ignored if set at the item-level.
         */
        creative_name?: string;

        /**
         * The name of the promotional creative slot associated with the event.
         *
         * Ignored if set at the item-level.
         */
        creative_slot?: string;

        /**
         * The ID of the promotion associated with the event.
         *
         * Ignored if set at the item-level.
         */
        promotion_id?: string;

        /**
         * The name of the promotion associated with the event.
         *
         * Ignored if set at the item-level.
         */
        promotion_name?: string;
    }

    interface Transaction {
        /**
         * The unique identifier of a transaction.
         *
         * The transaction_id parameter helps you avoid getting duplicate events for a purchase.
         */
        transaction_id: string;

        /** Shipping cost associated with a transaction. */
        shipping?: number;

        /** Tax cost associated with a transaction. */
        tax?: number;
    }

    // Event parameters

    type AddPaymentInfoEventParams = HasCurrency & HasCoupon & HasItems & {
        /** The chosen method of payment. */
        payment_type?: string;
    };

    type AddShippingInfoEventParams = HasCurrency & HasCoupon & HasItems & {
        /** The shipping tier (e.g. Ground, Air, Next-day) selected for delivery of the purchased item. */
        shipping_tier?: string;
    };

    type AddToCartEventParams = HasCurrency & HasItems;

    type AddToWishlistEventParams = HasCurrency & HasItems;

    type BeginCheckoutEventParams = HasCurrency & HasCoupon & HasItems;

    type EarnVirtualCurrencyEventParams = HasVirtualCurrency;

    type GenerateLeadEventParams = HasCurrency;

    interface JoinGroupEventParams {
        /** The ID of the group. */
        group_id?: string;
    }

    interface LevelEndEventParams extends HasLevel {
        /** Set to true if the level was completed successfully. */
        success?: boolean;
    }

    type LevelStartEventParams = HasLevel;

    interface LevelUpEventParams {
        /** The level of the character. */
        level?: number;

        /** The character that leveled up. */
        character?: string;
    }

    interface LoginEventParams {
        /** The method used to login. */
        method?: string;
    }

    interface PostScoreEventParams {
        /** The score to post. */
        score: number;

        /** The level for the score. */
        level?: number;

        /** The character that achieved the score. */
        character?: string;
    }

    type PurchaseEventParams = HasCurrency & HasCoupon & HasItems & Transaction;

    type RefundEventParams = HasCurrency & HasCoupon & Partial<HasItems> & Transaction;

    type RemoveFromCartEventParams = HasCurrency & HasItems;

    interface SearchEventParams {
        /** The term that was searched for. */
        search_term: string;
    }

    interface SelectContentEventParams {
        /** The type of selected content. */
        content_type?: string;

        /** An identifier for the content that was selected. */
        content_id?: string;
    }

    type SelectItemEventParams = ItemList & HasSingleItem;

    type SelectPromotionEventParams = Partial<HasItems> & Promotion;

    interface ShareEventParams extends Partial<HasItemId> {
        /** The method in which the content is shared. */
        method?: string;

        /** The type of shared content. */
        content_type?: string;
    }

    interface SignUpEventParams {
        /** The method used for sign up. */
        method?: string;
    }

    type SpendVirtualCurrencyEventParams = Required<HasVirtualCurrency> & Partial<HasItemName>;

    interface UnlockAchievementEventParams {
        /** The id of the achievement that was unlocked. */
        achievement_id: string;
    }

    type ViewCartEventParams = HasCurrency & HasItems;

    type ViewItemEventParams = HasCurrency & HasItems;

    type ViewItemListEventParams = ItemList & HasItems;

    type ViewPromotionEventParams = Promotion & HasSingleItem;

    interface EventParams {
        checkout_option?: string | undefined;
        checkout_step?: number | undefined;
        content_id?: string | undefined;
        content_type?: string | undefined;
        coupon?: string | undefined;
        currency?: string | undefined;
        description?: string | undefined;
        fatal?: boolean | undefined;
        items?: Item[] | undefined;
        method?: string | undefined;
        number?: string | undefined;
        promotions?: Promotion[] | undefined;
        screen_name?: string | undefined;
        search_term?: string | undefined;
        shipping?: Currency | undefined;
        tax?: Currency | undefined;
        transaction_id?: string | undefined;
        value?: number | undefined;
        event_label?: string | undefined;
        event_category?: string | undefined;
    }

    type Currency = string | number;

    type FieldNames = "client_id" | "session_id" | "gclid";

    type ConsentArg = "default" | "update";

    /**
     * Reference:
     * @see {@link https://support.google.com/tagmanager/answer/10718549#consent-types consent-types}
     * @see {@link https://developers.google.com/tag-platform/devguides/consent consent}
     */
    interface ConsentParams {
        ad_storage?: "granted" | "denied" | undefined;
        analytics_storage?: "granted" | "denied" | undefined;
        functionality_storage?: "granted" | "denied" | undefined;
        personalization_storage?: "granted" | "denied" | undefined;
        security_storage?: "granted" | "denied" | undefined;
        wait_for_update?: number | undefined;
        region?: string[] | undefined;
    }
}
