export const currency = "USD";
export const value = 123;

export const coupon = "SUMMER_FUN";

export const transaction_id = "T_12345";
export const shipping = 3.33;
export const tax = 1.11;

export const item_id = "SKU_12345";
export const item_name = "Stan and Friends Tee";

export const item_with_id_only = {
    item_id,
};

export const item_with_name_only = {
    item_name,
};

export const primary_item = {
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
};

export const alternative_item = {
    item_id: "SKU_12346",
    item_name: "Google Grey Women's Tee",
    affiliation: "Google Merchandise Store",
    coupon: "SUMMER_FUN",
    discount: 3.33,
    index: 1,
    item_brand: "Google",
    item_category: "Apparel",
    item_category2: "Adult",
    item_category3: "Shirts",
    item_category4: "Crew",
    item_category5: "Short sleeve",
    item_list_id: "related_products",
    item_list_name: "Related Products",
    item_variant: "gray",
    location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
    price: 20.99,
    promotion_id: "P_12345",
    promotion_name: "Summer Sale",
    quantity: 1,
};

export const items = [item_with_id_only, item_with_name_only, primary_item, alternative_item];
