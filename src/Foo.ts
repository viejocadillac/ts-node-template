class Foo {
    private someStringProp: string;

    constructor(someStringProp: string) {
      this.someStringProp = someStringProp;
    }
 
    getSomeStringProp(): string {
      return this.someStringProp;
    }
}

export default Foo;
