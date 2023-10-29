declare namespace Gtag {
    /**
     * @see {@link Events}
     */
    type EventNames = `${Events}`;

    /**
     * These events let you measure additional features and behavior and generate more useful reports in Google Analytics 4. Because these events require additional context to be meaningful, they are not sent automatically.
     *
     * @see {@link https://support.google.com/analytics/answer/9267735 Recommended Events}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/events Set up events}
     * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events Reference (Google Tag (gtag.js))}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events Reference (Google Analytics 4)}
     */
    enum Events {
        AddPaymentInfo = "add_payment_info",
        AddShippingInfo = "add_shipping_info",
        AddToCart = "add_to_cart",
        AddToWishlist = "add_to_wishlist",
        BeginCheckout = "begin_checkout",
        EarnVirtualCurrency = "earn_virtual_currency",
        Exception = "exception",
        GenerateLead = "generate_lead",
        JoinGroup = "join_group",
        LevelEnd = "level_end",
        LevelStart = "level_start",
        LevelUp = "level_up",
        Login = "login",
        PageView = "page_view",
        PostScore = "post_score",
        Purchase = "purchase",
        Refund = "refund",
        RemoveFromCart = "remove_from_cart",
        Search = "search",
        SelectContent = "select_content",
        SelectItem = "select_item",
        SelectPromotion = "select_promotion",
        Share = "share",
        SignUp = "sign_up",
        SpendVirtualCurrency = "spend_virtual_currency",
        TutorialBegin = "tutorial_begin",
        TutorialComplete = "tutorial_complete",
        UnlockAchievement = "unlock_achievement",
        ViewCart = "view_cart",
        ViewItem = "view_item",
        ViewItemList = "view_item_list",
        ViewPromotion = "view_promotion",
        ViewSearchResults = "view_search_results",
    }

    interface Gtag {
        /**
         * This event signifies a user has submitted their payment information in an ecommerce checkout process.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#add_payment_info Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.AddPaymentInfo}`, eventParams?: AddPaymentInfoEventParams): void;

        /**
         * This event signifies a user has submitted their shipping information in an ecommerce checkout process.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#add_shipping_info Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.AddShippingInfo}`, eventParams?: AddShippingInfoEventParams): void;

        /**
         * This event signifies that an item was added to a cart for purchase.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#add_to_cart Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.AddToCart}`, eventParams?: AddToCartEventParams): void;

        /**
         * The event signifies that an item was added to a wishlist. Use this event to identify popular gift items in your app.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#add_to_wishlist Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.AddToWishlist}`, eventParams?: AddToWishlistEventParams): void;

        /**
         * This event signifies that a user has begun a checkout.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#begin_checkout Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.BeginCheckout}`, eventParams?: BeginCheckoutEventParams): void;

        /**
         * This event measures when a user is awarded virtual currency in a game. Log this along with spend_virtual_currency to better understand your virtual economy.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#begin_checkout Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout Reference (Google Analytics 4)}
         */
        (
            command: "event",
            eventName: `${Events.EarnVirtualCurrency}`,
            eventParams?: EarnVirtualCurrencyEventParams,
        ): void;

        /**
         * An exception event is logged when the normal flow of an app's execution is interrupted.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#exception Reference (Google Tag (gtag.js))}
         */
        (command: "event", eventName: `${Events.Exception}`, eventParams?: ExceptionEventParams): void;

        /**
         * This event measures when a lead has been generated (for example, through a form). Log this to understand the effectiveness of your marketing campaigns and how many customers re-engage with your business after remarketing to the customers.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#generate_lead Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.GenerateLead}`, eventParams?: GenerateLeadEventParams): void;

        /**
         * Log this event when a user joins a group such as a guild, team, or family. Use this event to analyze how popular certain groups or social features are.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#join_group Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.JoinGroup}`, eventParams?: JoinGroupEventParams): void;

        /**
         * This event signifies that a player has reached the end of a level in a game.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#level_end Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_end Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.LevelEnd}`, eventParams?: LevelEndEventParams): void;

        /**
         * This event signifies that a player has started a level in a game.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#level_start Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_start Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.LevelStart}`, eventParams?: LevelStartEventParams): void;

        /**
         * This event signifies that a player has leveled up in a game. Use it to gauge the level distribution of your user base and identify levels that are difficult to complete.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#level_up Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_up Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.LevelUp}`, eventParams?: LevelUpEventParams): void;

        /**
         * Send this event to signify that a user has logged in to your website or app.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#login Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#login Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.Login}`, eventParams?: LoginEventParams): void;

        /**
         * This event signifies a user has viewed a page.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#page_view Reference (Google Tag (gtag.js))}
         */
        (command: "event", eventName: `${Events.PageView}`, eventParams?: PageViewEventParams): void;

        /**
         * Send this event when the user posts a score. Use this event to understand how users are performing in your game and correlate high scores with audiences or behaviors.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#post_score Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#post_score Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.PostScore}`, eventParams?: PostScoreEventParams): void;

        /**
         * This event signifies when one or more items is purchased by a user.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#purchase Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.Purchase}`, eventParams?: PurchaseEventParams): void;

        /**
         * This event signifies when one or more items is refunded to a user.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#refund Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.Refund}`, eventParams?: RefundEventParams): void;

        /**
         * This event signifies that an item was removed from a cart.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#remove_from_cart Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_from_cart Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.RemoveFromCart}`, eventParams?: RemoveFromCartEventParams): void;

        /**
         * Log this event to indicate when the user has performed a search. You can use this event to identify what users are searching for on your website or app. For example, you could send this event when a user views a search results page after performing a search.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#search Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#search Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.Search}`, eventParams?: SearchEventParams): void;

        /**
         * This event signifies that a user has selected some content of a certain type. This event can help you identify popular content and categories of content on your website or app.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#select_content Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.SelectContent}`, eventParams?: SelectContentEventParams): void;

        /**
         * This event signifies an item was selected from a list.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#select_item Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.SelectItem}`, eventParams?: SelectItemEventParams): void;

        /**
         * This event signifies a promotion was selected from a list.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#select_promotion Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_promotion Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.SelectPromotion}`, eventParams?: SelectPromotionEventParams): void;

        /**
         * Use this event when a user has shared content.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#share Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.Share}`, eventParams?: ShareEventParams): void;

        /**
         * This event indicates that a user has signed up for an account. Use this event to understand the different behaviors of logged in and logged out users.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#sign_up Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#sign_up Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.SignUp}`, eventParams?: SignUpEventParams): void;

        /**
         * This event measures the sale of virtual goods in your app and helps you identify which virtual goods are the most popular.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#spend_virtual_currency Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency Reference (Google Analytics 4)}
         */
        (
            command: "event",
            eventName: `${Events.SpendVirtualCurrency}`,
            eventParams?: SpendVirtualCurrencyEventParams,
        ): void;

        /**
         * This event signifies the start of the on-boarding process. Use this in a funnel with tutorial_complete to understand how many users complete the tutorial.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#tutorial_begin Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin Reference (Google Analytics 4)}
         */
        // tslint:disable-next-line:unified-signatures
        (command: "event", eventName: `${Events.TutorialBegin}`): void;

        /**
         * This event signifies the user's completion of your on-boarding process. Use this in a funnel with tutorial_begin to understand how many users complete the tutorial.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#tutorial_complete Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete Reference (Google Analytics 4)}
         */
        // tslint:disable-next-line:unified-signatures
        (command: "event", eventName: `${Events.TutorialComplete}`): void;

        /**
         * Log this event when the user has unlocked an achievement. This event can help you understand how users are experiencing your game.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#unlock_achievement Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#unlock_achievement Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.UnlockAchievement}`, eventParams?: UnlockAchievementEventParams): void;

        /**
         * This event signifies that a user viewed their cart.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#view_cart Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.ViewCart}`, eventParams?: ViewCartEventParams): void;

        /**
         * This event signifies that some content was shown to the user. Use this event to discover the most popular items viewed.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#view_item Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.ViewItem}`, eventParams?: ViewItemEventParams): void;

        /**
         * Log this event when the user has been presented with a list of items of a certain category.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#view_item_list Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.ViewItemList}`, eventParams?: ViewItemListEventParams): void;

        /**
         * This event signifies a promotion was viewed from a list.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#view_promotion Reference (Google Tag (gtag.js))}
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_promotion Reference (Google Analytics 4)}
         */
        (command: "event", eventName: `${Events.ViewPromotion}`, eventParams?: ViewPromotionEventParams): void;

        /**
         * Log this event when the user has been presented with the results of a search. Note that you can enable the view_search_results event for automatic collection through {@link https://support.google.com/analytics/answer/9216061 Enhanced event measurement} in Google Analytics.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#view_search_results Reference (Google Tag (gtag.js))}
         */
        (command: "event", eventName: `${Events.ViewSearchResults}`, eventParams?: ViewSearchResultsEventParams): void;
    }
}
