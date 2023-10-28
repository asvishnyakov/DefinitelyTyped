declare var gtag: Gtag.Gtag;
declare namespace Gtag {
    interface GtagCommands {
        config: [targetId: string, config?: ControlParams | EventParams | ConfigParams | CustomParams];
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        set: [targetId: string, config: CustomParams | boolean | string] | [config: CustomParams];
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        js: [config: Date];
        // <EventName extends keyof Events>(command: "event", eventName: EventName, ...args: Parameters<Events[EventName]>): void;
        // event: [eventName: EventNames | (string & {}), eventParams?: ControlParams | EventParams | CustomParams]
        get: [
            targetId: string,
            fieldName: FieldNames | string,
            callback?: (field: string | CustomParams | undefined) => any,
        ];
        consent: [consentArg: ConsentArg | (string & {}), consentParams: ConsentParams];
    }

    interface Gtag {
        <Command extends keyof GtagCommands>(command: Command, ...args: GtagCommands[Command]): void;
    }

    interface ConfigParams {
        page_title?: string | undefined;
        page_location?: string | undefined;
        page_path?: string | undefined;
        send_page_view?: boolean | undefined;
    }

    interface CustomParams {
        [key: string]: any;
    }

    interface ControlParams {
        groups?: string | string[] | undefined;
        send_to?: string | string[] | undefined;
        event_callback?: (() => void) | undefined;
        event_timeout?: number | undefined;
    }

    interface EventParams {
        checkout_option?: string | undefined;
        checkout_step?: number | undefined;
        content_id?: string | undefined;
        content_type?: string | undefined;
        coupon?: string | undefined;
        currency?: string | undefined;
        description?: string | undefined;
        fatal?: boolean | undefined;
        items?: Item[] | undefined;
        method?: string | undefined;
        number?: string | undefined;
        promotions?: HasPromotion[] | undefined;
        screen_name?: string | undefined;
        search_term?: string | undefined;
        shipping?: Currency | undefined;
        tax?: Currency | undefined;
        transaction_id?: string | undefined;
        value?: number | undefined;
        event_label?: string | undefined;
        event_category?: string | undefined;
    }

    type Currency = string | number;

    type FieldNames = "client_id" | "session_id" | "gclid";

    type ConsentArg = "default" | "update";

    /**
     * Reference:
     * @see {@link https://support.google.com/tagmanager/answer/10718549#consent-types consent-types}
     * @see {@link https://developers.google.com/tag-platform/devguides/consent consent}
     */
    interface ConsentParams {
        ad_storage?: "granted" | "denied" | undefined;
        analytics_storage?: "granted" | "denied" | undefined;
        functionality_storage?: "granted" | "denied" | undefined;
        personalization_storage?: "granted" | "denied" | undefined;
        security_storage?: "granted" | "denied" | undefined;
        wait_for_update?: number | undefined;
        region?: string[] | undefined;
    }
}
