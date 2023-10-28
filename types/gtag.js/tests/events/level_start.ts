const eventName = "level_start";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    level_name: "The journey begins...",
});

export default {};
