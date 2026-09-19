import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Card, Category, Language, translations, vocabulary, vocabularyTranslations } from './vocabulary.data';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './MainComponent.html',
})
export class MainComponent {
  private readonly document = inject(DOCUMENT);
  readonly name = 'SSMindGames';
  readonly categories: Category[] = ['common', 'pollution', 'sport'];
  readonly languages: Language[] = ['pl', 'en', 'de'];
  readonly languageNames = { pl: 'PL Polski', en: 'EN English', de: 'DE Deutsch' };
  readonly categoryLinks = { common: 'legacy/common.html', pollution: 'legacy/index.html', sport: 'legacy/sport.html' };
  category: Category | null = null;
  currentIndex = 0;
  isFlipped = false;
  menuOpen = false;
  showCategories = false;
  showFlashcardInfo = false;
  showAllWords = false;
  languageMenuOpen = false;
  language: Language = 'pl';
  darkMode = false;

  constructor() {
    const savedLanguage = this.readPreference('ssquiz-language');
    if (this.languages.includes(savedLanguage as Language)) this.language = savedLanguage as Language;
    const savedTheme = this.readPreference('ssquiz-theme');
    this.darkMode = savedTheme === 'dark' || (savedTheme === null &&
      !!this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches);
    this.applyTheme();
    this.document.documentElement.lang = this.language;
    this.document.title = 'Vocabulary list';
  }

  get activeCards(): Card[] { return this.category ? vocabulary[this.category] : []; }
  get currentCard(): Card | null { return this.activeCards[this.currentIndex] ?? null; }
  get hasCategory(): boolean { return this.category !== null; }
  get languageLabel(): string {
    return { pl: 'Zmień język', en: 'Change language', de: 'Sprache ändern' }[this.language];
  }
  get themeLabel(): string {
    return this.darkMode
      ? { pl: 'Włącz tryb jasny', en: 'Enable light theme', de: 'Hellen Modus aktivieren' }[this.language]
      : { pl: 'Włącz tryb nocny', en: 'Enable dark theme', de: 'Dunklen Modus aktivieren' }[this.language];
  }
  get menuLabel(): string {
    return { pl: 'Otwórz lub zamknij menu', en: 'Open or close menu', de: 'Menü öffnen oder schließen' }[this.language];
  }

  t(text: string): string {
    return translations.find(entry => entry.pl === text)?.[this.language] ?? text;
  }
  definition(card: Card): string {
    return this.language === 'de'
      ? vocabularyTranslations.find(entry => entry.pl === card.definition)?.de ?? card.definition
      : card.definition;
  }
  selectCategory(category: Category): void {
    if (this.category !== category) {
      this.category = category;
      this.currentIndex = 0;
      this.isFlipped = false;
      this.showAllWords = false;
    }
    this.showCategories = false;
  }
  moveCard(step: number): void {
    const length = this.activeCards.length;
    if (!length) return;
    this.currentIndex = ((this.currentIndex + step) % length + length) % length;
    this.isFlipped = false;
  }
  toggleCard(): void { if (this.hasCategory) this.isFlipped = !this.isFlipped; }
  toggleMobileMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) this.showCategories = false;
  }
  toggleTheme(): void { this.darkMode = !this.darkMode; this.applyTheme(); }
  selectLanguage(language: Language): void {
    this.language = language;
    this.languageMenuOpen = false;
    this.document.documentElement.lang = language;
    this.writePreference('ssquiz-language', language);
  }

  @HostListener('document:click')
  closeLanguageMenu(): void { this.languageMenuOpen = false; }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.languageMenuOpen) {
      this.closeLanguageMenu();
      this.document.querySelector<HTMLButtonElement>('.language-toggle')?.focus();
      return;
    }
    const target = event.target instanceof Element ? event.target : null;
    const isCategoryInput = target?.matches('.flashcardButtons input[type="radio"][name="category"]');
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
        (!isCategoryInput && target?.closest('input, textarea, select, [contenteditable], nav, .navbar')) ||
        !this.hasCategory || !['ArrowLeft', 'ArrowRight', ' '].includes(event.key)) return;
    event.preventDefault();
    if (event.repeat) return;
    if (event.key === ' ') this.toggleCard();
    else this.moveCard(event.key === 'ArrowLeft' ? -1 : 1);
  }

  private applyTheme(): void {
    this.document.documentElement.classList.toggle('dark-mode', this.darkMode);
    this.writePreference('ssquiz-theme', this.darkMode ? 'dark' : 'light');
  }
  private readPreference(key: string): string | null {
    try { return this.document.defaultView?.localStorage.getItem(key) ?? null; }
    catch { return null; }
  }
  private writePreference(key: string, value: string): void {
    try { this.document.defaultView?.localStorage.setItem(key, value); }
    catch { /* Preferences still work for this session when storage is unavailable. */ }
  }
}

export { MainComponent as FlashcardComponent };
