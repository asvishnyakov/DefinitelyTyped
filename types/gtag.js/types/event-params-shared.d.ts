declare namespace Gtag {
    interface HasCurrency {
        /**
         * Currency of the items associated with the event, in {@link https://en.wikipedia.org/wiki/ISO_4217#Active_codes 3-letter ISO 4217} format.
         *
         * \* If you set {@link value} then {@link currency} is required for revenue metrics to be computed accurately.
         */
        currency: string;

        /**
         * The monetary value of the event.
         *
         * \* {@link value} is typically required for meaningful reporting. If you {@link https://support.google.com/analytics/answer/9267568 mark the event as a conversion} then it's recommended you set {@link value}.
         *
         * \* {@link currency} is required if you set value.
         */
        value: number;
    }

    type MayHaveCurrency = HasAllOrNone<HasCurrency>;

    interface MayHaveCoupon {
        /**
         * The coupon name/code associated with the event.
         *
         * Event-level and item-level {@link coupon} parameters are independent.
         */
        coupon?: string;
    }

    interface HasItemId {
        /**
         * The ID of the item.
         *
         * * One of {@link item_id} or {@link HasItemName.item_name} is required.
         */
        item_id: string;
    }

    interface HasItemName {
        /**
         * The name of the item.
         *
         * * One of {@link HasItemId.item_id} or {@link item_name} is required.
         */
        item_name: string;
    }

    type HasItemIdOrName = HasAtLeastOne<HasItemId, HasItemName>;

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
    type Item = MayHaveCoupon & HasItemIdOrName & MayHaveItemList & MayHaveItemFields;

    interface MayHaveItemFields {
        /**
         * A product affiliation to designate a supplying company or brick and mortar store location.
         *
         * Note: {@link affiliation} is only available at the item-scope.
         */
        affiliation?: string;

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

        /** The item variant or unique code or description for additional item details/options. */
        item_variant?: string;

        /**
         * The physical location associated with the item (e.g. the physical store location). It's recommended to use the {@link https://developers.google.com/maps/documentation/places/web-service/place-id Google Place ID} that corresponds to the associated item. A custom location ID can also be used.
         *
         * Note: {@link location_id} is only available at the item-scope.
         */
        location_id?: string;

        /** The monetary price of the item, in units of the specified currency parameter. */
        price?: number;

        /**
         * Item quantity.
         *
         * If not set, {@link quantity} is set to 1.
         */
        quantity?: number;
    }

    interface HasItems<I = Item> {
        /** The items for the event. */
        items: I[];
    }

    interface HasSingleItem<I = Item> {
        /**
         * The items for the event.
         *
         * * The items array is expected to have a single element, representing the selected item. If multiple elements are provided, only the first element in items will be used.
         */
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        items: [I];
    }

    interface MayHaveItemList {
        /**
         * The ID of the list in which the item was presented to the user.
         *
         * If set at item-level, event-level is ignored.
         * If not set at item-level, event-level is used, if present.
         */
        item_list_id?: string;

        /**
         * The name of the list in which the item was presented to the user.
         *
         * If set at item-level, event-level is ignored.
         * If not set at item-level, event-level is used, if present.
         */
        item_list_name?: string;
    }

    interface MayHaveLevel {
        /** The name of the level. */
        level_name?: string;
    }

    interface MayHavePromotion {
        /**
         * The name of the promotional creative.
         *
         * If set at item-level, event-level is ignored.
         * If not set at item-level, event-level is used, if present.
         */
        creative_name?: string;

        /**
         * The name of the promotional creative slot associated with the event.
         *
         * If set at item-level, event-level is ignored.
         * If not set at item-level, event-level is used, if present.
         */
        creative_slot?: string;

        /**
         * The ID of the promotion associated with the event.
         *
         * If set at item-level, event-level is ignored.
         * If not set at item-level, event-level is used, if present.
         */
        promotion_id?: string;

        /**
         * The name of the promotion associated with the event.
         *
         * If set at item-level, event-level is ignored.
         * If not set at item-level, event-level is used, if present.
         */
        promotion_name?: string;
    }

    interface MayHaveVirtualCurrency {
        /** The name of the virtual currency. */
        virtual_currency_name?: string;

        /** The value of the virtual currency. */
        value?: number;
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
}
