import { coupon, currency, items, shipping, tax, transaction_id, value } from "./mocks";

const eventName = "refund";

gtag("event", eventName);

gtag("event", eventName, {
    transaction_id,
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
