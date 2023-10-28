import { item_id, item_name, item_with_id_only, item_with_name_only } from "./mocks";

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
    items: [{
        creative_name: "Summer Banner",
        creative_slot: "featured_app_1",
        promotion_id: "P_12345",
        promotion_name: "Summer Sale",
        item_id,
        item_name,
        affiliation: "Google Store",
        coupon: "SUMMER_FUN",
        discount: 2.22,
        index: 5,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 9.99,
        quantity: 1,
    }],
});

export default {};
