declare namespace Gtag {
    interface Gtag {
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
}
