declare namespace Gtag {
    interface Gtag {
        /**
         * Allows you to add additional configuration information to targets. This is typically a product-specific configuration for a product, but you only need to configure this once if you're using both Google Ads and Google Analytics.
         *
         * @param targetId is an identifier that uniquely identifies the target for hits, such as a Google Analytics property or a Google Ads account.
         * @param config is one or more parameter-value pairs.
         *
         * @see {@link https://developers.google.com/tag-platform/gtagjs/reference#config}
         */
        (command: "config", targetId: string, config?: ConfigParams): void;
    }
}
