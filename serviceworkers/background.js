const options = {"origins": []}

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.sync.get(null).then((result) => {
    chrome.browsingData.remove(
      options,
      result, 
      function () {
        console.log("Browsing history deleted.");
      }
      );
  });
});
