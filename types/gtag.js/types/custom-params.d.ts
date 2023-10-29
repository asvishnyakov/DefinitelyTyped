declare namespace Gtag {
    /**
     * There is a limit to the number of event parameters and item-scoped custom parameters.
     *
     * @see {@link https://support.google.com/analytics/answer/10075209 Custom dimensions and metrics}
     * @see {@link https://support.google.com/analytics/answer/11202874 Google Analytics 360}
     * @see {@link https://developers.google.com/analytics/devguides/collection/ga4/item-scoped-ecommerce Create item-scoped custom parameters}
     */
    type CustomParams = Record<string, unknown>;
}
