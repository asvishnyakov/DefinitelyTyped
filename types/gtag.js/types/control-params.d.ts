declare namespace Gtag {
    /**
     * The parameters you can configure using the `config` command, set using the `set` command, or pass using the `event` command.
     *
     * For more information on product-specific parameters, refer to the corresponding documentation:
     *
     * * {@link https://support.google.com/google-ads/answer/7548399 Google Ads conversions}
     * * {@link https://support.google.com/google-ads/answer/7559130 Google Ads remarketing}
     * * {@link https://support.google.com/dcm/partner/answer/7568534#fields Campaign Manager and Search Ads 360}
     * * {@link https://developers.google.com/analytics/devguides/collection/ga4 Google Analytics}
     *
     * @see {@link https://developers.google.com/tag-platform/gtagjs/reference/parameters}
     */
    interface ControlParams {
        /**
         * Used by the `config` command to assign a target to one or more groups.
         */
        groups?: string | string[];

        /**
         * Sets the target account/property that is to receive the event data.
         */
        send_to?: string | string[];

        event_callback?: () => void;

        event_timeout?: number;
    }
}
