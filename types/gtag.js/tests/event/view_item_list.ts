import { items } from "./mocks";

const eventName = "view_item_list";

gtag("event", eventName);

gtag("event", eventName, {
    items: [],
});

gtag("event", eventName, {
    item_list_id: "related_products",
    item_list_name: "Related products",
    items,
});

export default {};
