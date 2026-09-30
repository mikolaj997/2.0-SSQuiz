import {useCallback, useEffect, useRef, useState} from 'react';
import {categories, Category, definitionFor, vocabulary} from './vocabulary';
import './App.css';

type Language = 'pl' | 'en' | 'de';
const labels = {
  pl: ['pojęcia i fiszki', 'kategorie', 'Fiszki', 'pojęcia', 'wybierz kategorię', 'pojęcie → definicja', 'SPACJA = DEFINICJA', 'WSTECZ', 'DALEJ', 'Zmień język', 'Tryb ciemny', 'Menu', 'Skróty klawiaturowe', 'Poprzednia fiszka', 'Następna fiszka', 'Pokaż lub ukryj definicję'],
  en: ['terms and flashcards', 'categories', 'Flashcards', 'terms', 'select a category', 'term → definition', 'SPACE = DEFINITION', 'BACK', 'NEXT', 'Change language', 'Dark mode', 'Menu', 'Keyboard shortcuts', 'Previous flashcard', 'Next flashcard', 'Show or hide the definition'],
  de: ['Begriffe und Karteikarten', 'Kategorien', 'Karteikarten', 'Begriffe', 'Kategorie wählen', 'Begriff → Definition', 'LEERTASTE = DEFINITION', 'ZURÜCK', 'WEITER', 'Sprache ändern', 'Dunkler Modus', 'Menü', 'Tastenkürzel', 'Vorherige Karteikarte', 'Nächste Karteikarte', 'Definition anzeigen oder ausblenden'],
};
function readSetting(key: string) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function saveSetting(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ }
}
export default function App() {
  const [category, setCategory] = useState<Category | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showWords, setShowWords] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageButton = useRef<HTMLButtonElement>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(() => {
    const saved = readSetting('ssquiz-language');
    return saved === 'en' || saved === 'de' ? saved : 'pl';
  });
  const [dark, setDark] = useState(() => {
    const saved = readSetting('ssquiz-theme');
    return saved === 'dark' || (saved === null && Boolean(window.matchMedia?.('(prefers-color-scheme: dark)').matches));
  });
  const t = labels[language];
  const cards = category ? vocabulary[category] : [];
  const card = cards[index];
  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', dark);
    saveSetting('ssquiz-theme', dark ? 'dark' : 'light');
  }, [dark]);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = labels[language][0] + ' | SSMindGames';
    saveSetting('ssquiz-language', language);
  }, [language]);
  const selectCategory = useCallback((next: Category) => {
    if (next !== category) {
      setCategory(next);
      setIndex(0);
      setFlipped(false);
      setShowWords(false);
    }
    setCategoriesOpen(false);
  }, [category]);
  const moveCard = useCallback((step: number) => {
    if (!cards.length) return;
    setIndex(current => (current + step + cards.length) % cards.length);
    setFlipped(false);
  }, [cards.length]);
  useEffect(() => {
    const keyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement) || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const categoryInput = target.matches('.flashcardButtons input[name="category"]');
      if (!categoryInput && target.closest('input, textarea, select, [contenteditable], nav, .shortcut-help')) return;
      const next = ({'1': 'common', '2': 'pollution', '3': 'sport'} as Record<string, Category>)[event.key];
      if (next) {
        event.preventDefault();
        if (!event.repeat) selectCategory(next);
        return;
      }
      if (!category || !['ArrowLeft', 'ArrowRight', ' '].includes(event.key)) return;
      event.preventDefault();
      if (event.repeat) return;
      if (event.key === ' ') setFlipped(value => !value);
      else moveCard(event.key === 'ArrowLeft' ? -1 : 1);
    };
    document.addEventListener('keydown', keyDown);
    return () => document.removeEventListener('keydown', keyDown);
  }, [category, moveCard, selectCategory]);
  useEffect(() => {
    if (!languageOpen) return;
    const closeOutside = (event: MouseEvent) => {
      if (event.target instanceof Element && !event.target.closest('.language-toggle, .language-menu')) setLanguageOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLanguageOpen(false);
        languageButton.current?.focus();
      }
    };
    document.addEventListener('click', closeOutside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('click', closeOutside);
      document.removeEventListener('keydown', escape);
    };
  }, [languageOpen]);
  return <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light has-hamburger">
      <a className="navbar-brand" href="./">SSMindGames</a>
      <button className="hamburger" aria-label={t[11]} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => {
        setMenuOpen(!menuOpen);
        if (menuOpen) setCategoriesOpen(false);
      }}>☰</button>
      <div id="navigation" className={`navButtons${menuOpen ? ' menu-open' : ''}${categoriesOpen ? ' submenu-open' : ''}`}>
        <button className="btn btn-outline-secondary vocabulary-link" onClick={() => setShowWords(value => !value)}>{t[0]}</button>
        <button className="btn btn-outline-secondary category" aria-expanded={categoriesOpen} aria-controls="categories" onClick={() => setCategoriesOpen(value => !value)}>{t[1]}</button>
        <button className="btn btn-outline-secondary" aria-expanded={showInfo} onClick={() => setShowInfo(value => !value)}>{t[2]}</button>
      </div>
      <button ref={languageButton} className="language-toggle" aria-label={t[9]} aria-expanded={languageOpen} aria-controls="languages" onClick={() => setLanguageOpen(value => !value)}>{language.toUpperCase()}</button>
      {languageOpen && <div id="languages" className="language-menu is-open">
        {(['pl', 'en', 'de'] as const).map(value => <button key={value} className={`language-option${language === value ? ' is-active' : ''}`} aria-pressed={language === value} onClick={() => {
          setLanguage(value); setLanguageOpen(false); languageButton.current?.focus();
        }}>{{pl: 'PL Polski', en: 'EN English', de: 'DE Deutsch'}[value]}</button>)}
      </div>}
      <button className="theme-toggle" aria-label={t[10]} aria-pressed={dark} onClick={() => setDark(value => !value)}>{dark ? '☀️' : '🌙'}</button>
    </nav>
    {categoriesOpen && <div id="categories" className="popup">
      {categories.map(value => <button className="btn btn-outline-secondary" key={value} onClick={() => selectCategory(value)}>{value}</button>)}
    </div>}
    <main>
      <details className="shortcut-help">
        <summary aria-label={t[12]}>?</summary>
        <div className="shortcut-help-panel"><strong>{t[12]}</strong><ul>
          <li><kbd>←</kbd> {t[13]}</li><li><kbd>→</kbd> {t[14]}</li><li><kbd>Space</kbd> {t[15]}</li>
          {categories.map((value, i) => <li key={value}><kbd>{i + 1}</kbd> {t[4]}: {value}</li>)}
        </ul></div>
      </details>
      {showInfo && <p className="flashcardInfo">{t[4]}</p>}
      {category && <button aria-expanded={showWords} onClick={() => setShowWords(value => !value)}>{t[3]}</button>}
      <div className="FlashcardAndDefinition">
        <section className="flashcardArea" aria-label={t[2]}>
          <div className="btn-group btn-group-toggle flashcardButtons d-flex justify-content-center" role="radiogroup" aria-label={t[1]}>
            {categories.map((value, i) => <label key={value} className={`btn btn-outline-secondary${category === value ? ' active' : ''}`}>
              <input type="radio" name="category" value={value} checked={category === value} aria-keyshortcuts={String(i + 1)} onChange={() => selectCategory(value)}/> <kbd>{i + 1}</kbd> {value}
            </label>)}
          </div>
          <button className={`flashcard${flipped ? ' rotate' : ''}`} disabled={!card} aria-label={card ? `${card.word}: ${t[5]}` : t[4]} aria-keyshortcuts="Space" onClick={() => setFlipped(value => !value)}>
            {card ? <span className={flipped ? "back" : "front"} aria-live="polite">{flipped ? definitionFor(card, language) : card.word}</span> : <span className="flashcardCategory">{t[4]}<p></p><p>{t[5]}</p></span>}
          </button>
          <p className="keyboard-hint flashcard-hint">{t[6]}</p>
          <div className="flashcard-navigation">
            <button className="d-flex justify-content-center prevFlashcard" disabled={!card} aria-keyshortcuts="ArrowLeft" onClick={() => moveCard(-1)}>← {t[7]}</button>
            <button className="d-flex justify-content-center nextFlashcard" disabled={!card} aria-keyshortcuts="ArrowRight" onClick={() => moveCard(1)}>{t[8]} →</button>
          </div>
        </section>
        {category && <section className="container definitions" aria-label={t[3]}>
          {showWords && <div className="allWords"><h1>{category}</h1>{cards.map(item => <div key={item.word}>{item.word} - {definitionFor(item, language)}</div>)}</div>}
        </section>}
      </div>
    </main>
  </div>;
}
