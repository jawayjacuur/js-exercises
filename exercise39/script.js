async function translateText() {
  const text = document.getElementById("inputText").value;
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;

  const url = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&from=${from}&to=${to}`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "86c0850c1amshec0f6af206caef1p1cababjsn87363bb04cdc",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com"
    },
    body: JSON.stringify([{ Text: text }])
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result); // DEBUG

    document.getElementById("outputText").innerText =
      result[0].translations[0].text;

  } catch (error) {
    console.error(error);
  }
}