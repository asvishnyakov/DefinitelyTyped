const eventName = "spend_virtual_currency";

gtag("event", eventName);

gtag("event", eventName, {
    virtual_currency_name: "Gems",
    value: 5,
});

gtag("event", eventName, {
    virtual_currency_name: "Gems",
    value: 5,
    item_name: "Starter Boost",
});

export default {};
