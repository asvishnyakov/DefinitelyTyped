import { currency, items, value } from "./mocks";

const eventName = "view_item";

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
