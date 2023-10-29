declare namespace Gtag {
    interface Gtag {
        /**
         * Allows you to add additional configuration information to targets. This is typically a product-specific configuration for a product, but you only need to configure this once if you're using both Google Ads and Google Analytics.
         *
         * If you add more than one tag ID to your page, add a `set` command instead of updating the `config` command so all the IDs inherit the parameters you set. Place the `set` command **above** the config command.
         *
         * @param targetId is an identifier that uniquely identifies the target for hits, such as a Google Analytics property or a Google Ads account.
         * @param config is one or more parameter-value pairs.
         *
         * @example
         * gtag('config', 'G-XXXXXXXXXX', {
         *  'page_title': 'Travel Destinations',
         *  'currency': 'USD'
         * });
         *
         * @example
         * gtag('set', {
         *   'page_title': 'Travel Destinations',
         *   'currency': 'USD'
         * });
         * // Place your config commands after the set command like follows
         * gtag('config', 'G-XXXXXXXXXX-1');
         * gtag('config', 'G-XXXXXXXXXX-2');
         * gtag('config', 'G-XXXXXXXXXX-3');
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/event-parameters?client_type=gtag#set-up-every-event Set up parameters for every event}
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference#config Reference}
         */
        (command: "config", targetId: string, config?: ConfigParams | ControlParams | EventParams): void;
    }
}
