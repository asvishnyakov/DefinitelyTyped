import { coupon, currency, items, value } from "./mocks";

const eventName = "begin_checkout";

gtag("event", eventName);

gtag("event", eventName, {
    items: [],
});

gtag("event", eventName, {
    currency,
    value,
    coupon,
    items,
});

export default {};
