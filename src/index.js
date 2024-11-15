alert("Connected v0.0.4");

if (!window.originalFetch) {
  window.originalFetch = fetch;
} else {
  console.log("Existing instance detected");
}

function insertAnswer(answer) {
  if (!answer || !answer.length) return;

  const input = document.getElementsByClassName("connect-text-area")[0];
  if (input) {
    input.focus();
    setTimeout(() => input.textContent = answer, 100);
  } else {
    console.log("Input element not found");
  }
}

window.fetch = async (...args) => {
  const response = await originalFetch(...args);
  const clonedResponse = response.clone();
  let jsonData;

  try {
    jsonData = await clonedResponse.json();
  } catch (err) {
    console.log("Error fetching JSON data:", err);
    return response;
  }

  if (!jsonData) {
    console.log("No JSON data");
    return response;
  }

  jsonData.every((data) => {
    if (data.optimal) {
      const text = data.text;
      insertAnswer(text);

      return false;
    }

    return true;
  });

  return response;
}
