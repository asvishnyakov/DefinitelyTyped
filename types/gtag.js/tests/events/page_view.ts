const eventName = "page_view";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    page_location: "https://example.com",
    client_id: "ABC_123",
    language: "en_us",
    page_encoding: "UTF-8",
    page_title: "Home",
    user_agent: "",
});

export default {};
