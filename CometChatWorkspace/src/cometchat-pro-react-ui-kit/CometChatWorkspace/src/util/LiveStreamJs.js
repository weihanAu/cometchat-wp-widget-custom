window.iframeAdded = false;

export async function liveStreamClickHandler() {
  const livestream = document.getElementById("livestream");
  //create iframe
  const iframe = document.createElement("iframe");
  iframe.id = "player";
  const src =`https://player.vimeo.com/video/415237647?h=6d6e4f6a4e&color=c25aed" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture`;
  // configure iframe
  iframe.src =src;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.title = "Embedded Iframe";
  iframe.frameborder = "0";
  iframe.allow = "autoplay;picture-in-picture";
  iframe.allowfullscreen = true;
  iframe.style.backgroundColor = "#1a1b1c";
  //get chat_list
  const liveCloseButton = document.getElementById("liveCloseButton");
  //add iframe into div
  if (!iframeAdded) {
    await CometChatWidget.openOrCloseChat(false);
    livestream.appendChild(iframe);
    iframeAdded = true;
    CometChatWidget.openOrCloseChat(true);
    liveCloseButton.style.display='block'
  } else {
    livestream.innerHTML = "";
    iframeAdded = false;
    await CometChatWidget.openOrCloseChat(false);
    CometChatWidget.openOrCloseChat(true);
  }
}
