import {Ticket} from "./Bag";
import _ from "../libs/utils";

interface ITicketOffice {
  readonly amount: number;
  tickets: Ticket[];
}

class TicketOffice {
  constructor(private props: ITicketOffice) {}
  public addValue(v: any, amount = 1) {
    return _.isNumberType(v) ? v + amount : v;
  }

  public subtractValue(v: any, amount = 1) {
    return _.isNumberType(v) ? v - amount : v;
  }

  public getTicket() {
    const {tickets} = this.props;
    return tickets ? tickets.shift(): {fee: 0};
  }
}


export default TicketOffice;
