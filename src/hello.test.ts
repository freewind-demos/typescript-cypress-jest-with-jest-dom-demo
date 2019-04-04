import hello from './hello';

test('hello', () => {
  hello();
  expect(document.querySelector('div.hello')).toBeInTheDocument();
})
