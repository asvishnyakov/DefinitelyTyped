const eventName = "exception";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    description: "Missing required field.",
    fatal: true,
});

export default {};
