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
        | ViewSearchResultsEventParams;

    type AddPaymentInfoEventParams = MayHaveCurrency & MayHaveCoupon & HasItems & {
        /** The chosen method of payment. */
        payment_type?: string;
    };

    type AddShippingInfoEventParams = MayHaveCurrency & MayHaveCoupon & HasItems & {
        /** The shipping tier (e.g. Ground, Air, Next-day) selected for delivery of the purchased item. */
        shipping_tier?: string;
    };

    type AddToCartEventParams = MayHaveCurrency & HasItems;

    type AddToWishlistEventParams = MayHaveCurrency & HasItems;

    type BeginCheckoutEventParams = MayHaveCurrency & MayHaveCoupon & HasItems;

    type EarnVirtualCurrencyEventParams = MayHaveVirtualCurrency;

    interface ExceptionEventParams {
        /** The description of the exception that occurred. */
        description?: string;

        /** Whether or not the exception was a fatal one. */
        fatal?: boolean;
    }

    type GenerateLeadEventParams = MayHaveCurrency;

    interface JoinGroupEventParams {
        /** The ID of the group. */
        group_id?: string;
    }

    interface LevelEndEventParams extends MayHaveLevel {
        /** Set to true if the level was completed successfully. */
        success?: boolean;
    }

    type LevelStartEventParams = MayHaveLevel;

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

    interface PageViewEventParams {
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
    }

    interface PostScoreEventParams {
        /** The score to post. */
        score: number;

        /** The level for the score. */
        level?: number;

        /** The character that achieved the score. */
        character?: string;
    }

    type PurchaseEventParams = MayHaveCurrency & MayHaveCoupon & HasItems & Transaction;

    type RefundEventParams = MayHaveCurrency & MayHaveCoupon & Partial<HasItems> & Transaction;

    type RemoveFromCartEventParams = MayHaveCurrency & HasItems;

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

    type SelectItemEventParams = MayHaveItemList & HasSingleItem;

    type SelectPromotionEventParams = Partial<HasItems<Item & MayHavePromotion>> & MayHavePromotion;

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

    type SpendVirtualCurrencyEventParams = Required<MayHaveVirtualCurrency> & Partial<HasItemName>;

    interface UnlockAchievementEventParams {
        /** The id of the achievement that was unlocked. */
        achievement_id: string;
    }

    type ViewCartEventParams = MayHaveCurrency & HasItems;

    type ViewItemEventParams = MayHaveCurrency & HasItems;

    type ViewItemListEventParams = MayHaveItemList & HasItems;

    type ViewPromotionEventParams = MayHavePromotion & HasSingleItem<Item & MayHavePromotion>;

    interface ViewSearchResultsEventParams {
        /** The term used for the search. */
        search_term?: string;
    }
}
