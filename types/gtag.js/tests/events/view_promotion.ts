import { item_with_id_only, item_with_name_only, primary_item } from "./mocks";

const eventName = "view_promotion";

gtag("event", eventName);

gtag("event", eventName, {
    items: [item_with_id_only],
});

gtag("event", eventName, {
    items: [item_with_name_only],
});

gtag("event", eventName, {
    creative_name: "Summer Banner",
    creative_slot: "featured_app_1",
    promotion_id: "P_12345",
    promotion_name: "Summer Sale",
    items: [primary_item],
});

export default {};
