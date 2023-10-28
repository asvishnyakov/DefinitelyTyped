import { item_with_id_only, item_with_name_only, primary_item } from "./mocks";

const eventName = "select_item";

gtag("event", eventName);

gtag("event", eventName, {
    items: [item_with_id_only],
});

gtag("event", eventName, {
    items: [item_with_name_only],
});

gtag("event", eventName, {
    item_list_id: "related_products",
    item_list_name: "Related products",
    items: [primary_item],
});

export default {};
