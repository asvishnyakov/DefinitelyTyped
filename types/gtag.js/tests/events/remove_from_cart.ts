import { currency, items, value } from "./mocks";

const eventName = "remove_from_cart";

gtag("event", eventName);

gtag("event", eventName, {
    items: [],
});

gtag("event", eventName, {
    currency,
    value,
    items,
});

export default {};
