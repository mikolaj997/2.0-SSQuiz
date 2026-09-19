import '@angular/compiler';
import { DOCUMENT } from '@angular/common';
import { Injector, runInInjectionContext } from '@angular/core';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MainComponent } from '../MainComponent';

function setup(saved: Record<string, string> = {}) {
  const preferences = new Map(Object.entries(saved));
  const classes = new Set<string>();
  const document = {
    title: '',
    documentElement: { lang: '', classList: { toggle: (name: string, enabled: boolean) => enabled ? classes.add(name) : classes.delete(name) } },
    defaultView: {
      matchMedia: () => ({ matches: false }),
      localStorage: { getItem: (key: string) => preferences.get(key) ?? null, setItem: (key: string, value: string) => preferences.set(key, value) },
    },
    querySelector: () => null,
  };
  const injector = Injector.create({ providers: [{ provide: DOCUMENT, useValue: document }] });
  const component = runInInjectionContext(injector, () => new MainComponent());
  return { component, preferences, classes, document };
}

test('all categories contain ten cards and wrap in both directions', () => {
  const { component: c } = setup();
  c.moveCard(-1);
  assert.equal(c.currentCard, null);
  for (const category of c.categories) {
    c.selectCategory(category);
    assert.equal(c.activeCards.length, 10);
    c.moveCard(-1);
    assert.equal(c.currentIndex, 9);
    c.toggleCard();
    c.moveCard(1);
    assert.equal(c.currentIndex, 0);
    assert.equal(c.isFlipped, false);
  }
});

test('changing category resets card, definition and vocabulary list', () => {
  const { component: c } = setup();
  c.selectCategory('common');
  c.moveCard(3);
  c.toggleCard();
  c.showAllWords = true;
  c.selectCategory('sport');
  assert.equal(c.currentCard?.word, 'archery');
  assert.equal(c.isFlipped, false);
  assert.equal(c.showAllWords, false);
});

test('language translates every definition to German and restores Polish for English UI', () => {
  const { component: c, preferences, document } = setup();
  c.selectLanguage('de');
  assert.equal(c.t('DALEJ'), 'WEITER');
  assert.equal(document.documentElement.lang, 'de');
  assert.equal(preferences.get('ssquiz-language'), 'de');
  for (const category of c.categories) {
    c.selectCategory(category);
    for (const card of c.activeCards) assert.notEqual(c.definition(card), card.definition);
  }
  c.selectLanguage('en');
  assert.equal(c.t('DALEJ'), 'NEXT');
  assert.equal(c.definition(c.currentCard!), c.currentCard!.definition);
});

test('theme and language preferences survive a new component', () => {
  const { component: c, preferences, classes } = setup();
  c.toggleTheme();
  c.selectLanguage('de');
  assert.equal(classes.has('dark-mode'), true);
  const restored = setup(Object.fromEntries(preferences)).component;
  assert.equal(restored.darkMode, true);
  assert.equal(restored.language, 'de');
});

test('closing mobile menu closes categories', () => {
  const { component: c } = setup();
  c.toggleMobileMenu();
  c.showCategories = true;
  c.toggleMobileMenu();
  assert.equal(c.menuOpen, false);
  assert.equal(c.showCategories, false);
});

test('keyboard navigation ignores modifiers, repeats and typing fields', () => {
  class Target {
    constructor(private typing = false) {}
    matches() { return false; }
    closest() { return this.typing ? this : null; }
  }
  Object.assign(globalThis, { Element: Target });
  const { component: c } = setup();
  let prevented = false;
  const key = (value: string, extra = {}) => c.handleKeyDown({ key: value, target: new Target(), preventDefault: () => { prevented = true; }, ...extra } as unknown as KeyboardEvent);
  key('ArrowRight');
  assert.equal(prevented, false);
  c.selectCategory('common');
  key(' ');
  assert.equal(c.isFlipped, true);
  key('ArrowLeft');
  assert.equal(c.currentIndex, 9);
  assert.equal(c.isFlipped, false);
  key('ArrowRight', { repeat: true });
  key('ArrowRight', { ctrlKey: true });
  key('ArrowRight', { target: new Target(true) });
  assert.equal(c.currentIndex, 9);
  key('ArrowRight');
  assert.equal(c.currentIndex, 0);
});
