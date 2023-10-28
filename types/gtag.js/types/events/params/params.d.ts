declare namespace Gtag {
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

    interface ExceptionEventParams {
        /** The description of the exception that occurred. */
        description?: string;

        /** Whether or not the exception was a fatal one. */
        fatal?: boolean;
    }

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

    type SelectItemEventParams = HasItemList & HasSingleItem;

    type SelectPromotionEventParams = Partial<HasItems<Item & HasPromotion>> & HasPromotion;

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

    type ViewItemListEventParams = HasItemList & HasItems;

    type ViewPromotionEventParams = HasPromotion & HasSingleItem<Item & HasPromotion>;

    interface ViewSearchResultsEventParams {
        /** The term used for the search. */
        search_term?: string;
    }
}
