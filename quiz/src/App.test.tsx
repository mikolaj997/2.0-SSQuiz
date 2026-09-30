import {fireEvent, render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => localStorage.clear());
afterEach(cleanup);

test('wraps cards in both directions and resets the face and list on category change', () => {
  render(<App/>);
  expect(screen.getByRole('button', {name: /WSTECZ/})).toBeDisabled();
  fireEvent.click(screen.getByRole('radio', {name: /common/}));
  fireEvent.click(screen.getByRole('button', {name: /WSTECZ/}));
  expect(screen.getByText('to play')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: /DALEJ/}));
  fireEvent.click(screen.getByRole('button', {name: /to bring:/}));
  expect(screen.getByText('przynieść')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: 'pojęcia'}));
  expect(screen.getByRole('region', {name: 'pojęcia'})).toBeInTheDocument();
  fireEvent.click(screen.getByRole('radio', {name: /sport/}));
  expect(screen.getByText('archery')).toBeInTheDocument();
  expect(screen.getByRole('region', {name: 'pojęcia'})).toBeEmptyDOMElement();
});

test('supports category, movement and flip shortcuts without intercepting navigation controls', () => {
  render(<App/>);
  fireEvent.keyDown(document.body, {key: '2'});
  expect(screen.getByText('acid')).toBeInTheDocument();
  const radio = screen.getByRole('radio', {name: /pollution/});
  fireEvent.keyDown(radio, {key: 'ArrowRight'});
  expect(screen.getByText('petrol')).toBeInTheDocument();
  fireEvent.keyDown(radio, {key: ' '});
  expect(screen.getByText('benzyna')).toBeInTheDocument();
  fireEvent.keyDown(document.body, {key: 'ArrowRight', repeat: true});
  fireEvent.keyDown(document.body, {key: '1', ctrlKey: true});
  fireEvent.keyDown(screen.getByRole('button', {name: 'Zmień język'}), {key: '3'});
  expect(radio).toBeChecked();
  expect(screen.getByText('benzyna')).toBeInTheDocument();
});

test('translates definitions to German and persists language and theme', () => {
  const view = render(<App/>);
  fireEvent.click(screen.getByRole('radio', {name: /pollution/}));
  fireEvent.click(screen.getByRole('button', {name: /acid:/}));
  fireEvent.click(screen.getByRole('button', {name: 'Zmień język'}));
  fireEvent.click(screen.getByRole('button', {name: 'DE Deutsch'}));
  expect(screen.getByText('Säure')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: 'Sprache ändern'}));
  fireEvent.click(screen.getByRole('button', {name: 'EN English'}));
  expect(screen.getByText('kwas')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: 'Dark mode'}));
  expect(document.documentElement).toHaveClass('dark-mode');
  view.unmount();
  render(<App/>);
  expect(screen.getByRole('button', {name: 'Change language'})).toHaveTextContent('EN');
  expect(screen.getByRole('button', {name: 'Dark mode'})).toHaveAttribute('aria-pressed', 'true');
});

test('opens mobile navigation and selects a category from its submenu', () => {
  render(<App/>);
  const menu = screen.getByRole('button', {name: 'Menu'});
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('button', {name: 'kategorie'}));
  fireEvent.click(screen.getByRole('button', {name: 'sport'}));
  expect(screen.getByRole('radio', {name: /sport/})).toBeChecked();
  expect(screen.getByRole('button', {name: 'kategorie'})).toHaveAttribute('aria-expanded', 'false');
});
