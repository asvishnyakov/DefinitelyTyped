import { currency, value } from "./mocks";

const eventName = "generate_lead";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    currency,
    value,
});

export default {};
