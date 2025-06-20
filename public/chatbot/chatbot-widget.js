(function () {
  const cleanup = () => {
    const existingButton = document.querySelector(".chatbot-widget-button");
    const existingIframe = document.querySelector(".chatbot-widget-iframe");
    if (existingButton) existingButton.remove();
    if (existingIframe) existingIframe.remove();
  };

  cleanup();

  var scriptTag = document.currentScript;
  var chatbotId = scriptTag.getAttribute("data-chatbot-id") || "default";
  var serverUrl =
    scriptTag.getAttribute("data-server-url") || "http://localhost:5555/";
  var container = document.querySelector("#chat-container") || document.body;

  var chatButton = document.createElement("button");
  chatButton.className = "chatbot-widget-button";
  chatButton.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" 
      fill="currentColor"/>
    </svg>
  `;
  chatButton.style.position = "fixed";
  chatButton.style.bottom = "20px";
  chatButton.style.right = "20px";
  chatButton.style.width = "50px";
  chatButton.style.height = "50px";
  chatButton.style.display = "flex";
  chatButton.style.alignItems = "center";
  chatButton.style.justifyContent = "center";
  chatButton.style.background = "#007BFF";
  chatButton.style.color = "#fff";
  chatButton.style.border = "none";
  chatButton.style.borderRadius = "50%";
  chatButton.style.cursor = "pointer";
  chatButton.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
  chatButton.style.transition = "all 0.2s ease";
  chatButton.style.zIndex = "9999";

  var iframe = document.createElement("iframe");
  iframe.className = "chatbot-widget-iframe";
  iframe.style.position = "absolute";
  iframe.style.zIndex = "10000";
  iframe.style.bottom = "80px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "540px";
  iframe.style.border = "none";
  iframe.style.display = "none";
  iframe.style.boxShadow =
    "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)";
  iframe.style.borderRadius = "12px";
  iframe.src = `/chatbot/chatbot.html?chatbotid=${chatbotId}&serverUrl=${serverUrl}`;

  const getChatbotSettings = async () => {
    try {
      const chatbotSettingsRes = await fetch(`${serverUrl}api/chatbot/get`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatbotSettingsId: chatbotId }),
      });
      const { chatbotSettings } = await chatbotSettingsRes.json();

      chatButton.style.background = chatbotSettings.colorTheme.primary;
      chatButton.style.boxShadow = `0 2px 4px ${chatbotSettings.colorTheme.primary}40`;

      chatButton.onmouseover = function () {
        this.style.transform = "translateY(-2px)";
        this.style.boxShadow = `0 4px 8px ${chatbotSettings.colorTheme.primary}60`;
        this.style.background = chatbotSettings.colorTheme.primary;
      };

      chatButton.onmouseout = function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = `0 2px 4px ${chatbotSettings.colorTheme.primary}40`;
        this.style.background = chatbotSettings.colorTheme.primary;
      };
    } catch (error) {
      console.error("Error fetching chatbot settings:", error);
    }
  };

  getChatbotSettings();

  container.appendChild(chatButton);
  container.appendChild(iframe);

  chatButton.onclick = function () {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
    if (iframe.style.display === "block") {
      setTimeout(() => {
        iframe.contentWindow.postMessage("focusInput", "*");
      }, 100);
    }
  };
})();
