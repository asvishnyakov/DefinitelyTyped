const eventName = "earn_virtual_currency";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    virtual_currency_name: "Gems",
    value: 5,
});

export default {};
