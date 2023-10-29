declare namespace Gtag {
    /**
     * This interface has all of the configuration fields for GA4.
     *
     * Note: Do not use any of the fields listed on this page as names for your own custom parameters.
     *
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config}
     */
    interface ConfigParams {
        /**
         * To disable all advertising features, set {@link allow_google_signals} to `false`.
         *
         * @default true
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#allow_google_signals}
         */
        allow_google_signals?: boolean;

        /**
         * Set to `false` to disable advertising personalization features.
         *
         * @default true
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#allow_ad_personalization_signals}
         */
        allow_ad_personalization_signals?: boolean;

        /**
         * Used for A/B testing and content-targeted ads. Use {@link campaign_content} to differentiate ads or links that point to the same URL.
         *
         * Note: Setting this value will override the {@link https://support.google.com/analytics/answer/10917952#parameters utm_content} query parameter.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#campaign_content}
         */
        campaign_content?: string;

        /**
         * Used to identify which campaign this referral references. Use {@link campaign_id} to identify a specific campaign.
         *
         * *Note*: Setting this value will override the {@link https://support.google.com/analytics/answer/10917952#parameters utm_id} query parameter.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#campaign_id}
         */
        campaign_id?: string;

        /**
         * Use {@link campaign_medium} to identify a medium such as email or cost-per-click.
         *
         * Note: Setting this value will override the {@link https://support.google.com/analytics/answer/10917952#parameters utm_medium} query parameter.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#campaign_medium}
         */
        campaign_medium?: string;

        /**
         * Used for keyword analysis. Use {@link campaign_name} to identify a specific product promotion or strategic campaign.
         *
         * *Note*: Setting this value will override the {@link https://support.google.com/analytics/answer/10917952#parameters utm_name} query parameter.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#campaign_name}
         */
        campaign_name?: string;

        /**
         * Use campaign_source to identify a search engine, newsletter name, or other source.
         *
         * *Note*: Setting this value will override the {@link https://support.google.com/analytics/answer/10917952#parameters utm_source} query parameter.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#campaign_source}
         */
        campaign_source?: string;

        /**
         * Used for paid search. Use campaign_term to note the keywords for this ad.
         *
         * *Note*: Setting this value will override the {@link https://support.google.com/analytics/answer/10917952#parameters utm_term} query parameter.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#campaign_term}
         */
        campaign_term?: string;

        /**
         * An object containing all campaign values that can be set.
         *
         * *Note*: Any campaign details you provide will override any {@link https://support.google.com/analytics/answer/10917952#parameters utm_} query parameters.
         *
         * @deprecated The {@link campaign} object is provided to support legacy implementations, and is not recommended for most cases. Instead, you should use the campaign-prefixed version of each field:
         * * {@link campaign_content}
         * * {@link campaign_id}
         * * {@link campaign_medium}
         * * {@link campaign_name}
         * * {@link campaign_source}
         * * {@link campaign_term}
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#campaign}
         */
        campaign?: Campaign;

        /**
         * Pseudonymously identifies a browser instance. By default, this value is stored as part of the first-party Analytics cookie with a two-year expiration.
         *
         * By default, it's a randomly generated value for each user.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#client_id}
         */
        client_id?: string;

        content_group?: string;

        /**
         * Specifies the domain used to store the analytics cookie.
         *
         * Set to `'none'` to set the cookie without specifying a domain.
         *
         * Set to `'auto'` (the default value) to set the cookie to the top level domain plus one subdomain (eTLD +1). For example if {@link cookie_domain} is set to 'auto' https://example.com would use example.com for the domain, and https://subdomain.example.com would also use example.com for the domain.
         *
         * @default 'auto'
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#cookie_domain}
         */
        cookie_domain?: string;

        /**
         * Every time a hit is sent to Google Analytics, the cookie expiration time is updated to be the current time plus the value of the {@link cookie_expires} field. This means that if you use the default value time of two years (`63072000` seconds), and a user visits your site every month, their cookie will never expire.
         *
         * If you set the {@link cookie_expires} time to `0` (zero) seconds, the cookie turns into a session based cookie and expires once the current browser session ends.
         *
         * **Caution:** If you set the cookie to expire too quickly, you will inflate your user count and decrease the quality of your measurement.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#cookie_expires}
         */
        cookie_expires?: number;

        /**
         * Appends additional flags to the cookie when set. Flags must be separated by semicolons. See {@link https://developer.mozilla.org/docs/Web/API/Document/cookie#write_a_new_cookie write a new cookie} for some examples of flags to set.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#cookie_flags}
         */
        cookie_flags?: string;

        /**
         * Specifies the subpath used to store the analytics cookie.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#cookie_path}
         */
        cookie_path?: string;

        /**
         * Specifies a prefix to prepend to analytics cookie names.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#cookie_prefix}
         */
        cookie_prefix?: string;

        /**
         * When {@link cookie_update} is set to `true`, gtag.js will update cookies on each page load. This will update the cookie expiration to be set relative to the most recent visit to the site. For example, if cookie expiration is set to one week, and a user visits using the same browser every five days, the cookie expiration will be updated on each visit and will effectively never expire.
         *
         * When set to `false`, cookies are not updated on each page load. This has the effect of cookie expiration being relative to the first time a user visited the site.
         *
         * @default true
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#cookie_update}
         */
        cookie_update?: boolean;

        /**
         * Set to `true` to indicate to Analytics that the referrer shouldn't be displayed as a traffic source. {@link https://support.google.com/analytics/answer/10327750#set-parameter Learn when to use this field}
         *
         * @default false
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#ignore_referrer}
         */
        ignore_referrer?: boolean;

        /**
         * Specifies the language preference of the user. Defaults to the user's {@link https://developer.mozilla.org/docs/Web/API/NavigatorLanguage/language navigator.language} value.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#language}
         */
        language?: string;

        /**
         * Specifies the full URL of the page. Defaults to the user's {@link https://developer.mozilla.org/docs/Web/API/Document/location document.location} value.
         *
         * The length of string is limited to **1000 characters.**
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#page_location}
         */
        page_location?: string;

        /**
         * Specifies which referral source brought traffic to a page. This value is also used to compute the traffic source. The format of this value is a URL. Defaults to the user's {@link https://developer.mozilla.org/docs/Web/API/Document/referrer document.referrer} value.
         *
         * The length of string is limited to **420 characters.**
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#page_referrer}
         */
        page_referrer?: string;

        /**
         * The title of the page or document. Defaults to the user's {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/title document.title} value.
         *
         * The length of string is limited to **300 characters.**
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#page_title}
         */
        page_title?: string;

        /**
         * Set to `false` to prevent the default snippet from sending a {@link https://developers.google.com/analytics/devguides/collection/ga4/views page_view}.
         *
         * @default true
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#send_page_view}
         */
        send_page_view?: boolean;

        /**
         * Specifies the resolution of the screen. Should be two positive integers separated by an `x`. For example, for an 800px by 600px screen, the value would be `800x600`. Calculated from the user's {@link https://developer.mozilla.org/docs/Web/API/Window/screen window.screen} value.
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#screen_resolution}
         */
        screen_resolution?: string;

        /**
         * Specifies a known identifier for a user provided by the site owner/library user. It must not itself be PII (personally identifiable information). The value should never be persisted in Google Analytics cookies or other Analytics provided storage.
         *
         * The length of string is limited to **256 characters.**
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#user_id}
         */
        user_id?: string;

        /**
         * User properties are attributes that can be used to describe segments of your user base, such as language preference or geographic location.
         *
         * Up to **25** additional user **properties** can be set per project.
         *
         * The length of property **name** is limited to **24 characters.**
         *
         * The length of property **value** is limited to **36 characters.**
         *
         * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#user_properties}
         */
        user_properties?: Record<string, string>;
    }

    /**
     * @deprecated Use the campaign-prefixed version of each field instead.
     *
     * @see {@link ConfigParams.campaign}
     */
    type Campaign = {
        [
            ConfigParamsKey in keyof ConfigParams as ConfigParamsKey extends `campaign_${infer CampaignKey}`
                ? CampaignKey
                : never
        ]: ConfigParams[ConfigParamsKey];
    };
}
