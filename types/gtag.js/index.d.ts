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
