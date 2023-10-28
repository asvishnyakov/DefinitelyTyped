import { coupon, currency, items, value } from "./mocks";

const eventName = "add_payment_info";

const payment_type = "Credit Card";

gtag("event", eventName);

gtag("event", eventName, {
    items: [],
});

gtag("event", eventName, {
    currency,
    value,
    coupon,
    payment_type,
    items,
});

export default {};
