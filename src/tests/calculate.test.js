import calculate from '../logic/calculate';

test('Evaluate operations', () => {
  let obj = {
    total: '20',
    next: '4',
    operation: '+',
  };
  let button = 'AC';
  expect(calculate(obj, button)).toEqual({
    total: null,
    next: null,
    operation: null,
  });

  button = '=';
  expect(calculate(obj, button)).toEqual({
    total: '24',
    next: null,
    operation: null,
  });

  button = '+/-';
  expect(calculate(obj, button)).toEqual({
    total: '20',
    next: '-4',
    operation: '+',
  });

  obj = {
    total: '20',
    next: '4',
    operation: '÷',
  };

  button = '=';
  expect(calculate(obj, button)).toEqual({
    total: '5',
    next: null,
    operation: null,
  });
});
expect(calculate).toMatchSnapshot();