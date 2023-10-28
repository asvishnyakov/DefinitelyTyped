const eventName = "share";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    method: "Twitter",
    content_type: "image",
    item_id: "C_12345",
});

export default {};
