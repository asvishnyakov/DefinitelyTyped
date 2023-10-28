const eventName = "join_group";

gtag("event", eventName);

gtag("event", eventName, {});

gtag("event", eventName, {
    group_id: "G_12345",
});

export default {};
