window.addEventListener("load", noMoreRecommended, false);

function getLinkCollection() {
  return document.getElementsByTagName('a');
}

function noMoreRecommended() {
  const jsInitCheckTimer = setInterval(jsLoaded, 500);

  function jsLoaded() {
    if (getLinkCollection().length !== 0) {
      console.log("clear interval");
      clearInterval(jsInitCheckTimer);

      // completed to loading
      var linkCollection = document.getElementsByTagName('a');
      var isRecommended = false;
      var i = 0;
      for (const link of linkCollection) {
        i += 1;
        if (link.getAttribute("href") === "/home" && link.getAttribute("role") === "tab") {

          // is recommended?
          if (link.innerText === "おすすめ") {
            console.log("現在おすすめのタイムラインが表示されています。")
            linkCollection[i-1].style.display = "none";
            console.log(linkCollection[i-1].parentElement.style.display = "none");t
            console.log(link.style.display)
            isRecommended = true;
          }
          
          if (isRecommended && link.innerText === "フォロー中") {
            console.log("フォロー中へ遷移");
            linkCollection[i-1].click();
          }
        }
      }
      console.log(linkCollection);
      console.log(linkCollection.length);
    }
  }
}

