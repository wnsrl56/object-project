import _ from '../libs/utils';

export interface Invitation {
  readonly when: Date;
}

export interface Ticket {
  readonly fee: number;
}

export interface IBag {
  amount: number;
  invitation?: Invitation;
  ticket?: Ticket;
}

class Bag {
  constructor(private props: IBag) {}
  public hasInvitation():boolean {
    const {invitation} = this.props;
    return invitation !== undefined;
  }

  public hasTicket():boolean {
    const {ticket} = this.props;
    return ticket !== undefined;
  }

  public setTicket(ticket: Ticket | undefined) {
    this.props = {...this.props, ticket};
  }

  public addValue(v: any, amount = 1) {
    return _.isNumberType(v) ? v + amount : v;
  }

  public subtractValue(v: any, amount = 1) {
    return _.isNumberType(v) ? v - amount : v;
  }
}

export default Bag;
