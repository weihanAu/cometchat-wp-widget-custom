window.iframeAdded = false;

export async function liveStreamClickHandler() {
  const livestream = document.getElementById("livestream");
  //create iframe
  const iframe = document.createElement("iframe");
  iframe.id = "player";

  // configure iframe
  iframe.src =
    "https://player.vimeo.com/video/22439234?h=a6494d36d8&color=fdfdfd";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.title = "Embedded Iframe";
  iframe.frameborder = "0";
  iframe.allow = "autoplay;picture-in-picture";
  iframe.allowfullscreen = true;
  iframe.style.backgroundColor = "#1a1b1c";
  //get chat_list

  //add iframe into div
  if (!iframeAdded) {
    await CometChatWidget.openOrCloseChat(false);
    livestream.appendChild(iframe);
    iframeAdded = true;
    CometChatWidget.openOrCloseChat(true);
  } else {
    livestream.innerHTML = "";
    iframeAdded = false;
    await CometChatWidget.openOrCloseChat(false);
    CometChatWidget.openOrCloseChat(true);
  }
}
