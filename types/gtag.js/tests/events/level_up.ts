const eventName = "level_up";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    level: 5,
    character: "Player 1",
});

export default {};
