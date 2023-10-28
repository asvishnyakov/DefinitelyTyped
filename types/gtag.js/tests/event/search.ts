const eventName = "search";

gtag("event", eventName);

gtag("event", eventName, {
    search_term: "t-shirts",
});

export default {};
