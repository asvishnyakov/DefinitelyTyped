declare namespace Gtag {
    type EventNames = `${Events}`;

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
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info}
         */
        (command: "event", eventName: `${Events.AddPaymentInfo}`, eventParams?: AddPaymentInfoEventParams): void;

        /**
         * This event signifies a user has submitted their shipping information in an ecommerce checkout process.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info}
         */
        (command: "event", eventName: `${Events.AddShippingInfo}`, eventParams?: AddShippingInfoEventParams): void;

        /**
         * This event signifies that an item was added to a cart for purchase.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart}
         */
        (command: "event", eventName: `${Events.AddToCart}`, eventParams?: AddToCartEventParams): void;

        /**
         * The event signifies that an item was added to a wishlist. Use this event to identify popular gift items in your app.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist}
         */
        (command: "event", eventName: `${Events.AddToWishlist}`, eventParams?: AddToWishlistEventParams): void;

        /**
         * This event signifies that a user has begun a checkout.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout}
         */
        (command: "event", eventName: `${Events.BeginCheckout}`, eventParams?: BeginCheckoutEventParams): void;

        /**
         * This event measures when a user is awarded virtual currency in a game. Log this along with spend_virtual_currency to better understand your virtual economy.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout}
         */
        (
            command: "event",
            eventName: `${Events.EarnVirtualCurrency}`,
            eventParams?: EarnVirtualCurrencyEventParams,
        ): void;

        /**
         * An exception event is logged when the normal flow of an app's execution is interrupted.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#exception}
         */
        (command: "event", eventName: `${Events.Exception}`, eventParams?: ExceptionEventParams): void;

        /**
         * This event measures when a lead has been generated (for example, through a form). Log this to understand the effectiveness of your marketing campaigns and how many customers re-engage with your business after remarketing to the customers.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead}
         */
        (command: "event", eventName: `${Events.GenerateLead}`, eventParams?: GenerateLeadEventParams): void;

        /**
         * Log this event when a user joins a group such as a guild, team, or family. Use this event to analyze how popular certain groups or social features are.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group}
         */
        (command: "event", eventName: `${Events.JoinGroup}`, eventParams?: JoinGroupEventParams): void;

        /**
         * This event signifies that a player has reached the end of a level in a game.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_end}
         */
        (command: "event", eventName: `${Events.LevelEnd}`, eventParams?: LevelEndEventParams): void;

        /**
         * This event signifies that a player has started a level in a game.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_start}
         */
        (command: "event", eventName: `${Events.LevelStart}`, eventParams?: LevelStartEventParams): void;

        /**
         * This event signifies that a player has leveled up in a game. Use it to gauge the level distribution of your user base and identify levels that are difficult to complete.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_up}
         */
        (command: "event", eventName: `${Events.LevelUp}`, eventParams?: LevelUpEventParams): void;

        /**
         * Send this event to signify that a user has logged in to your website or app.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#login}
         */
        (command: "event", eventName: `${Events.Login}`, eventParams?: LoginEventParams): void;

        /**
         * This event signifies a user has viewed a page.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#page_view}
         */
        (command: "event", eventName: `${Events.PageView}`, eventParams?: PageViewEventParams): void;

        /**
         * Send this event when the user posts a score. Use this event to understand how users are performing in your game and correlate high scores with audiences or behaviors.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#post_score}
         */
        (command: "event", eventName: `${Events.PostScore}`, eventParams?: PostScoreEventParams): void;

        /**
         * This event signifies when one or more items is purchased by a user.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase}
         */
        (command: "event", eventName: `${Events.Purchase}`, eventParams?: PurchaseEventParams): void;

        /**
         * This event signifies when one or more items is refunded to a user.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund}
         */
        (command: "event", eventName: `${Events.Refund}`, eventParams?: RefundEventParams): void;

        /**
         * This event signifies that an item was removed from a cart.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_from_cart}
         */
        (command: "event", eventName: `${Events.RemoveFromCart}`, eventParams?: RemoveFromCartEventParams): void;

        /**
         * Log this event to indicate when the user has performed a search. You can use this event to identify what users are searching for on your website or app. For example, you could send this event when a user views a search results page after performing a search.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#search}
         */
        (command: "event", eventName: `${Events.Search}`, eventParams?: SearchEventParams): void;

        /**
         * This event signifies that a user has selected some content of a certain type. This event can help you identify popular content and categories of content on your website or app.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content}
         */
        (command: "event", eventName: `${Events.SelectContent}`, eventParams?: SelectContentEventParams): void;

        /**
         * This event signifies an item was selected from a list.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item}
         */
        (command: "event", eventName: `${Events.SelectItem}`, eventParams?: SelectItemEventParams): void;

        /**
         * This event signifies a promotion was selected from a list.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_promotion}
         */
        (command: "event", eventName: `${Events.SelectPromotion}`, eventParams?: SelectPromotionEventParams): void;

        /**
         * Use this event when a user has shared content.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share}
         */
        (command: "event", eventName: `${Events.Share}`, eventParams?: ShareEventParams): void;

        /**
         * This event indicates that a user has signed up for an account. Use this event to understand the different behaviors of logged in and logged out users.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#sign_up}
         */
        (command: "event", eventName: `${Events.SignUp}`, eventParams?: SignUpEventParams): void;

        /**
         * This event measures the sale of virtual goods in your app and helps you identify which virtual goods are the most popular.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency}
         */
        (
            command: "event",
            eventName: `${Events.SpendVirtualCurrency}`,
            eventParams?: SpendVirtualCurrencyEventParams,
        ): void;

        /**
         * This event signifies the start of the on-boarding process. Use this in a funnel with tutorial_complete to understand how many users complete the tutorial.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin}
         */
        // tslint:disable-next-line:unified-signatures
        (command: "event", eventName: `${Events.TutorialBegin}`): void;

        /**
         * This event signifies the user's completion of your on-boarding process. Use this in a funnel with tutorial_begin to understand how many users complete the tutorial.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete}
         */
        // tslint:disable-next-line:unified-signatures
        (command: "event", eventName: `${Events.TutorialComplete}`): void;

        /**
         * Log this event when the user has unlocked an achievement. This event can help you understand how users are experiencing your game.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#unlock_achievement}
         */
        (command: "event", eventName: `${Events.UnlockAchievement}`, eventParams?: UnlockAchievementEventParams): void;

        /**
         * This event signifies that a user viewed their cart.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart}
         */
        (command: "event", eventName: `${Events.ViewCart}`, eventParams?: ViewCartEventParams): void;

        /**
         * This event signifies that some content was shown to the user. Use this event to discover the most popular items viewed.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item}
         */
        (command: "event", eventName: `${Events.ViewItem}`, eventParams?: ViewItemEventParams): void;

        /**
         * Log this event when the user has been presented with a list of items of a certain category.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list}
         */
        (command: "event", eventName: `${Events.ViewItemList}`, eventParams?: ViewItemListEventParams): void;

        /**
         * This event signifies a promotion was viewed from a list.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_promotion}
         */
        (command: "event", eventName: `${Events.ViewPromotion}`, eventParams?: ViewPromotionEventParams): void;

        /**
         * Log this event when the user has been presented with the results of a search. Note that you can enable the view_search_results event for automatic collection through {@link https://support.google.com/analytics/answer/9216061 Enhanced event measurement} in Google Analytics.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/events#view_search_results}
         */
        (command: "event", eventName: `${Events.ViewSearchResults}`, eventParams?: ViewSearchResultsEventParams): void;
    }
}
