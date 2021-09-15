(function () {
  window.setTimeout(function () {
    setInterval(function () {
      showQuote();
    }, 24000);
  }, 0);

  function showQuote() {
    const url = "https://api.quotable.io/random?tags=technology,famous-quotes";

    async function getRandomQuote(url) {
      const { content, author } = await fetch(url)
        .then((r) => r.json())
        .then((r) => r);
      return {
        quote: content,
        author: author,
      };
    }
    const randomQuote = getRandomQuote(url)
      .then((result) => result)
      .catch(() => console.log("sth wrong"));

    async function getNewQuote() {
      const { quote, author } = await randomQuote;
      putNewQuote(quote, author);
      return quote;
    }
    function putNewQuote(quote, author) {
      const description = document.querySelector(".quote__description");
      const authorName = document.querySelector(".quote__author");

      description.textContent = `"${quote}"`;
      authorName.textContent = `- ${author}`;
    }
    getNewQuote();
  }
})();
