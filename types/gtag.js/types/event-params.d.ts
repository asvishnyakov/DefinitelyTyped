declare namespace Gtag {
    /**
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/event-parameters Set up event parameters}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events Reference}
     */
    type EventParams =
        | AddPaymentInfoEventParams
        | AddToCartEventParams
        | AddToWishlistEventParams
        | BeginCheckoutEventParams
        | EarnVirtualCurrencyEventParams
        | ExceptionEventParams
        | GenerateLeadEventParams
        | JoinGroupEventParams
        | LevelEndEventParams
        | LevelStartEventParams
        | LevelUpEventParams
        | LoginEventParams
        | PageViewEventParams
        | PostScoreEventParams
        | PurchaseEventParams
        | RefundEventParams
        | RemoveFromCartEventParams
        | SearchEventParams
        | SelectContentEventParams
        | SelectItemEventParams
        | SelectPromotionEventParams
        | ShareEventParams
        | SignUpEventParams
        | SpendVirtualCurrencyEventParams
        | UnlockAchievementEventParams
        | ViewCartEventParams
        | ViewItemEventParams
        | ViewItemListEventParams
        | ViewPromotionEventParams
        | ViewSearchResultsEventParams
        | CustomParams;

    type AddPaymentInfoEventParams = CustomParams & MayHaveCurrency & MayHaveCoupon & HasItems & {
        /** The chosen method of payment. */
        payment_type?: string;
    };

    type AddShippingInfoEventParams = CustomParams & MayHaveCurrency & MayHaveCoupon & HasItems & {
        /** The shipping tier (e.g. Ground, Air, Next-day) selected for delivery of the purchased item. */
        shipping_tier?: string;
    };

    type AddToCartEventParams = CustomParams & MayHaveCurrency & HasItems;

    type AddToWishlistEventParams = CustomParams & MayHaveCurrency & HasItems;

    type BeginCheckoutEventParams = CustomParams & MayHaveCurrency & MayHaveCoupon & HasItems;

    type EarnVirtualCurrencyEventParams = CustomParams & MayHaveVirtualCurrency;

    type ExceptionEventParams = CustomParams & {
        /** The description of the exception that occurred. */
        description?: string;

        /** Whether or not the exception was a fatal one. */
        fatal?: boolean;
    };

    type GenerateLeadEventParams = CustomParams & MayHaveCurrency;

    type JoinGroupEventParams = CustomParams & {
        /** The ID of the group. */
        group_id?: string;
    };

    type LevelEndEventParams = CustomParams & MayHaveLevel & {
        /** Set to true if the level was completed successfully. */
        success?: boolean;
    };

    type LevelStartEventParams = CustomParams & MayHaveLevel;

    type LevelUpEventParams = CustomParams & {
        /** The level of the character. */
        level?: number;

        /** The character that leveled up. */
        character?: string;
    };

    type LoginEventParams = CustomParams & {
        /** The method used to login. */
        method?: string;
    };

    type PageViewEventParams = CustomParams & {
        /** The URL of the page. */
        page_location?: string;

        /** The client ID. */
        client_id?: string;

        /**
         * The language for the client.
         * @see {@link https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes Language tags and codes.}
         */
        language?: string;

        /** The encoding of the page. */
        page_encoding?: string;

        /** The title of the page. */
        page_title?: string;

        /** The client's user agent. */
        user_agent?: string;
    };

    type PostScoreEventParams = CustomParams & {
        /** The score to post. */
        score: number;

        /** The level for the score. */
        level?: number;

        /** The character that achieved the score. */
        character?: string;
    };

    type PurchaseEventParams = CustomParams & MayHaveCurrency & MayHaveCoupon & HasItems & Transaction;

    type RefundEventParams = CustomParams & MayHaveCurrency & MayHaveCoupon & Partial<HasItems> & Transaction;

    type RemoveFromCartEventParams = CustomParams & MayHaveCurrency & HasItems;

    type SearchEventParams = CustomParams & {
        /** The term that was searched for. */
        search_term: string;
    };

    type SelectContentEventParams = CustomParams & {
        /** The type of selected content. */
        content_type?: string;

        /** An identifier for the content that was selected. */
        content_id?: string;
    };

    type SelectItemEventParams = CustomParams & MayHaveItemList & HasSingleItem;

    type SelectPromotionEventParams = CustomParams & Partial<HasItems<Item & MayHavePromotion>> & MayHavePromotion;

    type ShareEventParams = CustomParams & Partial<HasItemId> & {
        /** The method in which the content is shared. */
        method?: string;

        /** The type of shared content. */
        content_type?: string;
    };

    type SignUpEventParams = CustomParams & {
        /** The method used for sign up. */
        method?: string;
    };

    type SpendVirtualCurrencyEventParams = CustomParams & Required<MayHaveVirtualCurrency> & Partial<HasItemName>;

    type UnlockAchievementEventParams = CustomParams & {
        /** The id of the achievement that was unlocked. */
        achievement_id: string;
    };

    type ViewCartEventParams = CustomParams & MayHaveCurrency & HasItems;

    type ViewItemEventParams = CustomParams & MayHaveCurrency & HasItems;

    type ViewItemListEventParams = CustomParams & MayHaveItemList & HasItems;

    type ViewPromotionEventParams = CustomParams & MayHavePromotion & HasSingleItem<Item & MayHavePromotion>;

    type ViewSearchResultsEventParams = CustomParams & {
        /** The term used for the search. */
        search_term?: string;
    };
}
