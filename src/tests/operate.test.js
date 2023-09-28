import operate from '../logic/operate';

test('Calculator adding', () => {
  expect(operate('3', '1', '+')).toBe('4');
});
test('Calculator substracting', () => {
  expect(operate('3', '1', '-')).toBe('2');
});
test('Calculator multiplying', () => {
  expect(operate('3', '1', 'x')).toBe('3');
});
test('Calculator dividing', () => {
  expect(operate('3', '1', '÷')).toBe('3');
});
test('Dividing by zero', () => {
  expect(operate('3', '0', '÷')).toBe("Can't divide by 0.");
});
test('module working', () => {
  expect(operate('5', '3', '%')).toBe('2');
});
test('Module by zero error', () => {
  expect(operate('3', '0', '%')).toBe(
    "Can't find modulo as can't divide by 0.",
  );
});
test('Operation error', () => {
  expect(() => operate('3', '1', '**')).toThrowError(
    new Error("Unknown operation '**'"),
  );
});
expect(operate).toMatchSnapshot();
