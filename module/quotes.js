(function () {
  function showQuote() {
    const url = "http://quotes.stormconsultancy.co.uk/random.json";

    async function getRandomQuote(url) {
      const { quote, author } = await fetch(url)
        .then((r) => r.json())
        .then((r) => r);
      return {
        quote: quote,
        author: author,
      };
    }
    const randomQuote = getRandomQuote(url)
      .then((result) => result)
      .catch(() => console.log("sth wrong"));

    async function getNewQuote() {
      const { quote, author } = await randomQuotegit;
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

  window.setInterval(function () {
    showQuote();
  }, 4000);
})();
