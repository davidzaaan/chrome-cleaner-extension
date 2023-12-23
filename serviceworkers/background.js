chrome.runtime.onStartup.addListener(() => {
  chrome.storage.sync.get(null).then((result) => {
    chrome.browsingData.remove(
      {},
      result, 
      () => console.log("Data deleted.")
    );
  });
});
