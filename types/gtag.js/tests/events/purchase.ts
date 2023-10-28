import { coupon, currency, items, shipping, tax, transaction_id, value } from "./mocks";

const eventName = "purchase";

gtag("event", eventName);

gtag("event", eventName, {
    transaction_id,
    items: [],
});

gtag("event", eventName, {
    transaction_id,
    currency,
    value,
    coupon,
    shipping,
    tax,
    items,
});

export default {};
