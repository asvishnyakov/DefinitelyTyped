const eventName = "view_search_results";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    search_term: "Clothing",
});

export default {};
