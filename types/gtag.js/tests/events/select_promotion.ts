import { items } from "./mocks";

const eventName = "select_promotion";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    creative_name: "Summer Banner",
    creative_slot: "featured_app_1",
    promotion_id: "P_12345",
    promotion_name: "Summer Sale",
    items,
});

export default {};
