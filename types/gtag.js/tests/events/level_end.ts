const eventName = "level_end";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    level_name: "The journey begins...",
    success: true,
});

export default {};
