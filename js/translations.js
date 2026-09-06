(() => {
  const languages = ["pl", "en", "de"];
  const labels = { pl: "PL", en: "EN", de: "DE" };
  const buttonLabels = {
    pl: "Zmień język",
    en: "Change language",
    de: "Sprache ändern",
  };

  const translations = [
    {
      pl: "4 pojęcia pojęć ze wszystkich kategorii",
      en: "4 terms from all categories",
      de: "4 Begriffe aus allen Kategorien",
    },
    {
      pl: "wybierz kategorię i naciśnij na pole",
      en: "select a category and click the card",
      de: "Kategorie wählen und auf die Karte klicken",
    },
    {
      pl: "Liczba poprawnych odpowiedzi",
      en: "Correct answers",
      de: "Richtige Antworten",
    },
    {
      pl: "pollution -pojęcia i definicje",
      en: "pollution - terms and definitions",
      de: "pollution - Begriffe und Definitionen",
    },
    {
      pl: "pojęcia i definicje",
      en: "terms and definitions",
      de: "Begriffe und Definitionen",
    },
    {
      pl: "udzielona odpowiedz",
      en: "answer given",
      de: "gegebene Antwort",
    },
    {
      pl: "pojęcie -> definicja",
      en: "term -> definition",
      de: "Begriff -> Definition",
    },
    { pl: "wybierz kategorię", en: "select a category", de: "Kategorie wählen" },
    { pl: "niepoprawna", en: "incorrect", de: "falsch" },
    { pl: "modyfikacje", en: "modifications", de: "Änderungen" },
    { pl: "Zatwierdź", en: "Submit", de: "Bestätigen" },
    { pl: "Poprzednia", en: "Previous", de: "Zurück" },
    { pl: "Następna", en: "Next", de: "Weiter" },
    { pl: "odpowiedź", en: "answer", de: "Antwort" },
    { pl: "poprawna", en: "correct", de: "richtig" },
    { pl: "kategorie", en: "categories", de: "Kategorien" },
    { pl: "Fiszki", en: "Flashcards", de: "Karteikarten" },
    { pl: "pojęcia", en: "terms", de: "Begriffe" },
    { pl: "resetuj", en: "reset", de: "zurücksetzen" },
    { pl: "Treść", en: "Content", de: "Inhalt" },
    { pl: "była", en: "was", de: "war" },
  ];

  // Quiz pozostaje angielsko-polski dla interfejsu PL i EN.
  // Dopiero interfejs DE przełącza polskie definicje na niemieckie.
  const vocabularyTranslations = [
    { pl: "skok o tyczce", de: "Stabhochsprung" },
    { pl: "przewidywać", de: "vorhersagen" },
    { pl: "przewidzieć", de: "vorhersagen" },
    { pl: "szkoleniowiec", de: "Coach" },
    { pl: "przynieść", de: "bringen" },
    { pl: "koszykówka", de: "Basketball" },
    { pl: "łucznictwo", de: "Bogenschießen" },
    { pl: "szermierka", de: "Fechten" },
    { pl: "bramkarz", de: "Torwart" },
    { pl: "szkodliwy", de: "schädlich" },
    { pl: "cząsteczka", de: "Teilchen" },
    { pl: "dwutlenek", de: "Dioxid" },
    { pl: "spaliny", de: "Abgase" },
    { pl: "siarka", de: "Schwefel" },
    { pl: "benzyna", de: "Benzin" },
    { pl: "tlenek", de: "Oxid" },
    { pl: "tlen", de: "Sauerstoff" },
    { pl: "sadza", de: "Ruß" },
    { pl: "azot", de: "Stickstoff" },
    { pl: "kwas", de: "Säure" },
    { pl: "baseball", de: "Baseball" },
    { pl: "trener", de: "Trainer" },
    { pl: "sędzia", de: "Schiedsrichter" },
    { pl: "remis", de: "Unentschieden" },
    { pl: "przerwa", de: "Pause" },
    { pl: "siatka", de: "Netz" },
    { pl: "sztafeta", de: "Staffel" },
    { pl: "rakieta", de: "Schläger" },
    { pl: "kosz", de: "Korb" },
    { pl: "boks", de: "Boxen" },
    { pl: "zdołać", de: "schaffen" },
    { pl: "znaleźć", de: "finden" },
    { pl: "dzwonić", de: "anrufen" },
    { pl: "mówić", de: "sagen" },
    { pl: "wiedzieć", de: "wissen" },
    { pl: "przyjść", de: "kommen" },
    { pl: "robić", de: "machen" },
    { pl: "zrobić", de: "machen" },
    { pl: "grać", de: "spielen" },
    { pl: "udawać", de: "vortäuschen" },
  ];

  const savedLanguage = localStorage.getItem("ssquiz-language");
  let currentLanguage = languages.includes(savedLanguage) ? savedLanguage : "pl";

  const variants = translations
    .flatMap((entry) =>
      languages.map((language) => ({
        source: entry[language],
        entry,
      }))
    )
    .sort((first, second) => second.source.length - first.source.length);

  const vocabularyVariants = vocabularyTranslations
    .flatMap((entry) => [
      { source: entry.pl, entry },
      { source: entry.de, entry },
    ])
    .sort((first, second) => second.source.length - first.source.length);

  function replaceWholePhrase(text, source, target) {
    const escapedSource = source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const phrasePattern = new RegExp(
      `(?<![\\p{L}\\p{N}])${escapedSource}(?![\\p{L}\\p{N}])`,
      "gu"
    );

    return text.replace(phrasePattern, target);
  }

  function translateText(text) {
    let translatedText = text;

    variants.forEach(({ source, entry }) => {
      translatedText = replaceWholePhrase(
        translatedText,
        source,
        entry[currentLanguage]
      );
    });

    vocabularyVariants.forEach(({ source, entry }) => {
      const target = currentLanguage === "de" ? entry.de : entry.pl;
      translatedText = replaceWholePhrase(translatedText, source, target);
    });

    return translatedText;
  }

  function translatePage(root = document.body) {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];

    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) return;

      const translatedText = translateText(node.nodeValue);
      if (translatedText !== node.nodeValue) node.nodeValue = translatedText;
    });

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      if (button.textContent !== labels[currentLanguage]) {
        button.textContent = labels[currentLanguage];
      }
      button.setAttribute("aria-label", buttonLabels[currentLanguage]);
      button.title = buttonLabels[currentLanguage];
    });
  }

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    const menu = document.createElement("div");
    menu.className = "language-menu";
    menu.setAttribute("role", "menu");

    const languageNames = {
      pl: "PL Polski",
      en: "EN English",
      de: "DE Deutsch",
    };

    languages.forEach((language) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "language-option";
      option.dataset.language = language;
      option.textContent = languageNames[language];
      option.setAttribute("role", "menuitem");

      option.addEventListener("click", () => {
        currentLanguage = language;
        localStorage.setItem("ssquiz-language", currentLanguage);
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        updateActiveLanguage();
        translatePage();
      });

      menu.appendChild(option);
    });

    function updateActiveLanguage() {
      menu.querySelectorAll(".language-option").forEach((option) => {
        const isActive = option.dataset.language === currentLanguage;
        option.classList.toggle("is-active", isActive);
        option.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    button.setAttribute("aria-haspopup", "menu");
    button.setAttribute("aria-expanded", "false");
    button.insertAdjacentElement("afterend", menu);
    updateActiveLanguage();

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      updateActiveLanguage();
    });

    menu.addEventListener("click", (event) => event.stopPropagation());

    document.addEventListener("click", () => {
      menu.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        button.focus();
      }
    });
  });

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((mutation) => mutation.addedNodes.length > 0)) {
      translatePage();
    }
  });

  observer.observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true,
  });
  translatePage();
})();
