const redirectIfNecessary = (details) => {
  if (details.url.includes("eksisozluk.com")) {
    const newUrl = details.url.replace("eksisozluk.com", "eksisozluk2023.com");
    chrome.tabs.update(details.tabId, { url: newUrl });
  }
};

chrome.webNavigation.onBeforeNavigate.addListener(
  redirectIfNecessary,
  { url: [{ hostSuffix: "eksisozluk.com" }] }
);
