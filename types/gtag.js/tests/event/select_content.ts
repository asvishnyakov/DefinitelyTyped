const eventName = "select_content";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    content_type: "product",
    content_id: "C_12345",
});

export default {};
