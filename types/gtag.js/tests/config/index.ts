gtag("config", "STREAM_ID");

gtag("config", "STREAM_ID", {
    allow_google_signals: true,
    allow_ad_personalization_signals: true,
    campaign_content: "logolink",
    campaign_id: "abc.123",
    campaign_medium: "cpc",
    campaign_name: "spring_sale",
    campaign_source: "google",
    campaign_term: "running+shoes",
    campaign: {
        id: "abc.123",
        source: "google",
        medium: "cpc",
        name: "spring_sale",
        term: "running+shoes",
        content: "logolink",
    },
    client_id: "aaa.bbb",
    content_group: "/news/sports",
    cookie_domain: "example.com",
    cookie_expires: 28 * 24 * 60 * 60, /* 28 days, in seconds */
    cookie_flags: "SameSite=None;Secure",
    cookie_path: "/example_path",
    cookie_prefix: "prefix",
    cookie_update: true,
    ignore_referrer: true,
    language: "en-us",
    page_location: "https://example.com/page1",
    page_referrer: "https://example.com",
    page_title: "Settings",
    send_page_view: false,
    screen_resolution: "800x600",
    user_id: "id",
    user_properties: {
        favorite_color: "blue",
    },
});
