import { currency, items, value } from "./mocks";

const eventName = "add_to_wishlist";

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
