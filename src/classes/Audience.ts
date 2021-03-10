import Bag from "./Bag";

class Audience {
  constructor(private bag: Bag) {
  }
  public getBag(): Bag {
    return this.bag;
  };
}

export default Audience;
