async function postData(url) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "customer-id": "3619830699",
        "x-api-key": "zqt_18I7q0OmHrjL2tgk7_tkmLV_bnnde-pjAOQPXA",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500/index.html",
      },
      body: {
        model: "text-davinci-003",
        prompt: "translate food",
        max_tokens: 7
      },
      credentials: "same-origin",
    });
    return response.json();
}
postData("https://experimental.willow.vectara.io/v1/completions")