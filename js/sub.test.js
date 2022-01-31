/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const sub = require('./subtract')

test('properly adds two numbers', () => {
  expect(
    sub(1, 2)
  ).toBe(-1)
})