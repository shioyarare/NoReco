window.addEventListener("load", noMoreRecommended, false);
window.addEventListener("pageshow", noMoreRecommended);

function getLinkCollection() {
  return document.getElementsByTagName('a');
}

function noMoreRecommended() {
  const jsInitCheckTimer = setInterval(jsLoaded, 500);

  function jsLoaded() {
    if (getLinkCollection().length !== 0) {
      clearInterval(jsInitCheckTimer);

      // completed to loading
      var linkCollection = document.getElementsByTagName('a');
      var isRecommended = false;
      for (const [i ,link] of Object.entries(linkCollection)) {
        if (link.getAttribute("href") === "/home" && link.getAttribute("role") === "tab") {

          if (link.innerText === "おすすめ") {
            // hide recommended nav
            // linkCollection[i].parentElement.style.display = "none";

            // current view is recommended timeline?
            if (link.getAttribute("aria-selected") === "true") isRecommended = true;
          }        

          if (isRecommended && link.innerText === "フォロー中") {
            // go to following timeline
            linkCollection[i].click();
          }
        }
      }
    }
  }
}

