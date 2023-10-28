import { coupon, currency, items, value } from "./mocks";

const eventName = "add_shipping_info";

const shipping_tier = "Ground";

gtag("event", eventName);

gtag("event", eventName, {
    items: [],
});

gtag("event", eventName, {
    currency,
    value,
    coupon,
    shipping_tier,
    items,
});

export default {};
