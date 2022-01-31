/* eslint-disable no-undef */
const cloneArray = require('./cloneArray')

test('properly clones array', () => {
  const array = [1, 2, 3]
  // we created to array and we are making sure they are identical. also making sure that we are not just returning the smae array
  expect(cloneArray(array)).toEqual(array)
  expect(cloneArray(array)).not.toBe(array)  
})
