const { groupArrayElements } = require("../../src/group-array");

describe("groupArrayElements", () => {
  test(`groupArrayElements with empty input array`, () => {
    expect(groupArrayElements([], 1)).toEqual([]);
  });

  test(`groupArrayElements with input N as negative`, () => {
    expect(groupArrayElements([1, 2, 3], -1)).toEqual([]);
  });

  test(`groupArrayElements with input N as 0`, () => {
    expect(groupArrayElements([1, 2, 3], 0)).toEqual([]);
  });

  test(`groupArrayElements with input N as 1`, () => {
    expect(groupArrayElements([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test(`groupArrayElements with input N equal to input array length`, () => {
    expect(groupArrayElements([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  test(`groupArrayElements with input N as greather than input array length`, () => {
    expect(groupArrayElements([1, 2, 3], 4)).toEqual([[1, 2, 3]]);
  });

  test(`groupArrayElements with input N as equally divisible to input array length`, () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  test(`groupArrayElements with input N as not equally divisible to input array length`, () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 4)).toEqual([
      [1, 2, 3, 4],
      [5, 6],
    ]);
  });
});
