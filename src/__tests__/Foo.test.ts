import Foo from '../Foo';

describe('Foo test', () => {
  test('Foo.getSomeStringProp() should be bar', () => {
    const foo:Foo = new Foo('bar');

    expect(foo.getSomeStringProp()).toBe('bar');
  });
});
