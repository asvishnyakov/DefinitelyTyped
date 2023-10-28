const eventName = "post_score";

gtag("event", eventName);

gtag("event", eventName, {
    score: 10000,
});

gtag("event", eventName, {
    score: 10000,
    level: 5,
    character: "Player 1",
});

export default {};
